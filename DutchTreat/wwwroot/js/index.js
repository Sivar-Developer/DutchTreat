$(document).ready(function () {
    var x = 0;
    var s = "";

    console.log("Hello Sivar");

    var theForm = $("#theForm");
    theForm.hide();
    //theForm.hidden = true;

    var button = $("#buyButton");
    button.on("click", function () {
        console.log("Buying Item");
    });

    var productInfo = $(".product-props li");
    productInfo.on("click", function () {
        console.log("You clicked on " + $(this).text());
    });
    //var listItems = productInfo.item[0].children;

    var $loginToggle = $("#loginToggle");
    var $popupForm = $(".popup-form");

    $loginToggle.on("click", function () {
        $popupForm.fadeToggle(1000);
    });
});
