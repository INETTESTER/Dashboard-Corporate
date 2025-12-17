import http from 'k6/http';

export function API_GET_TICKET() {
    const url = 'https://203.151.15.82/all_service/next_pie/api/v1/ticket/1/10';

    const payload = JSON.stringify({
        encryption: "YaIzjszkId88HHdsu7AAX1WnyOAGJ/E6xLCyyJDqkKVS5zlIoeqZSOEH84e8gBvuywCk805bhbHYMWejxOKj6cD+VCDHzzk75t1sUiiocDkT4tNy27n9vbm6Rux5woWfQhRJR4zVgvirSYygr/PZ/C/uTneFGlgT+hd7vuteRfRh1fv6TQGJxjMPmY63B2Ao"
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
