import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import Iso from '../../assets/images/logo-icon.png';
import Logo from '../../assets/images/logo-text.png';
import UserDetails from '../../components/UserDetails/UserDetails';
import './DashBoard.css';

class DashBoard extends React.Component {

    render() {
        const {
            Header, Content, Footer, Sider,
          } = Layout;
          
        return (
            <Layout className="dashboard">
            <Sider
              breakpoint="lg"
              collapsedWidth="0"
              onBreakpoint={(broken) => { console.log(broken); }}
              onCollapse={(collapsed, type) => { console.log(collapsed, type); }}
            >
              <UserDetails/>
              <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
                <Menu.Item key="1">
                  <Icon type="user" />
                  <span className="nav-text">nav 1</span>
                </Menu.Item>
                <Menu.Item key="2">
                  <Icon type="video-camera" />
                  <span className="nav-text">nav 2</span>
                </Menu.Item>
                <Menu.Item key="3">
                  <Icon type="upload" />
                  <span className="nav-text">nav 3</span>
                </Menu.Item>
                <Menu.Item key="4">
                  <Icon type="user" />
                  <span className="nav-text">nav 4</span>
                </Menu.Item>
              </Menu>
            </Sider>
            <Layout>
              <Header style={{ background: '#648cff', padding: 0 }} className="header">
                <div className="logo hidden-lg">
                    <img src={Iso} alt="Zubi-Logo" />
                    <img src={Logo} alt="Zubi-Logo" />
                </div>
              </Header>
              <Content>
                <div className="content" style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                  content
                </div>
              </Content>
              <Footer style={{ textAlign: 'center' }}>
                Footer
              </Footer>
            </Layout>
          </Layout>
        );
    }
}

export default DashBoard;