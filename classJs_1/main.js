class User {
    constructor(username) {
        this.username = username;
    }
    getUserName() {
        return this.username;
    }
}
const user1 = new User('John');
console.log(user1.getUserName());