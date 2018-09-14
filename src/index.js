/* NPM - Modules imported via NPM */
import { Navigation } from "react-native-navigation";
/* Config - Configuration for our application */
import { registerScreens } from "./screens";
import { defaultOptions, loadingScreen } from "./router";

/**
 * Screens and Views
 *
 * Registers all the screens in the application. This creates a fully native UI
 * screen component for both iOS and Android application using the react-native-
 * navigation library. Screens are declared in ~/src/screens
 */
registerScreens();

/**
 * Initialises the application
 */
Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setDefaultOptions(defaultOptions);
  Navigation.setRoot(loadingScreen);
});