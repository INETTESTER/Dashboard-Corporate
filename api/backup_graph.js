import http from 'k6/http';

export function backup_graph() {
    const url = 'https://203.151.15.82/all_service/dr/backup';

    const payload = JSON.stringify({
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
