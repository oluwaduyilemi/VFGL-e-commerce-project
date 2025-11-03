"use client";
import { Star } from "lucide-react";

interface RatingData {
  stars: number;
  count: number;
}

const ratings: RatingData[] = [
  { stars: 5, count: 2823 },
  { stars: 4, count: 38 },
  { stars: 3, count: 4 },
  { stars: 2, count: 0 },
  { stars: 1, count: 0 },
];

const totalReviews = ratings.reduce((sum, r) => sum + r.count, 0);
const averageRating = 4.5;

export default function ProductReview() {
  return (
    <section className="border border-dashed border-[#B8B8B8] rounded-[5px] p-6 w-full container m-auto mt-8">
      <h2 className="text-lg md:text-xl font-semibold mb-5">
        Product Reviews
      </h2>

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div className="flex items-center gap-4 w-full md:w-1/3 justify-center md:justify-start">
          <div className="relative flex items-center justify-center w-20 h-20 rounded-full border-4 border-[#FFA439]">
            <span className="text-[20px] font-bold text-[#0B0F0E]">{averageRating}</span>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center mb-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={15}
                  fill={i < Math.floor(averageRating) ? "#FFA439" : "none"}
                  stroke="#FFA439"
                />
              ))}
            </div>
            <p className="text-[#525252] text-[13px]">
              from {Intl.NumberFormat().format(totalReviews)} reviews
            </p>
          </div>
        </div>

        <div className="flex-1 space-y-2 w-full">
          {ratings.map((rating) => {
            const percentage = (rating.count / totalReviews) * 100;
            return (
              <div
                key={rating.stars}
                className="flex items-center gap-2 text-sm text-gray-700"
              >
                <div className="flex items-center w-10 shrink-0">
                  <span>{rating.stars}.0</span>
                  <Star size={14} fill="#FFA439" stroke="#FFA439" className="ml-1" />
                </div>

                <div className="w-full bg-gray-100 rounded-full h-1.5">
                  <div
                    className="bg-[#292929] h-1.5 rounded-full"
                    style={{ width: `${percentage}%` }}
                  />
                </div>

                <span className="w-10 text-right text-[13px] text-[#0B0F0E]">
                  {rating.count}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
