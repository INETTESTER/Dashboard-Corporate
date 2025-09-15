import http from 'k6/http';

export function Asset_management_export_overview() {
    const url = 'https://203.151.15.82/all_service/asset/overview-export';

    const payload = JSON.stringify({
        search: "",
        status: ["ตรวจสอบแล้ว", "ยังไม่ได้ตรวจสอบ"],
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
