import http from 'k6/http';

export function API_LOG_LOGIN_DUO() {
    const url = 'https://203.151.15.82/duo_service_nextpie/api/v1/user/detail/10/1';

    const payload = JSON.stringify({
        encryption: "YaIzjszkId88HHdsu7AAX6R6Py4nI6BWu2JE9YNv7yBZAlCjpe0uZ2AFRjPCEBb5dojc0BSQk+Orx6TafW47JYDfieBkykhk/GES5mYapg4mX71h5z/4SVMQ9idV70DI"
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
