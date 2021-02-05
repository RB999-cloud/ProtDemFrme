
describe('Shopping', function(){

it ('clothes', function(){

browser.waitForAngularEnabled(false);

browser.get('http://automationpractice.com/index.php');

browser.manage().window().maximize();

element(by.css("input[class='search_query form-control ac_input']")).click();

element(by.css("input[class='search_query form-control ac_input']")).sendKeys("Shirts");

//browser.sleep(2000);

//element(by.xpath("//*[@id='index']/div[2]/ul/li")).click();

element(by.css("button[name='submit_search']")).click();

browser.sleep(4000);

element(by.xpath("//*[@id='center_column']/ul/li/div/div[1]/div/a[1]/img")).click();

browser.sleep(4000);

element(by.css("i[class='icon-plus']")).click();

element(by.xpath("//*[@id='add_to_cart']/button/span")).click();

browser.sleep(4000);

element(by.xpath("//*[@id='layer_cart']/div[1]/div[2]/div[4]/a/span")).click();

browser.sleep(4000);

// var elm = element.all(by.css('.cart_total_price')).get(0);
// browser.executeScript("arguments[0].scrollIntoView();", elm.getWebElement());

// browser.sleep(6000);

// elm.click();


var elmnt = 'document.getElementsByClassName("cart_total_price")[0].scrollIntoView()';


browser.driver.executeScript(elmnt).then(function() {
    
    browser.sleep(8000);

  });

});

it ('jeans', function(){

  browser.waitForAngularEnabled(false);
  
  browser.get('http://automationpractice.com/index.php');
  
  browser.manage().window().maximize();
  
  element(by.css("input[class='search_query form-control ac_input']")).click();
  
  element(by.css("input[class='search_query form-control ac_input']")).sendKeys("Shirts");
  
  //browser.sleep(2000);
  
  //element(by.xpath("//*[@id='index']/div[2]/ul/li")).click();
  
  element(by.css("button[name='submit_search']")).click();
  
  browser.sleep(4000);
  
  element(by.xpath("//*[@id='center_column']/ul/li/div/div[1]/div/a[1]/img")).click();
  
  browser.sleep(4000);
  
  element(by.css("i[class='icon-plus']")).click();
  
  element(by.xpath("//*[@id='add_to_cart']/button/span")).click();
  
  browser.sleep(4000);
  
  element(by.xpath("//*[@id='layer_cart']/div[1]/div[2]/div[4]/a/span")).sendKeys('1234');
  
  browser.sleep(4000);
  
  // var elm = element.all(by.css('.cart_total_price')).get(0);
  // browser.executeScript("arguments[0].scrollIntoView();", elm.getWebElement());
  
  // browser.sleep(6000);
  
  // elm.click();
  
  
  var elmnt = 'document.getElementsByClassName("cart_total_price")[0].scrollIntoView()';
  
  
  browser.driver.executeScript(elmnt).then(function() {
      
      browser.sleep(2000);
  
    });
  
  });

});