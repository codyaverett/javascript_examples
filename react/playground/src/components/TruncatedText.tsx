import React, { useState } from "react";

interface Props {
    text: string;
    limit: number;
}

const TruncatedText = ({ text, limit }: Props) => {
  const [showFullText, setShowFullText] = useState(false);
  const words = text.split(" ");
  const truncatedText = words.slice(0, limit).join(" ");
  const isTruncated = words.length > limit;

  const toggleShowFullText = () => {
    setShowFullText(!showFullText);
  };

  return (
    <div>
      <p>{showFullText ? text : truncatedText}</p>
      {isTruncated && (
        <button onClick={toggleShowFullText}>
          {showFullText ? "Show Less" : "Show More"}
        </button>
      )}
    </div>
  );
};

export default TruncatedText;
