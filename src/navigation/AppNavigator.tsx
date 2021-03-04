import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import AuthManager from '../auth/AuthManager.component';
import AuthNavigator from './AuthNavigator';
import HomeNavigator from './HomeNavigator';
interface AppNavigatorProps {}

/**
 * @description Responsável pela navegação de 'alto nível' da aplicação
 */

class AppNavigator extends React.Component<AppNavigatorProps, any> {
  render() {
    const Stack = createStackNavigator();

    return (
      <>
        <Stack.Navigator initialRouteName="AuthNavigator">
          <Stack.Screen
            name="AuthNavigator"
            component={AuthNavigator}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Home"
            component={HomeNavigator}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </>
    );
  }
}

export default AppNavigator;
