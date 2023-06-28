import https from 'https';

export interface forecastdetails {
  from: Date;
  to: Date;
  forecastvalue: number;
  index: String;
}

export interface region {
  id: number;
  shortname: String;
  forecast: forecastdetails[];
}

export function externalApiCallforScheduling(path:String) {
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
        const jsonData: any[] = Array.of(JSON.parse(data));

        //let region_arr: any[] = Array

        //return result
        //resolve(cleanest_region);
      });

      }).on('error', (error) => {
        reject(error);
      });
  });
}