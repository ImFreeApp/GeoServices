var assert = require("assert");
var chai = require('chai');
var sinon = require('sinon');
var request = require('request');
var assert = chai.assert;

var TEST_URL = process.env.TEST_URL || 'http://localhost:3001';
var CHECK_IN_URI = TEST_URL+'/api/checkin/';


describe('Checkin Controller', function() {
  describe('#createCheckIns', function (done) {
    it('should return status 201 (Created) if succesfully posted a new Check-In', function (done) {
      assert.doesNotThrow(function() {
        request.post({
              url: CHECK_IN_URI,
              body: {
                latitude: 37,
                longitude: -122,
                activity: "testing",
                userId: 123
              },
              json: true
            },(req, res) => {
              assert(res.statusCode === 201, 'Return status should be 201');
              done();
        }); 
      });

    });
    it('should return status 400 (Bad Request) if latitude is invalid', function (done) {
      assert.doesNotThrow(function() {
        request.post({
              url: CHECK_IN_URI,
              body: {
                longitude: -122,
                activity: "testing",
                userId: 123
              },
              json: true
            },(req, res) => {
              assert(res.statusCode === 400, 'Return status should be 400');
              done();
        }); 
      });
    });
    it('should return status 400 (Bad Request) if longitude is invalid', function (done) {
      assert.doesNotThrow(function() {
        request.post({
              url: CHECK_IN_URI,
              body: {
                latitude: 37,
                activity: "testing",
                userId: 123
              },
              json: true
            },(req, res) => {
              assert(res.statusCode === 400, 'Return status should be 400');
              done();
        }); 
      });
    });
    it('should return status 400 (Bad Request) if activity is invalid', function (done) {
      assert.doesNotThrow(function() {
        request.post({
              url: CHECK_IN_URI,
              body: {
                latitude: 37,
                longitude: -122,
                userId: 123
              },
              json: true
            },(req, res) => {
              assert(res.statusCode === 400, 'Return status should be 400');
              done();
        }); 
      });
    });
    it('should return status 400 (Bad Request) if userId is invalid', function (done) {
      assert.doesNotThrow(function() {
        request.post({
              url: CHECK_IN_URI,
              body: {
                latitude: 37,
                longitude: -122,
                activity: "testing"
              },
              json: true
            },(req, res) => {
              assert(res.statusCode === 400, 'Return status should be 400');
              done();
        }); 
      });
    });
  });
  describe('#getCheckIns', function () {
    it('should return status 200 (OK) if latitude and longitude are correct', function () {
      

    });
    it('should return status 500 (Internal Server Error) if error occurs', function () {

    });
    it('should return status 400 (Bad Request) if latitude is invalid', function () {
      
    });
    it('should return status 400 (Bad Request) if longitude is invalid', function () {

    });
    it('should return status 400 (Bad Request if distance is negative', function(){

    });
  });
});