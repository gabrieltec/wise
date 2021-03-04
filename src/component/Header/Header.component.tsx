import {
  StackActions,
  useNavigationState,
  useRoute,
} from '@react-navigation/native';
import {StackHeaderProps} from '@react-navigation/stack';
import React, {useEffect, useRef, useState} from 'react';
import {Platform} from 'react-native';
import {Appbar} from 'react-native-paper';
import {StyledHeader} from './Header.style';

const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

const Header: React.FC<StackHeaderProps> = (props) => {
  const {title} = props.scene.descriptor.options;
  const navigationState = useNavigationState((state) => state);
  const [previousSelected, setPreviousSelected] = useState('all');
  const [headerTitle, setHeaderTitle] = useState(title);

  const params = props.scene.route.params as any;
  const route = useRoute();
  const inputRef = useRef(null);

  useEffect(() => {}, [navigationState]);

  const handleBack = () => {
    const backTo = params ? params?.backTo : (route.params as any)?.backTo;
    if (backTo) {
      props.navigation.dispatch(StackActions.replace(backTo));
    } else {
      props.navigation.goBack();
    }
  };

  return (
    <StyledHeader>
      <Appbar.BackAction color="white" onPress={handleBack} />
      {true && (
        <Appbar.Action
          color="white"
          // onPress={handlePressFilter}
          icon={MORE_ICON}
        />
      )}
    </StyledHeader>
  );
};

export default Header;
