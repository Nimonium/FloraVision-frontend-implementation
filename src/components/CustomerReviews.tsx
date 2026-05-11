import SectionTitle from "./SectionTitle";
import ReviewCard from "./ReviewCard";

export default function CustomerReviews() {
  const reviews = [
    {
      id: 1,
      name: "Shelly Russel",
      rating: 5,
      review: "Just got my hands on some absolutely awesome plants, and I couldn't be happier!",
      avatar: "/avatars/shelly.png",
    },
    {
      id: 2,
      name: "Lula Rolfson",
      rating: 5,
      review: "Each one has its own unique charm and personality, and they've already started brightening up my space. The vibrant colors and fresh greenery make such a huge difference in my home.",
      avatar: "/avatars/lula.png",
    },
    {
      id: 3,
      name: "Carol Huels",
      rating: 5,
      review: "It's like bringing a little piece of nature indoors. Definitely worth the investment—my plant collection has never looked better!",
      avatar: "/avatars/carol.png",
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 py-24 pt-32">
      <SectionTitle title="Customer Review" />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 items-start">
        {reviews.map((review) => (
          <ReviewCard 
            key={review.id}
            name={review.name}
            rating={review.rating}
            review={review.review}
            avatar={review.avatar}
          />
        ))}
      </div>
    </section>
  );
}
