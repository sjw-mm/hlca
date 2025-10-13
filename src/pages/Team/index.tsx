import React from 'react';
import { Breadcrumb } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import TeamSection from '../Home/components/TeamSection';
import './index.css';

const Team: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <div className="team-page">
      {/* 面包屑导航 */}
      <section className="breadcrumb-section">
        <div className="container">
          <Breadcrumb
            items={[
              {
                title: (
                  <>
                    <HomeOutlined />
                    <span>{t('breadcrumb.youAreHere')}</span>
                  </>
                ),
              },
              {
                title: t('breadcrumb.team'),
              },
            ]}
          />
          <h1>{t('breadcrumb.team')}</h1>
        </div>
      </section>

      {/* 团队内容 */}
      <TeamSection />
    </div>
  );
};

export default Team;
