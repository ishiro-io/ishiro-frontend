import { Text, useTheme } from "@rneui/themed";
import { View } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  moderateScale,
  moderateVerticalScale
} from "react-native-size-matters";

export const Header: React.FC<HeaderProps> = ({
  label,
  iconLeft,
  iconRight,
  onIconLeftPress,
  onIconRightPress,
  justifyContent = "space-between",
  height = 60
}: HeaderProps) => {
  const { theme } = useTheme();
  const { top } = useSafeAreaInsets();

  return (
    <View
      style={{
        height: moderateVerticalScale(height),
        paddingHorizontal: theme.spacing.md,
        marginTop: top
      }}
    >
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          justifyContent
        }}
      >
        {iconLeft ? (
          <TouchableWithoutFeedback onPress={onIconLeftPress}>
            {iconLeft}
          </TouchableWithoutFeedback>
        ) : (
          iconRight && (
            <View
              style={{
                width: moderateScale(32),
                height: moderateScale(32)
              }}
            />
          )
        )}

        {label && <Text h1>{label}</Text>}

        {iconRight ? (
          <TouchableWithoutFeedback onPress={onIconRightPress}>
            {iconRight}
          </TouchableWithoutFeedback>
        ) : (
          iconLeft && (
            <View
              style={{ width: moderateScale(32), height: moderateScale(32) }}
            />
          )
        )}
      </View>
    </View>
  );
};

interface HeaderProps {
  label?: string;
  iconLeft?: JSX.Element;
  onIconLeftPress?: () => void;
  iconRight?: JSX.Element;
  onIconRightPress?: () => void;
  height?: number;
  justifyContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly"
    | undefined;
}
