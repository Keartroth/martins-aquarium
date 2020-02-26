/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */

const fishCollection = [
    {
        Name: "Kermit",
        Species: "Warty Frogfish",
        Harvested: "Indian Ocean",
        Length: "4 in",
        Food: ["Crustaceans", "Fish"]
    },
    {
        Name: "Moped",
        Species: "Scooter Blenny",
        Harvested: "Thailand",
        Length: "3 in",
        Food: ["Copepods"]
    },
    {
        Name: "Shenlong",
        Species: "Mandarin Dragonet",
        Harvested: "Great Barrier Reef",
        Length: "4 in",
        Food: ["Shrimp"]
    },
    {
        Name: "Marie Antoinette",
        Species: "Queen Angel",
        Harvested: "Bonaire",
        Length: "15 in",
        Food: ["Sponges", "Algae"]
    },
    {
        Name: "Dapple",
        Species: "Donkey Dung Sea Cucumber",
        Harvested: "Bonaire",
        Length: "20 in",
        Food: ["Sediment", "Detritus"]
    },
    {
        Name: "Brody",
        Species: "Great White Shark",
        Harvested: "Great Barrier Reef",
        Length: "20 ft",
        Food: ["Seals", "Fish"]
    },
]

export const useFish = () => {
    return fishCollection.slice();
}