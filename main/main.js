//=============================== import API =================================
import { sleep } from 'k6';
import { error_check } from '../check/check.js';
import { scenario } from 'k6/execution';

import { SIEM_Event_Summary } from '../api/SIEM_Event_Summary.js';
import { SIEM_Affected_Organizations } from '../api/SIEM_Affected_Organizations.js';
import { SIEM_detail } from '../api/SIEM_detail.js';
import { SIEM_export } from '../api/SIEM_export.js';
import { SIEM_ticket_list } from '../api/SIEM_ticket_list.js';
import { SIEM_export_ticket } from '../api/SIEM_export_ticket.js';
import { SIEM_ticket_detail } from '../api/SIEM_ticket_detail.js';
import { EDR_security_chart } from '../api/EDR_security_chart.js';
import { EDR_security_detail } from '../api/EDR_security_detail.js';
import { EDR_security_export } from '../api/EDR_security_export.js';
import { EDR_antivirus_event } from '../api/EDR_antivirus_event.js';
import { EDR_antivirus_detail } from '../api/EDR_antivirus_detail.js';
import { EDR_antivirus_export } from '../api/EDR_antivirus_export.js';
import { Asset_management_graph } from '../api/Asset_management_graph.js';
import { Asset_management_detail } from '../api/Asset_management_detail.js';
import { Asset_management_export } from '../api/Asset_management_export.js';
import { Asset_management_overview } from '../api/Asset_management_overview.js';
import { Asset_management_export_overview } from '../api/Asset_management_export_overview.js';
import { Dashboard_graph } from '../api/Dashboard_graph.js';
import { Dashboard_magnitude } from '../api/Dashboard_magnitude.js';
import { Dashboard_magnitude_overall } from '../api/Dashboard_magnitude_overall.js';
import { Dashboard_Company_Attacks } from '../api/Dashboard_Company_Attacks.js';
import { Dashboard_All_Departments } from '../api/Dashboard_All_Departments.js';
import { Dashboard_All_Departments_export } from '../api/Dashboard_All_Departments_export.js';
import { Dashboard_event } from '../api/Dashboard_event.js';
import { Dashboard_service } from '../api/Dashboard_service.js';
import { Log_status_overview } from '../api/Log_status_overview.js';
import { Log_status_detail } from '../api/Log_status_detail.js';
import { Log_status_export } from '../api/Log_status_export.js';
import { Login_fail_graph } from '../api/Login_fail_graph.js';
import { Login_fail_detail } from '../api/Login_fail_detail.js';
import { Login_fail_export } from '../api/Login_fail_export.js';
import { backup_graph } from '../api/backup_graph.js';
import { backup_detail } from '../api/backup_detail.js';
import { backup_export } from '../api/backup_export.js';
import { daily_csoc_overview_post_all_data } from '../api/daily_csoc_overview_post_all_data.js';
import { daily_csoc_overview_get_data } from '../api/daily_csoc_overview_get_data.js';
import { daily_csoc_overview_history_log_alert } from '../api/daily_csoc_overview_history_log_alert.js';
import { API_GET_EDR } from '../api/API_GET_EDR.js';
import { API_GET_Backup_data } from '../api/API_GET_Backup_data.js';
import { API_GET_TICKET } from '../api/API_GET_TICKET.js';
import { API_LIST_USERS_DUO } from '../api/API_LIST_USERS_DUO.js';
import { API_LOG_LOGIN_DUO } from '../api/API_LOG_LOGIN_DUO.js';
import { company } from '../api/company.js';
import { encrypt } from '../api/encrypt.js';
import { decrypt } from '../api/decrypt.js';



//============================================================================

export default function () {    //เรียกใช้ API ใน export default function
  //============== SIEM ======================//
  //response = SIEM_Event_Summary()              // 1
  //response = SIEM_Affected_Organizations()     // 2
  //response = SIEM_detail()                     // 3
  //response = SIEM_export()                     // 4
  //response = SIEM_ticket_list()                // 5
  //response = SIEM_export_ticket()              // 6
  //response = SIEM_ticket_detail()              // 7

  //============== EDR ======================//
  //response = EDR_security_chart()              // 8
  //response = EDR_security_detail()             // 9
  //response = EDR_security_export()             // 10
  //response = EDR_antivirus_event()             // 11
  //response = EDR_antivirus_detail()            // 12
  //response = EDR_antivirus_export()            // 13

  //============== ASSET ======================//
  //response = Asset_management_graph()          // 14
  //response = Asset_management_detail()         // 15
  //response = Asset_management_export()         // 16
  //response = Asset_management_overview()       // 17
  //response = Asset_management_export_overview()// 18

  //============== Dashboard ======================//
  //response = Dashboard_graph()                 // 19
  //response = Dashboard_magnitude()             // 20
  //response = Dashboard_magnitude_overall()     // 21
  //response = Dashboard_Company_Attacks()       // 22
  //response = Dashboard_All_Departments()       // 23
  //response = Dashboard_All_Departments_export()// 24
  response = Dashboard_event()                 // 25
  //response = Dashboard_service()               // 26

  //============== Log status ======================//
  //response = Log_status_overview()             // 27
  //response = Log_status_detail()               // 28
  //response = Log_status_export()               // 29

  //============== Login Fail ======================//
  //response = Login_fail_graph()                // 30
  //response = Login_fail_detail()               // 31
  //response = Login_fail_export()               // 32

  //============== Backup ======================//
  //response = backup_graph()                    // 33
  //response = backup_detail()                   // 34
  //response = backup_export()                   // 35

  //============== Daily ======================//
  //response = daily_csoc_overview_post_all_data()   // 36
  //response = daily_csoc_overview_get_data()        // 37
  //response = daily_csoc_overview_history_log_alert()// 38

  //============== Next Pie ======================//
  //response = API_GET_EDR()                     // 39
  //response = API_GET_Backup_data()             // 40
  //response = API_GET_TICKET()                  // 41
  //response = API_LIST_USERS_DUO()              // 42
  //response = API_LOG_LOGIN_DUO()               // 43

  //============== All ======================//
  //response = company()                         // 44
  //response = encrypt()                         // 45
  //response = decrypt()                         // 46

  error_check(response);
  sleep(1)
}











































































const cid = __ENV.cid || "1";
const id = __ENV.id || "1";
const projectname = __ENV.projectname || "1";
const user = __ENV.user || "1";
const durationx = __ENV.durationx || "1";
let response;
const scenariox = __ENV.scenariox || "1";
let options;
const vusx = Math.ceil(user / durationx);
if (scenariox == 1) {
  options = {
    http: {
      timeout: '300s'
    },
    insecureSkipTLSVerify: true,
    discardResponseBodies: true,
    scenarios: {
      contacts: {
        executor: 'per-vu-iterations',
        vus: vusx,
        iterations: durationx,
        maxDuration: '10m',
        gracefulStop: '120s',
      },
    },
  };
}
else if (scenariox == 2) {
  options = {
    http: {
      timeout: '300s'
    },
    insecureSkipTLSVerify: true,
    vus: user,
    duration: durationx + 's',
    gracefulStop: '120s',
  };
}
else if (scenariox == 3) {
  options = {
    http: {
      timeout: '300s'
    },
    insecureSkipTLSVerify: true,
    scenarios: {
      example_scenario: {
        executor: 'constant-arrival-rate',
        // rate: user,
        // timeUnit: durationx+'s',
        rate: vusx,
        timeUnit: '1s',
        preAllocatedVUs: user,
        duration: durationx + 's', // ระบุระยะเวลาที่ต้องการให้ทดสอบ
        gracefulStop: '120s',
      },
    },
  };
}
else {
  options = {
    insecureSkipTLSVerify: true,
    discardResponseBodies: true,
    scenarios: {
      contacts: {
        executor: 'per-vu-iterations',
        vus: vusx,
        iterations: durationx,
        maxDuration: '10m',
      },
    },
  };
}
export { options };