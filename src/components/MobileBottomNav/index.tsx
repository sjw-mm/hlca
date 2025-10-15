import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { 
  HomeOutlined, 
  TeamOutlined, 
  UserOutlined, 
  PhoneOutlined,
  CalendarOutlined
} from '@ant-design/icons';
import styles from './index.module.css';

const MobileBottomNav: React.FC = () => {
  const location = useLocation();
  const { t } = useTranslation();

  const navItems = [
    {
      key: '/',
      label: t('nav.home'),
      icon: <HomeOutlined />,
      link: '/'
    },
    {
      key: '/activity',
      label: t('nav.activity'),
      icon: <CalendarOutlined />,
      link: '/activity'
    },
    {
      key: '/about',
      label: t('nav.about'),
      icon: <UserOutlined />,
      link: '/about'
    },
    {
      key: '/join',
      label: t('nav.join'),
      icon: <TeamOutlined />,
      link: '/join'
    },
    {
      key: '/contact',
      label: t('nav.contact'),
      icon: <PhoneOutlined />,
      link: '/contact'
    }
  ];

  return (
    <div className={styles.mobileBottomNav}>
      <div className={styles.mobileNavContainer}>
        {navItems.map((item) => (
          <Link
            key={item.key}
            to={item.link}
            className={`${styles.mobileNavItem} ${location.pathname === item.key ? 'active' : ''}`}
          >
            <div className={styles.navIcon}>{item.icon}</div>
            <div className={styles.navLabel}>{item.label}</div>
            {location.pathname === item.key && <div className={styles.navIndicator}></div>}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MobileBottomNav;
