import styled from 'styled-components/native';
import SegmentedControl from '@react-native-community/segmented-control';

export const Search = styled.View`
  padding-top: 14px;
  padding-bottom: 10px;
  padding-horizontal: 20px;
`;

export const All = styled.View`
  padding-top: 20px;
  padding-horizontal: 20px;
`;

export const SortControl = styled(SegmentedControl)`
  margin-top: 16px;
  margin-bottom: 6px;
`;
