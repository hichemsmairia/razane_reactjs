import { useEffect, useState } from "react";
import Layouts from "../../Layouts";
import { Row, Col } from "antd";
import "./index.css";
import Temperature from "../../assets/icons/temperature.png";
import Humidity from "../../assets/icons/humidity.png";
import Gaz from "../../assets/icons/smoke.png";
import React from "react";
import dataService from "../../services/data.service";
import { Spin } from "antd";

export default () => {
  const [data, setdata] = useState([]);

  // il permet de lancer une fonction automatiquement
  useEffect(() => {
    dataService.getAll().on(
      "value",
      (snapshot) => {
        // on va prendre le resultat et le mettre dans une variable "data"
        setdata(snapshot.val()["All sensors"]);
      },
      (errorObject) => {
        console.log("The read failed: " + errorObject.name);
      }
    );
  }, []);

  return (
    <>
      <Layouts>
        <Row
          style={{ display: "flex", justifyContent: "space-around" }}
          gutter={24}
        >
          <Col span={10}>
            <div className="stats_item">
              <div className="ledt_stats">
                <img src={Gaz} alt="" className="icon" />
                <span>Gaz </span>
              </div>
              <span className="count">
                {" "}
                {data.GAZ || data.GAZ === 0 ? data.GAZ + " Pa" : <Spin />}
              </span>
            </div>
          </Col>
          <Col span={10}>
            <div className="stats_item">
              <div className="ledt_stats">
                <img src={Humidity} alt="" className="icon" />{" "}
                <span>HUMIDITY</span>
              </div>
              <span className="count">
                {data.HUMIDITY ? data.HUMIDITY + " %" : <Spin />}
              </span>
            </div>
          </Col>
        </Row>
        <Row
          style={{ display: "flex", justifyContent: "space-around" }}
          gutter={24}
        >
          <Col span={7}>
            <div className="stats_item">
              <div className="ledt_stats">
                <img src={Temperature} alt="" className="icon" />
                <span>TEMP</span>
              </div>
              <span className="count">
                {data.TEMPERATURE ? data.TEMPERATURE + " C°" : <Spin />}
              </span>
            </div>
          </Col>
        </Row>
      </Layouts>
    </>
  );
};
