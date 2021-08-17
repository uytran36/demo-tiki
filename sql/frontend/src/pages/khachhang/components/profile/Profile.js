import { Layout, Menu, Breadcrumb, Row, Col } from "antd";
import "./Profile.css";
import Sidebar from "./components/Sidebar";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const Profile = () => {
  return (
    <div className="profile">
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Sidebar />
        </Sider>
        <Content className="site-layout-background">Content</Content>
      </Layout>
    </div>
  );
};

export default Profile;
