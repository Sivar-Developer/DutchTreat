"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StoreCustomer = /** @class */ (function () {
    function StoreCustomer(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.visits = 0;
        //this.name = theName;
    }
    StoreCustomer.prototype.showName = function () {
        alert(this.firstName + " " + this.lastName);
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
exports.StoreCustomer = StoreCustomer;
//let cust = new StoreCustomer();
//cust.visits = 23;
//# sourceMappingURL=storecustomer.js.map