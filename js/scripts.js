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

/*BOOK 1 */
const status = document.querySelector("#book1 .status")
const reserve = document.querySelector("#book1 .reserve")
const checkout = document.querySelector("#book1 .checkout")
const checkin = document.querySelector("#book1 .checkin")

/*BOOK 2 */
// status = selector(status)
// reserve = selector(reserve)
// checkout = selector(checkout)
// checkin = selector(checkin)

/*BOOK 3 */
// status = selector(status)
// reserve = selector(reserve)
// checkout = selector(checkout)
// checkin = selector(checkin)

/*BOOK 1 */
// checkin.0.color = none
// status.0.style.color = STATUS_MAP.status.color
reserve.textContent = STATUS_MAP.status.canReserver ? 'enabled' : 'disabled'
checkout = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
checkin = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'

/*BOOK 2 */
// checkin.1.color = none
// status.1.style.color = STATUS_MAP.status.color
// reserve.1 = STATUS_MAP.status.canReserver ? 'enabled' : 'disabled'
// checkout.1 = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
// checkin.1 = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'

/*BOOK 3 */
// checkin.2.color = none
// status.2.style.color = STATUS_MAP.status.color
// reserve.2 = STATUS_MAP.status.canReserver ? 'enabled' : 'disabled'
// checkout.2 = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
// checkin.2 = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'