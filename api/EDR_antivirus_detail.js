import http from 'k6/http';

export function EDR_antivirus_detail() {
    const url = 'https://203.151.15.82/all_service/edr/strike/table/1/10';

    const payload = JSON.stringify({
        brand: "CrowdStrike",
        tactic: [],
        status: [],
        technique: [],
        start_date: "03/06/2568",
        end_date: "03/09/2568",
        search: "",
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
