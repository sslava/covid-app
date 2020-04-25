import React, {useState, memo, useCallback} from 'react';

import {countryName} from '../../common/locale';

import {RegionListToggle, RegionListItem} from './RegionList/RegionListItem';
import RegionListLegend from './RegionList/RegionListLegend';

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

function CountryListItem({country, onDetails, index, sort = 0}) {
  const [expanded, setExpanded] = useState(false);
  const toggle = useCallback(() => setExpanded((s) => !s), []);
  const name = countryName(country);

  const details = useCallback(() => onDetails(country.code, name), [
    onDetails,
    name,
    country.code,
  ]);

  return (
    <RegionListItem expanded={expanded}>
      <RegionListToggle
        index={index}
        name={name}
        {...getNumbers(country, sort)}
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
          onDetails={details}
        />
      )}
    </RegionListItem>
  );
}

export default memo(CountryListItem);
