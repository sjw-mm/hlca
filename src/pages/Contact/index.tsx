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
          <Row gutter={[32, 32]}>
            {/* 办公地址 */}
            <Col xs={24} md={8}>
              <Card className="contact-card">
                <div className="contact-icon">
                  <EnvironmentOutlined />
                </div>
                <h3>{t('contact.officeAddress')}</h3>
                <div className="contact-details">
                  <p>{t('contact.address')}</p>
                </div>
              </Card>
            </Col>

            {/* 电话号码 */}
            {/* <Col xs={24} md={8}>
              <Card className="contact-card">
                <div className="contact-icon">
                  <PhoneOutlined />
                </div>
                <h3>电话号码</h3>
                <div className="contact-details">
                  <p><a href="tel:+998556778345">+998556778345</a></p>
                </div>
              </Card>
            </Col> */}

            {/* 邮箱地址 */}
            <Col xs={24} md={8}>
              <Card className="contact-card">
                <div className="contact-icon">
                  <MailOutlined />
                </div>
                <h3>{t('contact.emailAddress')}</h3>
                <div className="contact-details">
                  <p><a href="mailto:Info@mingminglove.com">{t('contact.email')}</a></p>
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
              {/* <p className="qr-instruction">扫描二维码添加我为好友</p> */}
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
