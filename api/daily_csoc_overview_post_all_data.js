import http from 'k6/http';

export function daily_csoc_overview_post_all_data() {
    const url = 'https://203.151.15.82/all_service/daily_alert_overview/?page=1&perpage=10';

    const payload = JSON.stringify({
        date: "18/07/2568",
        state: [],
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
