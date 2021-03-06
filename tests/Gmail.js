var fs = require('fs');

var path = require('path');

var remote = require('selenium-webdriver/remote');

describe('Gmail', function () {

   it('Automating compose mail functionality', function () {

      browser.waitForAngularEnabled(false);

      browser.manage().window().maximize();

      browser.get('https://www.gmail.com');

      var EC = protractor.ExpectedConditions;

      browser.wait(EC.visibilityOf(element(by.css('input[type="email"]'))),20000);

      element(by.css('input[type="email"]')).sendKeys('mrrcding1@gmail.com');

      element(by.xpath('//*[@id="identifierNext"]/div/button/div[2]')).click();

      var EC = protractor.ExpectedConditions;

      browser.wait(EC.visibilityOf(element(by.css('input[type="password"]'))),20000);

      element(by.css('input[type="password"]')).sendKeys('Ritesh@1234');

      element(by.xpath('//*[@id="passwordNext"]/div/button/div[2]')).click();

      var EC = protractor.ExpectedConditions;

      browser.wait(EC.visibilityOf(element(by.xpath('//div[@class="T-I T-I-KE L3"]'))),20000);

      element(by.xpath('//div[@class="T-I T-I-KE L3"]')).click();

      var EC = protractor.ExpectedConditions;

      browser.wait(EC.visibilityOf(element(by.css('.wA~.vO[role="combobox"]'))),20000);

      element(by.css('.wA~.vO[role="combobox"]')).sendKeys('ritesh89bhandari@gmail.com');

      var EC = protractor.ExpectedConditions;

      browser.wait(EC.visibilityOf(element(by.css('input[name="subjectbox"].aoT'))),20000);

      element(by.css('input[name="subjectbox"].aoT')).sendKeys('Testing Automation');

      var EC = protractor.ExpectedConditions;

      browser.wait(EC.visibilityOf(element(by.css('div.editable'))),20000);

      element(by.css('div.editable')).sendKeys('This is test automation');


      browser.setFileDetector(new remote.FileDetector());
      var fileToUpload = './sample.txt';
      var absolutePath = path.resolve(__dirname, fileToUpload);
      var fileElem = element(by.css('input[type="file"]'));

      // Unhide file input
      browser.executeScript("arguments[0].style.visibility = 'visible'; arguments[0].style.height = '1px'; arguments[0].style.width = '1px';  arguments[0].style.opacity = 1", fileElem.getWebElement());

      fileElem.sendKeys(absolutePath);

      browser.sleep(5000);

      element(by.css('div[data-tooltip*="Send"]')).click();

      browser.sleep(5000);

   });

});