import http from 'k6/http';

export function encrypt() {
    const url = 'https://203.151.15.82/all_service/auth/encrypt';

    const payload = JSON.stringify({
        username: "test",
        password: "test",
        expire: null
    });

    const params = {
        headers: {
            'Content-Type': 'application/json'
        },
    };

    const res = http.post(url, payload, params);

    //console.log('Response body:', res.body);

    return res;
}
