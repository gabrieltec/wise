import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import {ThemeProvider} from 'styled-components';
import UserContextProvider from './src/context/LoginContext/User.context';
import AppNavigator from './src/navigation/AppNavigator';

export const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    background: 'white',
  },
};

import createSagaMiddleware from 'redux-saga';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './src/redux/reducer';
import rootSaga from './src/redux/action/saga';

const initialState = {counter: 1, customAsyncData: undefined};
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(sagaMiddleware),
);
sagaMiddleware.run(rootSaga);

export default function App() {
  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <PaperProvider theme={theme}>
          <SafeAreaView style={{flex: 1}}>
            <Provider store={store}>
              <UserContextProvider>
                <AppNavigator />
                <StatusBar backgroundColor={DefaultTheme.colors.primary} />
              </UserContextProvider>
            </Provider>
          </SafeAreaView>
        </PaperProvider>
      </ThemeProvider>
    </NavigationContainer>
  );
}
