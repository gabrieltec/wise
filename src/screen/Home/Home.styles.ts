import { TouchableRipple } from "react-native-paper";
import styled from "styled-components/native";
import Constant from "../../util/Constant";

export const Container = styled.ScrollView.attrs<{ isHome: boolean }>(
  ({ isHome }) => ({
    contentContainerStyle: {
      minHeight: "100%",
      paddingBottom: isHome ? 90 : 0,
    },
  })
)<{ isHome: boolean }>`
`;

export const TouchablePharmaBanner = styled(TouchableRipple).attrs(() => ({
  borderless: true,
}))`
  width: ${Constant.screenWidth * 0.88}px;
  height: 13.8%;
  margin: 0px auto;
  margin-top: 15px;
  border-radius: 7px;
`;

export const PharmaBanner = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 7px;
  resize-mode: contain;
`;
