import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ConfigProvider, App as AntdApp } from 'antd';
import zhCN from 'antd/locale/zh_CN';
import enUS from 'antd/locale/en_US';
import { useTranslation } from 'react-i18next';
import './i18n';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import ProfileDetail from './pages/Profile';
import Team from './pages/Team';
import Join from './pages/Join';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Activity from './pages/Activity';

function App() {
  const { i18n } = useTranslation();
  
  const getAntdLocale = () => {
    return i18n.language === 'en-US' ? enUS : zhCN;
  };

  // Ant Design 主题配置
  const antdTheme = {
    token: {
      colorPrimary: '#F668AC',
      colorSuccess: '#52c41a',
      colorWarning: '#faad14',
      colorError: '#ff4d4f',
      colorInfo: '#F668AC',
      borderRadius: 6,
    },
    components: {
      Button: {
        colorPrimary: '#F668AC',
        colorPrimaryHover: '#E91E63',
        colorPrimaryActive: '#C2185B',
      },
      Input: {
        colorPrimary: '#F668AC',
        colorPrimaryHover: '#E91E63',
        activeBorderColor: '#F668AC',
        hoverBorderColor: '#F668AC',
      },
      Select: {
        colorPrimary: '#F668AC',
        colorPrimaryHover: '#E91E63',
      },
      Menu: {
        colorPrimary: '#F668AC',
        colorPrimaryHover: '#E91E63',
      },
      Card: {
        colorPrimary: '#F668AC',
      },
      Form: {
        colorPrimary: '#F668AC',
      },
      Breadcrumb: {
        colorPrimary: '#F668AC',
        linkColor: '#F668AC',
        linkHoverColor: '#E91E63',
      },
    },
  };

  return (
    <ConfigProvider locale={getAntdLocale()} theme={antdTheme}>
      <AntdApp>
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/activity" element={<Activity />} />
              <Route path="/join" element={<Join />} />
              <Route path="/team" element={<Team />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/profile" element={<ProfileDetail />} />
            </Routes>
          </Layout>
        </Router>
      </AntdApp>
    </ConfigProvider>
  );
}

export default App;