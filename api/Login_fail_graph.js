import http from 'k6/http';

export function Login_fail_graph() {
    const url = 'https://203.151.15.82/all_service/login_fail/graph';

    const payload = JSON.stringify({
        start_date: "12/05/2567",
        end_date: "",
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
