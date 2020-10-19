import React, {useCallback, useEffect, useMemo} from 'react';

import {useDispatch, useSelector} from 'react-redux';
import {RefreshControl} from 'react-native';

import useRefresh from '../common/useRefresh';

import {
  fetchStats,
  fetchingStatsSelector,
  makeCountrySelector,
} from '../../app/statsModule';

import {
  fetchCountryHistory,
  makeCounrtyHistorySelector,
} from '../../app/historyModule';

import {countrySupportsRegions} from '../../app/preferencesModule';

import Today from './Today/Today';
import Stats from './Stats/Stats';
import Graphs from './Graphs/Graphs';
import Regions from './Regions/Regions';

import {Safe, Scroll} from './DeatilsScreen.styles';
import {fetchCountryRegions} from '../../app/regionsModule';
import AdmobBlock from '../Admob/AdmobBlock';
import {adsSelector} from '../../app/adModule';

export default function DeatilsScreen({navigation, route}) {
  const dispatch = useDispatch();
  const {code} = route.params;

  const hasRegions = countrySupportsRegions(code);

  useEffect(() => {
    dispatch(fetchStats());
    dispatch(fetchCountryHistory(code));
  }, [dispatch, code]);

  useEffect(() => {
    if (hasRegions) {
      dispatch(fetchCountryRegions(code));
    }
  }, [dispatch, hasRegions, code]);

  const refreshStats = useCallback(() => {
    dispatch(fetchStats());
    dispatch(fetchCountryHistory(code));
    if (hasRegions) {
      dispatch(fetchCountryRegions(code));
    }
  }, [dispatch, code, hasRegions]);

  const isFetching = useSelector(fetchingStatsSelector);
  const [refresh, refreshing] = useRefresh(refreshStats, isFetching);

  const countrySelector = useMemo(makeCountrySelector, []);
  const country = useSelector((s) => countrySelector(s, code));

  const historySelector = useMemo(makeCounrtyHistorySelector, []);
  const history = useSelector((s) => historySelector(s, code));

  const ads = useSelector(adsSelector);

  return (
    <Safe>
      <Scroll
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={refresh} />
        }>
        <Today country={country} history={history} />
        <AdmobBlock unitId={ads.countryTop} />
        <Stats country={country} history={history} />
        <AdmobBlock unitId={ads.countryMiddle} />
        <Graphs history={history} />
        {hasRegions && <Regions code={code} country={country} />}
      </Scroll>
    </Safe>
  );
}
