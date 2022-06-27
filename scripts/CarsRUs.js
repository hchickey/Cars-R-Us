import { Colors } from "./paint.js";
import { Interior } from "./interior.js";
import { Technology } from "./technology.js";
import { Wheels } from "./wheels.js";
import { Orders } from "./orders.js";
import { addCustomOrder } from "./database.js";

document.addEventListener(
    "click", (event) => {
        if (event.target.id === "orderButton") {
            addCustomOrder()
        }
    }
)

export const CarsRUs = () => {
    return `
        <h1>Cars 'R Us: Personal Car Builder</h1>

        <article class="choices">
            <section class="choices__paints options">
                ${Colors()}
            </section>
            <section class="choices__interior options">
                ${Interior()}
            </section>
            <section class="choices__technology options">
                ${Technology()}
            </section>
            <section class="choices__wheels options">
                ${Wheels()}
            </section>
        </article>

        <article>
            <button id="orderButton">Place Car Order</button>
        </article>

        <article class="customOrders">
            <h2>Custom Car Orders</h2>
            ${Orders()}
            
            
        </article>
    `
}