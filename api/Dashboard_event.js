import http from 'k6/http';

export function Dashboard_event() {
    const url = 'https://203.151.15.82/all_service/dashboard/event';

    const payload = JSON.stringify({
        search: "",
        sorted: true,
        today: false,
        main: [],
        sub: ["all"],
        anomaly: []
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
