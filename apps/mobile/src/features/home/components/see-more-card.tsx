import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useTheme } from "@rneui/themed";
import { Text, View } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import {
  moderateScale,
  moderateVerticalScale
} from "react-native-size-matters";

export const SeeMoreCard = ({ onPress }: Props) => {
  const { theme } = useTheme();

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View
        style={{
          width: moderateScale(125, 0.1),
          height: moderateVerticalScale(210, 0.1) * 0.8,
          margin: theme.spacing.sm,
          backgroundColor: theme.colors.grey9,
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: moderateVerticalScale(16)
        }}
      >
        <Text
          style={{
            fontFamily: "Poppins-Medium",
            color: theme.colors.white,
            fontSize: moderateScale(12, 0.25),
            marginBottom: theme.spacing.md
          }}
        >
          Voir plus
        </Text>
        <MaterialCommunityIcons
          name="plus-circle"
          size={moderateScale(24)}
          color="white"
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

type Props = {
  onPress: () => void;
};
