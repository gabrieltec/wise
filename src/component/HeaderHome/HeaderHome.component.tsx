import {useNavigation, useTheme} from '@react-navigation/native';
import {StackHeaderProps} from '@react-navigation/stack';
import React, {useContext, useEffect} from 'react';
import {TouchableRipple} from 'react-native-paper';
import {Text} from 'react-native-ui-lib';
import {UserContext} from '../../context/LoginContext/User.context';
import {Content} from '../Header/Header.style';
import {AppbarHeader} from './HeaderHome.style';

const HeaderHome: React.FC<StackHeaderProps> = (props) => {
  const navigation = useNavigation();
  const theme = useTheme();
  const userContext = useContext(UserContext);
  useEffect(() => {}, []);

  return (
    <AppbarHeader>
      <TouchableRipple onPress={() => {}}>
        <Text color="white"></Text>
      </TouchableRipple>
      <Content
        color="white"
        title={`Usuario logado`}
        subtitle={
          <TouchableRipple onPress={() => {}}>
            <Text color="white">Bem-vindo(a) usuario</Text>
          </TouchableRipple>
        }
        themePapper={theme}
      />
      {/* <Avatar.Image size={38} source={imageHandler("Marca")} /> */}
    </AppbarHeader>
  );
};

export default HeaderHome;
