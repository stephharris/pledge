'use strict';
/*----------------------------------------------------------------
Promises Workshop: build the pledge.js deferral-style promise library
----------------------------------------------------------------*/
// YOUR CODE HERE:

var $Promise = function(){
  this._state = 'pending';
  this._value = '';
  this._handlerGroups = [];
}

$Promise.prototype.then = function(suc, err){
  var obj = {};
  if(typeof suc === 'function'){
    obj.successCb = suc;
  }else{
    obj.successCb = null;
  }
  if(typeof err === 'function'){
    obj.errorCb = err;
  }else{
    obj.errorCb = null;
  }
  this._handlerGroups.push(obj);
}

var Deferral = function(){
  this.$promise = new $Promise();
}

Deferral.prototype.resolve = function(data){
  if(this.$promise._state  === 'pending'){
    this.$promise._value = data;
    this.$promise._state = 'resolved';
  }
}

Deferral.prototype.reject = function(err){
  if(this.$promise._state  === 'pending'){
    this.$promise._value = err;
    this.$promise._state = 'rejected';
  }
}





var defer = function(){
 return new Deferral()
}

//Deferral.prototype.$promise =

console.log('#############', defer());




/*-------------------------------------------------------
The spec was designed to work with Test'Em, so we don't
actually use module.exports. But here it is for reference:

module.exports = {
  defer: defer,
};

So in a Node-based project we could write things like this:

var pledge = require('pledge');
…
var myDeferral = pledge.defer();
var myPromise1 = myDeferral.$promise;
--------------------------------------------------------*/
