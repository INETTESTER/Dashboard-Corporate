import http from 'k6/http';

export function backup_graph() {
    const url = 'https://203.151.15.82/all_service/v2/dr/backup';

    const payload = JSON.stringify({
        encryption: '1J6hMgIBGtD81taj1bJd53pWOD1Ganr1Iohhoc8/Gtmyech5AuSMDdz3wtRCuiuXkiaL6HOCtIYfyMpcMkho8oU4G7xik2dlMEOTCy7x4ik0mZyWKb0RrQouPkAf74hu7Tph0JYxyak4UPRGkGxItSsLLLiS1yrPMRvvQhncBcSoem9oTKMvCsEAmjP9LITmUp8VQWYxqfolb7cL5j/lSeBEHXj6nChu3nlxbJpKzEJaxFvjv1Yk8h7jkluzzReNqqrQT7MUkdmyOo+gteGhNQ=='
    });

    const params = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiIxMDA0MDg3MzM4MjQiLCJmdWxsbmFtZSI6IkJhbmNoYSBUaG9rYWV3Iiwicm91dGVfb3RwIjoidGhyb3VnaCBvdHAiLCJleHAiOjE3NjU5NDI4Nzd9.iQx5-Gh4fJ1OFV0_pUOaGui-Cn7SKRkVAMSihQ5fwwk',
        },
    };

    const response = http.post(url, payload, params);

    //console.log('Response body:', response.body);

    return response;
}
