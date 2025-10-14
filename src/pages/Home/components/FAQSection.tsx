import React from 'react';
import { Row, Col, Form, Input, Button, Collapse, App } from 'antd';
import { UserOutlined, PhoneOutlined, MailOutlined } from '@ant-design/icons';
import styles from './FAQSection.module.css';

const { TextArea } = Input;

const FAQSection: React.FC = () => {
  const [form] = Form.useForm();
  const { message } = App.useApp();

  const onFinish = (values: any) => {
    console.log('表单提交:', values);
    message.success('消息发送成功！我们会尽快回复您。');
    form.resetFields();
  };

  const faqItems = [
    {
      key: '1',
      label: '01. 您需要商业服务吗？',
      children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ad minim veniam, quis nostrud exercitation.'
    },
    {
      key: '2',
      label: '02. 如何充分利用您的商业服务？',
      children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ad minim veniam, quis nostrud exercitation.'
    },
    {
      key: '3',
      label: '03. 商业服务的声音如何？',
      children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ad minim veniam, quis nostrud exercitation.'
    },
    {
      key: '4',
      label: '04. 我可以提前赎回贷款吗？',
      children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ad minim veniam, quis nostrud exercitation.'
    }
  ];

  return (
    <section className={styles.faqSection}>
      <div className={styles.container}>
        <Row gutter={[48, 48]}>
          <Col xs={24} lg={12}>
            <div className={styles.contactForm}>
              <div className={styles.formHeader}>
                <h1>联系我们</h1>
                <h2>我们的顾问随时准备帮助您</h2>
              </div>
              
              <Form
                form={form}
                layout="vertical"
                onFinish={onFinish}
                className={styles.contactFormContent}
              >
                <Form.Item
                  name="name"
                  rules={[{ required: true, message: '请输入您的姓名' }]}
                >
                  <Input 
                    placeholder="姓名*" 
                    prefix={<UserOutlined />}
                    size="large"
                  />
                </Form.Item>
                
                <Row gutter={16}>
                  <Col xs={24} sm={12}>
                    <Form.Item
                      name="phone"
                      rules={[{ required: true, message: '请输入您的电话' }]}
                    >
                      <Input 
                        placeholder="电话*" 
                        prefix={<PhoneOutlined />}
                        size="large"
                      />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={12}>
                    <Form.Item
                      name="email"
                      rules={[
                        { required: true, message: '请输入您的邮箱' },
                        { type: 'email', message: '请输入有效的邮箱地址' }
                      ]}
                    >
                      <Input 
                        placeholder="邮箱*" 
                        prefix={<MailOutlined />}
                        size="large"
                      />
                    </Form.Item>
                  </Col>
                </Row>
                
                <Form.Item
                  name="subject"
                  rules={[{ required: true, message: '请输入主题' }]}
                >
                  <Input 
                    placeholder="主题*" 
                    size="large"
                  />
                </Form.Item>
                
                <Form.Item
                  name="message"
                  rules={[{ required: true, message: '请输入您的消息' }]}
                >
                  <TextArea 
                    placeholder="消息内容*" 
                    rows={4}
                  />
                </Form.Item>
                
                <Form.Item>
                  <Button 
                    type="primary" 
                    htmlType="submit" 
                    size="large"
                    className={styles.submitBtn}
                  >
                    立即提交
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </Col>
          
          <Col xs={24} lg={12}>
            <div className={styles.faqContent}>
              <div className={styles.faqHeader}>
                <h2>常见问题</h2>
                <h3>常见问题解答？</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              
              <Collapse 
                items={faqItems}
                className={styles.faqAccordion}
                expandIconPosition="end"
              />
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default FAQSection;
