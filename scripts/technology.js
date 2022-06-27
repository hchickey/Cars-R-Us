import { getTechnology, setTechnology } from "./database.js";

const technology = getTechnology()

export const Technology = () => {
    let html = "<h2>Technologies</h2>"

    html += `<select id="tech">`
    html += `<option value="0">Select a technology package</option>`

    const techList = technology.map(tech => {
        return `<option value="${tech.id}">${tech.package}</option>`
    })

    html += techList.join("")
    html += "</select>"

    return html
}

document.addEventListener(
    "change", (event) => {
        if (event.target.id === "tech") {
            setTechnology(parseInt(event.target.value))
        }
    }
)