import React from 'react';
import { Row, Col, Card } from 'antd';
import { EnvironmentOutlined, MailOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import qrCode from '@/assets/image/qrCode.jpg';
import logo from '@/assets/image/logo.png';
import styles from './index.module.css';

const Contact: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.contactPage}>
      {/* 联系信息区域 */}
      <div className={styles.contactInfoSection}>
        <div className={styles.contactContainer}>
          <Row gutter={[80, 48]}>
            {/* 办公地址 */}
            <Col xs={20} md={8}>
              <Card className={styles.contactCard}>
                <div className={styles.contactCardContentWrapper}>
                  <div className={styles.contactIcon}>
                    <EnvironmentOutlined />
                  </div>
                  <div className={styles.contactCardContent}>
                    <h3>{t('contact.officeAddress')}</h3>
                    <div className={styles.contactDetails}>
                      <p className={styles.contactAddress}>{t('contact.address')}</p>
                    </div>
                  </div>
                </div>
              </Card>
            </Col>
            {/* 邮箱地址 */}
            <Col xs={20} md={8}>
              <Card className={styles.contactCard}>
                <div className={styles.contactCardContentWrapper}>
                  <div className={styles.contactIcon}>
                    <MailOutlined />
                  </div>
                  <div className={styles.contactCardContent}>
                    <h3>{t('contact.emailAddress')}</h3>
                    <div className={styles.contactDetails}>
                      <p>{t('contact.email')}</p>
                    </div>
                  </div>
                </div>
              </Card>
            </Col>
          </Row>
        </div>
      </div>

      {/* 微信公众号区域 */}
      <div className={styles.contactWechatSection}>
        <div className={styles.contactContainer}>
          <div className={styles.contactWechatBanner}>
            {/* 左侧二维码区域 */}
            <div className={styles.contactQrSection}>
              <div className={styles.contactQrCode}>
                <img className={styles.contactQrCodeImg} src={qrCode} alt={t('contact.qrCode')} />
              </div>
            </div>
            
            {/* 分隔线 */}
            <div className={styles.contactDivider}></div>
            
            {/* 右侧协会信息区域 */}
            <div className={styles.contactAssociationSection}>
              <div className={styles.contactAssociationLogo}>
                <div className={styles.contactLogoContainer}>
                  <img src={logo} alt="Meet & Mingle Logo" className={styles.contactLogoImage} />
                </div>
                <div className={styles.contactChineseName}>{t('siteName')}</div>
                <div className={styles.contactLocation}>{t('contact.location')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;