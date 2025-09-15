import http from 'k6/http';

export function Login_fail_detail() {
    const url = 'https://203.151.15.82/all_service/login_fail/detail/1/10';

    const payload = JSON.stringify({
        start_date: "12/05/2567",
        end_date: "",
        main: [],
        sub: ["C02-000123"]
    });

    const params = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiI0MjQ2NjAyMDU1Njg2NDEyNCIsImZ1bGxuYW1lIjoiUGhpdHRoYXlhIE5heWFvIiwiZXhwIjoxNzU2Mzc1MjIxfQ.YwGWhsj22Q6-bKYMkOwAv0V9aQu68D9R0_mxBtumLYs'
        },
    };

    const res = http.post(url, payload, params);

    //console.log('Response body:', res.body);

    return res;
}
