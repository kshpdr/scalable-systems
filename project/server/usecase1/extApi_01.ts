import https from 'https';


export function externalApiCallandsort(path:String) {
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
        const jsonData = JSON.parse(data);

        //find cleanest region 
        let cleanest_region = jsonData['data'][2]['regions'][0];
        for (let i= 0; i < 18; i++ ){
          let region = jsonData['data'][2]['regions'][i];
          if(region['intensity']['forecast'] <= cleanest_region ['intensity']['forecast']){
            cleanest_region = region;
          }
        }

        //return result
        resolve(cleanest_region);
      });

      }).on('error', (error) => {
        reject(error);
      });
  });
}