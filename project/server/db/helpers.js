import { Clusters } from "./models/clusters";

export async function getClusters() {
    return await Clusters.findAll();
}

export async function createCluster({name, powerHigh, powerAverage, powerLow, energyConsumption, numServers, location}) {
    const newClust = Clusters.create({
        id: "id",
        name: name,
        powerHigh: powerHigh,
        powerAverage: powerAverage,
        powerLow: powerLow,
        energyConsumption: energyConsumption,
        numServers: numServers,
        location: location 
    })
    console.log(newClust)
}