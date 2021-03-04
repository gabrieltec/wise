import { Appbar } from "react-native-paper";
import styled from "styled-components/native";
import { AppbarInterface } from "../Header/Header.style";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
`;
export const AppbarHeader = styled(Appbar.Header)`
  padding: 0 10px;
`;

export const Content = styled(Appbar.Content).attrs<AppbarInterface>(
  ({ themePapper }) => ({
    color: "white",
    theme: {
      ...themePapper,
    },
  })
)``;
