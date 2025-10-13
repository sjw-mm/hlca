import React from 'react';
import BlogSection from '../Home/components/BlogSection';
import './index.css';

const Blog: React.FC = () => {
  return (
    <div className="blog-page">
      {/* 博客内容 */}
      <BlogSection />
    </div>
  );
};

export default Blog;
