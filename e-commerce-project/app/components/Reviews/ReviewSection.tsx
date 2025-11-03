import { ReviewFilter } from "./ReviewFilter";
import { ReviewCard } from "./ReviewCard";

const reviews = [
  {
    name: "Darrell Steward",
    avatar: "/images/ss4.png",
    rating: 5,
    text: "This is amazing product I have.",
    date: "July 2, 2020 03:29 PM",
    likes: 128,
  },
  {
    name: "Darlene Robertson",
    avatar: "/images/ss1.png",
    rating: 5,
    text: "This is amazing product I have.",
    date: "July 2, 2020 01:04 PM",
    likes: 82,
  },
  {
    name: "Kathryn Murphy",
    avatar: "/images/ss2.png",
    rating: 5,
    text: "This is amazing product I have.",
    date: "June 26, 2020 10:03 PM",
    likes: 9,
  },
  {
    name: "Ronald Richards",
    avatar: "/images/ss3.png",
    rating: 5,
    text: "This is amazing product I have.",
    date: "July 7, 2020 10:14 AM",
    likes: 124,
  },
];

export const ReviewSection: React.FC = () => {
  return (
    <section className="w-full bg-white px-4 sm:px-6 lg:px-8 py-10">
      <div className="container m-auto flex flex-col md:flex-row gap-8">
        
        <div className="hidden md:block">
          <ReviewFilter />
        </div>

        <div className="flex-1">
          <div className=" mb-6">
            <h2 className="text-[17px] font-semibold text-[#292929] mb-5 ">Review Lists</h2>
            <div className="flex flex-wrap gap-3">
              <button className="px-4 py-1 border rounded-[5px] bg-[#EBEBEB] text-black text-[13px] font-medium">
                All Reviews
              </button>
              <button className="px-4 py-1 border border-[#E6E6E6] rounded-[5px] bg-white text-black text-[13px] font-medium">
                With Photo & Video
              </button>
              <button className="px-4 py-1 border border-[#E6E6E6] rounded-[5px] bg-white text-black text-[13px] font-medium">
                With Description
              </button>
            </div>
          </div>

          <div>
            {reviews.map((review, index) => (
              <ReviewCard key={index} {...review} />
            ))}
          </div>
                {/* {buttons} */}
          <div className="flex justify-center items-center gap-2 mt-8">
            <button className="px-3 py-1 rounded-[5px] border border-[#333333] text-gray-700">1</button>
            <button className="px-3 py-1 rounded-[5px] border border-[#E4E9EE] text-gray-700">2</button>
            <span className="text-gray-500 px-2 py-1 rounded-[5px] border border-[#E4E9EE] ">...</span>
            <button className="px-3 py-1 rounded-[5px] border border-[#E4E9EE] text-gray-700">19</button>
            <button className="px-3 py-1  text-gray-700">&gt;</button>
          </div>
        </div>
      </div>
    </section>
  );
};
