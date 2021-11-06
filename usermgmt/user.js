export default class User {
    constructor(options = {}) {
        Object.assign(this, options);
    }
    get login() {
        return this.userlogin;
    }
    get firstName() {
        return this.firstName;
    }
    set firstName(name) {
        this.firstname = name;
    }
    set lastName(name) {
        this.lastname = name;
    }
    set login(name) {
        this.userlogin = name;
    }
}