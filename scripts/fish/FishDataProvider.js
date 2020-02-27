// An array of fish objects called fishCollection, and a function
// which returns a copy of the array fishCollection

const arrayOfFishObjects = [
    {
        Name: "Kermit",
        Species: "Warty Frogfish",
        Harvested: "Indian Ocean",
        Length: "4 in",
        Food: ["Crustaceans", "Fish"],
        Image: "http://www.diverslodgelembeh.com/wp-content/uploads/2017/02/juvenile-clown-frog-fish-divers-lodge-lembeh.jpg",
        Class: "kermit"
    },
    {
        Name: "Moped",
        Species: "Scooter Blenny",
        Harvested: "Thailand",
        Length: "3 in",
        Food: ["Copepods"],
        Image: "https://www.azgardens.com/wp-content/uploads/2017/04/Red-Scooter-Blenny-Male.jpg",
        Class: "moped"
    },
    {
        Name: "Shenlong",
        Species: "Mandarin Dragonet",
        Harvested: "Great Barrier Reef",
        Length: "4 in",
        Food: ["Shrimp"],
        Image: "https://i.pinimg.com/originals/f0/79/9b/f0799b8f571f7bd5dcf10e0dec331472.jpg",
        Class: "shenlong"
    },
    {
        Name: "Victoria",
        Species: "Queen Angel",
        Harvested: "Bonaire",
        Length: "15 in",
        Food: ["Sponges", "Algae"],
        Image: "https://www.reef2reef.com/attachments/untitled-design-10-jpg.1105997/",
        Class: "marieAntoinette"
    },
    {
        Name: "Dapple",
        Species: "Donkey Dung Sea Cucumber",
        Harvested: "Bonaire",
        Length: "20 in",
        Food: ["Sediment", "Detritus"],
        Image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Reef1075_-_Flickr_-_NOAA_Photo_Library.jpg/1024px-Reef1075_-_Flickr_-_NOAA_Photo_Library.jpg",
        Class: "dapple"
    },
    {
        Name: "Brody",
        Species: "Great White Shark",
        Harvested: "Great Barrier Reef",
        Length: "20 ft",
        Food: ["Seals", "Fish"],
        Image: "https://oceana.org/sites/default/files/styles/lightbox_full/public/noaa_white_shark_2.jpg?itok=aK_qqtXR",
        Class: "brody"
    },
];

export const useFish = () => {
    return arrayOfFishObjects.slice();
}