const arrayOfTipObjects = [
    {
        message: "Make sure your tank has water.",
        title: "H2O"
    },
    {
        message: "Clean the poop out on a regular basis.",
        title: "Sanitation"
    },
    {
        message: "Make sure to feed them daily.",
        title: "Feeding"
    },
    {
        message: "Don't mix your sharks and fish!",
        title: "Prey & Predator"
    },
]

export const useTips = () => {
    return arrayOfTipObjects.slice();
}