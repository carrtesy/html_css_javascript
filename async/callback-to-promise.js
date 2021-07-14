class UserStorage{
    loginUser(id, password){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (
                    (id === "dm" && password === "dm1") ||
                    (id === "coder" && password === "pw1")
                ) {
                    resolve(id);
                } else {
                    reject(new Error("not found"));
                }
            }, 2000);
        })
    }

    getRoles(user){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (user === "dm") {
                    resolve({name:"dm", role:"admin"});
                } else {
                    reject(new Error("no access"));
                }
            }, 1000)
        }) 
    }
}

const userStorage = new UserStorage();
const id = prompt("enter your id");
const password = prompt("enter your password");

userStorage
    .loginUser(id, password)
    .then(userStorage.getRoles)
    .then(user => alert(`hello ${user.name}, you are ${user.role}.`))
    .catch(console.log)