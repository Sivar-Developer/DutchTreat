var StoreCustomer = /** @class */ (function () {
    function StoreCustomer() {
        this.visits = 0;
    }
    StoreCustomer.prototype.showName = function () {
        alert(this.name);
    };
    Object.defineProperty(StoreCustomer.prototype, "name", {
        get: function () {
            return this.ourName;
        },
        set: function (val) {
            this.ourName;
        },
        enumerable: true,
        configurable: true
    });
    return StoreCustomer;
}());
var cust = new StoreCustomer();
cust.visits = 23;
//# sourceMappingURL=storecustomer.js.map