let fieldsArray = []

export let addPlant = (seedObj) => {
    fieldsArray.push(seedObj)
}

export let usePlants = () => {
    return fieldsArray
}