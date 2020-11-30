import React, {useCallback, useEffect, useMemo} from 'react';

import AppMetrica from 'react-native-appmetrica';

import {useDispatch, useSelector} from 'react-redux';
import {RefreshControl} from 'react-native';

import useRefresh from '../common/useRefresh';

import {
  fetchStats,
  fetchingStatsSelector,
  makeCountrySelector,
} from '../../app/statsModule';

// import AdmobBlock from '../Admob/AdmobBlock';

import {
  fetchCountryHistory,
  makeCounrtyHistorySelector,
} from '../../app/historyModule';

import Today from './Today/Today';
import Stats from './Stats/Stats';
import Graphs from './Graphs/Graphs';
import Regions from './Regions/Regions';

import {Safe, Scroll} from './DeatilsScreen.styles';
import {fetchCountryRegions} from '../../app/regionsModule';

export default function DeatilsScreen({navigation, route}) {
  const dispatch = useDispatch();
  const {code} = route.params;

  const countrySelector = useMemo(makeCountrySelector, []);
  const country = useSelector((s) => countrySelector(s, code));

  useEffect(() => {
    dispatch(fetchStats());
    dispatch(fetchCountryHistory(code));
  }, [dispatch, code]);

  useEffect(() => {
    AppMetrica.reportEvent('CountryOpen', {code});
  }, [code]);

  useEffect(() => {
    if (country?.has_state) {
      dispatch(fetchCountryRegions(country.code));
    }
  }, [dispatch, country]);

  const refreshStats = useCallback(() => {
    dispatch(fetchStats());
    dispatch(fetchCountryHistory(code));
    if (country?.has_state) {
      dispatch(fetchCountryRegions(country.code));
    }
  }, [dispatch, country, code]);

  const isFetching = useSelector(fetchingStatsSelector);
  const [refresh, refreshing] = useRefresh(refreshStats, isFetching);

  const historySelector = useMemo(makeCounrtyHistorySelector, []);
  const history = useSelector((s) => historySelector(s, code));

  return (
    <Safe>
      <Scroll
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={refresh} />
        }>
        <Today country={country} history={history} />
        {/* <AdmobBlock place="countryTop" /> */}
        <Stats country={country} history={history} />
        {/* <AdmobBlock place="countryMiddle" /> */}
        <Graphs history={history} />
        {country?.has_state && <Regions code={code} country={country} />}
      </Scroll>
    </Safe>
  );
}
