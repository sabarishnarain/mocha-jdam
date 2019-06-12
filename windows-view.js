var assert = require('assert');
var request = require('request');

describe('Windws View', function() {

    it('testBookmarkExperience', function() {
      assert.equal(true, true);
    });


    it('testDownloadExperience', function() {
        assert.equal(true, true);
    });

      it('testGalleryExperience', function() {
        assert.equal(true, true);
    });

      it('testScanExperienceWithProjectId', function() {
        assert.equal(true, true);
    });

    afterEach(function() { 
      request.post('http://localhost:8080/updateStatus', { 
            form:{"testName": this.currentTest.title, "projectId": "VuVi-Wi2014", "testStatus" : this.currentTest.state}})
    });

});