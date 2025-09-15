import http from 'k6/http';

export function SIEM_ticket_list() {
    const url = 'https://203.151.15.82/all_service/siem/ticket-list/1/10?=null';

    const payload = JSON.stringify({
        brand: "FortiSIEM",
        category_name: "Windows User",
        search: "",
        main: [],
        sub: ["C02-000123"]
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
