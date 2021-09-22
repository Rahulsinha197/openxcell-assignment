import React, { useState } from "react";
import { observable } from "mobx";
import { observer, inject } from "mobx-react";
import { Card, Table, Button, Tooltip, message, Select, Form } from "antd";
import PageHeader from "../../globals/components/pageHeader/PageHeader";
import Columns from "./Columns";
import UpdateProperty from "./updateProperty/UpdateProperty";
import { withRouter, useHistory } from "react-router-dom";

const FormItem = Form.Item;
const { Option } = Select;
function Property() {
  const history = useHistory();
  const [value, setValue] = useState("");
  const [visible, setVisible] = useState(false);
  const [propertyList, setPropertyList] = useState([]);

  let row = {};
  let mode = null;
  let isVisible = false;
  const toggleModal = () => {
    setVisible(!visible);
  };

  //   const handleCancel = () => {
  //       toggleModal();
  //   }

  //   const pm = {
  //       handleCancel: handleCancel(),
  //   }
  const handleDrpdwn = (value) => {
    console.log(value);
    const search = propertyList.filter((pl) => pl.locality.includes(value));
    setPropertyList(search);
  };
  const apiFetch = async (data) => {
    const response = await fetch("https://api.imgur.com/3/upload", {
      method: "POST",
      body: data,
    });
    console.log(response, 87);
  };
  const addProperty = async (e, form) => {
    console.log(form, e);
    console.log("Here ");
    let updatedValues = [...propertyList, e];
    console.log(e, 93);
    // for (const element of e.image.fileList) {
    //   const formData = new FormData();
    //   formData.append("image", element);
    //   setTimeout(async () => {
    //     await apiFetch(formData);
    //   }, 1000);
    // }
    setPropertyList(updatedValues);
    setVisible(false);
    form.resetFields();
  };

  const onEdit = (col) => {
    row = col;
    mode = "edit";
  };

  const redirectToDetais = () => {
    history.push("/details");
  };
  const pm = {
    addProperty: addProperty,
    onEdit: onEdit,
    redirectToDetais: redirectToDetais,
  };
  const handleChange = (e) => {
    setValue(e);
    const filterData = propertyList.filter((data) => data.locality.includes(e));
    setPropertyList(filterData);
  };
  return (
    <div className="organisation">
      <PageHeader title={"Properties"} />
      <UpdateProperty
        setVisible={setVisible}
        isVisible={visible}
        pm={pm}
        row={row}
      />
      <Card>
        <Select
          style={{ width: "14em" }}
          showSearch
          placeholder="Search an property Area"
          optionFilterProp="children"
          value={value}
          onChange={(e) => handleChange(e)}
          filterOption={(input, option) =>
            option.props.children.toLowerCase().indexOf(input.toLowerCase())
          }
        >
          {Array.isArray(propertyList) &&
            propertyList.map((pl) => (
              <Option
                onClick={() => handleDrpdwn(pl.locality)}
                value={pl.locality}
              >
                {pl.locality}
              </Option>
            ))}
        </Select>
        <div className="add-btn">
          <Tooltip placement="left" title={"Add new Property"}>
            <Button
              type="primary"
              shape="circle"
              icon="ADD"
              size={"large"}
              onClick={toggleModal}
            />
          </Tooltip>
        </div>
        <Table
          dataSource={propertyList}
          columns={Columns(pm)}
          scroll={{ x: true }}
          bordered
        />
      </Card>
    </div>
  );
}

export default withRouter(Property);
