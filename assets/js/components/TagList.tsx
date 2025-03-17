import React from "react";
import { Tag } from "@/components/Tag";

interface Props {
  tags: string[];
}

export const TagList = (props: Props) => {
  const tags = props.tags;

  return (
    <div className="sidebar">
      <p>Popular Tags</p>

      <div className="tag-list">
        {tags.map((tag) => (
          <Tag
            component="a"
            variant="filled"
            href={`/?tab=tag&tag=${tag}`}
            key={tag}
          >
            {tag}
          </Tag>
        ))}
      </div>
    </div>
  );
};
