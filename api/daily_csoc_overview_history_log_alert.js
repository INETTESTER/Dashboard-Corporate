import http from 'k6/http';

export function daily_csoc_overview_history_log_alert() {
    const url = 'https://203.151.15.82/all_service/daily_alert_overview/history-alert';

    const payload = JSON.stringify({
        id: 9
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
