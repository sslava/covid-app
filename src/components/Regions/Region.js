import React, {useState, useCallback, memo} from 'react';

import {getRegionActiveCases} from '../../app/regionsModule';
import {regionName} from '../../common/locale';

import {
  RegionListToggle,
  RegionListItem,
} from '../shared/RegionList/RegionListItem';

import RegionListLegend from '../shared/RegionList/RegionListLegend';

const SORT_ACTIVE = 1;
const SORT_DEATHS = 2;

function getNumbers(r, sort) {
  switch (sort) {
    case SORT_ACTIVE:
      return {total: getRegionActiveCases(r)};
    case SORT_DEATHS:
      return {total: r.total_deaths};
    default:
      break;
  }
  return {total: r.total_cases};
}

function Region({region, sort, index}) {
  const [expanded, setExpanded] = useState(false);
  const toggle = useCallback(() => setExpanded((s) => !s), []);

  const active = getRegionActiveCases(region);

  return (
    <RegionListItem expanded={expanded}>
      <RegionListToggle
        index={index}
        name={regionName(region)}
        {...getNumbers(region, sort)}
        expanded={expanded}
        onPress={toggle}
        skipToday
      />
      {expanded && (
        <RegionListLegend
          active={active}
          total={region.total_cases}
          recovered={region.total_recovered}
          deaths={region.total_deaths}
          skipToday
        />
      )}
    </RegionListItem>
  );
}

export default memo(Region);
