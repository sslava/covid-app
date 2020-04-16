import styled from 'styled-components/native';

import NumberBlock from './NumberBlock';
import StatsBar from '../../shared/StatsBar/StatsBar';

export const Container = styled.View`
  padding-top: 13px;
  padding-horizontal: 20px;
  border-top-width: 1px;
  border-top-color: ${(p) => p.theme.borderLightColor};
`;

export const Bar = styled(StatsBar)`
  padding-vertical: 6px;
  padding-right: 4px;
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
  flex-grow: ${(p) => p.fraction};
`;
