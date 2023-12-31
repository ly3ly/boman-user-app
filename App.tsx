import React from "react";
import { View, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createTheme, ThemeProvider } from "@rneui/themed";
import BottomBar from "./pages/components/BottomBar";


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from "./pages/screens/LoginScreen";

import { RootStackParamList } from "./pages/DataInterfaces";

const App: React.FC = () => {
  const Stack = createStackNavigator<RootStackParamList>();
  return (

    <NavigationContainer>
      <SafeAreaProvider style={styles.container}>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ title: '登录' }}
          />
          <Stack.Screen
            name="Home"
            options={{ title: 'Home', headerShown: false }}
          >
            {() => (<BottomBar />)}
          </Stack.Screen>
        </Stack.Navigator>
      </SafeAreaProvider>
    </NavigationContainer>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;