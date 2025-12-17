import http from 'k6/http';

export function API_GET_EDR() {
    const url = 'https://203.151.15.82/all_service/next_pie/api/v1/report_edr/overview_edr';

    const payload = JSON.stringify({
        encryption: "YaIzjszkId88HHdsu7AAX1WnyOAGJ/E6xLCyyJDqkKVS5zlIoeqZSOEH84e8gBvuywCk805bhbHYMWejxOKj6ZrVOp1i8qZ2iWe+54L6nmMWIonUZtdXqpDliU6mWVhzuQ9BfAFaSSaFl88jrFHpBw=="
    });

    const params = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiIxMDA0MDg3MzM4MjQiLCJmdWxsbmFtZSI6IkJhbmNoYSBUaG9rYWV3Iiwicm91dGVfb3RwIjoidGhyb3VnaCBvdHAiLCJleHAiOjE3NjU2MTE2OTh9.VExuE0JWcCk-Q-ToDiEIKHx_NxjJN-15kHj01kHG-gI'
        },
    };

    const res = http.post(url, payload, params);

    //console.log('Response body:', res.body);

    return res;
}
