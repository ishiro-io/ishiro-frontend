import { RouteProp, useRoute } from "@react-navigation/native";
import { Button, Input, useTheme } from "@rneui/themed";
import { Formik } from "formik";
import { useState } from "react";
import { View } from "react-native";

import { ClearInputButton } from "components";
import { usePhoneRegisterMutation } from "shared/lib/graphql";
import { formatGraphQLError } from "shared/utils";
import yup from "shared/utils/yup-extended";
import { StackParamList } from "utils/routes";

const CreateProfileSchema = yup.object().shape({
  username: yup.string().required("Un nom d'utilisateur est requis")
});

export const CreateProfileForm = () => {
  const { theme } = useTheme();

  const route = useRoute<RouteProp<StackParamList, "CreateProfile">>();

  const [responseError, setResponseError] = useState<string | undefined>(
    undefined
  );

  const [{ fetching }, phoneRegister] = usePhoneRegisterMutation();

  const onSubmit = async (values: { username: string }) => {
    const { data, error } = await phoneRegister({
      input: {
        code: route.params.code!,
        phoneNumber: route.params.phoneNumber!,
        username: values.username
      }
    });

    // ? Cache is automatically updated -> Redirect to Home

    if (!data?.phoneRegister && error) {
      setResponseError(formatGraphQLError(error));
    }
  };

  return (
    <Formik
      initialValues={{
        username: ""
      }}
      validationSchema={CreateProfileSchema}
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
            marginTop: theme.spacing.md,
            paddingHorizontal: theme.spacing.xs,
            alignItems: "center"
          }}
        >
          <Input
            label="Nom d'utilisateur"
            containerStyle={{ marginBottom: theme.spacing.md }}
            rightIcon={
              <ClearInputButton
                value={values.username}
                onPress={() => setFieldValue("username", "")}
              />
            }
            value={values.username}
            onChangeText={handleChange("username")}
            onBlur={handleBlur("username")}
            errorMessage={
              (errors.username || responseError) ??
              "Il apparaîtra sur votre profil Ishiro et ne sera rien qu'à vous."
            }
            errorStyle={{
              color:
                errors.username || responseError
                  ? theme.colors.error
                  : theme.colors.grey5
            }}
            keyboardType="default"
            autoComplete="off"
            returnKeyType="send"
            blurOnSubmit={false}
            onSubmitEditing={() => handleSubmit()}
          />

          <Button
            type="solid"
            buttonStyle={{
              backgroundColor: theme.colors.white
            }}
            containerStyle={{
              marginBottom: theme.spacing.md
            }}
            titleStyle={{
              color: theme.colors.black
            }}
            onPress={() => handleSubmit()}
            title="Continuer"
            loading={fetching}
            loadingProps={{ color: theme.colors.black }}
          />
        </View>
      )}
    </Formik>
  );
};
