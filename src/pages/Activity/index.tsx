import React from 'react';
import styles from './index.module.css';
import ActivitySection, { type ActivityProps } from '../Home/components/ActivitySection';
import activity_1 from '@/assets/image/activity-1.jpeg';
import activity_2 from '@/assets/image/activity-2.jpeg';
import activity_3 from '@/assets/image/activity-3.jpg';
import activity_4 from '@/assets/image/activity-4.jpg';
import { useTranslation } from 'react-i18next';

const Activity: React.FC = () => {
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
    {
      id: 3,
      title: t('activity.activities.anniversary.title'),
      image: activity_3,
      date: '2024-01-15',
      time: '14:00-16:00',
      content: t('activity.activities.anniversary.content'),
    },
    {
      id: 4,
      title: t('activity.activities.pressConference.title'),
      image: activity_4,
      date: '2024-01-20',
      time: '10:00-12:00',
      content: t('activity.activities.pressConference.content')
    },
  ];
  return (
    <div className={styles.activityPage}>
      {/* 活动 */}
      <ActivitySection activityList={activityList} />
    </div>
  );
};

export default Activity;
