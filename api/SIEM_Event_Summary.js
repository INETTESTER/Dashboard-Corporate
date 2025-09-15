import http from 'k6/http';
import { check } from 'k6';

export function SIEM_Event_Summary() {
    const url = 'https://203.151.15.82/all_service/siem/event-summary';

    const payload = JSON.stringify({
        brand: ["FortiSIEM", "SIEM-QRadar"],
        start_date: "",
        end_date: "",
        main: [],
        sub: ["all"]
    });

    const params = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const res = http.post(url, payload, params);

    //console.log('Response body:', res.body); // log response body


    return res; // return response object
}

