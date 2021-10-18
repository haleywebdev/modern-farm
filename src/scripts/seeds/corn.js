

export const createCorn = (type, height, output) => {
    let cornArray = [{
        id: 1,
        type: "Corn",
        height: 24,
        output: 4
    },

    {
        id: 2,
        type: type,
        height: height,
        output: output
    }]

    return cornArray
}