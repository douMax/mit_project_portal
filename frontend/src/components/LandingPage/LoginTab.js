import React from "react";
import { Tabs, Card } from "antd";
import LoginForm from "./LoginForm";
import { STUDENT, STAFF, INDUSTRY_CLIENT } from "../../utils/APP_CONSTANTS";
import Layout, { Content, Footer } from "antd/lib/layout/layout";

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
        <LoginForm userType={INDUSTRY_CLIENT} />
      </TabPane>
    </Tabs>
    <div style={{maxWidth:"300px"}}>
      {"For account related enquiries, Melbourne students and staff please contact IT Service Desk at "}
      <a href="mailto:servicedesk@mit.edu.au">servicedesk@mit.edu.au</a>  {"and Sydney students and staff at "}
      <a href="mailto:tech-syd@academic.mit.edu.au">tech-syd@academic.mit.edu.au</a>
    </div>
  </Card>
    </>
);

export default LoginTab;
