import { useLocation } from "./locationDataProvider.js";
import location from './location.js';

/**
 *  locationList which renders individual location objects as HTML
 */
const contentElement = document.querySelector(".locationList");
const locationList = () => {
    const locationObjectsArray = useLocation();

    for (const locationObject of locationObjectsArray) {
        contentElement.innerHTML += location(locationObject);
    }
}

export default locationList;