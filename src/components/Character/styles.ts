import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primary};
`;
export const Wrapper = styled.View`
  width: 95%;
  border-radius: 30px;
  margin: 5px;
  height: 140px;
  background-color: ${({ theme }) => theme.colors.cards};
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;
export const ImageContainer = styled.View`
  flex: 1;
`;
export const Content = styled.View`
  margin-left: 30px;
  flex: 2;
`;
export const LabelContent = styled.Text`
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.secondary};
`;
export const ModalLabel = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.secondary};
`;
export const CloseBtn = styled.View`
  width: 100%;
  align-items: flex-end;
  margin-right: 0px;
`;
