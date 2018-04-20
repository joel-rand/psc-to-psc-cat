# psc-to-psc-cat

This package provides lookup tables for several coded data items.

## coi-mapping.json

Maps a `Community Of Interest (COI)` code to its title. Also maps the COI code to a Budget Activity code/title.

Usage:

```
  var coi_mapping = require('coi-mapping.json');
  var _ = require('lodash');

  var coi = _.find(coi_mapping,{coiCode:'1234'});
  console.log(coiCode + ': ' + coi.coiTitle);
  console.log(coi.budgetActivityCode + ': ' + coi.budgetActivityTitle);

```

## psc-mapping.json

Maps a `Product or Service Code (PSC)` to its title. Additionally, maps the PSC code to a PSC Category code/title and COI code (optional).

Usage:

```
  var psc_mapping = require('psc-mapping.json');
  var coi_mapping = require('coi-mapping.json');

  var _ = require('lodash');

  var psc = _.find(psc_mapping,{pscCode:'1234'});
  console.log(psc.pscTitle);

  var coi = _.find(coi_mapping,{coiCode:psc.coiCode});
  console.log(coi.coiTitle);

```

## naics-mapping.json

Maps an `North American Industry Classification System (NAICS)` code to its title. Also maps the NAICS code to a COI code (optional).

## acquistion-code-mapping.json

Maps a DoD `Program Acquisition` code to its title. Also maps the Acquisition code to a COI code (optional).

## agency-mapping.json

Maps an `Agency` code to its title.
