//const { iteratee } = require("lodash");

describe('casual purchasing',function(){

 it('jeans and tshirts', function(){

   browser.waitForAngularEnabled(false);

   browser.manage().window().maximize();

   browser.get('http://automationpractice.com/index.php');

   element(by.css("input[class='search_query form-control ac_input']")).click();

   element(by.css("input[class='search_query form-control ac_input']")).sendKeys('Shirts');

   element(by.css("button[type='submit']")).click();

   //var a = element.all(by.css("p[class='title_block']")).get(1);

   var b = 'document.getElementsByClassName("product-name")[2].scrollIntoView()';

   browser.driver.executeScript(b).then(function()

   {
       browser.sleep(3000);
   }

   );

   element(by.xpath("//ul[@class='block_content products-block']//a[contains(.,'Faded Short Sleeve T-shirts')]")).click();

   browser.sleep(8000);
    
   var c = 'document.getElementsByClassName("product-heading-h5")[0].scrollIntoView()';

   browser.driver.executeScript(c).then(function()

   {
       browser.sleep(2000);
   } );
   
   element(by.css('i[class="icon-plus"]')).click(); 

   element(by.xpath('//span[.="Add to cart"]')).click(); 

   browser.sleep(4000);

   element(by.xpath('//span[contains(.,"Proceed to checkout")]')).click(); 

   element(by.xpath('//span[.="Proceed to checkout"]')).click(); 

   browser.sleep(4000);


 });


});