function isFirstTime() {
    var firstTime=getCookie("firstTime");
    if (firstTime == "NO") {
      var numberOfCookies = getCookie(numberOfCookies);
      console.log("there is cookies");
      console.log(numberOfCookies)     
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
    var numberOfCookies = getCookie(numberOfCookies);
    console.log(numberOfCookies);
    
    for (i = 0; i < numberOfCookies; i++) {
      
    }
}

function addCookies(productName,description,dateOfPurchase,expirationDate) {
    document.cookie="numberOfCookies=" + numberOfCookies;
    document.cookie="productName" + numberOfCookies + "="+ productName;
    document.cookie="description" + numberOfCookies + "="+ description;
    document.cookie="dateOfPurchase" + numberOfCookies + "="+ dateOfPurchase;
    document.cookie="expirationDate" + numberOfCookies + "="+ expirationDate;
}