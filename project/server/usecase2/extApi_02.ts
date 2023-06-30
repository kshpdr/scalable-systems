import https from 'https';
import { Clusters } from '../db/models/clusters';
import { getClusterById, getClusters} from '../db/helpers';


export interface forecastdetails {

    from: Date;
    to: Date;
    forecastvalue: number;
    index: String;
    available_servers: number; //0-100

}

export interface region {
    id: number;
    shortname: String;
    forecast: forecastdetails[];
}

export async function externalApiCallforScheduling(path:String) {
      const clusters = await getClusterById();

  return new Promise((resolve, reject) => {
    let data = '';
    //get the whole window 94 aufrufe
    //curl -X GET https://api.carbonintensity.org.uk/regional/intensity/2023-06-23T10:26Z/fw48h \
    //-H 'Accept: application/json'

    https.get('https://api.carbonintensity.org.uk' + path, (res) => {
      
      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        const jsonData = JSON.parse(data); //weghauen später

        //init array
        let region_arr: region[] = [];
        for (let i=0; i < 14; i++){
            const aregion : region = {
                id : i+1,
                shortname : jsonData['data'][0]['regions'][i]['shortname'],
                forecast: []
            }        
            region_arr.push(aregion)
        }

        for (let i=0; i < (jsonData['data'].length); i++){
            for (let r=0 ; r < 14 ; r++){
                const servernum = clusters[r];
                //const servernum  = currentcluster.numServers// datenbankaufruf server aus  

                const n_detail : forecastdetails = {
                    from: jsonData['data'][i]['from'],
                    to: jsonData['data'][i]['to'],
                    forecastvalue: jsonData['data'][i]['regions'][r]['intensity']['forecast'], 
                    index: jsonData['data'][i]['regions'][r]['intensity']['index'],
                    available_servers: servernum
                }
                console.log(jsonData['data'][i]['regions'][r]['intensity']['forecast']);
                console.log(jsonData['data'][i]['regions'][r]['intensity']['index']);

                region_arr[r].forecast.push(n_detail)

            }
        }

        //return result
        resolve(region_arr);
      });

      }).on('error', (error) => {
        reject(error);
      });
  });
}