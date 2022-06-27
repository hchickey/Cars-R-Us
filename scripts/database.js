/*

    This module contains all of the data, or state, for the
    application. It exports 5 or more functions that allow other
    modules to get copies of the state.

*/

const database = {
    colors: [
        { id: 1, color: "Silver", price: 400 },
        { id: 2, color: "Midnight Blue", price: 550 }, 
        { id: 3, color: "Firebrick Red", price: 670 },
        { id: 4, color: "Spring Green", price: 375 }
    ],
    interior: [
        { id: 1, type: "Beige Fabric", price: 220 },
        { id: 2, type: "Charcoal Fabric", price: 325 },
        { id: 3, type: "White Leather", price: 550 },
        { id: 4, type: "Black Leather", price: 675 }
    ],
    technology: [
        { id: 1, package: "Basic Package", price: 400 },
        { id: 2, package: "Navigation Package", price: 500 },
        { id: 3, package: "Visibility Package", price: 600 },
        { id: 4, package: "Ultra Package", price: 700 }
    ],
    wheels: [
        { id: 1, wheel: "17-inch Pair Radial", price: 500 },
        { id: 2, wheel: "17-inch Pair Radial Black", price: 600 },
        { id: 3, wheel: "18-inch Pair Spoke Silver", price: 700 },
        { id: 4, wheel: "18-inch Pair Spoke Black", price: 800 }
    ],
    customOrders: [
        { 
            id: 1,
            colorId: 2,
            interiorId: 3,
            techId: 4,
            wheelId: 2,
            timestamp: 1614659931693
        }
    ],
    orderBuilder: {}
}

// functions responsibility is to get each collection of customs so that other modules can import the data and convert to HTML

export const getColors = () => {
    return database.colors.map(color =>({...color}))
}

export const getInterior = () => {
    return database.interior.map(design =>({...design}))
}

export const getTechnology = () => {
    return database.technology.map(tech =>({...tech}))
}

export const getWheels = () => {
    return database.wheels.map(wheel =>({...wheel}))
}

export const getOrders = () => {
    return database.customOrders.map(order =>({...order}))
}

export const setColors = (id) => {
    database.orderBuilder.colorId = id
}

export const setInterior = (id) => {
    database.orderBuilder.interiorId = id
}

export const setTechnology = (id) => {
    database.orderBuilder.techId = id
}

export const setWheels = (id) => {
    database.orderBuilder.wheelId = id
}

export const addCustomOrder = () => {
    const newOrder = {...database.orderBuilder}

    const lastIndex = database.customOrders.length - 1
    newOrder.id = database.customOrders[lastIndex].id + 1

    newOrder.timestamp = Date.now()

    database.customOrders.push(newOrder)

    database.orderBuilder = {}

    document.dispatchEvent(new CustomEvent("stateChanged"))

}