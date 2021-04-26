import React from "react";
import { Tabs, Card } from "antd";
import LoginForm from "./LoginForm";
import { STUDENT, STAFF, INDUSTRY_CLIENT } from "../../utils/APP_CONSTANTS";

const { TabPane } = Tabs;

const LoginTab = () => (
  <Card>
    <Tabs defaultActiveKey="1">
      <TabPane tab="Student" key="1">
        <LoginForm userType={STUDENT} />
      </TabPane>
      <TabPane tab="Staff" key="2">
        <LoginForm userType={STAFF} />
      </TabPane>
      <TabPane tab="Industry Client" key="3">
        <LoginForm userType={INDUSTRY_CLIENT} />
      </TabPane>
    </Tabs>
  </Card>
);

export default LoginTab;
