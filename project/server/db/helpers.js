import { Clusters } from "./models/clusters";

export async function getClusters() {
    return await Clusters.findAll({raw: true});
}

export async function createCluster({name, powerHigh, powerAverage, powerLow, energyConsumption, numServers, location, region, numCores, numTBsRam}) {
    const newClust = Clusters.create({
        id: "id",
        name: name,
        powerHigh: powerHigh,
        powerAverage: powerAverage,
        powerLow: powerLow,
        energyConsumption: energyConsumption,
        numServers: numServers,
        location: location,
        region: region,
        numCores: numCores,
        numTBsRam: numTBsRam 
    })
    console.log(newClust)
}

export async function getClusterById() {
    const cluster = await Clusters.findAll({
        attributes: ['numServers']
    });
      
    // Extrahiere die `numServers`-Werte aus dem Cluster-Objekt
    const numbersArray = cluster.map((item) => item.numServers);
      
    return numbersArray;
}