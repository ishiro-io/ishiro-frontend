import { FontAwesome } from "@expo/vector-icons";
import { H1, Image, View } from "dripsy";

import { Button } from "shared/components";

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
        source={require("shared/assets/images/logo.png")}
        sx={{
          height: [150, 300],
          width: [150, 300]
        }}
      />

      <H1
        sx={{
          paddingX: 5,
          marginY: 6
        }}
      >
        Des milliers d'animes que vous pouvez suivre à tout moment.
      </H1>

      <Button
        variant="buttons.outline"
        icon={<FontAwesome name="phone" size={20} color="white" />}
      >
        Continuer avec mon numéro
      </Button>
    </View>
  );
};

export default OnboardingScreen;
