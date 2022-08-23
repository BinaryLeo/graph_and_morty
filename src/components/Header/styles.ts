import styled from "styled-components/native";
import { RFPercentage} from "react-native-responsive-fontsize";
export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.primary};
  width: 100%;
  margin: 20px 0 15px 0;
  height: ${RFPercentage(20)}px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;