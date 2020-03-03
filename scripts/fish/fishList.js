import { useFish, soldierFish, mostHolyFish, otherFish } from "./FishDataProvider.js"
import fish from "./fish.js";

/**
 *  FishList which renders individual fish objects as HTML,
 *  dependent upon whether they are a factor of three or five.
 */
const fishList = () => {
    const contentElement = document.querySelector(".fishList");
    let fishObjectsArray = mostHolyFish();

    for (const fishObject of fishObjectsArray) {
        const fishHTMLRepresentation = fish(fishObject);
        contentElement.innerHTML += fishHTMLRepresentation;
    }

    fishObjectsArray = soldierFish();

    for (const fishObject of fishObjectsArray) {
        const fishHTMLRepresentation = fish(fishObject);
        contentElement.innerHTML += fishHTMLRepresentation;
    }

    fishObjectsArray = otherFish();

    for (const fishObject of fishObjectsArray) {
        const fishHTMLRepresentation = fish(fishObject);
        contentElement.innerHTML += fishHTMLRepresentation;
    }

}

export default fishList;