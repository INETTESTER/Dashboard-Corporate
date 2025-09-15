import http from 'k6/http';

export function SIEM_ticket_detail() {
    const url = 'https://203.151.15.82/all_service/siem/ticket-detail';

    const payload = JSON.stringify({
        ticket_id: 250507667
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
