const User= require('./models/User');
const Event= require('./models/Event');


class BookMyShow{
    constructor(){
        this.users={};
        this.events={};
    }

    addUser(userId, userName, userMail){
        this.users[userId]= new User(userId,userName,userMail);
    }

    addEvent(eventId, eventType, eventName, eventCity ,eventNoOfBookings){
        this.events[eventId]= new Event(eventId, eventType, eventName, eventCity ,eventNoOfBookings);
    }

    addBooking(userId, eventId, noOfbookings){
        this.events[eventId].eventNoOfBookings -=noOfbookings;
        this.users[userId].bookingCount++;
        console.log("Booking sent to " + this.users[userId].userMail);
    }
}

var bms=new BookMyShow();
bms.addUser(1,'Ashish', 'a@gmail.com')
bms.addUser(2,'Madhu', 'm@gmail.com')
bms.addUser(3,'DJ', 'dj@gmail.com')

bms.addEvent(101, 'Movie', 'Animal', 'Hyderabad', 500);

bms.addBooking(1,101,5);

console.log(bms.users)
console.log(bms.events)
