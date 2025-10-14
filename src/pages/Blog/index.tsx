import React from 'react';
import BlogSection from '../Home/components/BlogSection';
import styles from './index.module.css';

const Blog: React.FC = () => {
  return (
    <div className={styles.blogPage}>
      {/* 博客内容 */}
      <BlogSection />
    </div>
  );
};

export default Blog;
