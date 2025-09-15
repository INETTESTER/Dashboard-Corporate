import http from 'k6/http';

export function API_GET_Backup_data() {
    const url = 'https://203.151.15.82/all_service/next_pie/api/v1/backup';

    const payload = JSON.stringify({
        encryption: "YaIzjszkId88HHdsu7AAX1WnyOAGJ/E6xLCyyJDqkKVS5zlIoeqZSOEH84e8gBvuywCk805bhbHYMWejxOKj6ZrVOp1i8qZ2iWe+54L6nmN96bP3YewNW5RkN/+iyFLr"
    });

    const params = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiIyMDE1MjQ1ODcxMzYiLCJmdWxsbmFtZSI6InBpbnlhZGEgc2FuZ2NoYXQiLCJleHAiOjE3NTc5OTYyNzV9.XE3SBZNhAPuKSkAlcGGKWU1KqGH1PoTiCKL4PDXkIXI'
        },
    };

    const res = http.post(url, payload, params);

    //console.log('Response body:', res.body);

    return res;
}
