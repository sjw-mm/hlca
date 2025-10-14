import React from 'react';
import { Breadcrumb } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import TeamSection from '../Home/components/TeamSection';
import styles from './index.module.css';

const Team: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <div className={styles.teamPage}>
      {/* 面包屑导航 */}
      <section className={styles.teamBreadcrumbSection}>
        <div className={styles.teamContainer}>
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
