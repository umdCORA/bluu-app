import React from 'react';
import {
  Card, CardBody, CardTitle, CardSubtitle,
} from 'reactstrap';
import './ReportLogs.scss';

class ReportLogs extends React.Component {
  render() {
    return (
      <Card className="ReportLogs">
        <CardBody>
          <CardTitle tag="h5"> Report Logs </CardTitle>
        </CardBody>
      </Card>
    );
  }
}

export default ReportLogs;
