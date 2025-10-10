import React, { useState } from "react";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";

const BlogCard = ({ post }) => {
  const [hoveredCard, setHoveredCard] = useState(null);
  return (
    <div
      key={post.id}
      className="group relative bg-gradient-secondary backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-300  hover:border-slate-600 transition-all duration-500 hover:transform text-dark-teal"
      onMouseEnter={() => setHoveredCard(post.id)}
      onMouseLeave={() => setHoveredCard(null)}
    >
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div
          className={`absolute inset-0 bg-gradient-to-br ${post.gradient} opacity-30 group-hover:opacity-40 transition-opacity duration-500`}
        ></div>

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-slate-900 text-xs font-semibold rounded-full">
            {post.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold  mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
          {post.title}
        </h3>

        <p className="text-sm mb-4 line-clamp-2">{post.excerpt}</p>

        {/* Author & Read More */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-700/50 text-sm">
          <span className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            {post.date}
          </span>
          <button className="flex items-center gap-1 text-blue-400 hover:text-blue-300 transition-colors">
            Read
            <ArrowRight
              className={`w-4 h-4 transition-transform duration-300 ${
                hoveredCard === post.id ? "translate-x-1" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Hover Glow Effect */}
    </div>
  );
};

export default BlogCard;
