import http from 'k6/http';

export function daily_csoc_overview_get_data() {
    const url = 'https://203.151.15.82/all_service/daily_alert_overview/get_csoc';

    const payload = JSON.stringify({
        search: "บริษัท ไรท์วัน จำกัด "
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
