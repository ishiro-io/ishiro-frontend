import { Image, Text, useTheme } from "@rneui/themed";
import { LinearGradient } from "expo-linear-gradient";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { moderateScale } from "react-native-size-matters";

export const AnimeCard = ({
  title,
  coverImage,
  episodeText,
  episodeNumber,
  height,
  width,
  topRightIcon,
  onPress,
  onTopRightIconPress
}: AnimeCardProps) => {
  const { theme } = useTheme();

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View
        style={{
          width,
          height,
          margin: theme.spacing.sm
        }}
      >
        <View
          style={{
            ...StyleSheet.absoluteFillObject,
            height: height * 0.8,
            borderRadius: moderateScale(14),
            backgroundColor: theme.colors.grey9,
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <ActivityIndicator color={theme.colors.white} />
        </View>

        <Image
          source={{
            uri: coverImage
          }}
          style={{
            height: height * 0.8,
            borderRadius: moderateScale(14),
            resizeMode: "cover"
          }}
          placeholderStyle={{ backgroundColor: theme.colors.grey9 }}
        />

        <View
          style={{
            ...StyleSheet.absoluteFillObject,
            justifyContent: "flex-start",
            alignItems: "flex-end",
            height: height * 0.8
          }}
        >
          <LinearGradient
            colors={["rgba(0,0,0,0.7)", "transparent"]}
            locations={[0, 0.4]}
            style={{
              ...StyleSheet.absoluteFillObject,
              borderRadius: moderateScale(14)
            }}
          />
        </View>

        {episodeText !== undefined && episodeNumber !== undefined && (
          <View
            style={{
              ...StyleSheet.absoluteFillObject,
              justifyContent: "flex-end",
              height: height * 0.8
            }}
          >
            <LinearGradient
              colors={["transparent", "rgba(0,0,0,0.8)"]}
              locations={[0.5, 1]}
              style={{
                ...StyleSheet.absoluteFillObject,
                borderRadius: moderateScale(14)
              }}
            />
            <View style={{ margin: theme.spacing.xs }}>
              <Text
                style={{
                  fontFamily: "Poppins-Medium",
                  fontSize: moderateScale(12, 0.25)
                }}
              >
                {episodeText}
              </Text>
              <Text
                style={{
                  fontFamily: "Poppins-ExtraLight",
                  fontSize: moderateScale(16, 0.25)
                }}
              >
                {episodeNumber}
              </Text>
            </View>
          </View>
        )}

        {topRightIcon && (
          <View
            style={{
              ...StyleSheet.absoluteFillObject
            }}
          >
            <TouchableWithoutFeedback onPress={onTopRightIconPress}>
              <View
                style={{
                  marginTop: theme.spacing.sm,
                  marginRight: theme.spacing.xs,
                  alignSelf: "flex-end"
                }}
              >
                {topRightIcon}
              </View>
            </TouchableWithoutFeedback>
          </View>
        )}

        <Text
          style={{
            fontSize: moderateScale(12, 0.25),
            marginTop: theme.spacing.sm
          }}
          ellipsizeMode="tail"
          numberOfLines={2}
        >
          {title}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export type AnimeCardProps = {
  title: string;
  coverImage?: string;
  episodeText?: string;
  episodeNumber?: number;
  width: number;
  height: number;
  onPress: () => void;
  topRightIcon?: JSX.Element;
  onTopRightIconPress?: () => void;
};
