import styled from 'styled-components/native';
import SegmentedControl from '@react-native-community/segmented-control';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${(p) => p.theme.primaryBackground};
`;

export const Top = styled.View`
  padding-horizontal: 20px;
  padding-top: 20px;
  padding-bottom: 10px;
`;

export const SortControl = styled(SegmentedControl)`
  margin-top: 18px;
`;
