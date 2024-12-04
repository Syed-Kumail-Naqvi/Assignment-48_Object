var onlineStore = {

    storeName : "TechWorld Online Store",
    storeLocation : "New-York",

    categories : ['Laptops', 'Smart-Phones', 'Accessories'],

    products : [

        {
            id : 1,
            productName : 'MacBook Pro',
            productCategory : 'Laptops',
            productPrice : '3K',
            productStock : 45,

            productDetails : {
                produtBrand : "HP",
                productModel : "2024",
                productColor : "Grey",
                productScreenSize : '32 Inches',
                
            }
        },
    ],

    customerInformation : [
        {
            customerId : 1,
            customerName : 'Syed Kumail Naqvi',
            customerEmail : 'syedkumailnaqvi82@gmail.com',
            customerPhone : '03345425439',
            customerAddress : {

                customerCity : 'Karachi',
                customerTown : 'K.A.E.C.H.S',
                customerZIP : 3920,
                customerStreet : 10
            }
        }
    ],

    orders : [

        {
            orderId : 1,
            data : 'Nov 17. 2024',
            status : 'Processing',
            totalAmount : 90000,

            productsPurchase : [

                {
                    productPurchaseId : 1,
                    productPurchaseName : 'MacBook Pro',
                    productPurchasePrice : 30000,
                    productPurchaseQuantity : 3
                }
            ]
        }
    ]
}