import{COLUMNS,state,updateDragging,createOrderData,TABLES} from "./data.js"
import{createOrderHtml,html,updateDraggingHtml,moveToColumn} from "./view.js"



/**
 * A handler that fires when a user drags over any element inside a column. In
 * order to determine which column the user is dragging over the entire event
 * bubble path is checked with `event.path` (or `event.composedPath()` for
 * browsers that don't support `event.path`). The bubbling path is looped over
 * until an element with a `data-area` attribute is found. Once found both the
 * active dragging column is set in the `state` object in "data.js" and the HTML
 * is updated to reflect the new column.
 *
 * @param {Event} event 
 */
const handleDragOver = (event) => {
    event.preventDefault();
    const path = event.path || event.composedPath()
    let column = null

    for (const element of path) {
        const { area } = element.dataset
        if (area) {
            column = area
            break;
        }
    }

    if (!column) return
    updateDragging({ over: column })
    updateDraggingHtml({ over: column })
}


const handleDragStart = (event) => {}
const handleDragEnd = (event) => {}

//help ?
const handleHelpToggle = (event) => { 
    html.help.overlay.toggleAttribute("open")
}
html.other.help.addEventListener('click', handleHelpToggle)
html.help.cancel.addEventListener('click', handleHelpToggle)

//opens the add order overlay
const handleAddToggle = (event) => {
    html.add.overlay.toggleAttribute("open")
}
html.other.add.addEventListener('click', handleAddToggle)
html.add.cancel.addEventListener('click', handleAddToggle)

// submits the order to the column
const handleAddSubmit = (event) => {
         event.preventDefault();
    const order = {
      id: state.orders,
      title: html.add.title.value,
      table: html.add.table.value,
      created: new Date(),
    };
    const orderElement = createOrderHtml(order);
    html.area.ordered.append(orderElement);
    html.add.form.reset();
    html.add.overlay.close();
}
    html.add.form.addEventListener("submit", handleAddSubmit);


// opens the edit overlay

const handleEditToggle = (event) => {
    html.edit.overlay.toggleAttribute("open")
}
html.edit.cancel.addEventListener('click', handleEditToggle)
html.other.grid.addEventListener('click', handleEditToggle)

const handleEditSubmit = (event) => {
    event.preventDefault();
const { id, title, table, column ,created } = {
 id: state.orders,
 title: html.edit.title.value,
 table: html.edit.table.value,
 column: html.edit.column.value,
 created: newDate(),
};
const order = { id, title, table, column, created } //finds the order that needs to be edited
let orderId = -1; //checks if the order exists
for (let i = 0; i < state.orders.length; i++) {
    if (state.orders[i].id === id) {
        orderId = i;
        break;
    }
}
}



 html.add.cancel.addEventListener('click', handleAddToggle)


html.edit.form.addEventListener('submit', handleEditSubmit)

const handleDelete = (event) => {}
html.edit.delete.addEventListener('click', handleDelete)






