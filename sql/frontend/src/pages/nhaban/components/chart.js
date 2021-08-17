import { Column } from "@ant-design/charts";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Chart = () => {
  const [data, setData] = useState([
    {
      name: "Đơn hàng",
      date: "Jan.",
      money: 0,
    },
    {
      name: "Đơn hàng",
      date: "Feb.",
      money: 0,
    },
    {
      name: "Đơn hàng",
      date: "Mar.",
      money: 0,
    },
    {
      name: "Đơn hàng",
      date: "Apr.",
      money: 0,
    },
    {
      name: "Đơn hàng",
      date: "May",
      money: 0,
    },
    {
      name: "Đơn hàng",
      date: "Jun.",
      money: 0,
    },
    {
      name: "Đơn hàng",
      date: "Jul.",
      money: 0,
    },
    {
      name: "Đơn hàng",
      date: "Aug.",
      money: 0,
    },
    {
      name: "Đơn hàng",
      date: "Sep.",
      money: 0,
    },
    {
      name: "Đơn hàng",
      date: "Oct.",
      money: 0,
    },
    {
      name: "Đơn hàng",
      date: "Nov.",
      money: 0,
    },
    {
      name: "Đơn hàng",
      date: "Dec.",
      money: 0,
    },
  ]);
  const [config, setConfig] = useState({
    data: data,
    isGroup: true,
    xField: "date",
    yField: "money",
    seriesField: "name",
    label: {
      position: "middle",
      layout: [
        { type: "interval-adjust-position" },
        { type: "interval-hide-overlap" },
        { type: "adjust-color" },
      ],
    },
  });
  
  useEffect(() => {
    const dataW = JSON.parse(window.localStorage.getItem("auth"));
    axios
      .get("http://localhost:5000/api/nhaban/doanhthu/" + dataW.MaNhaBan)
      .then((res) => {
        if (res.data.length !== 0) {
          let temp = [
            {
              name: "Đơn hàng",
              date: "Jan.",
              money: res.data[0].ThangMot,
            },
            {
              name: "Đơn hàng",
              date: "Feb.",
              money: res.data[0].ThangHai,
            },
            {
              name: "Đơn hàng",
              date: "Mar.",
              money: res.data[0].ThangBa,
            },
            {
              name: "Đơn hàng",
              date: "Apr.",
              money: res.data[0].ThangTu,
            },
            {
              name: "Đơn hàng",
              date: "May",
              money: res.data[0].ThangNam,
            },
            {
              name: "Đơn hàng",
              date: "Jun.",
              money: res.data[0].ThangSau,
            },
            {
              name: "Đơn hàng",
              date: "Jul.",
              money: res.data[0].ThangBay,
            },
            {
              name: "Đơn hàng",
              date: "Aug.",
              money: res.data[0].ThangTam,
            },
            {
              name: "Đơn hàng",
              date: "Sep.",
              money: res.data[0].ThangChin,
            },
            {
              name: "Đơn hàng",
              date: "Oct.",
              money: res.data[0].ThangMuoi,
            },
            {
              name: "Đơn hàng",
              date: "Nov.",
              money: res.data[0].ThangMuoiMot,
            },
            {
              name: "Đơn hàng",
              date: "Dec.",
              money: res.data[0].ThangMuoiHai,
            },
          ];
          setData(temp);

          let config = {
           
            isGroup: true,
            xField: "date",
            yField: "money",
            seriesField: "name",
            label: {
              position: "middle",
              layout: [
                { type: "interval-adjust-position" },
                { type: "interval-hide-overlap" },
                { type: "adjust-color" },
              ],
            },
          };
          setConfig(config);
          console.log(config);
        }
      });
  }, []);

  return (
    <div>
      <Column  data={data} {...config} />
    </div>
  );
};
export default Chart;
