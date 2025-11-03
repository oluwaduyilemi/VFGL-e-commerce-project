import HeroSection from "./components/HeroSection";
import RelateProducts from "./components/Product";
import { ReviewSection } from "./components/Reviews/ReviewSection";
import  ProductReview from "./components/ProductReview";

export default function Home() {
  return (
      <main className="">
          <HeroSection/>
          <RelateProducts/>
          <ProductReview />
          <ReviewSection/>
          <RelateProducts/>
      </main>
  );
}
