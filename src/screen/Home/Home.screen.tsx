import {
  CommonActions,
  StackActions,
  useNavigation,
} from '@react-navigation/native';
import React, {useContext, useEffect, useState} from 'react';
import {Button, Text} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {UserContext} from '../../context/LoginContext/User.context';
import DeviceStorage from '../../core/DeviceStorage';
import {Container} from './Home.styles';
import allActions from '../../redux/action/allAction';
import {log} from 'react-native-reanimated';

const Home = () => {
  const userContext = useContext(UserContext);
  const [welcome, setWelcome] = useState<any>(null);
  let customData: any;
  const {navigate, dispatch} = useNavigation();

  const dispatchRedux = useDispatch();
  const pullAsyncDataFunc = () => {
    dispatchRedux(allActions.getAsyncData());
  };

  const logOut = () => {
    DeviceStorage.clearData().then(() => {
      userContext.saveUser(null);
      navigate('Login');
      const resetAction = StackActions.replace('Login');
      dispatch(resetAction);
    });
  };

  useSelector((state) => {
    customData = state;
    return state;
  });

  useEffect(() => {
    setWelcome(
      `usuario: ${
        userContext?.user?.email ? userContext?.user?.email : 'Wise'
      }`,
    );
  }, []);

  return (
    <Container isHome={true}>
      <Text> {welcome}</Text>
      <Text> {`Contador redux: ${customData?.counter}`}</Text>
      <Text>
        {' '}
        {`Object mock redux: ${
          customData?.customAsyncData?.payload?.user
            ? customData?.customAsyncData?.payload?.user
            : ''
        }`}
      </Text>
      <Button
        icon="logout"
        mode="contained"
        onPress={() => {
          logOut();
        }}>
        logout
      </Button>
      <Button
        icon="logout"
        mode="contained"
        onPress={() => {
          pullAsyncDataFunc();
        }}>
        Pull Async Data
      </Button>
      <Button
        icon="logout"
        mode="contained"
        onPress={() => {
          dispatchRedux(allActions.increment());
        }}>
        increment
      </Button>
      <Button
        icon="logout"
        mode="contained"
        onPress={() => {
          dispatchRedux(allActions.decrement());
        }}>
        decrement
      </Button>
    </Container>
  );
};

export default Home;
