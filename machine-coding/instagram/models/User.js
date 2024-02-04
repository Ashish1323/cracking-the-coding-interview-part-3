class User{
    constructor(userId, userName, userDisplayName){
        this.userId=userId;
        this.userName=userName;
        this.userDisplayName=userDisplayName;
        this.followerCount=0;
        this.followingCount=0;
        this.followerMap={};
        this.followingMap={};
    }

    addFollower(followerId, user){
        this.followerMap[followerId]= user;
    }

    removeFollower(followerId) {
        delete this.followerMap[followerId];
    } 

    addFollowing(followerId, user){
        this.followingMap[followerId]= user;
    }

    removeFollowing(followerId){
        delete this.followingMap[followerId];
    }
}

module.exports= User