import styled from 'styled-components/native';

export const HeaderContainer = styled.View`
  background-color: rgba(255, 255, 255, 0.1);
  padding-vertical: 16px;
  padding-horizontal: 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderLeft = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const CountryIcon = styled.Image`
  height: 24px;
  width: 24px;
  border-radius: 12px;
  margin-right: 10px;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 20px;
  line-height: 26px;
  color: #fff;
`;

export const Updated = styled.Text`
  font-size: 16px;
  line-height: 26px;
  flex-grow: 1;
  text-align: right;
  color: #fff;
`;

export const Content = styled.View`
  width: 100%;
  padding-horizontal: 20px;
  padding-top: 13px;
`;

export const FooterContainer = styled.View`
  padding-top: 20px;
  padding-bottom: 10px;
  flex-direction: row;
  align-items: center;
`;

export const AppIcon = styled.Image`
  width: 24px;
  height: 24px;
`;

export const FooterContent = styled.View`
  padding-left: 5px;
`;

export const FooterText = styled.Text`
  font-size: 10px;
  line-height: 14px;
  color: rgba(255, 255, 255, 0.7);
`;
export const FooterLink = styled.Text`
  padding-left: 10px;
  font-size: 10px;
  color: #fff;
`;
