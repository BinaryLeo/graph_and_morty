import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  align-items: center;
  flex-direction: row;
  width: 100%;
`;
export const CharBox = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: ${RFValue(10)}px;
  margin-left: ${RFValue(10)}px;
`;
export const BottomBox = styled.View`
  padding: ${RFValue(20)}px;
  align-items: center;
  justify-content: center;
`;
export const CloseButton = styled.TouchableOpacity`
  width: 90%;
  height: ${RFValue(40)}px;
  align-items: center;
  justify-content: center;
  border-radius: ${RFValue(10)}px;
  background-color: ${({ theme }) => theme.colors.border};
`;
