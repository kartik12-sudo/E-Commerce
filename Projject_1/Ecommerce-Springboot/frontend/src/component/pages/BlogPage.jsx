import React, { useEffect, useState } from "react";
import "../../style/blog.css";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const sampleBlogs = [
      {
        id: 1,
        title: "Top 10 Gadgets You Need in 2025",
        date: "August 15, 2025",
        
        excerpt:
          "From smart home devices to AI-powered assistants, here’s our pick of must-have tech in 2025."
      },
      {
        id: 2,
        title: "How to Choose the Right Laptop",
        date: "August 10, 2025",
        
        excerpt:
          "We break down the specs, brands, and features to help you buy the perfect laptop for your needs."
      }
    ];

    setBlogs(sampleBlogs);
  }, []);

  return (
    <div className="blog-page">
      <h1>Our Blog</h1>
      <div className="blog-grid">
        {blogs.map((blog) => (
          <div key={blog.id} className="blog-card">
            {/* Removed Link wrapper around image + title */}
           
            <h2>{blog.title}</h2>

            <p className="date">{blog.date}</p>
            <p className="excerpt">{blog.excerpt}</p>

            {/* Read More link removed */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
