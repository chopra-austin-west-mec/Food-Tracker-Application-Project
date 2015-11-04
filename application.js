var dateOfPurchaseDay = null;
var dateOfPurchaseMonth = null;
var dateOfPurchaseYear = null;

var expirationDateDay = null;
var expirationDateMonth = null;
var expirationDateYear = null;

var productNameGo = false;
var descriptionGo = false;
var dateOfPurchaseGo = false;
var expirationDateGo = false;

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

function isFirstTime() {
    var firstTime=getCookie("firstTime");
    if (firstTime!="") {
        //run function to load all cookies
    }else{
        username = prompt("Please enter your name:", "");
        if (username != "" && username != null) {
            setCookie("username", username, 365);
        }
    }
}

function grabAllCookies() {
    //code
}


function addProduct(){

    var productName = document.getElementById("productName").value;
    var description = document.getElementById("description").value;
    var dateOfPurchase = document.getElementById("dateOfPurchase").value;
    var expirationDate = document.getElementById("expirationDate").value;
    
    if (productName == "") {
        alert("You need to put something in the product name field"); 
    }
    else{
        productNameGo = true;
    }
    
    if (description == "") {
        alert("You need to put something in the description field");
    }
    else{
        descriptionGo = true;
    }
    
    if (dateOfPurchase == "") {
        alert("You need to sellect a date in the date of purchase field");
    }
    else{
        dateOfPurchaseGo = true;
    }
    
    if (expirationDate == "") {
        alert("You need to sellect a date in the expitation date field");
    }
    else{
        expirationDateGo = true;        
    }
    
    var dateOfPurchaseDay = dateOfPurchase.substring(8,10);
    var dateOfPurchaseMonth = dateOfPurchase.substring(5,7);
    var dateOfPurchaseYear = dateOfPurchase.substring(0,4);
    
    var expirationDateDay = expirationDate.substring(8,10);
    var expirationDateMonth = expirationDate.substring(5,7);
    var expirationDateYear = expirationDate.substring(0,4);
    
    dateOfPurchase = dateOfPurchaseMonth + "/" + dateOfPurchaseDay + "/" + dateOfPurchaseYear;
    expirationDate = expirationDateMonth + "/" + expirationDateDay + "/" + expirationDateYear;
    
    
    if (productNameGo == true && descriptionGo == true && dateOfPurchaseGo == true && expirationDateGo == true) {
        
        addCookies(productName,description,dateOfPurchase,expirationDate);
        
        var createTable = document.createElement("TR");
        
        var node = document.createElement("TD");                        //First create an TD node
        var textnode = document.createTextNode(productName);            //then create a Text node
        node.appendChild(textnode);                                     //then append the Text node to the TD node
        createTable.appendChild(node)
        document.getElementById("productListTable").appendChild(createTable);  //Finally append the TD node to the table
        
        var node = document.createElement("TD");
        var textnode = document.createTextNode(description);
        node.appendChild(textnode);
        createTable.appendChild(node)
        document.getElementById("productListTable").appendChild(createTable);  //Finally append the TD node to the table
        
        var node = document.createElement("TD");
        var textnode = document.createTextNode(dateOfPurchase);
        node.appendChild(textnode);
        createTable.appendChild(node)
        document.getElementById("productListTable").appendChild(createTable);  //Finally append the TD node to the table
        
        var node = document.createElement("TD");
        var textnode = document.createTextNode(expirationDate);
        node.appendChild(textnode);
        createTable.appendChild(node)
        document.getElementById("productListTable").appendChild(createTable);  //Finally append the TD node to the table
        
        testDate(expirationDateYear,expirationDateMonth,expirationDateDay,productName)
        
        clearValues();
        
    }
}

function testDate(expirationDateYear,expirationDateMonth,expirationDateDay,productName) {
    var today = new Date();
    var day = today.getDate();
    var month = today.getMonth();
    month = month + 1;
    var year = today.getFullYear();
     
    console.log(year);
    console.log(expirationDateYear);
    
    console.log(month);
    console.log(expirationDateMonth);
    
    console.log(day);
    console.log(expirationDateDay);
    
    if (expirationDateYear < year) {                            //test to see if the expiration year is less than todays year
        console.log(productName + " food is expired");          //if exexpiration year is less than todays year it returns true
    }
    else if (expirationDateYear == year) {                      //test to see if the exporation year is the same year as todays year
        if (expirationDateMonth < month) {                      // if expiration year is less than todays year test to see if expiration month is less than todays month
            console.log(productName + " food is expired");
        }
        else if (expirationDateMonth == month) {
            if (expirationDateDay <= day) {
                console.log(productName + " food is expired");
            }
            else{
                console.log(productName + " is not expired")
            }
        }
        else{
            console.log(productName + " is not expired")
        }
    }
    else{
        console.log(productName + " is not expired")
    }
    
}

function clearValues() {
    
    productNameGo = false;
    descriptionGo = false;
    dateOfPurchaseGo = false;
    expirationDateGo = false;
    
    dateOfPurchaseReversed = null;
    expirationDateReversed = null;
    
    dateOfPurchaseDay = null;
    dateOfPurchaseMonth = null;
    dateOfPurchaseYear = null;
    
    expirationDateDay = null;
    expirationDateMonth = null;
    expirationDateYear = null;
}

function addCookies(productName,description,dateOfPurchase,expirationDate) {
    document.cookie="numberOfCookies=" + numberOfCookies;
    document.cookie="productName="+ productName;
    document.cookie="description=" + description;
    document.cookie="dateOfPurchase=" + dateOfPurchase;
    document.cookie="expirationDate=" + expirationDate;
}