import http from 'k6/http';

export function Log_status_export() {
    const url = 'https://203.151.15.82/all_service/logs/detail-export';

    const payload = JSON.stringify({
        sub: ["14848"],
        main: [],
        status: [],
        type: [],
        firewall: [],
        last_found_date: [],
        search: "",
        sort: "DESC"
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
