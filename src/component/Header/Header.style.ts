import { Theme } from "@react-navigation/native";
import { Appbar } from "react-native-paper";
import styled from "styled-components/native";

export const SearchInput = styled.Text`
  flex: 4;
  height: 100%;
  font-size: 16px;
  color: 'white';
`;
export const StyledHeader = styled(Appbar.Header)`
  background-color: 'white';
`;

export interface AppbarInterface {
  themePapper?: Theme;
}

export const Content = styled(Appbar.Content).attrs<AppbarInterface>(
  ({ themePapper }) => ({
    color: "white",
    theme: {
      ...themePapper,
    },
  })
)``;
