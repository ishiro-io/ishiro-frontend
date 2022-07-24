import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Button, useTheme } from "@rneui/themed";
import React, { useContext } from "react";
import { View } from "react-native";
import { moderateScale } from "react-native-size-matters";

export const ClearInputButton: React.FC<ClearInputButtonProps> = ({
  value,
  onPress
}: ClearInputButtonProps) => {
  const { theme } = useTheme();

  return (
    <>
      {value !== "" ? (
        <Button
          type="clear"
          containerStyle={{
            alignItems: "center",
            justifyContent: "center",
            width: moderateScale(20),
            height: moderateScale(20)
          }}
          icon={
            <MaterialCommunityIcons
              name="close-circle"
              size={moderateScale(20)}
              color={theme.colors?.grey5}
            />
          }
          {...{ onPress }}
        />
      ) : (
        <View style={{ width: moderateScale(20), height: moderateScale(20) }} />
      )}
    </>
  );
};

interface ClearInputButtonProps {
  value: string;
  onPress: () => void;
}
