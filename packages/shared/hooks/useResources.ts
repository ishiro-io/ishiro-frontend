import { Asset } from "expo-asset";
import * as Font from "expo-font";
import { useEffect, useState } from "react";

export const useResources = () => {
  const [isFontReady, setIsFontReady] = useState(false);
  const [isLogoReady, setIsLogoReady] = useState(false);

  const loadFontAsync = async () => {
    try {
      await Font.loadAsync({
        "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
        "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
        "Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
        "Poppins-ExtraLight": require("../assets/fonts/Poppins-ExtraLight.ttf"),
        "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
        "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
        "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
        "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
        "Poppins-Thin": require("../assets/fonts/Poppins-Thin.ttf")
      });
    } catch (error) {
      console.log("Font Load Error:", error);
    } finally {
      setIsFontReady(true);
    }
  };

  const loadLogoAsync = async () => {
    try {
      await Asset.fromModule(
        require("shared/assets/images/logo.png")
      ).downloadAsync();
    } catch (error) {
      console.log("Logo Load Error:", error);
    } finally {
      setIsLogoReady(true);
    }
  };

  useEffect(() => {
    loadFontAsync();
    loadLogoAsync();
  }, []);

  return {
    isFontReady,
    isLogoReady
  };
};
