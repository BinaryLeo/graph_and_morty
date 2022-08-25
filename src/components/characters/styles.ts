import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primary};
`;
export const Wrapper = styled.TouchableOpacity`
  width: 90%;
  border-radius: 50px;
  margin: 10px;
  height: ${RFValue(120)}px;
  background-color: ${({ theme }) => theme.colors.cards};
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const ImageContainer = styled.View`
  flex: 1;
`;
export const Content = styled.View`
  flex: 1;
`;
export const LabelContent = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.secondary};
`;
