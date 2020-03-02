const initializeTravelTipsEvents = () => {
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

    const allDetailImages = document.querySelectorAll("img[id^='details--']");

    for (const image of allDetailImages) {
        image.addEventListener(
            "click",
            theClickEvent => {
                const dialogSiblingSelector = `#${theClickEvent.target.id}~dialog`;
                const theDialog = document.querySelector(dialogSiblingSelector);
                theDialog.showModal();
            }
        )
    }
}


export default initializeTravelTipsEvents;