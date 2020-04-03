import React, {useState, useCallback, memo} from 'react';

import {
  RegionListToggle,
  RegionListItem,
} from '../../shared/RegionList/RegionListItem';
import RegionListLegend from '../../shared/RegionList/RegionListLegend';

function Country({country}) {
  const [expanded, setExpanded] = useState(false);
  const toggle = useCallback(() => setExpanded((s) => !s), []);

  return (
    <RegionListItem expanded={expanded}>
      <RegionListToggle
        name={country.country_name || country.country_name_en}
        total={country.total}
        today={country.total_new}
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
