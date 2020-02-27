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


    // You will be writing code below this line
    document.querySelector("#bonaireImg").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#tips--bonaire")
            theDialog.showModal()
        }
    )

    document.querySelector("#thailandImg").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#tips--thailand")
            theDialog.showModal()
        }
    )

    document.querySelector("#reefImg").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#tips--reef")
            theDialog.showModal()
        }
    )

    document.querySelector("#indianImg").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#tips--indian")
            theDialog.showModal()
        }
    )
}


initializeTravelTipsEvents();