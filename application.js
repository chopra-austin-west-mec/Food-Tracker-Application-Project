function addProduct(){
    var productName = document.getElementById("productName").value;
    var description = document.getElementById("description").value;
    var dateOfPurchase = document.getElementById("dateOfPurchase").value;
    var expirationDate = document.getElementById("expirationDate").value;
    
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
}
