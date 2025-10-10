import React from "react";
import Section from "@/components/common/containers/Section";
import SectionDark from "@/components/common/containers/SectionDark";
import BlogCard from "@/components/common/cards/BlogCard";
import blogPosts from "@/components/data/blogPosts";

const Blogs = () => {
  const blogPosts = [];
  return (
    <Section title={"Blogs"} caption={"Coming Soon!"}>
      <div className="grid grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </Section>
  );
};

export default Blogs;
