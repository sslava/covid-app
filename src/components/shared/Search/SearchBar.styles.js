import styled, {css} from 'styled-components/native';

export const Container = styled.View`
  position: relative;
`;

export const Button = styled.TouchableOpacity`
  position: relative;
`;

const inputStyles = css`
  height: 44px;
  padding-left: 45px;
  padding-right: 15px;
  border-radius: 22px;
  font-size: 13px;
  background-color: ${(p) => p.theme.secondaryBackground};
  color: ${(p) => p.theme.primaryTextColor};
`;

export const InputContainer = styled.View`
  ${inputStyles}
`;

export const Input = styled.TextInput`
  ${inputStyles}
`;

export const Icon = styled.Image`
  position: absolute;
  top: 12px;
  left: 15px;
  width: 21px;
  height: 21px;
  tint-color: ${(p) => p.theme.secondaryTextColor};
`;

export const Placeholder = styled.Text`
  line-height: 44px;
  font-size: 13px;
  color: ${(p) => p.theme.secondaryTextColor};
`;
