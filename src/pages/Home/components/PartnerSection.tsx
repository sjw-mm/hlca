import React from 'react';
import partner from '@/assets/image/partner.png';
import styles from './PartnerSection.module.css';

const PartnerSection: React.FC = () => {

  return (
    <section className={styles.partnerSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2>合作伙伴与支持单位</h2>
        </div>
        <div className={styles.partnerList}>
          <img src={partner} alt="合作伙伴" />
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;
