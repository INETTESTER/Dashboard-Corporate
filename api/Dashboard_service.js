import http from 'k6/http';

export function Dashboard_service() {
    const url = 'https://203.151.15.82/all_service/service/';

    const payload = JSON.stringify({
        main: [],
        sub: ["8551"]
    });

    const params = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const res = http.post(url, payload, params);

    //console.log('Response body:', res.body);

    return res;
}
