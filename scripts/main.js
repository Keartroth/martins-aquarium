/**
 *  Import the initializeDetailButtonEvents function
 *  reference and then invoke it
 */
import initializeDetailButtonEvents from './dialogs.js'
import { useFish } from './FishDataProvider.js'
// import initializeTravelTipsEvents from './locations.js'


initializeDetailButtonEvents();
useFish();
// initializeTravelTipsEvents();


const arrayOfTheFishObjects = useFish();

for (const currentFishObject of arrayOfTheFishObjects) {
    console.log(currentFishObject);
}


// if (window.location.hostname === "http://localhost:5000/locations/locations") {
//     // import initializeTravelTipsEvents from './locations.js'
//     initializeTravelTipsEvents();
// } else if (window.location.hostname === "http://localhost:5000/") {
//     // import initializeDetailButtonEvents from './dialogs.js'
//     initializeDetailButtonEvents();
// }