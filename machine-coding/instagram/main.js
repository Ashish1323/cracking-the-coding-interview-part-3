const User=require('./models/User')

class Instagram{
    constructor(){
        this.user= {};
    }

    addUser(userId, userName, userDisplayName){
        this.user[userId]=new User(userId,userName, userDisplayName);
    }

    followUser(followerId, followingId){
        var followingUser= this.user[followerId]
        var followerUser= this.user[followingId];

        followingUser.addFollowing(followingId, followerUser);
        followerUser.addFollower(followerId, followingUser);

        followingUser.followingCount += 1;
        followerUser.followerCount +=1;
    }
}

const insta=new Instagram();
insta.addUser(1,'ashishagni', 'Ashish Agnihotri');
insta.addUser(2,'fafa.ji.gand', 'Fafa Vidit');
insta.addUser(3,'alpesh.chut', 'Alpesh Shinde');


insta.followUser(2,1);
insta.followUser(1,2);
insta.followUser(3,1);




console.log(insta.user)