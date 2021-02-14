var requestOptions = {
    method: 'POST',
    redirect: 'follow',
    header: {
        'Access-Control-Allow-Origin': '*',
    }
};

fetch("https://nodejs-express-app-cxlkb-2020-11-30.eu-gb.mybluemix.net/ai/", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));