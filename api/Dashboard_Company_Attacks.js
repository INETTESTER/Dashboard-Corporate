import http from 'k6/http';

export function Dashboard_Company_Attacks() {
    const url = 'https://203.151.15.82/all_service/dashboard/company-attacks';

    const payload = JSON.stringify({
        main: [],
        sub: ["14848", "19920"]
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
