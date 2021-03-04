import React, {useContext, useState} from 'react';
import {useEffect} from 'react';
import DeviceStorage from '../core/DeviceStorage';
import useActivityIndicator from '../hooks/useActivityIndicator';
import {UserContext} from '../context/LoginContext/User.context';
import {
  CommonActions,
  StackActions,
  useNavigation,
} from '@react-navigation/native';

const AuthManager = (props: any) => {
  const navigation = useNavigation();
  const {LoadingFragment} = useActivityIndicator({defaultValue: true});
  const {navigate, dispatch} = useNavigation();
  const userContext = useContext(UserContext);

  useEffect(() => {
    const unsubscribe = props.navigation.addListener('focus', () => {
      getUserToken();
    });

    return unsubscribe;
  }, [props.navigation]);

  const dispatchFunction = (route: string) => {
    dispatch(CommonActions.navigate({name: route}));
  };

  const getUserToken = async () => {
    try {
      const userToken = await DeviceStorage.getData('user');

      console.log('userToken', userToken);

      if (userToken) {
        userContext.saveUser(userToken);
        dispatchFunction('Home');
      } else {
        const resetAction = StackActions.replace('Login');
        navigation.dispatch(resetAction);
      }
    } catch (error) {
      dispatchFunction('Login');
    }
  };

  return <LoadingFragment height="100%" />;
};

export default AuthManager;
