import http from 'k6/http';

export function API_LOG_LOGIN_DUO() {
    const url = 'https://203.151.15.82/duo_service_nextpie/api/v1/user/detail/10/1';

    const payload = JSON.stringify({
        encryption: "YaIzjszkId88HHdsu7AAX6R6Py4nI6BWu2JE9YNv7yBZAlCjpe0uZ2AFRjPCEBb5dojc0BSQk+Orx6TafW47JYDfieBkykhk/GES5mYapg4mX71h5z/4SVMQ9idV70DI"
    });

    const params = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiIyMDE1MjQ1ODcxMzYiLCJmdWxsbmFtZSI6InBpbnlhZGEgc2FuZ2NoYXQiLCJleHAiOjE3NTc5OTYyNzV9.XE3SBZNhAPuKSkAlcGGKWU1KqGH1PoTiCKL4PDXkIXI'
        },
    };

    const res = http.post(url, payload, params);

    //console.log('Response body:', res.body);

    return res;
}
