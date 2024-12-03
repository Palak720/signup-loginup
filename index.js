function signup(userName) {
    let arr =["user1","user2","user3"];

    if(arr.includes(userName)){
        return "User Already Registered,Please Login";
    }
    arr.push(userName);
    return "Signup Successful, Please Login";
}