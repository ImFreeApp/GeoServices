var assert = require("assert");
var rewire = require("rewire");
var chai = require('chai');
var sinon = require('sinon');
var sinonBluebird = require('sinon-bluebird');
var Promise = require('bluebird');
var assert = chai.assert;

var MockPromise = {then: function()}



describe('Checkin Controller', function() {
  var implementation, CheckInMock;
  before(function(){
    implementation = rewire('../../src/controllers/checkin/implementation');
    CheckInMock = function(){};
    implementation.__set__({'CheckIn': CheckInMock});
  });
  
  describe('#getCheckIns', function () {
    var req, res;
    beforeEach(function() {
      CheckInMock.findNearby = function(){};
      req = {};
      res = {json: function(){}, status: function(){}};
    });

    it('should return status 200 (OK) if latitude and longitude are correct', function () {
      var result = {};
      req.query = {latitude: 30, longitude: 30};
      sinon.stub(res, 'json').withArgs(result);
      sinon.stub(res, 'status').withArgs(200).returns(res);
      sinon.stub(CheckInMock, 'findNearby').withArgs(30, 30, 5/3959).returns();
      implementation.getCheckIns(req,res);
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
  describe('#createCheckIns', function () {
    it('should return status 201 (Created) if succesfully posted a new Check-In', function () {

    });
    it('should return status 500 (Internal Server Error) if error occurs', function () {

    });
    it('should return status 400 (Bad Request) if latitude is invalid', function () {
      
    });
    it('should return status 400 (Bad Request) if longitude is invalid', function () {

    });
    it('should return status 400 (Bad Request) if activity is invalid', function () {
      
    });
    it('should return status 400 (Bad Request) if userId is invalid', function () {

    });
  });
});