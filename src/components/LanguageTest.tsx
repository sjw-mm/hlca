import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Space, Card } from 'antd';

const LanguageTest: React.FC = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Card title="多语言测试" style={{ margin: '20px', maxWidth: '600px' }}>
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <div>
          <strong>当前语言:</strong> {i18n.language}
        </div>
        
        <div>
          <strong>语言切换:</strong>
          <Space>
            <Button onClick={() => changeLanguage('zh-CN')}>中文</Button>
            <Button onClick={() => changeLanguage('en-US')}>English</Button>
            <Button onClick={() => changeLanguage('fr-FR')}>Français</Button>
          </Space>
        </div>
        
        <div>
          <strong>测试翻译:</strong>
          <ul>
            <li>导航 - 首页: {t('nav.home')}</li>
            <li>导航 - 关于我们: {t('nav.about')}</li>
            <li>Hero标题: {t('hero.title1')}</li>
            <li>Hero副标题: {t('hero.subtitle1')}</li>
            <li>关于我们: {t('about.title')}</li>
            <li>团队: {t('team.title')}</li>
            <li>活动: {t('activity.title')}</li>
            <li>新闻: {t('news.title')}</li>
            <li>联系我们: {t('nav.contact')}</li>
          </ul>
        </div>
      </Space>
    </Card>
  );
};

export default LanguageTest;
