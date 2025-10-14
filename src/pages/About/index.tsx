import React from 'react';
import AboutSection from '../Home/components/AboutSection';
import TeamDetail from '../Home/components/TeamDetail';
import styles from './index.module.css';
// import PartnerSection from '../Home/components/PartnerSection';

const About: React.FC = () => {
  return (
    <div className={styles.aboutPage}>
      {/* 关于我们内容 */}
      <AboutSection />
      {/* 团队介绍 */}
      <TeamDetail />
      {/*合作伙伴和支持单位 */}
      {/* <PartnerSection /> */}
    </div>
  );
};

export default About;
