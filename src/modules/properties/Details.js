import React, { useEffect, useState } from "react";
import { Carousel } from "antd";

const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

function Details() {
  const [info, setInfo] = useState();
  useEffect(() => {
    let details = JSON.parse(localStorage.getItem("details"));
    setInfo(details || {});
  }, []);
  return (
    <>
      <Carousel effect="fade" autoplay>
        {info &&
          info.fileList.map((data) => (
            <div>
              <h3 style={contentStyle}>
                {info && <img alt="abc" src={data} />}
              </h3>
            </div>
          ))}
      </Carousel>
      Details of {info && info.name}
      <ul>
        <li>BathRoom: {info && info.bath}</li>
        <li>Bed Room: {info && info.bedRoom}</li>
        <li>Carpet Area: {info && info.carpetArea}</li>
        <li>Description: {info && info.description}</li>
        <li>Locality: {info && info.locality}</li>
        <li>Address: {info && info.address}</li>
      </ul>
    </>
  );
}

export default Details;
