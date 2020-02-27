const arrayOfTipObjects = [
    {
        title: "H2O",
        message: "Make sure your tank has water"
    },
    {
        title: "Sanitation",
        message: "Clean the poop out on a regular basis",
    },
    {
        title: "Feeding",
        message: "Make sure to feed them daily",
    },
    {
        title: "Prey & Predator",
        message: "Don't mix your sharks and fish",
    },
]

export const useTips = () => {
    return arrayOfTipObjects.slice();
}