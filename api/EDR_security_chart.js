import http from 'k6/http';

export function EDR_security_chart() {
    const url = 'https://203.151.15.82/all_service/edr/security';

    const payload = JSON.stringify({
        main: [],
        sub: ["C01-005733"]
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
