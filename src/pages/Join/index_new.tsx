import React, { useState } from 'react';
import { Row, Col, Form, Input, Button, Tabs, App } from 'antd';
import { UserOutlined, PhoneOutlined, MailOutlined, TeamOutlined, CrownOutlined, GlobalOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import styles from './index.module.css';

const { TextArea } = Input;

const Join: React.FC = () => {
  const [form] = Form.useForm();
  const [activeTab, setActiveTab] = useState('volunteer');
  const { t } = useTranslation();
  const { message } = App.useApp();

  const onFinish = (values: Record<string, string>) => {
    console.log('表单提交:', values);
    const tabNames = {
      volunteer: t('join.volunteer.successMessage'),
      member: t('join.member.successMessage'),
      partner: t('join.partner.successMessage')
    };
    message.success(tabNames[activeTab as keyof typeof tabNames]);
    form.resetFields();
  };

  // 志愿者招募表单
  const VolunteerForm = () => (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      className={styles.joinForm}
    >
      <Form.Item
        name="name"
        label={t('join.volunteer.name')}
        rules={[{ required: true, message: t('join.volunteer.validation.nameRequired') }]}
      >
        <Input 
          placeholder={t('join.volunteer.namePlaceholder')} 
          prefix={<UserOutlined />}
          size="large"
        />
      </Form.Item>
      
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} md={12} lg={12} xl={12}>
          <Form.Item
            name="phone"
            label={t('join.volunteer.phone')}
            rules={[{ required: true, message: t('join.volunteer.validation.phoneRequired') }]}
          >
            <Input 
              placeholder={t('join.volunteer.phonePlaceholder')} 
              prefix={<PhoneOutlined />}
              size="large"
            />
          </Form.Item>
        </Col>
        <Col xs={24} sm={12} md={12} lg={12} xl={12}>
          <Form.Item
            name="email"
            label={t('join.volunteer.email')}
            rules={[
              { required: true, message: t('join.volunteer.validation.emailRequired') },
              { type: 'email', message: t('join.volunteer.validation.emailInvalid') }
            ]}
          >
            <Input 
              placeholder={t('join.volunteer.emailPlaceholder')} 
              prefix={<MailOutlined />}
              size="large"
            />
          </Form.Item>
        </Col>
      </Row>
      
      <Form.Item
        name="volunteerType"
        label={t('join.volunteer.volunteerType')}
        rules={[{ required: true, message: t('join.volunteer.validation.volunteerTypeRequired') }]}
      >
        <Input 
          placeholder={t('join.volunteer.volunteerTypePlaceholder')} 
          size="large"
        />
      </Form.Item>
      
      <Form.Item
        name="experience"
        label={t('join.volunteer.experience')}
        rules={[{ required: true, message: t('join.volunteer.validation.experienceRequired') }]}
      >
        <TextArea 
          placeholder={t('join.volunteer.experiencePlaceholder')} 
          rows={6}
          showCount
          maxLength={500}
        />
      </Form.Item>
      
      <Form.Item>
        <Button 
          type="primary" 
          htmlType="submit" 
          size="large"
          className={styles.submitButton}
          block
        >
          {t('join.volunteer.submit')}
        </Button>
      </Form.Item>
    </Form>
  );

  // 成为会员表单
  const MemberForm = () => (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      className={styles.joinForm}
    >
      <Form.Item
        name="name"
        label={t('join.member.name')}
        rules={[{ required: true, message: t('join.member.validation.nameRequired') }]}
      >
        <Input 
          placeholder={t('join.member.namePlaceholder')} 
          prefix={<UserOutlined />}
          size="large"
        />
      </Form.Item>
      
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} md={12} lg={12} xl={12}>
          <Form.Item
            name="phone"
            label={t('join.member.phone')}
            rules={[{ required: true, message: t('join.member.validation.phoneRequired') }]}
          >
            <Input 
              placeholder={t('join.member.phonePlaceholder')} 
              prefix={<PhoneOutlined />}
              size="large"
            />
          </Form.Item>
        </Col>
        <Col xs={24} sm={12} md={12} lg={12} xl={12}>
          <Form.Item
            name="email"
            label={t('join.member.email')}
            rules={[
              { required: true, message: t('join.member.validation.emailRequired') },
              { type: 'email', message: t('join.member.validation.emailInvalid') }
            ]}
          >
            <Input 
              placeholder={t('join.member.emailPlaceholder')} 
              prefix={<MailOutlined />}
              size="large"
            />
          </Form.Item>
        </Col>
      </Row>
      
      <Form.Item
        name="membershipType"
        label={t('join.member.membershipType')}
        rules={[{ required: true, message: t('join.member.validation.membershipTypeRequired') }]}
      >
        <Input 
          placeholder={t('join.member.membershipTypePlaceholder')} 
          size="large"
        />
      </Form.Item>
      
      <Form.Item
        name="background"
        label={t('join.member.background')}
        rules={[{ required: true, message: t('join.member.validation.backgroundRequired') }]}
      >
        <TextArea 
          placeholder={t('join.member.backgroundPlaceholder')} 
          rows={6}
          showCount
          maxLength={500}
        />
      </Form.Item>
      
      <Form.Item>
        <Button 
          type="primary" 
          htmlType="submit" 
          size="large"
          className={styles.submitButton}
          block
        >
          {t('join.member.submit')}
        </Button>
      </Form.Item>
    </Form>
  );

  // 合作机构申请表单
  const PartnerForm = () => (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      className={styles.joinForm}
    >
      <Form.Item
        name="organizationName"
        label={t('join.partner.organizationName')}
        rules={[{ required: true, message: t('join.partner.validation.organizationNameRequired') }]}
      >
        <Input 
          placeholder={t('join.partner.organizationNamePlaceholder')} 
          prefix={<TeamOutlined />}
          size="large"
        />
      </Form.Item>
      
      <Form.Item
        name="contactPerson"
        label={t('join.partner.contactPerson')}
        rules={[{ required: true, message: t('join.partner.validation.contactPersonRequired') }]}
      >
        <Input 
          placeholder={t('join.partner.contactPersonPlaceholder')} 
          prefix={<UserOutlined />}
          size="large"
        />
      </Form.Item>
      
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} md={12} lg={12} xl={12}>
          <Form.Item
            name="phone"
            label={t('join.partner.phone')}
            rules={[{ required: true, message: t('join.partner.validation.phoneRequired') }]}
          >
            <Input 
              placeholder={t('join.partner.phonePlaceholder')} 
              prefix={<PhoneOutlined />}
              size="large"
            />
          </Form.Item>
        </Col>
        <Col xs={24} sm={12} md={12} lg={12} xl={12}>
          <Form.Item
            name="email"
            label={t('join.partner.email')}
            rules={[
              { required: true, message: t('join.partner.validation.emailRequired') },
              { type: 'email', message: t('join.partner.validation.emailInvalid') }
            ]}
          >
            <Input 
              placeholder={t('join.partner.emailPlaceholder')} 
              prefix={<MailOutlined />}
              size="large"
            />
          </Form.Item>
        </Col>
      </Row>
      
      <Form.Item
        name="cooperationType"
        label={t('join.partner.cooperationType')}
        rules={[{ required: true, message: t('join.partner.validation.cooperationTypeRequired') }]}
      >
        <Input 
          placeholder={t('join.partner.cooperationTypePlaceholder')} 
          size="large"
        />
      </Form.Item>
      
      <Form.Item
        name="proposal"
        label={t('join.partner.proposal')}
        rules={[{ required: true, message: t('join.partner.validation.proposalRequired') }]}
      >
        <TextArea 
          placeholder={t('join.partner.proposalPlaceholder')} 
          rows={6}
          showCount
          maxLength={500}
        />
      </Form.Item>
      
      <Form.Item>
        <Button 
          type="primary" 
          htmlType="submit" 
          size="large"
          className={styles.submitButton}
          block
        >
          {t('join.partner.submit')}
        </Button>
      </Form.Item>
    </Form>
  );

  const tabItems = [
    {
      key: 'volunteer',
      label: (
        <span>
          <TeamOutlined />
          {t('join.volunteer.title')}
        </span>
      ),
      children: <VolunteerForm />
    },
    {
      key: 'member',
      label: (
        <span>
          <CrownOutlined />
          {t('join.member.title')}
        </span>
      ),
      children: <MemberForm />
    },
    {
      key: 'partner',
      label: (
        <span>
          <GlobalOutlined />
          {t('join.partner.title')}
        </span>
      ),
      children: <PartnerForm />
    }
  ];

  return (      
    <div className={styles.joinPage}>
      {/* 主要内容区域 */}
      <div className={styles.mainContent}>
        <div className={styles.container}>
          <Row justify="center">
            <Col xs={24} sm={24} md={20} lg={18} xl={16}>
              <div className={styles.joinFormContainer}>
                <Tabs
                  activeKey={activeTab}
                  onChange={setActiveTab}
                  items={tabItems}
                  className={styles.joinTabs}
                  centered
                />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Join;
