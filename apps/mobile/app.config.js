export default {
  expo: {
    name: "Ishiro",
    slug: "ishiro-mobile",
    version: "0.0.0",
    entryPoint: "./src/index.js",
    orientation: "portrait",
    icon: "./assets/icon.png",
    primaryColor: "#CE1126",
    backgroundColor: "#131313",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#131313"
    },
    updates: {
      fallbackToCacheTimeout: 0
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true,
      userInterfaceStyle: "dark",
      bundleIdentifier: "io.ishiro.app",
      buildNumber: "1.0.0.1"
    },
    android: {
      icon: "./assets/android_icon.png",
      package: "io.ishiro.app",
      userInterfaceStyle: "dark",
      versionCode: 1
    },
    androidNavigationBar: {
      backgroundColor: "#131313"
    },
    scheme: "ishiro-mobile"
  }
};
