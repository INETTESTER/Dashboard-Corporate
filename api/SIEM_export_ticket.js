import http from 'k6/http';

export function SIEM_export_ticket() {
    const url = 'https://203.151.15.82/all_service/siem/export-ticket';

    const payload = JSON.stringify({
        brand: "FortiSIEM",
        category_name: "Brute Force Login Success",
        search: "6",
        main: [],
        sub: ["14848"]
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
