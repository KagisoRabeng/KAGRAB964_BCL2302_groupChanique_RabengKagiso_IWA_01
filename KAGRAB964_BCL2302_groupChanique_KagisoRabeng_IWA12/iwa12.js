const STATUS_MAP = {
    shelf: {
        color: 'green',
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved: {
        color: 'blue',
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue: {
        color: 'red',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut: {
        color: 'orange',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    }
}

// Edit below line 

const book1 = {
    status : document.querySelector('#book1 .status'),
    reserve : document.querySelector('#book1 .reserve'),
    checkout : document.querySelector('#book1 .checkout'),
    checkin : document.querySelector('#book1 .checkin'),
}

const book2 = {
    status : document.querySelector('#book2 .status'),
    reserve : document.querySelector('#book2 .reserve'),
    checkout : document.querySelector('#book2 .checkout'),
    checkin : document.querySelector('#book2 .checkin'),
}

const book3 = {
    status : document.querySelector('#book3 .status'),
    reserve : document.querySelector('#book3 .reserve'),
    checkout : document.querySelector('#book3 .checkout'),
    checkin : document.querySelector('#book3 .checkin'),
}

book1.checkin.style.filter = 'grayscale(100%)'; //diables the button. filter CSS
book1.status.style.color = STATUS_MAP.overdue.color;
book1.reserve.disabled= !STATUS_MAP.overdue.canReserve;
book1.checkout.disabled = !STATUS_MAP.overdue.canCheckout;
book1.checkin.disabled= !STATUS_MAP.overdue.canCheckIn;

book2.checkin.style.filter = 'grayscale(100%)';
book2.status.style.color = STATUS_MAP.reserved.color;
book2.reserve.disabled = !STATUS_MAP.reserved.canReserve; //sets the disabled property of the button to false'
book2.checkout.disabled = !STATUS_MAP.reserved.canCheckout;
book2.checkin.disabled = !STATUS_MAP.reserved.canCheckIn;

book3.checkin.style.filter = 'grayscale(100%)';
book3.status.style.color = STATUS_MAP.shelf.color;
book3.reserve.disabled = !STATUS_MAP.shelf.canReserve; 
book3.checkout.disabled = !STATUS_MAP.shelf.canCheckout
book3.checkin.disabled = !STATUS_MAP.shelf.canCheckIn;


// book1.checkin.filter = 'grayscale(100%)'
// book1.status.style.color = STATUS_MAP.status.color
// book1.reserve.style = STATUS_MAP.status.canReserver ? 'enabled' : 'disabled'
// book1.checkout.style = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
// book1.checkin.style = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'

// book2.checkin.style.color = none
// book2.status.style.color = STATUS_MAP.status.color
// book2.reserve.1 = STATUS_MAP.status.canReserver ? 'enabled' : 'disabled'
// book2.checkout.1 = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
// book2.checkin.1 = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'

// book3.checkin.2.color = none
// book3.status.2.style.color = STATUS_MAP.status.color
// book3.reserve.2 = STATUS_MAP.status.canReserver ? 'enabled' : 'disabled'
// book3.checkout.2 = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
// book3.checkin.2 = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'