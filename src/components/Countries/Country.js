import React, {useState, memo, useCallback} from 'react';

import {
  RegionListToggle,
  RegionListItem,
} from '../shared/RegionList/RegionListItem';
import RegionListLegend from '../shared/RegionList/RegionListLegend';

import {countryName} from '../../common/locale';

const SORT_ACTIVE = 1;
const SORT_DEATHS = 2;

function getNumbers(country, sort) {
  switch (sort) {
    case SORT_ACTIVE:
      return {total: country.active, today: country.total_new};
    case SORT_DEATHS:
      return {total: country.deaths, today: country.deaths_new, deaths: true};
    default:
      break;
  }
  return {total: country.total, today: country.total_new};
}

function Country({country, sort = 0}) {
  const [expanded, setExpanded] = useState(false);
  const toggle = useCallback(() => setExpanded((s) => !s), []);
  return (
    <RegionListItem expanded={expanded}>
      <RegionListToggle
        name={countryName(country)}
        {...getNumbers(country, sort)}
        index={country.index}
        expanded={expanded}
        onPress={toggle}
      />
      {expanded && (
        <RegionListLegend
          active={country.active}
          total={country.total}
          recovered={country.recovered}
          deaths={country.deaths}
          deaths_new={+country.deaths_new}
        />
      )}
    </RegionListItem>
  );
}

export default memo(Country);
