'use client'
import { useState } from "react";

export const ReviewFilter: React.FC = () => {
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);

  const ratings = [5, 4, 3, 2, 1];
  const topics = [
    "Product Quality",
    "Seller Services",
    "Product Price",
    "Shipment",
    "Match with Description",
  ];

  return (
    <aside className="bg-white border border-[#A3A3A3] border-dashed rounded-[5px] p-5 w-full md:w-64 h-fit">
      <h3 className="font-semibold text-gray-800 mb-4 border-b pb-3 border-[#A3A3A3] border-dashed">Reviews Filter</h3>

      <div className="mb-6">
        <p className="font-semibold text-[#141414] text-[13px] mb-2">Rating</p>
        <ul className="space-y-1">
          {ratings.map((rate) => (
            <li key={rate}>
              <label className="flex items-center gap-2 text-[#C4C8CC] cursor-pointer">
                <input
                  type="checkbox"
                  checked={selectedRating === rate}
                  onChange={() =>
                    setSelectedRating(selectedRating === rate ? null : rate)
                  }
                  className="accent-indigo-500"
                />
                <span>{rate}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <p className="font-semibold text-[13px] text-[#141414] mb-2">Review Topics</p>
        <ul className="space-y-1">
          {topics.map((topic) => (
            <li key={topic}>
              <label className="flex items-center gap-2 text-[#818B9C] font-semibold text-[13px] cursor-pointer">
                <input
                  type="checkbox"
                  checked={selectedTopics.includes(topic)}
                  onChange={() =>
                    setSelectedTopics((prev) =>
                      prev.includes(topic)
                        ? prev.filter((t) => t !== topic)
                        : [...prev, topic]
                    )
                  }
                  className="accent-indigo-500"
                />
                <span>{topic}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};
