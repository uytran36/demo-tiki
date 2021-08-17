/* eslint-disable react-hooks/exhaustive-deps */
import { Layout, Menu, Breadcrumb, Row, Col } from "antd";
import { useState, useEffect } from "react";
// import { useHistory } from "react-router-dom";
import "./Profile.css";
import Sidebar from "./components/Sidebar";
import MainProfile from "./components/MainProfile";
import Bill from "./components/Bill";
import Discount from "./components/Discount";

const { Content, Sider } = Layout;

const Page = ({ path }) => {
  if (path === "bill") {
    return <Bill />;
  } else if (path === "discount") {
    return <Discount />;
  } else {
    return <MainProfile />;
  }
};

const Profile = () => {
  const [path, setPath] = useState(undefined);
  // const history = useHistory();

  useEffect(() => {
    const path = window.location.pathname;
    const params = path.split("/")[2];
    setPath(params);
  }, [window.location.pathname]);

  return (
    <div className="profile">
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Sidebar />
        </Sider>
        <Content className="site-layout-background">
          <Page path={path} />
        </Content>
      </Layout>
    </div>
  );
};

export default Profile;
