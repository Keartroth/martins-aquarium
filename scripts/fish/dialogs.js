const initializeDetailButtonEvents = () => {
    // CAN'T TOUCH THIS - START
    const allCloseButtons = document.querySelectorAll(".button--close")

    for (const btn of allCloseButtons) {
        btn.addEventListener(
            "click",
            theEvent => {
                const dialogElement = theEvent.target.parentNode
                dialogElement.close()
            }
        )
    }
    // CAN'T TOUCH THIS - END

    // Get a reference to all buttons that start with "button--"
    const allDetailButtons = document.querySelectorAll("button[id^='button--']")

    // Add an event listener to each one
    for (const button of allDetailButtons) {
        button.addEventListener(
            "click",
            theClickEvent => {
                const dialogSiblingSelector = `#${theClickEvent.target.id}+dialog`;
                const theDialog = document.querySelector(dialogSiblingSelector);
                theDialog.showModal();
            }
        )
    };
}

export default initializeDetailButtonEvents;