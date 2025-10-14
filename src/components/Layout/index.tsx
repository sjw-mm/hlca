import React, { useState } from 'react';
import { Layout, Menu, theme, Space, Drawer } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  MailOutlined,
  HomeOutlined,
} from '@ant-design/icons';
import LanguageSwitcher from '../LanguageSwitcher';
import MobileBottomNav from '../MobileBottomNav';
import styles from './index.module.css';
import logo from '@/assets/image/logo.svg';

const { Header, Content, Footer } = Layout;

interface LayoutProps {
  children: React.ReactNode;
}

const LayoutComponent: React.FC<LayoutProps> = ({ children }) => {
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();
  
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const menuItems = [
    {
      key: '/',
      label: <Link to="/">{t('nav.home')}</Link>,
    },
    {
      key: '/activity',
      label: <Link to="/activity">{t('nav.activity')}</Link>,
    },
    {
      key: '/about',
      label: <Link to="/about">{t('nav.about')}</Link>,
    },
    {
      key: '/join',
      label: <Link to="/join">{t('nav.join')}</Link>,
    },
    {
      key: '/contact',
      label: <Link to="/contact">{t('nav.contact')}</Link>,
    },
  ];

  return (
    <Layout className={styles.layout}>
      {/* 顶部联系信息栏 */}
      <div className={styles.topBar}>
        <div className={styles.container}>
          <div className={styles.topBarContent}>
            <div className={styles.contactInfo}>
              <Space>
                <span><HomeOutlined /> 320 Granville St, Vancouver by BOSA</span>
                {/* <a href="tel:+998556778345"><PhoneOutlined /> +998556778345</a> */}
                <span><MailOutlined /> Info@mingminglove.com</span>
              </Space>
            </div>
          </div>
        </div>
      </div>

      {/* 主导航栏 */}
      <Header className={styles.mainHeader} style={{ background: colorBgContainer }}>
        <div className={styles.container}>
          <div className={styles.headerContent}>
            <div className={styles.logo}>
              {/* <Link to="/"> */}
                <img src={logo} alt="logo" />
              {/* </Link> */}
              <div className={styles.logoText}>{t('siteName')}</div>
            </div>
            <div className={styles.desktopMenu}>
              <Menu
                mode="horizontal"
                selectedKeys={[location.pathname]}
                items={menuItems}
                className={styles.mainMenu}
              />
            </div>

            <div className={styles.headerActions}>
              <Space>
                <LanguageSwitcher />
              </Space>
            </div>
          </div>
        </div>
      </Header>

      {/* 移动端菜单 */}
      <Drawer
        title={t('common.menu')}
        placement="right"
        onClose={() => setMobileMenuVisible(false)}
        open={mobileMenuVisible}
        className={styles.mobileDrawer}
      >
        <Menu
          mode="vertical"
          selectedKeys={[location.pathname]}
          items={menuItems}
          className={styles.mobileMenu}
        />
      </Drawer>

      {/* 主要内容区域 */}
      <Content className={styles.mainContent}>
        {children}
      </Content>

      {/* 页脚 */}
      <Footer className={styles.mainFooter}>
        <div className={styles.container}>
          <div className={styles.footerBottom}>
            <div className={styles.copyright}>
              <p>{t('footer.copyright')}</p>
            </div>
          </div>
        </div>
      </Footer>

      {/* 移动端底部导航 */}
      <MobileBottomNav />
    </Layout>
  );
};

export default LayoutComponent;