/* NPM - Modules imported via NPM */
import React, { Component } from "react";
import { View } from "react-native";
import { Navigation } from "react-native-navigation";
import PropTypes from "prop-types";
/* Config - Configuration for our application */
import { loadImages } from "../config";
import { routes } from "../router";

class Loading extends Component {
  /**
   * [ Built-in React method. ]
   *
   * Executed when the component is mounted to the screen
   */
  async componentDidMount() {
    /** -------------------------------------------- */
    /**             Load Stuff Here                  */
    /** -------------------------------------------- */


    // ... initialise stuff

    /** -------------------------------------------- */
    /**               Load Resources                 */
    /** -------------------------------------------- */

    /* Loads images into the application */
    await loadImages();

    /** -------------------------------------------- */
    /**                 Start App                    */
    /** -------------------------------------------- */

    Navigation.setStackRoot(this.props.componentId, routes.exampleScreen());
  }

  /**
   * [ Built-in React method. ]
   *
   * Allows us to render JSX to the screen
   */
  render() {
    return (
        <View>
          {/* Custom loading screen */}
        </View>
    );
  }
}

/**
 * propTypes - Used to define the data types of props passed to this component
 */
Loading.propTypes = {
  /** Props */
  componentId: PropTypes.string.isRequired,
};

export default Loading;
