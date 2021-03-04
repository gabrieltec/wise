import styled from "styled-components/native";
import Constant from "../../util/Constant";

export const Container = styled.View`
flex: 1;
  top: ${Constant.screenHeight * 0.22}px;
  border-radius: 10px;
  background-color: #FAF5FF;
  margin: 0px ${Constant.screenWidth * 0.1}px;
  max-height: ${Constant.screenHeight * 0.55}px;
`;

export const TextWelcome = styled.Text`
  font-style: normal;
  font-weight: normal;
  font-size: 35px;
  line-height: 32px;
  /* or 133% */
  padding: 5%;
  color: #383E71;
  text-align: center;
`;

export const TextStart = styled.Text`
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 20px;
  /* identical to box height, or 167% */
  padding: 10px;
  text-align: center;

  color: #989FDB;
`;

