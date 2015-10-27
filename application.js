function addProduct(){
    var productName = document.getElementById("productName").value;
    var description = document.getElementById("description").value;
    var dateOfPurchase = document.getElementById("dateOfPurchase").value;
    var expirationDate = document.getElementById("expirationDate").value;
    
    document.getElementById("productListTable").innerHTML = '<tr><td>' + productName + '</td><td>' + description + '</td><td>' + dateOfPurchase + '</td><td>' + expirationDate + '</td></tr>'
}