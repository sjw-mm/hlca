import React from 'react';
import { Row, Col, Statistic } from 'antd';
import { 
  UserOutlined, 
  LikeOutlined, 
  GlobalOutlined, 
  PrinterOutlined 
} from '@ant-design/icons';
import './CounterSection.css';

const CounterSection: React.FC = () => {
  const counters = [
    {
      icon: <UserOutlined />,
      value: 8240,
      title: '满意客户',
      color: '#F668AC'
    },
    {
      icon: <LikeOutlined />,
      value: 3450,
      title: '完成项目',
      color: '#F668AC'
    },
    {
      icon: <GlobalOutlined />,
      value: 1810,
      title: '全球分支机构',
      color: '#F668AC'
    },
    {
      icon: <PrinterOutlined />,
      value: 2760,
      title: '数字设备',
      color: '#F668AC'
    }
  ];

  return (
    <section className="counter-section">
      <div className="container">
        <Row gutter={[32, 32]}>
          {counters.map((counter, index) => (
            <Col xs={12} sm={12} lg={6} key={index}>
              <div className="counter-item">
                <div className="counter-icon">
                  {counter.icon}
                </div>
                <div className="counter-content">
                  <Statistic
                    value={counter.value}
                    valueStyle={{ 
                      color: counter.color, 
                      fontSize: '36px', 
                      fontWeight: 'bold' 
                    }}
                  />
                  <h4 className="counter-title">{counter.title}</h4>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default CounterSection;
