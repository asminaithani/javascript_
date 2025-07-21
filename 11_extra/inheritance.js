class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`username is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`a new course was added by ${this.username}`);
    }
}

const asmi = new Teacher ("asmi","asmi@gamil", "123")
asmi.addCourse()
asmi.logMe()
const sam = new User("asmi")
sam.addCourse()
sam.logMe()