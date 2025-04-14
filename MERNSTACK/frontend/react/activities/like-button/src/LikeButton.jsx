import { useState } from "react";
import "./LikeButton.css";

export default function LikeButton() {
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };
  return (
    <p onClick={toggleLike}>
      {isLiked ? (
        <i className="fa-solid fa-heart like" ></i>
      ) : (
        <i className="fa-regular fa-heart"></i>
      )}
    </p>
  );
}
