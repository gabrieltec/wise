import {CommonActions, useNavigation} from '@react-navigation/native';
import {Formik} from 'formik';
import React, {useContext, useEffect, useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Text, TextInput} from 'react-native-paper';
import * as Yup from 'yup';
import {UserContext} from '../../context/LoginContext/User.context';
import DeviceStorage from '../../core/DeviceStorage';
import useActivityIndicator from '../../hooks/useActivityIndicator';
import {LoginService} from '../../service/login.service';
import {showErrorToast, showSuccessToast} from '../../util/Toast';
import {
  ButtonContainer,
  ButtonText,
  Container,
  FormContainer,
  InputContainer,
  RetrievePasswordContainer,
  SubmitButtonContainer,
  TextMessageErro,
} from './LoginForm.styles';

const LoginForm = (props: any) => {
  const {navigate, dispatch} = useNavigation();
  const userContext = useContext(UserContext);
  const {LoadingFragment, loading, setLoading} = useActivityIndicator();
  const [user, setUser] = useState<any>({
    Email: '',
    Senha: '',
  });

  const wiseloginExternal = 'https://wwws.wise.com.br';

  useEffect(() => {
    setLoading(false);
  }, []);

  const FormSchema = Yup.object().shape({
    Senha: Yup.string()
      .required('Senha obrigatoria')
      .min(6, 'Senha menor que 6 digitos'),
    Email: Yup.string()
      .email('Email Invalido')
      .required('Email obrigatorio')
      .min(6, 'Email menor que 6 digitos'),
  });

  const loginForm = async (values: any) => {
    setLoading(true);

    const loginObj = {
      email: values.Email,
      senha: values.Senha,
    };

    LoginService.login(loginObj)
      .then((response: any) => {
        if (response.status === 200) {
          DeviceStorage.saveData('user', JSON.stringify(loginObj)).then(() => {
            userContext.saveUser(loginObj);
            showSuccessToast({message: 'Usuario logado com sucesso'});
            setUser({
              Email: '',
              Senha: '',
            });
            dispatch(CommonActions.navigate({name: 'Home'}));
          });
        } else {
          showErrorToast({message: 'usurio não cadastrado'});
        }
      })
      .catch((err: any) => {
        showErrorToast({message: 'usurio não cadastrado'});
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Container>
      <Formik
        initialValues={{...user}}
        enableReinitialize={true}
        validationSchema={FormSchema}
        onSubmit={(values: any) => loginForm(values)}>
        {({
          values,
          touched,
          errors,
          handleChange,
          handleBlur,
          handleSubmit,
          setFieldTouched,
          isValid,
        }) => (
          <FormContainer>
            <InputContainer>
              <TextInput
                mode="outlined"
                label="Email"
                value={user.Email}
                onChangeText={(text: any) =>
                  setUser({Email: text, Senha: user.Senha})
                }
              />
              <View>
                {errors.Email && touched.Email && (
                  <TextMessageErro>{errors.Email}</TextMessageErro>
                )}
              </View>
            </InputContainer>
            <InputContainer>
              <TextInput
                secureTextEntry={true}
                mode="outlined"
                label="Senha"
                value={user.Senha}
                onChangeText={(text: any) =>
                  setUser({Senha: text, Email: user.Email})
                }
              />
              <View>
                {errors.Senha && touched.Senha && (
                  <TextMessageErro>{errors.Senha}</TextMessageErro>
                )}
              </View>
            </InputContainer>
            <ButtonContainer>
              <TouchableOpacity
                activeOpacity={1}
                onPress={() => {
                  handleSubmit();
                }}>
                <SubmitButtonContainer>
                  {loading ? (
                    <LoadingFragment children={''} />
                  ) : (
                    <ButtonText>Entrar</ButtonText>
                  )}
                </SubmitButtonContainer>
              </TouchableOpacity>
              <RetrievePasswordContainer>
                <TouchableOpacity
                  onPress={() => {
                    navigate('teste', {
                      url: wiseloginExternal,
                    });
                  }}>
                  <Text>Esqueceu seu login ou senha? Clique aqui</Text>
                </TouchableOpacity>
              </RetrievePasswordContainer>
            </ButtonContainer>
          </FormContainer>
        )}
      </Formik>
    </Container>
  );
};

export default LoginForm;
