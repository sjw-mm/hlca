import React from 'react';
import { useTranslation } from 'react-i18next';
import Profile from './components/Profile';
import TeamSection from './components/TeamSection';
// import HonorWall from './components/HonorWall';
import NewsSection from './components/NewsSection';
// import BlogSection from './components/BlogSection';
import ActivitySection, { type ActivityProps } from './components/ActivitySection';
import activity_1 from '@/assets/image/activity-1.jpeg';
import activity_2 from '@/assets/image/activity-2.jpeg';
import styles from './index.module.css';

const Home: React.FC = () => {
  const { t } = useTranslation();
  
  const activityList: ActivityProps[] = [
    {
      id: 1,
      title: t('activity.activities.movieWeek.title'),
      image: activity_1,
      date: '2024-01-15',
      time: '14:00-16:00',
      content: t('activity.activities.movieWeek.content'),
      location: '社区活动中心'
    },
    {
      id: 2,
      title: t('activity.activities.culturalExchange.title'),
      image: activity_2,
      date: '2024-01-20',
      time: '10:00-12:00',
      content: t('activity.activities.culturalExchange.content')
    },
  ];
  return (
    <div className={styles.homePage}>

      {/* 协会简介区域 */}
      <Profile />

      {/* 团队介绍 */}
      <TeamSection />

      {/* 活动 */}
      <ActivitySection activityList={activityList} />

      {/* 荣誉墙 */}
      {/* <HonorWall /> */}

      {/* 协会新闻 */}
      <NewsSection />
      {/* <BlogSection /> */}
      
    </div>
  );
};


export default Home;
