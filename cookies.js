function isFirstTime() {
  var firstTime=getCookie("firstTime");
  if (firstTime == "NO") {
    var numberOfCookies = getCookie("numberOfCookies");
    console.log("there is cookies");
    console.log(Number(numberOfCookies));
    grabAllCookies();
  }
  else{
    console.log("there is no cookies");
    document.cookie = "firstTime=NO";
    var numberOfCookies = 0;
    document.cookie = "numberOfCookies=" + 0;
  }
}

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i=0; i<ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1);
    if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
  }
  return "";
}

function grabAllCookies() {
  var numberOfCookies = getCookie("numberOfCookies");
  numberOfCookies = Number(numberOfCookies);
  console.log(numberOfCookies);
  console.log("grabing all cookies")
  for (i = 1; i < numberOfCookies + 1; i++) {
    console.log(i);
    var productName = getCookie('"' + productName + i + '"');
    var description = getCookie('"' + description + i + '"');
    var dateOfPurchase = getCookie('"' + dateOfPurchase + i + '"');
    var expirationDate = getCookie('"' + expirationDate + i + '"');
    console.log("expiration Date = " + expirationDate);
    
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