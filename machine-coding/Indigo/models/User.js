class User{
    constructor(userId, userName, userMail){
        this.userId=userId;
        this.userName=userName;
        this.userMail=userMail;
        this.bookingCount=0;
    }
}

module.exports= User