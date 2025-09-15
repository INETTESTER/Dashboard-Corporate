import http from 'k6/http';

export function EDR_security_export() {
    const url = 'https://203.151.15.82/all_service/edr/security/export';

    const payload = JSON.stringify({
        search: "FI",
        type: [],
        device_status: [],
        antivirus: [],
        antivirus_status: [],
        main: [],
        sub: ["17131"]
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
