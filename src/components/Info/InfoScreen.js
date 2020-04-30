import React, {useRef} from 'react';

import {useSelector} from 'react-redux';

import {ScrollView} from 'react-native';
import {useScrollToTop} from '@react-navigation/native';

import {t} from '../../common/locale';
import {nodataSelector} from '../../app/statsModule';

import LargeHeader from '../common/Header/LargeHeader';
import Symptoms from './Symptoms/Symptoms';
import Recommendations from './Recommendations/Recommendations';
import Resources from './Resources/Resources';
import VerbaLink from './VerbaLink';

import {
  SafeArea,
  CSymptoms,
  CResources,
  CRecommendations,
} from './InfoScreen.styles';

const contentStyle = {paddingBottom: 30};

export default function InfoScreen({navigation}) {
  const scrollRef = useRef();
  useScrollToTop(scrollRef);
  const nodata = useSelector(nodataSelector);

  return (
    <SafeArea>
      {!nodata && (
        <ScrollView ref={scrollRef} contentContainerStyle={contentStyle}>
          <LargeHeader title={t('info.title')} />
          <CSymptoms>
            <Symptoms />
          </CSymptoms>
          <CRecommendations>
            <Recommendations />
          </CRecommendations>
          <CResources>
            <Resources />
          </CResources>
          <VerbaLink />
        </ScrollView>
      )}
    </SafeArea>
  );
}
