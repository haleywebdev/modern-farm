// console.log("Welcome to the main module")

import { createPlan } from "./plan.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"
import { addPlant, usePlants } from "./fields.js"

let seed = {
    type: "Green Beans",
    height: 240,
    output: 100
}

addPlant(seed)
usePlants = usePlants()
console.log(usePlants)


// const yearlyPlan = createPlan()
// console.log(yearlyPlan)

// const asparagusProperties = createAsparagus("Asparagus", 24, 4)
// console.log(asparagusProperties)


// const cornProperties = createCorn("Corn", 180, 6)
// console.log(cornProperties)


// const potatoProperties = createPotato("Potato", 32, 2)
// console.log(potatoProperties)


// const soybeanProperties = createSoybean("Soybean", 20, 4)
// console.log(soybeanProperties)


// const sunflowerProperties = createSunflower("Sunflower", 380, 3)
// console.log(sunflowerProperties)

// const wheatProperties = createWheat("Wheat", 230, 6)
// console.log(wheatProperties)

