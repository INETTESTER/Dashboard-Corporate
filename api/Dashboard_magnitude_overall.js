import http from 'k6/http';

export function Dashboard_magnitude_overall() {
    const url = 'https://203.151.15.82/all_service/dashboard/magnitude-overall';

    const payload = JSON.stringify({
        search: "",
        today: false,
        main: [],
        sub: ["14126"]
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
