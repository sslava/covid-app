import React from 'react';

import usePhoneCall from '../../common/usePhoneCall';

import callIcon from './call.png';

import {Button, Title, Subtitle, PhoneIcon, PhoneText} from './Phone.styles';

export default function Phone({phone, dialNumber, children}) {
  const call = usePhoneCall(dialNumber);
  return (
    <Button onPress={call} activeOpacity={0.5}>
      <Title>{children}</Title>
      <Subtitle>
        <PhoneText>{phone}</PhoneText>
        <PhoneIcon source={callIcon} />
      </Subtitle>
    </Button>
  );
}
