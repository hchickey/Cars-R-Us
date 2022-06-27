import { getColors, setColors } from "./database.js";

const colors = getColors()

export const Colors = () => {
    let html = "<h2>Paints</h2>"

    html += `<select id="color">`
    html += `<option value="0">Select a paint color</option>`

    // use .map for converting objects to <li> elements
    // adding the dropdown menu
    const colorsList = colors.map(color => {
        return `<option value="${color.id}">${color.color}</option>`
    })

    html += colorsList.join("")
    html += "</select>"
    return html
    
}

document.addEventListener(
    "change", (event) => {
        if(event.target.id === "color") {
    setColors(parseInt(event.target.value))
    }
}
)