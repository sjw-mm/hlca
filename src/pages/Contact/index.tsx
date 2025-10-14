import React from 'react';
import { Row, Col, Card } from 'antd';
import { EnvironmentOutlined, MailOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import qrCode from '@/assets/image/qrCode.jpg';
import logo from '@/assets/image/logo.png';
import './index.css';

const Contact: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="contact-page">
      {/* 联系信息区域 */}
      <div className="contact-info-section">
        <div className="container">
          <Row gutter={[80, 48]}>
            {/* 办公地址 */}
            <Col xs={20} md={8}>
              <Card className="contact-card">
                <div className="contact-icon">
                  <EnvironmentOutlined />
                </div>
                <div className="contact-card-content">
                  <h3>{t('contact.officeAddress')}</h3>
                  <div className="contact-details">
                    <p className="contact-address">{t('contact.address')}</p>
                  </div>
                </div>
              </Card>
            </Col>
            {/* 邮箱地址 */}
            <Col xs={20} md={8}>
              <Card className="contact-card">
                <div className="contact-icon">
                  <MailOutlined />
                </div>
                <div className="contact-card-content">
                  <h3>{t('contact.emailAddress')}</h3>
                  <div className="contact-details">
                    <p>{t('contact.email')}</p>
                  </div>
                </div>
              </Card>
            </Col>
          </Row>
        </div>
      </div>

      {/* 微信公众号区域 */}
      <div className="wechat-section">
        <div className="container">
          <div className="wechat-banner">
            {/* 左侧二维码区域 */}
            <div className="qr-section">
              <div className="qr-code">
                <img className="qr-code-img" src={qrCode} alt={t('contact.qrCode')} />
              </div>
            </div>
            
            {/* 分隔线 */}
            <div className="divider"></div>
            
            {/* 右侧协会信息区域 */}
            <div className="association-section">
              <div className="association-logo">
                <div className="logo-container">
                  <img src={logo} alt="Meet & Mingle Logo" className="logo-image" />
                </div>
                <div className="chinese-name">{t('siteName')}</div>
                <div className="location">{t('contact.location')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;