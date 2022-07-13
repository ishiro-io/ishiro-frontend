import { Image, View } from "dripsy";

const OnboardingScreen = () => {
  return (
    <View
      sx={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "background"
      }}
    >
      <Image
        source={require("../../assets/images/logo.png")}
        sx={{
          height: [150, 300],
          width: [150, 300]
        }}
      ></Image>
    </View>
  );
};

export default OnboardingScreen;
