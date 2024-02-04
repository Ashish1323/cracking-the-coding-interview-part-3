class Booking {
    static seatTypes = ["Economy", "Premium"];
    static foodTypes = ["No Food", "Food Included"];


    constructor(bookingId, bookingSeatType, bookingUser, bookingFlight) {
        this.bookingId = bookingId;
        this.seatType = Booking.seatTypes[bookingSeatType];
        this.foodType = Booking.foodTypes[bookingSeatType];
        this.bookingUser = bookingUser;
        this.bookingFlight = bookingFlight;
        this.pnr= this.generatePNR();
    }

    generatePNR() {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        const pnrLength = 6;
        let pnr = '';

        for (let i = 0; i < pnrLength; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            pnr += characters.charAt(randomIndex);
        }

        return pnr;
    }
}

module.exports=Booking