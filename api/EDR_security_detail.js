import http from 'k6/http';

export function EDR_security_detail() {
    const url = 'https://203.151.15.82/all_service/edr/security_detail/1/10';

    const payload = JSON.stringify({
        search: "",
        type: [],
        device_status: [],
        antivirus: [],
        antivirus_status: [],
        main: [],
        sub: ["all"]
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
