import React, { useState, useEffect } from 'react';
import { FaTag } from 'react-icons/fa';

const Tags = ({ projects, uniqueTagList, filterTag }) => {
  const [tag, setTag] = useState('all');

  useEffect(() => {
    if (projects) {
      setTag('all');
    }
  }, [projects]);

  return (
    <div className="projects-block">
      <div className="tags-tab">
        {uniqueTagList.map((uniqueTag, index) => {
          return (
            <span
              className={`tag-btn ${uniqueTag === tag ? 'tag-btn-active' : ''}`}
              onClick={() => {
                setTag(uniqueTag);
                filterTag(uniqueTag);
              }}
              key={index}
            >
              <FaTag />
              {uniqueTag}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Tags;
