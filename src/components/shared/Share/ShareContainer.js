import React, {useRef, useEffect, useCallback, useState} from 'react';
import styled from 'styled-components/native';

import {OffscreenViewShot} from '../../common/OffscreenViewshot';

import bg from '../../../assets/icons/sharebg.png';

const Container = styled.ImageBackground``;

export default function ShareContainer({sharing, onCapture, children}) {
  const viewshotRef = useRef();
  const [loaded, setLoaded] = useState(false);
  const loadEnd = useCallback(() => setLoaded(true), []);

  useEffect(() => {
    if (loaded && viewshotRef.current) {
      viewshotRef.current.capture();
    }
  }, [loaded]);

  return (
    // <OffscreenViewShot
    //   ref={viewshotRef}
    //   onCapture={onCapture}
    //   options={{format: 'jpg', quality: 0.8, result: 'tmpfile'}}>
    <Container source={bg} onLoad={loadEnd}>
      {children}
    </Container>
    // </OffscreenViewShot>
  );
}
