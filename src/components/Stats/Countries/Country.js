import React, {useState, useCallback, memo} from 'react';

import {
  RegionListToggle,
  RegionListItem,
} from '../../shared/RegionList/RegionListItem';
import RegionListLegend from '../../shared/RegionList/RegionListLegend';

import {countryName} from '../../../common/locale';

function Country({country, onDetails, index}) {
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
          onDetails={details}
        />
      )}
    </RegionListItem>
  );
}

export default memo(Country);
