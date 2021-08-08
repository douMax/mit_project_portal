import React from "react";
import { Tabs, Card } from "antd";
import LoginForm from "./LoginForm";
import { STUDENT, STAFF, CLIENT } from "../../utils/APP_CONSTANTS";

const { TabPane } = Tabs;

const LoginTab = () => (
  <>
    <Card>
      <Tabs type="card" defaultActiveKey="1">
        <TabPane tab="MIT Student" key="1">
          <LoginForm userType={STUDENT} />
        </TabPane>
        <TabPane tab="MIT Staff" key="2">
          <LoginForm userType={STAFF} />
        </TabPane>
        <TabPane tab="MIT Industry Client" key="3">
          <LoginForm userType={CLIENT} />
        </TabPane>
      </Tabs>
      <div style={{ maxWidth: "300px" }}>
        {"For account related enquiries, Melbourne students and staff please contact IT Service Desk at "}
        <a href="mailto:servicedesk@mit.edu.au">servicedesk@mit.edu.au</a>  {"and Sydney students and staff at "}
        <a href="mailto:tech-syd@academic.mit.edu.au">tech-syd@academic.mit.edu.au</a>
      </div>
      <hr />
      <div>
        <h4>Quick Links</h4>
        <ul style={{ listStyleType: "none", display: "flex", flexDirection: "column" }}>
          <li style={{ margin: "2 px" }}>
            <a href="http://moodle.mit.edu.au/login/index.php" target="_blank">Moodle</a>
          </li>
          <li style={{ margin: "2px" }}>
            <a href="http://print.mit.edu.au/" target="_blank">MIT website</a>
          </li>
          <li style={{ margin: "2px" }}>
            <a href="http://print.mit.edu.au/" target="_blank">Print Account Balance - Lecturers and students</a>
          </li>
        </ul>
      </div>
    </Card>
  </>
);

export default LoginTab;
