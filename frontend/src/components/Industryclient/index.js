import { Button, Space } from "antd";
import ClientSignupForm from "./ClientSignupForm";
import styled from "styled-components";

const ClientSignUp = () => {
  return (
    <div>
      <ClientSignupForm />
      <space>
        <Button danger>Cancel</Button>
      </space>{" "}
      <Space>
        <Button type="danger"> Submit</Button>{" "}
      </Space>
    </div>
  );
};

export default ClientSignUp;
