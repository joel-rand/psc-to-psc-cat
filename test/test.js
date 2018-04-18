'user strict';

var xs = require('..');
var _ = require('lodash');
var expect = require('chai').expect;

describe('#xs',function() {

    it ('PSC title should be GUNS, THROUGH 30MM',function() {
      var title = _.find(xs,{pscCode:'1005'}).pscTitle;
      expect(title).to.equal('GUNS, THROUGH 30MM');
    });

    it ('Check record values',function() {
      var record = _.find(xs,{pscCode:'AS46'});
      expect(record.pscTitle).to.equal('R&D- MODAL TRANSPORTATION: MARINE (MANAGEMENT/SUPPORT)');
      expect(record.pscCategoryCode).to.equal('A');
      expect(record.pscCategoryTitle).to.equal('RESEARCH AND DEVELOPMENT');
      expect(record.coiCode).to.equal('12');
      expect(record.coiTitle).to.equal('GROUND AND SEA PLATFORMS (G&SP)');
      expect(record.budgetActivityCode).to.equal('06');
      expect(record.budgetActivityTitle).to.equal('RDT&E MANAGEMENT SUPPORT');
    });

});
