describe('Gmail', function () {

   it('Automating compose mail functionality', function () {

      browser.waitForAngularEnabled(false);

      browser.manage().window().maximize();

      browser.get('https://www.gmail.com');

      browser.sleep(3000);

      element(by.css('input[type="email"]')).sendKeys('mrrcding1@gmail.com');

      element(by.xpath('//*[@id="identifierNext"]/div/button/div[2]')).click();

      browser.sleep(3000);

      element(by.css('input[type="password"]')).sendKeys('Ritesh@1234');

      element(by.xpath('//*[@id="passwordNext"]/div/button/div[2]')).click();

      browser.sleep(5000);

      element(by.xpath('//div[@class="T-I T-I-KE L3"]')).click();

      browser.sleep(5000);

     element(by.css('.wA~.vO[role="combobox"]')).sendKeys('ritesh89bhandari@gmail.com');

     browser.sleep(3000);

      element(by.css('input[name="subjectbox"].aoT')).sendKeys('Testing Automation');

      browser.sleep(3000);

      element(by.css('div.editable')).sendKeys('This is test automation');

      browser.sleep(3000);

      element(by.css('div[data-tooltip="Attach files"]')).click();

      browser.sleep(3000);

      element(by.css('div[data-tooltip*="Send"]')).click();

      browser.sleep(5000);

});

});