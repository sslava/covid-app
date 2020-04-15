import styled from 'styled-components/native';

export const Container = styled.View`
  width: 135px;
  height: 165px;
  border-radius: 5px;
  margin-right: 15px;
  padding-horizontal: 10px;
  padding-vertical: 10px;
  align-items: center;
  justify-content: space-between;
  background-color: ${(p) => p.bg};
`;

export const Img = styled.Image`
  width: 96px;
  height: 96px;
`;

export const Name = styled.Text`
  width: 100%;
  font-family: 'Ubuntu';
  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
  color: white;
`;
