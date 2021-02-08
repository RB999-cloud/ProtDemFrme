const { iteratee } = require("lodash");
const { hasUncaughtExceptionCaptureCallback } = require("process");

describe('Super', function(){
 

 it ('Calculatorn', function(){

    browser.manage().window().maximize();

    browser.get('https://juliemr.github.io/protractor-demo/');

    element(by.model('first')).sendKeys(4);

    element(by.model('second')).sendKeys(8);

    element(by.id('gobutton')).click();

  //let a =  element (by.cssContainingText('.ng-binding','12'));

  let b =  element (by.css('h2[class="ng-binding"]'));

    expect(b.getText()).toEqual('12');

  //  browser.sleep(4000);

 });



});