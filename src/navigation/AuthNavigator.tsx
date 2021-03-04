import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import AuthManager from '../auth/AuthManager.component';
import {LoginScreen} from '../screen/Login/LoginScreen';

const AuthNavigator: React.FC = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator initialRouteName="Loading">
      <Stack.Screen
        name="Loading"
        component={AuthManager}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{header: () => null}}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
