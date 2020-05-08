import * as React from "react";
// import { Platform, StatusBar, StyleSheet, Text, View } from "react-native";
// import { SplashScreen } from "expo";
// import * as Font from "expo-font";
// import { Ionicons } from "@expo/vector-icons";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createAppContainer, createSwitchNavigator } from "react-navigation";

// import BottomTabNavigator from "./navigation/BottomTabNavigator";
// import useLinking from "./navigation/useLinking";
import LoginScreen from "./screens/LoginScreen";
import SignUp from "./screens/SignUp";
import Login from "./screens/Login";

import DoneScreen from "./screens/DoneScreen";
import LoadingScreen from "./screens/LoadingScreen";

// const Stack = createStackNavigator();

export default function App(props) {
  // const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  // const [initialNavigationState, setInitialNavigationState] = React.useState();
  // const containerRef = React.useRef();
  // const { getInitialState } = useLinking(containerRef);

  // // Load any resources or data that we need prior to rendering the app
  // React.useEffect(() => {
  //   async function loadResourcesAndDataAsync() {
  //     try {
  //       SplashScreen.preventAutoHide();

  //       // Load our initial navigation state
  //       setInitialNavigationState(await getInitialState());

  //       // Load fonts
  //       await Font.loadAsync({
  //         ...Ionicons.font,
  //         "space-mono": require("./assets/fonts/SpaceMono-Regular.ttf"),
  //       });
  //     } catch (e) {
  //       // We might want to provide this error information to an error reporting service
  //       console.warn(e);
  //     } finally {
  //       setLoadingComplete(true);
  //       SplashScreen.hide();
  //     }
  //   }

  //   loadResourcesAndDataAsync();
  // }, []);

  // if (!isLoadingComplete && !props.skipLoadingScreen) {
  //   return null;
  // } else {
  // return (
  //   <View style={styles.container}>
  //     {Platform.OS === "ios" && <StatusBar barStyle="default" />}
  //     <NavigationContainer
  //       ref={containerRef}
  //       initialState={initialNavigationState}
  //     >
  //       <Stack.Navigator>
  //         <Stack.Screen name="Root" component={BottomTabNavigator} />
  //       </Stack.Navigator>
  //     </NavigationContainer>
  //   </View>
  // );
  // }

  return <AppNavigator />;
}

const AppSwithcNavigator = createSwitchNavigator({
  LoadingSreen: LoadingScreen,
  LoginScreen: Login,
  SignUp: SignUp,
  HomeScreen: DoneScreen,
});

const AppNavigator = createAppContainer(AppSwithcNavigator);

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
