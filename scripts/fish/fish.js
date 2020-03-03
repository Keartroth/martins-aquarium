/**
 *  Fish which renders individual fish objects as HTML
 */
const fish = (fishObject) => {
    return `
    <section class="fish">
    <img class="fish__image" src="${fishObject.Image}" alt="${fishObject.Species}" />
    <div class="fish__details oswald">
        <h3 class="${fishObject.Class}">${fishObject.Name}</h3>

        <button class="button--open oswald" id="button--${fishObject.Class}">Details</button>

        <dialog class="dialog--fish" id="details--${fishObject.Class}">
            <ul>
                <li>Jutz'kar's Title: ${fishObject.Title}</li>
                <li>Species: ${fishObject.Species}</li>
                <li>Harvested: ${fishObject.Harvested}</li>
                <li>Length: ${fishObject.Length} inches</li>
                <li>Food: ${fishObject.Food.join(", ")}</li>
            </ul>
            <button class="button--close" id="close-${fishObject.Class}">Close</button>
        </dialog>
    </div>
</section>
    `
}

export default fish