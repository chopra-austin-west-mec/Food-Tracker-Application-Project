function isFirstTime() {
  var firstTime=getCookie("firstTime");
  if (firstTime == "NO") {
    console.log("this is not there there first time");
    var numberOfCookies = Number(getCookie("numberOfCookies"));
    if (numberOfCookies > 0) {
      console.log("there are cookies in the cookie jar");
      console.log(numberOfCookies);
      grabAllCookies();
    }
    else{
      console.log("there are no cookies in the cookie jar");
    }
  }
  else{
    console.log("this is there first time");
    document.cookie = "firstTime=NO";
    document.cookie = "numberOfCookies=0";
  }
}

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i=0; i<ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1);
    if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
  return "";
}

function grabAllCookies() {
  var numberOfCookies = Number(getCookie("numberOfCookies"));
  console.log("grabbing  all cookies")
  for (i = 1; i < numberOfCookies + 1; i++) {
    console.log(i);
    
    var productNameCookie = '"productName' + i + '"';
    console.log(productName);
    
    productName = getCookie(productNameCookie);
    description = getCookie('"' + description + i + '"');
    dateOfPurchase = getCookie('"' + dateOfPurchase + i + '"');
    expirationDate = getCookie('"' + expirationDate + i + '"');
    console.log("product name = " + productName);
    
    addProductCookies(productName ,description ,dateOfPurchase ,expirationDate );
  }
}

function addProductCookies(productName,description,dateOfPurchase,expirationDate) {
  
  var createTable = document.createElement("TR");
      
  var node = document.createElement("TD");
  var textnode = document.createTextNode(productName);
  node.appendChild(textnode);
  createTable.appendChild(node);
  document.getElementById("productListTable").appendChild(createTable);
  
  var node = document.createElement("TD");
  var textnode = document.createTextNode(description);
  node.appendChild(textnode);
  createTable.appendChild(node);
  document.getElementById("productListTable").appendChild(createTable);
  
  var node = document.createElement("TD");
  var textnode = document.createTextNode(dateOfPurchase);
  node.appendChild(textnode);
  createTable.appendChild(node);
  document.getElementById("productListTable").appendChild(createTable);
  
  var node = document.createElement("TD");
  var textnode = document.createTextNode(expirationDate);
  node.appendChild(textnode);
  createTable.appendChild(node);
  document.getElementById("productListTable").appendChild(createTable);
}

function addCookies(productName,description,dateOfPurchase,expirationDate,numberOfCookies) {
  document.cookie="productName" + numberOfCookies + "="+ productName;
  document.cookie="description" + numberOfCookies + "="+ description;
  document.cookie="dateOfPurchase" + numberOfCookies + "="+ dateOfPurchase;
  document.cookie="expirationDate" + numberOfCookies + "=" + expirationDate;
}