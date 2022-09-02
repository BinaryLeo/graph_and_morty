import styled from "styled-components/native";

export const Container = styled.View`
  height: 100%;
  padding: 10px 15px;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const FavoriteLoader = styled.TouchableOpacity`
  margin-bottom: 20px;
  width: 95%;
  align-items: center;
  justify-content: flex-end;
  flex-direction: row;
`;
