// Problem statement: Implement a program to parse and process a CSV file containing data on customer transactions for an e-commerce website. The file contains columns for customer ID, date of purchase, product ID, product name, quantity purchased, and price. The program should read in the file, process the data, and output the following:
// 1. Total revenue for the website for the given time period
// 2. A list of the top 5 customers by total amount spent
// 3. A list of the top 5 products by total revenue generate

var data=[
    {
        "customerId": "1",
        "dateOfPurchase": "2022-01-01",
        "productId": "101",
        "productName": "Product A",
        "quantityPurchased": 2,
        "price": 10.0
    },
    {
        "customerId": "1",
        "dateOfPurchase": "2022-01-02",
        "productId": "102",
        "productName": "Product B",
        "quantityPurchased": 1,
        "price": 20.0
    },
    {
        "customerId": "2",
        "dateOfPurchase": "2022-01-03",
        "productId": "103",
        "productName": "Product C",
        "quantityPurchased": 3,
        "price": 15.0
    },
    {
        "customerId": "2",
        "dateOfPurchase": "2022-01-04",
        "productId": "101",
        "productName": "Product A",
        "quantityPurchased": 1,
        "price": 10.0
    },
    {
        "customerId": "3",
        "dateOfPurchase": "2022-01-05",
        "productId": "104",
        "productName": "Product D",
        "quantityPurchased": 2,
        "price": 25.0
    },
    {
        "customerId": "3",
        "dateOfPurchase": "2022-01-06",
        "productId": "105",
        "productName": "Product E",
        "quantityPurchased": 1,
        "price": 30.0
    }
]
// data.split("\n");
// var dataJson= JSON.parse(data);


var userAmountSpent=new Map();

for (i of data){
    if(!userAmountSpent.has(i["customerId"])) userAmountSpent.set(i["customerId"],0)
    var currentUserAmount=userAmountSpent.get(i["customerId"])
    currentUserAmount+=Number(i["quantityPurchased"]) * Number(i["price"]);
    userAmountSpent.set(i["customerId"],currentUserAmount)
}












