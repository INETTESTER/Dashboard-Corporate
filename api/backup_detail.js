import http from 'k6/http';

export function backup_detail() {
    const url = 'https://203.151.15.82/all_service/dr/backup_detail/1/10';

    const payload = JSON.stringify({
        sub: ["all"],
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
