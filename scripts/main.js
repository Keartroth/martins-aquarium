import initializeDetailButtonEvents from './dialogs.js'
import { useFish } from './FishDataProvider.js'
import FishList from './fishList.js';

// import initializeTravelTipsEvents from './locations.js'



FishList();
initializeDetailButtonEvents();
// initializeTravelTipsEvents();





// if (window.location.hostname === "http://localhost:5000/locations/locations") {
//     // import initializeTravelTipsEvents from './locations.js'
//     initializeTravelTipsEvents();
// } else if (window.location.hostname === "http://localhost:5000/") {
//     // import initializeDetailButtonEvents from './dialogs.js'
//     initializeDetailButtonEvents();
// }