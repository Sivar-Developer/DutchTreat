export class StoreCustomer {

    constructor(private firstName: string, private lastName: string) {
        //this.name = theName;
    }

    public visits: number = 0;
    private ourName: string;

    public showName() {
        alert(this.firstName + " " + this.lastName);
    }

    set name(val) {
        this.ourName
    }

    get name() {
        return this.ourName;
    }

}

let cust = new StoreCustomer();
cust.visits = 23;
