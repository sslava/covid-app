import styled from 'styled-components/native';

import NumberBlock from './NumberBlock';
import StatsBar from '../../../shared/StatsBar/StatsBar';

export const Container = styled.View`
  padding-top: 15px;
  border-top-width: 1px;
  border-top-color: ${(p) => p.color || p.theme.borderLightColor};
`;

export const Bar = styled(StatsBar)`
  padding-vertical: 7px;
`;

export const Numbers = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Left = styled.View`
  flex-direction: row;
  flex-grow: 1;
  padding-right: 3px;
`;

export const GrowingBlock = styled(NumberBlock)`
  margin-right: 5px;
  flex-grow: ${(p) => p.fraction};
`;
