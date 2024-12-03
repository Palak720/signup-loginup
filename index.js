function signup(userName) {
    let arr =["user1","user2","user3"];

    if(arr.includes(userName)){
        return "User Already Registered,Please Login";
    }
    arr.push(userName);
    return "Signup Successful, Please Login";
}

function login(userName,password) {
    let Users = ["user1", "user2", "user3"];
    
    if(!userName){
        return "user not found,please signup";
    } else if(userName.password !== password){
        return "wrong passsword";
    }else {
        return "login successful";
    };
}