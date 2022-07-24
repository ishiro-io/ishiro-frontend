import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Button, Text, useTheme } from "@rneui/themed";
import { useState } from "react";
import { Image, View } from "react-native";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell
} from "react-native-confirmation-code-field";
import { TouchableHighlight } from "react-native-gesture-handler";
import {
  moderateScale,
  moderateVerticalScale
} from "react-native-size-matters";

import {
  usePhoneAskConfirmationCodeMutation,
  usePhoneConnectMutation
} from "shared/lib/graphql";
import { formatGraphQLError } from "shared/utils";
import { RouteStackParamList } from "utils/routes";

const CODE_LENGTH = 6;

export const ConfirmCodeForm = () => {
  const { theme } = useTheme();

  const navigation =
    useNavigation<
      NativeStackNavigationProp<RouteStackParamList, "ConfirmCode">
    >();

  const route = useRoute<RouteProp<RouteStackParamList, "ConfirmCode">>();

  const [value, setValue] = useState("");
  const [responseError, setResponseError] = useState("");

  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue
  });

  const ref = useBlurOnFulfill({ value, cellCount: CODE_LENGTH });

  const [{ fetching: askCodeFetching }, askConfirmationCode] =
    usePhoneAskConfirmationCodeMutation();

  const [{ fetching: connectFetching }, connect] = usePhoneConnectMutation();

  const onResendPress = async () => {
    await askConfirmationCode({
      input: { phoneNumber: route.params.phoneNumber }
    });
  };

  const onSubmit = async () => {
    const { data, error } = await connect({
      input: { phoneNumber: route.params.phoneNumber, code: value }
    });

    // ? If user already exists -> cache is automatically updated -> Redirect to Home

    if (
      data?.phoneConnect?.doesUserExists == false &&
      data?.phoneConnect?.user == null
    ) {
      navigation.navigate("CreateProfile", {
        phoneNumber: route.params.phoneNumber,
        code: value
      });
    } else {
      if (error) {
        setResponseError(formatGraphQLError(error));
      }
    }
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        paddingTop: theme.spacing.sm
      }}
    >
      <Image
        source={require("shared/assets/images/logo.png")}
        style={{
          height: moderateScale(100),
          width: moderateScale(100),
          resizeMode: "cover",
          marginBottom: theme.spacing.md
        }}
      />

      <Text
        h1
        style={{
          paddingHorizontal: theme.spacing.xl,
          marginBottom: theme.spacing.lg
        }}
      >
        Inscrivez le code reçu par SMS
      </Text>

      <TouchableHighlight onPress={() => onResendPress()}>
        <View
          style={{
            flexDirection: "row",
            marginHorizontal: theme.spacing?.xs
          }}
        >
          <Text>Vous n'avez rien reçu ? </Text>
          <Text
            style={{
              fontFamily: "Poppins-Bold"
            }}
          >
            Recevoir un nouveau code
          </Text>
        </View>
      </TouchableHighlight>

      <CodeField
        ref={ref}
        {...props}
        value={value}
        onChangeText={(text) => {
          setResponseError("");
          setValue(text);
        }}
        cellCount={CODE_LENGTH}
        rootStyle={{ marginTop: theme.spacing.lg }}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        keyboardAppearance="dark"
        onSubmitEditing={() => onSubmit()}
        renderCell={({ index, symbol, isFocused }) => (
          <View
            key={index}
            style={{
              width: moderateVerticalScale(40, 0.8),
              height: moderateVerticalScale(40, 0.8),
              marginHorizontal: theme.spacing.xs,
              borderRadius: 8,
              backgroundColor: theme.colors.white,
              justifyContent: "center"
            }}
          >
            <Text
              style={{
                fontFamily: "Poppins-Medium",
                fontSize: moderateScale(24),
                color: theme.colors.black,
                textAlign: "center"
              }}
              onLayout={getCellOnLayoutHandler(index)}
            >
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          </View>
        )}
      />

      <Button
        type="solid"
        buttonStyle={{
          backgroundColor: theme.colors?.white
        }}
        containerStyle={{
          marginTop: theme.spacing?.xl
        }}
        titleStyle={{
          color: theme.colors?.black
        }}
        title="Continuer"
        loading={connectFetching || askCodeFetching}
        loadingProps={{ color: theme.colors?.black }}
        onPress={() => onSubmit()}
      />

      <View style={{ height: moderateVerticalScale(30) }}>
        <Text
          style={{
            marginTop: theme.spacing.sm,
            color: theme.colors.error
          }}
        >
          {responseError}
        </Text>
      </View>
    </View>
  );
};
