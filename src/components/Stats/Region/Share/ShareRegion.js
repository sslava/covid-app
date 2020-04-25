import React from 'react';

import ShareContainer from '../../../shared/Share/ShareContainer';
import {Header, Footer, Content} from '../../../shared/Share/Tokens';
import {regionName} from '../../../../common/locale';

function RegionView({sharing, onCapture, region, code}) {
  return (
    <ShareContainer sharing={sharing} onCapture={onCapture}>
      <Header
        title={regionName(region)}
        code={code}
        updated={region.updated_at}
      />
      <Content>
        <Footer updated={region.updated_at} />
      </Content>
    </ShareContainer>
  );
}

export default function ShareRegion({sharing, ...rest}) {
  if (!sharing) {
    return null;
  }
  return <RegionView {...rest} />;
}
