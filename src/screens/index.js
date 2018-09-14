/* NPM - Modules imported via NPM */
import React from "react";
import { Navigation } from "react-native-navigation";
/* Screens - The components we want to register as screens with react-native-navigation */
import Loading from "./Loading";
import Example from "./Example";

/** Register all application screens */
export function registerScreens() {
  Navigation.registerComponent("Loading", () => Loading);

  Navigation.registerComponent("Example", () => Example);
}