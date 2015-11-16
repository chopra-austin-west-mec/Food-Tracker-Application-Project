function isFirstTime() {
  var firstTime = getCookie("firstTime");
  if (firstTime == "NO") {
    console.log("this is not their first time");
    var numberOfCookies = Number(getCookie("numberOfCookies"));
    console.log(numberOfCookies);
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
    console.log("this is their first time");
    document.cookie = "firstTime=NO";
    document.cookie = "numberOfCookies=0";
  }
}

function getCookie(cname) {
  var cookies = document.cookie;
  cookies = cookies.split("; ");
  
  for (var i=0; i < cookies.length; i++) {
    cookies2 = cookies[i].split('=');
    if (cookies2[0] == cname) {
      console.log(cookies2[1]);
      i = cookies.lenght + 1;
      result = cookies2[1];
      console.log(result)
      return cookies2[1];
    }
  }
}

function grabAllCookies() {
  var numberOfCookies = getCookie("numberOfCookies");
  console.log("number of cookies = " + numberOfCookies);
  console.log("grabbing  all cookies")
  
  for (i = 0; i < numberOfCookies; i++) {
    console.log(i);
    
    var productNameCookie = '"productName' + (i +1) + '"';
    var descriptionCookie = '"description' + (i +1) + '"';
    var dateOfPurchaseCookie = '"dateOfPurchase' + (i +1) + '"';
    var expirationDateCookie = '"expirationDate' + (i +1) + '"';
    
    console.log(productNameCookie);
    console.log(descriptionCookie);
    console.log(dateOfPurchaseCookie);
    console.log(expirationDateCookie);
    
    productName = getCookie(productNameCookie);
    description = getCookie(descriptionCookie);
    dateOfPurchase = getCookie(dateOfPurchaseCookie);
    expirationDate = getCookie(expirationDateCookie);
    
    console.log(productName);
    console.log(description);
    console.log(dateOfPurchase);
    console.log(expirationDate);
    
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

function addCookies(productName,description,dateOfPurchase,expirationDate,numberOfCookies){
  document.cookie="productName" + numberOfCookies + "="+ productName;
  document.cookie="description" + numberOfCookies + "="+ description;
  document.cookie="dateOfPurchase" + numberOfCookies + "="+ dateOfPurchase;
  document.cookie="expirationDate" + numberOfCookies + "=" + expirationDate;
}