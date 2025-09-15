import http from 'k6/http';
import { check } from 'k6';

export function SIEM_Affected_Organizations() {
    const url = 'https://203.151.15.82/all_service/siem/organization';

    const payload = JSON.stringify({
        brand: ["FortiSIEM", "SIEM-QRadar"],
        start_date: "",
        end_date: "",
        search: "",
        category_name: ["Brute Force Login Success", "High Privilege Login"],
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

