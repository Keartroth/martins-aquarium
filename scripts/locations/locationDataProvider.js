const arrayOfLocationObjects = [
    {
        name: "Bonaire, Dutch Antilles",
        image: "https://www.tourismbonaire.com/includes/images/nature-page-header.jpg",
        id: "bonaire",
        message: "Best shore diving around!! Don't bother with the boat dives!!",
    },
    {
        name: "Koh Sumai, Thailand",
        image: "https://d1ix9yerv4y8lr.cloudfront.net/blog/wp-content/uploads/2019/08/koh-sumai-7-19.jpg",
        id: "thailand",
        message: "Don't touch the coral!! The king might toss you in prison!!",
    },
    {
        name: "Great Barrier Reef, Australia",
        image: "https://cdn.britannica.com/64/155864-050-34FBD7A2/view-Great-Barrier-Reef-Australia-coast.jpg",
        id: "reef",
        message: "Watch out for sharks!!",
    },
    {
        name: "Réunion Island, Indian Ocean",
        image: "https://www.techexplorist.com/wp-content/uploads/2019/04/ocean.jpg",
        id: "indian",
        message: "There's a volcano here; you should sleep on it!!",
    },
]

export const useLocation = () => {
    return arrayOfLocationObjects.slice();
}