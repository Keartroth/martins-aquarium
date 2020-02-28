// An array of fish objects called fishCollection, and a function
// which returns a copy of the array fishCollection

const arrayOfFishObjects = [
    {
        Class: "kermit",
        Food: ["Crustaceans", "Fish"],
        Harvested: "Indian Ocean",
        Image: "http://www.diverslodgelembeh.com/wp-content/uploads/2017/02/juvenile-clown-frog-fish-divers-lodge-lembeh.jpg",
        Length: "4 in",
        Name: "Kermit",
        Species: "Warty Frogfish"
    },
    {
        Class: "moped",
        Food: ["Copepods"],
        Harvested: "Thailand",
        Image: "https://www.azgardens.com/wp-content/uploads/2017/04/Red-Scooter-Blenny-Male.jpg",
        Length: "3 in",
        Name: "Moped",
        Species: "Scooter Blenny"
    },
    {
        Class: "shenlong",
        Food: ["Shrimp"],
        Harvested: "Great Barrier Reef",
        Image: "https://i.pinimg.com/originals/f0/79/9b/f0799b8f571f7bd5dcf10e0dec331472.jpg",
        Length: "4 in",
        Name: "Shenlong",
        Species: "Mandarin Dragonet"
    },
    {
        Class: "marieAntoinette",
        Food: ["Sponges", "Algae"],
        Harvested: "Bonaire",
        Image: "https://www.reef2reef.com/attachments/untitled-design-10-jpg.1105997/",
        Length: "15 in",
        Name: "Victoria",
        Species: "Queen Angel"
    },
    {
        Class: "dapple",
        Food: ["Sediment", "Detritus"],
        Harvested: "Bonaire",
        Image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Reef1075_-_Flickr_-_NOAA_Photo_Library.jpg/1024px-Reef1075_-_Flickr_-_NOAA_Photo_Library.jpg",
        Length: "20 in",
        Name: "Dapple",
        Species: "Donkey Dung Sea Cucumber"
    },
    {
        Class: "brody",
        Food: ["Seals", "Fish"],
        Harvested: "Great Barrier Reef",
        Image: "https://oceana.org/sites/default/files/styles/lightbox_full/public/noaa_white_shark_2.jpg?itok=aK_qqtXR",
        Length: "20 ft",
        Name: "Brody",
        Species: "Great White Shark"
    },
];

export const useFish = () => {
    return arrayOfFishObjects.slice();
}