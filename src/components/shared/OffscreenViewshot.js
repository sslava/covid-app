import {useCallback, useState} from 'react';
import {Dimensions} from 'react-native';
import styled from 'styled-components/native';
import ViewShot from 'react-native-view-shot';

const {width} = Dimensions.get('window');

export const OffscreenViewShot = styled(ViewShot)`
  position: absolute;
  width: ${width}px;
  right: ${-1 * width - 5}px;
`;

export function useOffscreenViewShot(captured) {
  const [sharing, setSharing] = useState(false);
  const toggleShare = useCallback(() => setSharing(true), []);

  const capture = useCallback(
    async (data) => {
      try {
        captured(data);
      } catch (err) {
        console.log(err);
      }
      setSharing(false);
    },
    [captured],
  );

  return [sharing, toggleShare, capture];
}
