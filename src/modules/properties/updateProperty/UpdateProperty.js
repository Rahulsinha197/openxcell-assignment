import React, { useState } from "react";
import { Modal, Form, Input, Button, Select } from "antd";
import "./Property.scss";

const FormItem = Form.Item;
const { Option } = Select;
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};
const UpdateProperty = ({ pm, form, isVisible, setVisible }) => {
  const [fileList, setFileList] = useState([]);
  const getBase64 = (file) => {
    console.log(file);
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      console.log(reader.result, 38);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const props = {
    //fileList: fileList,
    action: (file) => getBase64(file),
    onChange({ file, fileList }) {
      if (file.status !== "uploading") {
        console.log(file, fileList);
        setFileList(fileList);
      }
    },
  };
  const [updateform] = Form.useForm();

  const onImageUpload = (e) => {
    getBase64(e.target.files[0]).then((res) => {
      setFileList([...fileList, res]);
    });
  };

  const onFinish = (e) => {
    e.fileList = [...fileList];
    pm.addProperty(e, updateform);
  };

  return (
    <div className="update-org">
      <Modal
        title="Property"
        visible={isVisible}
        footer={null}
        onCancel={() => setVisible(false)}
        width="800px"
      >
        <Form
          {...formItemLayout}
          name="nest-messages"
          form={updateform}
          onFinish={onFinish}
        >
          <Form.Item
            name={"name"}
            label="Property Name :"
            rules={[
              {
                required: true,
                message: "Please enter name to update!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={"description"}
            label="Description :"
            rules={[
              {
                required: true,
                message: "Please enter description to update!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={"address"}
            label="Address :"
            rules={[
              {
                required: true,
                message: "Please enter address to update!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={"locality"}
            label="Locality :"
            rules={[
              {
                required: true,
                message: "Please enter locality to update!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={"price"}
            label="Price :"
            type="number"
            rules={[
              {
                required: true,
                message: "Please enter price to update!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={"bedRoom"}
            label="BedRoom :"
            rules={[
              {
                required: true,
                message: "Please enter bedRoom to update!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={"bath"}
            label="Bath :"
            rules={[
              {
                required: true,
                message: "Please enter bath to update!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={"carpetArea"}
            label="Carpet Area :"
            rules={[
              {
                required: true,
                message: "Please enter carpetArea to update!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          {/* <Form.Item name={"image"} label="Upload Image :">
            <Upload {...props}>
              <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>
          </Form.Item> */}
          <div className="upload-image-wrapper">
            {fileList.map((source) => (
              <span className="selected-image">
                <img src={source} style={{ width: "100px" }} />
              </span>
            ))}
            {fileList.length < 5 && (
              <div className="upload-wrapper">
                <input
                  type="file"
                  onChange={onImageUpload}
                  className="custom-file-input"
                />
              </div>
            )}
          </div>
          <Form.Item wrapperCol={{ ...tailFormItemLayout, offset: 8 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
        ;
      </Modal>
    </div>
  );
};

export default UpdateProperty;
