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
import './index.css';

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
    <div className="mobile-bottom-nav">
      <div className="mobile-nav-container">
        {navItems.map((item) => (
          <Link
            key={item.key}
            to={item.link}
            className={`mobile-nav-item ${location.pathname === item.key ? 'active' : ''}`}
          >
            <div className="nav-icon">{item.icon}</div>
            <div className="nav-label">{item.label}</div>
            {location.pathname === item.key && <div className="nav-indicator"></div>}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MobileBottomNav;
