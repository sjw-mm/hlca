import React from 'react';
import partner from '@/assets/image/partner.png';
import './PartnerSection.css';

const PartnerSection: React.FC = () => {

  return (
    <section className="partner-section">
      <div className="container">
        <div className="section-header">
          <h2>合作伙伴与支持单位</h2>
        </div>
        <div className="partner-list">
          <img src={partner} alt="合作伙伴" />
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;
