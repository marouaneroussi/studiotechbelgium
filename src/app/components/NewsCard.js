import Link from "next/link";
import React from "react";

function removeTags(str) {
  if (str === null || str === "") return false;
  else str = str.toString();

  // Regular expression to identify HTML tags in
  // the input string. Replacing the identified
  // HTML tag with a null string.
  return str.replace(/(<([^>]+)>)/gi, "");
}

const NewsCard = ({
  imageSrc,
  altText,
  title,
  description,
  slug,
  card_tag,
}) => {
  return (
    <div className="solution-card">
      <Link href={slug} className="solution-card-link">
        <div className="solution-card-icon">
          <img src={imageSrc} alt={altText} width="350" height="250" />
        </div>
        <div className="pl-[1.5rem] pb-5">
          {card_tag && <span className="card-tag">{card_tag}</span>}
          <h3 className="solution-card-title line-clamp-2">{title}</h3>
          <p className="solution-card-description line-clamp-2">
            {removeTags(description)}
          </p>
          Learn More →
        </div>
      </Link>
    </div>
  );
};

export default NewsCard;
