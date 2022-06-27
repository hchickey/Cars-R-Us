import { getWheels, setWheels } from "./database.js";

const wheels = getWheels()

export const Wheels = () => {
    let html = "<h2>Wheels</h2>"

    html += `<select id="wheel">`
    html += `<option value="0">Select an wheel style</option>`

    const wheelsList = wheels.map(wheel => {
        return `<option value="${wheel.id}">${wheel.wheel}</option>`
    })

    html += wheelsList.join("")
    html += "</select>"

    return html
}

document.addEventListener(
    "change", (event) => {
        if (event.target.id === "wheel") {
            setWheels(parseInt(event.target.value))
        }
    }
)