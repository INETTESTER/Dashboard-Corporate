import http from 'k6/http';

export function company() {
    const url = 'https://203.151.15.82/all_service/company/';

    const payload = JSON.stringify({
        main: [],
        sub: ["all"]
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
