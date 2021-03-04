import React, {useState} from 'react';
import {ActivityIndicator} from 'react-native-paper';
import styled from 'styled-components/native';

interface LoadingFragmentProps {
  height?: string;
}
const Container = styled.View<LoadingFragmentProps>`
  justify-content: center;
  align-items: center;
  width: 100%;
  ${(props: {height: string}) => props.height && 'height:' + props.height};
`;

export const useActivityIndicator = (
  config: {
    defaultValue?: boolean;
  } = {defaultValue: true},
) => {
  const [loading, setLoading] = useState<boolean>(
    config.defaultValue ? config.defaultValue : false,
  );

  const LoadingFragment: React.FC<LoadingFragmentProps> = ({
    children,
    ...rest
  }) => {
    return !loading ? (
      <>{children}</>
    ) : (
      <Container {...rest}>
        <ActivityIndicator />
      </Container>
    );
  };

  return {LoadingFragment, loading, setLoading};
};
export default useActivityIndicator;
