import { getInterior, setInterior } from "./database.js";

const interior = getInterior()

export const Interior = () => {
    let html = "<h2>Interior</h2>"
    
    html += `<select id="design">`
    html += `<option value="0">Select an interior material</option>`

    const interiorList = interior.map(design => {
        return `<option value="${design.id}">${design.type}</option>`
    })

    html += interiorList.join("")
    html += "</select>"

    return html
}

document.addEventListener(
    "change", (event) => {
        if(event.target.id === "design") {
            setInterior(parseInt(event.target.value))
        }
    }
)