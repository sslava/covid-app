import React, {useState, useCallback, memo} from 'react';

import {
  RegionListToggle,
  RegionListItem,
} from '../shared/RegionList/RegionListItem';

import RegionListLegend from '../shared/RegionList/RegionListLegend';

function Region({region}) {
  const [expanded, setExpanded] = useState(false);
  const toggle = useCallback(() => setExpanded((s) => !s), []);

  const active = region.total - region.recovered - region.deaths;

  return (
    <RegionListItem expanded={expanded}>
      <RegionListToggle
        name={region.name}
        total={region.total}
        expanded={expanded}
        onPress={toggle}
        skipToday
      />
      {expanded && (
        <RegionListLegend
          active={active}
          total={region.total}
          recovered={region.recovered}
          deaths={region.deaths}
          skipToday
        />
      )}
    </RegionListItem>
  );
}

export default memo(Region);
