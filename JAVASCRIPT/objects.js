let orders = [
    {
        "order_id": 101,
        "order_date": "31.12.2022",
        "payment_method": "credit card",
        "cargo_address": "1056 Pretty View Lane, Sonoma, CA",
        "purchased_products": [
            {
                "product_id": 5,
                "product_name": "Iphone 13 Pro",
                "product_url": "http://abc.com/iphone-13-pro",
                "product_price": 22000
            },
            {
                "product_id": 6,
                "product_name": "Iphone 13 Pro Max",
                "product_url": "http://abc.com/iphone-13-pro-max",
                "product_price": 25000
            }   
        ],
        "customer_id": 12,
        "dealer": {
            "brand_id": 34,
            "brand_name": "Apple"
        }
    },
    {
        "order_id": 102,
        "order_date": "30.12.2022",
        "payment_method": "credit card",
        "cargo_address": "2270 Coal Street, Bedford, PA",
        "purchased_products": [
            {
                "product_id": 6,
                "product_name": "Iphone 13 Pro Max",
                "product_url": "http://abc.com/iphone-13-pro-max",
                "product_price": 25000
            }   
        ],
        "customer_id": 12,
        "dealer": {
            "brand_id": 34,
            "brand_name": "Apple"
        }
    }
]

let order_1_price = orders[0].purchased_products[0].product_price + orders[0].purchased_products[1].product_price;

let order_2_price = orders[1].purchased_products[0].product_price;

console.log("order 1: " + order_1_price);
console.log("order 2: " + order_2_price);

console.log("total: " + (order_2_price + order_1_price));