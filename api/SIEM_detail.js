import http from 'k6/http';
import { check } from 'k6';

export function SIEM_detail() {
    const url = 'https://203.151.15.82/all_service/siem/detail/1/10';

    const payload = JSON.stringify({
        brand: ["FortiSIEM"],
        start_date: "",
        end_date: "",
        search: "",
        category_name: [],
        duration: "",
        main: [],
        sub: ["11784"]
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
