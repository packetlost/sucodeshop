// ---------------------------
// SUCODE SHOP CONFIGURATION
// ---------------------------

// shopCurrency defines the currency used for e-shopping. See http://simplecartjs.org/documentation/currency  
var shopCurrency = "EUR";
// shopLanguage defines the language used in the shop.  
var shopLanguage = "english-us";
// Checkout options 
var checkoutType = "SendForm"; 
var checkoutUrl = "http://yourserver/your/custom/checkout/url";
var checkoutMethod = "POST";

//Define the services for retrieving the categories and products lists. 
var categoriesService = '/shop/json/categories.json';
// If the products service depends on the category id, use {id}. For example:'/shop/json/products/{id}.json','/shop/json/products/getProducts?categoryId={id}',...
var productsService = '/shop/json/products/{id}.json';
// image logo
var shopLogo = 'img/logo.png';
// Products images format
var imgFormat = 'png';
// Tax to apply to cart total (VAT)   
taxValue = 0.21;

// Set paginateProducts to true if there are many products for each category (for example, more than 10 products/category).
var paginateProducts = true;
// If pagination is enabled, determine the number of products per page. 
var productsPerPage = 3;

// vars used to store categories and products (referenced from the shop page). Not initialized by default. 
var categories;
var products;

