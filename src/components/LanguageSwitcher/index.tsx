import React from 'react';
import { Dropdown, Button } from 'antd';
import { GlobalOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import styles from './index.module.css';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  const languageItems = [
    {
      key: 'zh-CN',
      label: (
        <div className={styles.languageOption}>
          <span className={styles.flag}>🇨🇳</span>
          <span>中文</span>
        </div>
      ),
    },
    {
      key: 'en-US',
      label: (
        <div className={styles.languageOption}>
          <span className={styles.flag}>🇨🇦</span>
          <span>English</span>
        </div>
      ),
    },
    {
      key: 'fr-FR',
      label: (
        <div className={styles.languageOption}>
          <span className={styles.flag}>🇫🇷</span>
          <span>Français</span>
        </div>
      ),
    },
  ];

  const getCurrentLanguage = () => {
    switch (i18n.language) {
      case 'zh-CN':
        return '🇨🇳 中文';
      case 'en-US':
        return '🇨🇦 English';
      case 'fr-FR':
        return '🇫🇷 Français';
      default:
        return '🇨🇳 中文';
    }
  };

  return (
    <Dropdown
      menu={{
        items: languageItems,
        onClick: ({ key }) => handleLanguageChange(key),
      }}
      placement="bottomRight"
      trigger={['click']}
    >
      <Button 
        type="text" 
        icon={<GlobalOutlined />}
        className={styles.languageSwitcher}
      >
        {getCurrentLanguage()}
      </Button>
    </Dropdown>
  );
};

export default LanguageSwitcher;
