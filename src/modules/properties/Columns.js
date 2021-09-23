import React from "react";
import { useHistory } from "react-router-dom";
export default function (pm) {
  const history = useHistory();

  return [
    {
      title: "Property Name",
      dataIndex: "name",
      rowKey: "name",
      key: "name",
      sorter: (a, b) => {
        if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
        if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
        return 0;
      },
    },
    {
      title: "Description",
      dataIndex: "description",
      rowKey: "description",
      key: "description",
      width: 150,
    },
    {
      title: "Address",
      dataIndex: "address",
      rowKey: "address",
      key: "address",
    },
    {
      title: "Locality",
      dataIndex: "locality",
      rowKey: "locality",
      key: "locality",
    },
    {
      title: "Price",
      dataIndex: "price",
      rowKey: "price",
      key: "price",
    },
    {
      title: "Bed Room",
      dataIndex: "bedRoom",
      rowKey: "bedRoom",
      key: "bedRoom",
    },
    {
      title: "Bath",
      dataIndex: "bath",
      rowKey: "bath",
      key: "bath",
    },
    {
      title: "Carpet Area",
      dataIndex: "carpetArea",
      rowKey: "carpetArea",
      key: "carpetArea",
    },
    // {
    //   title: "Images",
    //   dataIndex: "image",
    //   rowKey: "image",
    //   key: "image",
    //   render: (text, record) => {
    //     record.image && console.log(record.image, 64);
    //     return (
    //       <img
    //         src={record.image || record.image.file.response}
    //         alt="NA"
    //         style={{ height: "50px", width: "50px" }}
    //       />
    //     );
    //   },
    // },
    {
      title: "Details",
      dataIndex: "details",
      rowKey: "details",
      key: "details",
      render: (text, record) => (
        <button
          onClick={() => {
            console.log(record);
            localStorage.setItem("details", JSON.stringify(record));
            history.push("/details");
          }}
        >
          {"Details"}
        </button>
      ),
    },
  ];
}
