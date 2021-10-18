export const createAsparagus = (type, height, output) => {
    let asparagusObject = {
        type: type,
        height: height,
        output: output
    }

    return asparagusObject
}

let asparagusProperties = createAsparagus("Asparagus", 24, 4)
console.log(asparagusProperties)


