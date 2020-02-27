import { useFish } from "./FishDataProvider.js"
import Fish from "./fish.js";

/**
 *  FishList which renders individual fish objects as HTML
 */
const FishList = () => {
    const contentElement = document.querySelector(".fishList");
    const fishes = useFish();

    // Add to the existing HTML in the content element
    for (const fishObject of fishes) {
        contentElement.innerHTML += Fish(fishObject);
    }
}

export default FishList