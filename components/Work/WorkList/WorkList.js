import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "utils/cn";

const WorkList = ({ contentItems }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="space-y-4 py-8">
      {contentItems.map((item, index) => {
        // Extract category from content text
        const category = item.content.props.children;

        return (
          <motion.div
            key={item.title + index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="group cursor-pointer"
          >
            <div className="flex items-center justify-between py-4 px-6 rounded-lg border border-gray-dark-1 hover:border-indigo-light transition-all duration-300 hover:bg-gray-900/20">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-white group-hover:text-indigo-light transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-light-3 text-sm mt-1 line-clamp-1 group-hover:text-gray-light-2 transition-colors">
                  {item.description}
                </p>
              </div>
              <div className="ml-8 flex-shrink-0">
                <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-indigo-light/20 to-purple-light/20 text-indigo-light text-sm font-medium whitespace-nowrap">
                  {category}
                </span>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default WorkList;
