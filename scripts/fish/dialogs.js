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


    // You will be writing code below this line
    document.querySelector("#button--kermit").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--kermit")
            theDialog.showModal()
        }
    )

    document.querySelector("#button--moped").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--moped")
            theDialog.showModal()
        }
    )

    document.querySelector("#button--shenlong").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--shenlong")
            theDialog.showModal()
        }
    )

    document.querySelector("#button--marieAntoinette").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--marieAntoinette")
            theDialog.showModal()
        }
    )

    document.querySelector("#button--dapple").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--dapple")
            theDialog.showModal()
        }
    )

    document.querySelector("#button--brody").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--brody")
            theDialog.showModal()
        }
    )
}

export default initializeDetailButtonEvents;