import React, {useState, useCallback, memo} from 'react';

import {
  RegionListToggle,
  RegionListItem,
} from '../shared/RegionList/RegionListItem';

import RegionListLegend from '../shared/RegionList/RegionListLegend';

function City({city}) {
  const [expanded, setExpanded] = useState(false);
  const toggle = useCallback(() => setExpanded((s) => !s), []);

  const active = city.total - city.recovered - city.deaths;

  return (
    <RegionListItem expanded={expanded}>
      <RegionListToggle
        name={city.name}
        total={city.total}
        expanded={expanded}
        onPress={toggle}
      />
      {expanded && (
        <RegionListLegend
          active={active}
          total={city.total}
          recovered={city.recovered}
          deaths={city.deaths}
        />
      )}
    </RegionListItem>
  );
}

export default memo(City);
