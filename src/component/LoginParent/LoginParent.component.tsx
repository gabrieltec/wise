import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import LoginForm from '../LoginForm/LoginForm.component';
import {Container, TextStart, TextWelcome} from './LoginParent.styles';

const LoginParent = (props: any) => {
  const {navigate} = useNavigation();
  const [user, setUser] = useState<any>({
    Email: '',
    Senha: '',
  });

  useEffect(() => {
    // setLoading(false);
  }, []);

  return (
    <Container>
      <TextWelcome>Olá, seja bem-vindo! </TextWelcome>
      <TextStart>Para acessar a plataforma, faça seu login. </TextStart>
      <LoginForm
        changeLoading={props._changeLoading}
        showLoading={props.loading}
      />
    </Container>
  );
};

export default LoginParent;
