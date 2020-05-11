import styled from 'styled-components/native';
import SegmentedControl from '@react-native-community/segmented-control';
import {ContentBlock, Header} from '../Layout';

export const Search = styled.View`
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

export const Content = styled(ContentBlock)`
  padding-horizontal: 0;
`;

export const Hdr = styled(Header)`
  padding-horizontal: 20px;
`;
