/**
 *  Fish which renders individual fish objects as HTML
 */
const Fish = (fish) => {
    return `
    <section class="fish">
    <img class="fish__image" src="${fish.Image}" alt="${fish.Species}" />
    <div class="fish__details oswald">
        <h3 class="${fish.Class}">${fish.Name}</h3>

        <div>
            <button class="button--open oswald" id="button--${fish.Class}">Details</button>
        </div>

        <dialog class="dialog--fish" id="details--${fish.Class}">
            <ul>
                <li>Species: ${fish.Species}</li>
                <li>Harvested: ${fish.Harvested}</li>
                <li>Length: ${fish.Length}</li>
                <li>Food: ${fish.Food.join(",")}</li>
            </ul>
            <button class="button--close" id="close-${fish.Class}">Close</button>
        </dialog>
    </div>
</section>
    `
}

export default Fish