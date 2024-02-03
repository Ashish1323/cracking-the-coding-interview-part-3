class Event {
    constructor(eventId, eventType, eventName, eventCity ,eventNoOfBookings){
        this.eventId=eventId;
        this.eventType=eventType;
        this.eventName=eventName;
        this.eventCity=eventCity;
        this.eventNoOfBookings=eventNoOfBookings;
    }
}

module.exports= Event;