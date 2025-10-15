import React from 'react';
import { EnvironmentOutlined, MailOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import qrCode from '@/assets/image/qrCode.jpg';
import logo from '@/assets/logo.svg';
import styles from './index.module.css';

const Contact: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.contactPage}>
      {/* 联系信息区域 */}
      <div className={styles.contactInfoSection}>
        <div className={styles.contactInfoContainer}>
          {/* 办公地址 */}
          <div className={styles.contactBlock}>
            <div className={styles.contactIcon}>
              <EnvironmentOutlined />
            </div>
            <div className={styles.contactContent}>
              <h3 className={styles.contactTitle}>{t('contact.officeAddress')}</h3>
              <p className={styles.contactText}>{t('contact.address')}</p>
            </div>
          </div>

          {/* 邮箱地址 */}
          <div className={styles.contactBlock}>
            <div className={styles.contactIcon}>
              <MailOutlined />
            </div>
            <div className={styles.contactContent}>
              <h3 className={styles.contactTitle}>{t('contact.emailAddress')}</h3>
              <p className={styles.contactText}>{t('contact.email')}</p>
            </div>
          </div>
        </div>
      </div>

      {/* 二维码和品牌信息区域 */}
      <div className={styles.brandSection}>
        <div className={styles.brandContainer}>
          {/* 左侧二维码 */}
          <div className={styles.qrCodeContainer}>
            <img className={styles.qrCode} src={qrCode} alt={t('contact.qrCode')} />
          </div>

          <div className={styles.divider}></div>
          
          {/* 右侧品牌信息 */}
          <div className={styles.brandInfo}>
            <div className={styles.brandName}>
              <img src={logo} alt="Meet & Mingle Logo" className={styles.logoImage} />
            </div>
            <div className={styles.associationName}>{t('siteName')}</div>
            <div className={styles.location}>{t('contact.location')}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;