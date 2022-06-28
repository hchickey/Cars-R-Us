import { getColors, getInterior, getTechnology, getWheels, getOrders } from "./database.js";

const colors = getColors()
const interior = getInterior()
const technology = getTechnology()
const wheels = getWheels()

const buildOrderListItem = (order) => {

const chosenPaint = colors.find(color => {
    return color.id === order.colorId
})

const chosenWheel = wheels.find(wheel => {
    return wheel.id === order.wheelId
})

const chosenInterior = interior.find(design => {
    return design.id === order.interiorId
})

const chosenTech = technology.find(tech => {
    return tech.id === order.techId
})

const totalCost = chosenPaint.price + chosenWheel.price + chosenInterior.price + chosenTech.price

const costString = totalCost.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
})




    let custom = "<ul>"

    for (const color of colors) {
        if (color.id === order.colorId) {
            for (const wheel of wheels) {
                if (wheel.id === order.wheelId) {
                    for (const design of interior) {
                        if (design.id === order.interiorId) {
                            for (const tech of technology) {
                                if (tech.id === order.techId) {
                                    custom += `<li class="orderList">${color.color} car with ${wheel.wheel} wheels, ${design.type} interior, and the ${tech.package} for a total cost of ${costString}.</li> `
                                }
                            }
                        }
                    }
                }
            }
        }
    }
custom += "</ul>"
return custom

}

export const Orders = () => {
    const orders = getOrders()

    let html = "<ul>"

    const orderItems = orders.map(buildOrderListItem)

    html += orderItems.join("")
    html += "</ul>"

    return html


}