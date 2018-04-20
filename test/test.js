'user strict';

var psc_mapping = require('../psc-mapping.json');
var naics_mapping = require('../naics-mapping.json');
var equipment_mapping = require('../equipment-mapping.json');

var _ = require('lodash');
var expect = require('chai').expect;

describe('Mapping Tests', function() {

  it('PSC title should be GUNS, THROUGH 30MM', function() {
    var title = _.find(psc_mapping, {
      pscCode: '1005'
    }).pscTitle;
    expect(title).to.equal('GUNS, THROUGH 30MM');
  });

  it('Checking PSC record AS46', function() {
    var record = _.find(psc_mapping, {
      pscCode: 'AS46'
    });
    expect(record.pscTitle).to.equal('R&D- MODAL TRANSPORTATION: MARINE (MANAGEMENT/SUPPORT)');
    expect(record.pscCategoryCode).to.equal('A');
    expect(record.pscCategoryTitle).to.equal('RESEARCH AND DEVELOPMENT');
    expect(record.coiCode).to.equal('12');
  });

  it('Checking PSC record not found', function() {
    var record = _.find(psc_mapping, {
      pscCode: 'XXAAYY'
    });
    expect(record === undefined);
  });

  it('Checking NAICS record', function() {
    var record = _.find(naics_mapping, {
      naicsCode: '111140'
    });
    expect(record.naicsTitle).to.equal('WHEAT FARMING');
    expect(record.pscCode).to.equal('8920');
  });

  it('Checking NAICS record not found', function() {
    var record = _.find(naics_mapping, {
      naicsCode: 'XXAAYY'
    });
    expect(record === undefined);
  });

  it('Checking NAICS search by PSC 8920, should be 17 records', function() {
    var records = _.filter(naics_mapping, {
      pscCode: '8920'
    });
    expect(records.length).to.equal(17);
  });

  it('Checking equipment code mapping', function() {
    var record = _.find(equipment_mapping, {
      equipmentCode: '330'
    });
    expect(record.equipmentTitle).to.equal('AESA');
    expect(record.coiCode).to.equal('15A');
    record = _.find(equipment_mapping, {
      equipmentCode: 'XXAAA'
    });
    expect(record === undefined);
  });

});