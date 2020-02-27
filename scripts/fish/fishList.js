import { useFish } from "./FishDataProvider.js"
import fish from "./fish.js";

/**
 *  FishList which renders individual fish objects as HTML
 */
const fishList = () => {
    const contentElement = document.querySelector(".fishList");
    const fishObjectsArray = useFish();

    for (const fishObject of fishObjectsArray) {
        contentElement.innerHTML += fish(fishObject);
    }
}

export default fishList