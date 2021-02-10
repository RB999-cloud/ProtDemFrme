describe('Demo1', function(){

it ('Purchasing shirts', function(){

 browser .waitForAngularEnabled(false);

 browser. manage().window().maximize();

 browser .get('http://automationpractice.com/index.php');

 element (by.css('input[class="search_query form-control ac_input"]')).click();

 element (by.css('input[class="search_query form-control ac_input"]')).sendKeys('Shirts');

 element (by.css('button[type="Submit"]')).click();

 var b = 'document.getElementsByClassName("product-name")[2].scrollIntoView()';

 browser .driver.executeScript(b).then(function()
 
 {

    browser.sleep(4000);
 }
 );

 element (by.xpath('//ul[@class="block_content products-block"]//a[contains(.,"Faded Short Sleeve T-shirts")]')).click();

 browser.sleep(4000);
 
 var c = 'document.getElementsByClassName("product-heading-h5")[0].scrollIntoView()';

 browser .driver.executeScript(c).then(function()
 
 {

    browser.sleep(5000);
 }
 );

 element (by.css('i[class="icon-plus"]')).click();

 element (by.xpath('//span[.="Add to cart"]')).click();

 browser.sleep(3000);


element (by.xpath('//span[contains(.,"Proceed to checkout")]')).click();

element (by.xpath('//span[.="Proceed to checkout"]')).click();

browser.sleep(4000);

});


});