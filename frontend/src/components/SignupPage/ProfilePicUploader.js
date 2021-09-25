import React, { useState } from "react";
import { Upload, message } from "antd";
import { LoadingOutlined, UploadOutlined } from "@ant-design/icons";

const beforeUpload = file => {
  const isJPGorPNG = file.type === "image/jpeg" || file.type === "image/png";

  if (!isJPGorPNG) {
    message.error("You can only upload JPG/PNG file!");
  }

  const isLt2M = file.size / 1024 / 1024 < 2;

  if (!isLt2M) {
    message.error("File size must be samller than 2MB!");
  }

  return isJPGorPNG && isLt2M;
};

const ProfilePicUploader = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [imgUrl, setImgUrl] = useState("");

  const uploadButton = (
    <div>
      {isLoading ? <LoadingOutlined /> : <UploadOutlined />}
      <div>Upload</div>
    </div>
  );

  const handleChange = info => {
    if (info.file.status === "uploading") {
      ("uploading");
      setIsLoading(true);
    }

    if (info.file.status === "done") {
      setImgUrl(info.file.response.imageUrl);
      setIsLoading(false);
    }
  };
  return (
    <Upload
      name="profilePic"
      listType="picture-card"
      showUploadList={false}
      action="https://run.mocky.io/v3/63894c43-5dc1-49bc-8f1c-b885343798ef"
      beforeUpload={beforeUpload}
      onChange={handleChange}
    >
      {imgUrl ? <img src={imgUrl} width="100%" alt="profile" /> : uploadButton}
    </Upload>
  );
};

export default ProfilePicUploader;
