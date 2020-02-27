/**
 *  tip which renders individual tip objects as HTML
 */
const tip = (tipObject) => {
    return `
            <section class="tip oswald">${tipObject.message}</section>
    `
}

export default tip