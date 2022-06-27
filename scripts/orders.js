import { getColors, getInterior, getTechnology, getWheels, getOrders } from "./database.js";

const colors = getColors()
const interior = getInterior()
const technology = getTechnology()
const wheels = getWheels()

const buildOrderListItem = (order) => {
    return `<li>
        
        </li>`
}

export const Orders = () => {
    const orders = getOrders()

    let html = "<ul>"

    const orderItems = orders.map(buildOrderListItem)

    html += orderItems.join("")
    html += "</ul>"

    return html


}