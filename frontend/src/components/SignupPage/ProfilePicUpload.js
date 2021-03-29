import { Form, Upload, message, Button } from 'antd';
import { InboxOutlined, UploadOutlined  } from '@ant-design/icons';
import './signuppage.css';

const ProfilePicUpload = () => {
  return(
    <div className="site-button-ghost-wrapper">
        <Upload action="../../../public" directory>
          <Button ghost size="large" icon={<InboxOutlined />}>Click, or Drag and Drop to upload profile picture.</Button>
        </Upload>
    </div>
  );
};

export default ProfilePicUpload;

