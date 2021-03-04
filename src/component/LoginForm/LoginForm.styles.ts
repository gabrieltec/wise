import styled from "styled-components/native";
import Constant from "../../util/Constant";

export const Container = styled.View`
  flex: 1;
  border-radius: 8px;
`;

export const InputContainer = styled.View`
  padding: 0px ${Constant.screenWidth * 0.1}px;
  align-content: center;
  width: 100%;
  border-bottom-color: #555;
`;

export const FormContainer = styled.View`
  padding: 0px 0px;
`;

export const ButtonContainer = styled.View`
  align-items: center;
  padding-top: 20px;
  padding-bottom: 35px;
`;

export const SubmitButtonContainer = styled.View.attrs({
  elevation: 9,
})`
    
  width: 168px;
  height: 48px;
  border-radius: 17px;
  align-items: center;
  justify-content: center;
  background-color: #9D25B0;
`;

export const RetrievePasswordContainer = styled.View`
  align-items: center;
  margin-top: 15px;
`;

export const ButtonText = styled.Text`
  font-weight: bold;
  line-height: 16px;
`;

export const TextMessageErro = styled.Text`
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 20px;
  /* or 480% */

  display: flex;
  align-items: center;

  color: #FF377F;
`;
