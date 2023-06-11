import https from 'https';

export async function externalApiCall(path: String) {
  let data = ''
  https.get('https://api.carbonintensity.org.uk' + path, (res) => {
    //console.log('statusCode:', res.statusCode);
    //console.log('headers:', res.headers);

  })//ad eventlistnener on data
  .on('data', (d) => {
    data = data + d;
    })
  .on('end', () => {
    console.log(data);
  })
  .on('error', (e) => {
    console.error(e);
  });

  return JSON.stringify(data);
};

export function externalApiCall2(path:String) {
  return new Promise((resolve, reject) => {
    let data = '';

    https.get('https://api.carbonintensity.org.uk' + path, (res) => {
      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        try {
          const jsonData = JSON.parse(data);
          resolve(jsonData);
        } catch (error) {
          reject(error);
        }
      });
    }).on('error', (error) => {
      reject(error);
    });
  });
}