import {useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import Header from '../component/Header/Header.component';
import HeaderHome from '../component/HeaderHome/HeaderHome.component';
import {UserContext} from '../context/LoginContext/User.context';
import Home from '../screen/Home/Home.screen';

const HomeNavigator = () => {
  const Stack = createStackNavigator();

  const userContext = React.useContext(UserContext);
  const {navigate} = useNavigation();
  useEffect(() => {
    console.log(userContext);
    if (!userContext.user) {
      navigate('Login');
    }
  }, []);

  return (
    <>
      <Stack.Navigator screenOptions={{header: Header}} initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{header: HeaderHome}}
        />
      </Stack.Navigator>
    </>
  );
};

export default HomeNavigator;
