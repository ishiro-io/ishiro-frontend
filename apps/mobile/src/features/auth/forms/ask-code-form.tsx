import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Button, Input, useTheme } from "@rneui/themed";
import { Formik } from "formik";
import { useState } from "react";
import { View } from "react-native";

import { ClearInputButton } from "components";
import {
  PhoneAskConfirmationCodeInput,
  usePhoneAskConfirmationCodeMutation
} from "shared/lib/graphql";
import { formatGraphQLError } from "shared/utils";
import yup from "shared/utils/yup-extended";
import { StackParamList } from "utils/routes";

const AskCodeSchema = yup.object().shape({
  phoneNumber: yup.string().phoneNumber()
});

export const AskCodeForm = () => {
  const { theme } = useTheme();

  const navigation =
    useNavigation<NativeStackNavigationProp<StackParamList, "AskCode">>();

  const [responseError, setResponseError] = useState<string | undefined>(
    undefined
  );

  const [{ fetching }, askConfirmationCode] =
    usePhoneAskConfirmationCodeMutation();

  const onSubmit = async (input: PhoneAskConfirmationCodeInput) => {
    const { data, error } = await askConfirmationCode({
      input
    });

    if (data?.phoneAskConfirmationCode) {
      navigation.navigate("ConfirmCode", {
        phoneNumber: input.phoneNumber
      });
    } else {
      if (error?.message) {
        setResponseError(formatGraphQLError(error));
      }
    }
  };

  return (
    <Formik
      initialValues={{
        phoneNumber: ""
      }}
      validationSchema={AskCodeSchema}
      validateOnChange={false}
      validateOnBlur={false}
      onSubmit={onSubmit}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        setFieldValue
      }) => (
        <View
          style={{
            marginTop: 4,
            paddingHorizontal: 2,
            alignItems: "center"
          }}
        >
          <Input
            label="Numéro de téléphone"
            containerStyle={{ marginBottom: theme.spacing.md }}
            rightIcon={
              <ClearInputButton
                value={values.phoneNumber}
                onPress={() => setFieldValue("phoneNumber", "")}
              />
            }
            value={values.phoneNumber}
            onChangeText={handleChange("phoneNumber")}
            onBlur={handleBlur("phoneNumber")}
            errorMessage={
              (errors.phoneNumber || responseError) ??
              "Il vous servira d'identifiant pour accéder à votre compte Ishiro."
            }
            errorStyle={{
              color:
                errors.phoneNumber || responseError
                  ? theme.colors?.error
                  : theme.colors?.grey5
            }}
            keyboardType="phone-pad"
            autoComplete="tel"
            returnKeyType="done"
            blurOnSubmit={false}
            onSubmitEditing={() => handleSubmit()}
          />

          <Button
            type="solid"
            buttonStyle={{
              backgroundColor: theme.colors.white
            }}
            titleStyle={{
              color: theme.colors.black
            }}
            loadingProps={{ color: theme.colors.black }}
            loading={fetching}
            onPress={() => handleSubmit()}
          >
            Recevoir mon code
          </Button>
        </View>
      )}
    </Formik>
  );
};
