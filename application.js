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
        console.log("productNameGo is set to true");
    }
    
    if (description == "") {
        alert("You need to put something in the description field");
    }
    else{
        descriptionGo = true;
        console.log("descriptionGo is set to true");
    }
    
    if (dateOfPurchase == "") {
        alert("You need to sellect a date in the date of purchase field");
    }
    else{
        dateOfPurchaseGo = true;
        console.log("dateOfPurchaseGo is set to true");
    }
    
    if (expirationDate == "") {
        alert("You need to sellect a date in the expitation date field");
    }
    else{
        expirationDateGo = true;
        console.log("expirationDateGo is set to true");
        
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
        console.log("it is running")
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
        
        clearValues()
    }
}

function testDate(expirationDateYear,expirationDateMonth,expirationDateDay,productName) {
    var today = new Date();
    var day = today.getDate();
    var month = today.getMonth();
    var year = today.getFullYear();
    
    console.log(day);
    console.log(month);
    console.log(year);
    console.log(expirationDateYear);
    
    if (expirationDateYear <= year) {
        console.log("food may be expired");
        if (expirationDateMonth <= month ) {
            console.log("food is most likely to be expiered");
            if (expirationDateDay <= day) {
                console.log("food is expired");
                alert(productName + " is expired")
            }
            else{
                console.log("food is not expired");
            }
        }
        else{
            console.log("food is not expired");
        }
    }
    else{
        console.log("it is not expired");
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