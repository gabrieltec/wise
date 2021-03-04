import React, {useEffect, useState} from 'react';
import LoginParent from '../../component/LoginParent/LoginParent.component';
import {Container, IBackground} from './LoginScreen.styles';

export const LoginScreen = (props: any) => {
  const [loading, setLoading] = useState<boolean>(false);

  const _changeLoading = (data: any) => {
    setLoading(data);
  };

  useEffect(() => {}, []);

  const renderItem = () => {
    return <LoginParent changeLoading={_changeLoading} showLoading={loading} />;
  };

  return (
    <Container>
      <IBackground source={require('../../assets/shutterstock.png')}>
        {renderItem()}
      </IBackground>
    </Container>
  );
};
