var assert = require("assert");
var chai = require('chai');
var sinon = require('sinon');
var assert = chai.assert;

var CheckInController = require('../../src/controllers/check-in-controller');

describe('Checkin Controller', function() {
  var checkInController, checkInManagerMock;
  before(function(){
    checkInManagerMock = {findCheckInsByLatLong: function(){}, createCheckIn: function(){}};
    checkInController = new CheckInController(checkInManagerMock);
  });
  
  describe('#getCheckIns', function () {
    var req, res, validateStatus;
    beforeEach(function() {
      checkInManagerMock.findCheckInsByLatLong = function(){};
      req = {};
      res = {
        json: function(){

        }, 
        status: function(status){ 
          validateStatus = status;
          return res;
        }
      };
    });

    it('should return status 200 (OK) if latitude and longitude are correct', function () {
      var result = {};
      req.query = {latitude: 30, longitude: 30};
      sinon.stub(checkInManagerMock, 'findCheckInsByLatLong').withArgs(30, 30, 5/3959).returns(new Promise(function(resolve){
        resolve(result);
      }));
      checkInController.findCheckInsByLatLong(req,res);

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