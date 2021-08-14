import { Column } from "@ant-design/charts";
import React, { useState, useEffect } from "react";
import axios from "axios";
const Chart = ({config, data, setData, setConfig}) => {
  useEffect(() => {
    const dataW = JSON.parse(window.localStorage.getItem("auth"));
    const fetchData = async () => {
      for (let i = 1; i <= 12; i++) {
        const info1 = {
          MaNhaBan: dataW.MaNhaBan,
          thang: i,
        };
        await axios
          .post(
            "http://localhost:5000/api/nhaban/thang",
            JSON.stringify(info1),
            {
              headers: { "Content-Type": "application/json" },
            }
          )
          .then((res) => {
            const money = res.data[0].donhang;
            const temp = data;
            temp[i - 1] = { ...temp[i - 1], money };
            setData(temp);
          })
          .catch((err) => {
            console.log(err);
          });
      }

      await setConfig({
        data: data,
        isGroup: true,
        xField: "date",
        yField: "money",
        seriesField: "name",
        dodgePadding: 2,
        label: {
          position: "middle",
          layout: [
            { type: "interval-adjust-position" },
            { type: "interval-hide-overlap" },
            { type: "adjust-color" },
          ],
        },
      });
    };
    fetchData();
    console.log(config);
  }, []);
  return <Column {...config} />;
};
export default Chart;
