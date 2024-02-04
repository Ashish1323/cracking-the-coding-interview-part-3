const User= require('./models/User')
const Flight= require('./models/Flight')
const Booking= require('./models/Booking')



class Indigo {
    constructor(){
        this.user={};
        this.flight={};
        this.booking={};
    }

    addUser(userId, userName, userEmail){
        this.user[userId]=new User(userId,userName, userEmail);
    }

    addFlight(flightId, flightSource, flightDestination, flightNoOfSeats){
        this.flight[flightId]=new Flight(flightId, flightSource, flightDestination, flightNoOfSeats);
    }

    addBooking(bookingId, bookingSeatType, userId, FlightId){
        var bookingUser=this.user[userId];
        bookingUser.bookingCount+=1;
        var bookingFlight=this.flight[FlightId];
        bookingFlight.flightNoOfSeats-=1;
        this.booking[bookingId]=  new Booking(bookingId, bookingSeatType, bookingUser, bookingFlight);
    }
}

const indi= new Indigo();

indi.addUser(1, 'Ashish', 'a@gmail.com');
indi.addUser(2, 'Madhu', 'm@gmail.com');

indi.addFlight(101, 'Ahmedabad', 'Hyderabad', 180);
indi.addBooking(201,1,1,101);

console.log(indi.user)
console.log(indi.flight)
console.log(indi.booking)





