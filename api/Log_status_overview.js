import http from 'k6/http';

export function Log_status_overview() {
    const url = 'https://203.151.15.82/all_service/logs/overview';

    const payload = JSON.stringify({
        sub: ["C01-005733"],
        main: []
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
