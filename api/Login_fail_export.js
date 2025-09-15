import http from 'k6/http';

export function Login_fail_export() {
    const url = 'https://203.151.15.82/all_service/login_fail/export';

    const payload = JSON.stringify({
        magnitude: [],
        start_date: "18/04/2568",
        end_date: "18/07/2568",
        search: "",
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
