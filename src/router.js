import {Colors} from "./values";

export const defaultOptions = {
  statusBar: {
    visible: true,
    style: "light"
  },
  topBar: {
    visible: true,
    animate: true, // Controls whether TopBar visibility changes should be animated
    hideOnScroll: false,

    title: {
      color: Colors.lightColor
    },
    backButton: {
      color: Colors.lightColor
    },
    background: {
      color: Colors.primaryColor
    }
  },
  bottomTab: {
    iconColor: Colors.darkColor,
    selectedIconColor: Colors.primaryColor,
    textColor: Colors.darkColor,
    selectedTextColor: Colors.primaryColor,
    fontSize: 12,
  }
};

export const loadingScreen = {
  root: {
    stack: {
      children: [
        {
          component: {
            name: "Loading",
            options: {
              topBar: {
                visible: false
              }
            }
          }
        }
      ]
    }
  }
};

export const routes = {
  exampleScreen: props => ({
    component: {
      name: "Example",
      passProps: {
        ...props
      },
      options: {
        // ... Options
      }
    }
  }),
};