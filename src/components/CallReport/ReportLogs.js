import React from 'react';
import {
  Card, CardBody, CardTitle,
} from 'reactstrap';
import './ReportLogs.scss';

class ReportLogs extends React.Component {
  // TODO remove once we get real logs
  render() {
    const DUMMY_LOGS = [
      "[12:00:00 PM] Call to HOWARD COUNTY 911 is initiated",
      "[12:00:20 PM] Patient is deemed unresponsive",
      "[12:00:30 PM] Patient is not breathing (AGONAL BREATHING IDENTIFIED) [12:00:40 PM] CPR is initiated",
      "[12:01:00 PM] Compressions are steady at 107 BPM",
      "[12:02:00 PM] Compressions continue to be steady at 107 BPM",
      "[12:03:00 PM] Compressions have slowed to ~100 BPM",
      "[12:03:00 PM] Another bystander has taken over CPR successfully",
      "[12:03:30 PM] Compressions have quickened to ~125 BPM",
      "[12:04:00 PM] An AED is brought to the scene.",
      "[12:04:30 PM] The AED is activated and used. No response from patient",
      "[12:05:00 PM] EMS arrives"
    ];
    console.log(DUMMY_LOGS);
    return (
      <Card className="ReportLogs">
        <CardBody>
          <CardTitle tag="h5"> Report Logs </CardTitle>
          {DUMMY_LOGS.map(log => <div key={log} className="log-row">{log}</div>)}
        </CardBody>
      </Card>
    );
  }
}

export default ReportLogs;
