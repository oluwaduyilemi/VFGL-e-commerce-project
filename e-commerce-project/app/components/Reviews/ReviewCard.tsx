"use client";
import Image from "next/image";
import { useState } from "react";
import { Star, ThumbsUp, ThumbsDown } from "lucide-react";

interface ReviewCardProps {
  name: string;
  avatar: string;
  rating: number;
  text: string;
  date: string;
  likes: number;
}

export const ReviewCard: React.FC<ReviewCardProps> = ({
  name,
  avatar,
  rating,
  text,
  date,
  likes,
}) => {
  const [likeCount, setLikeCount] = useState(likes);
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  const handleLike = () => {
    if (liked) {
      setLiked(false);
      setLikeCount((prev) => prev - 1);
    } else {
      setLiked(true);
      if (disliked) setDisliked(false);
      setLikeCount((prev) => prev + 1);
    }
  };

  const handleDislike = () => {
    if (disliked) {
      setDisliked(false);
    } else {
      setDisliked(true);
      if (liked) {
        setLiked(false);
        setLikeCount((prev) => prev - 1);
      }
    }
  };

  return (
    <div className="border-b border-[#BBBBBB] border-dashed py-6">
      <div className="flex items-center mb-2">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="text-[#FFA439] w-4 h-4 fill-[#FFA439]" />
        ))}
      </div>

      <p className="font-semibold text-[#141414] text-[15px]">{text}</p>
      <p className="text-[12px] text-[#818B9C] mb-4">{date}</p>

      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Image
            src={avatar}
            alt={name}
            width={32}
            height={32}
            className="rounded-full"
          />
          <span className="text-[#0B0F0E] text-[13px] font-medium">{name}</span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleLike}
            className={`flex items-center gap-1 px-3 py-1 rounded-md border text-sm font-medium transition ${
              liked
                ? "border-green-500 text-green-500"
                : "border-gray-200 text-gray-600 hover:border-gray-300"
            }`}
          >
            <ThumbsUp className="w-4 h-4" />
            <span>{likeCount}</span>
          </button>

          <button
            onClick={handleDislike}
            className={`flex items-center justify-center w-10 h-8 rounded-[5px] border transition ${
              disliked
                ? "border-[#0B0F0E] text-[#0B0F0E]"
                : "border-gray-200 text-gray-600 hover:border-gray-300"
            }`}
          >
            <ThumbsDown className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
