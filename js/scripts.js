// scripts.js

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

/*BOOK 1 */  // used document querySelector to get info from html
const book1 = document.querySelector("#book1")
const status1 = book1.querySelector(".status")
const reserve1 = book1.querySelector(".reserve")
const checkout1 = book1.querySelector(".checkout")
const checkin1 = book1.querySelector(".checkin")

/*BOOK 2 */
const book2 = document.querySelector("#book2")
const status2 = book2.querySelector(".status")
const reserve2 = book2.querySelector(".reserve")
const checkout2 = book2.querySelector(".checkout")
const checkin2 = book2.querySelector(".checkin")


/*BOOK 3 */
const book3 = document.querySelector("#book3")
const status3 = book3.querySelector(".status")
const reserve3 = book3.querySelector(".reserve")
const checkout3 = book3.querySelector(".checkout")
const checkin3 = book3.querySelector(".checkin")

/*BOOK 1 */  //used if statement to check if true or false
checkin1.style.color = "black"
status1.style.color = STATUS_MAP.overdue.color
if (reserve1.disabled = true){STATUS_MAP.overdue.canReserve }
if (checkout1.disabled = true ){STATUS_MAP.overdue.canCheckout}
if (checkin1.disabled = false){STATUS_MAP.overdue.canCheckIn}

// /*BOOK 2 */
checkin2.style.color = "black"
status2.style.color = STATUS_MAP.reserved.color
if (reserve2.disabled = false){STATUS_MAP.reserved.canReserve }
if (checkout2.disabled = true ){STATUS_MAP.reserved.canCheckout}
if (checkin2.disabled = false){STATUS_MAP.reserved.canCheckIn}

/*BOOK 3 */
checkin3.style.color = "black"
status3.style.color = STATUS_MAP.shelf.color
if (reserve3.disabled = true){STATUS_MAP.shelf.canReserve }
if (checkout3.disabled = true ){STATUS_MAP.shelf.canCheckout}
if (checkin3.disabled = false){STATUS_MAP.shelf.canCheckIn}
