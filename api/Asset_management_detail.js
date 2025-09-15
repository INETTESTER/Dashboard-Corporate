import http from 'k6/http';

export function Asset_management_detail() {
    const url = 'https://203.151.15.82/all_service/asset/detail/1/10';

    const payload = JSON.stringify({
        search: "b",
        device_status: [],
        main: [],
        sub: ["17131"]
    });

    const params = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const res = http.post(url, payload, params);

    console.log('Response body:', res.body);

    return res;
}
