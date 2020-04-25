import styled from 'styled-components/native';

import NumberBlock from './NumberBlock';
import HorizontalBar from '../../common/charts/HorizontalBar/HorizontalBar';

export const Bar = styled(HorizontalBar)`
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
