import SectionTitle from "./SectionTitle";
import TopSellingCard from "./TopSellingCard";

/**
 * TopSelling Component
 * Renders the high-performing plant products in a responsive grid.
 * Assets are pulled from the public folder.
 */
export default function TopSelling() {
  // Product dataset for the top selling section
  const topProductList = [
    {
      id: "top_01",
      title: "Aglaonema plant",
      info: "The Aglaonema plant, commonly known as Chinese Evergreen, is popular for its striking foliage.",
      priceTag: "Rs. 300/-",
      imgSrc: "/featured-plant.png",
    },
    {
      id: "top_02",
      title: "Plantain Lilies",
      info: "Hostas are primarily grown for their lush, decorative leaves, which come in a wide range of colors.",
      priceTag: "Rs. 350/-",
      imgSrc: "/trendy-plant-1.png",
    },
    {
      id: "top_03",
      title: "Cactus",
      info: "It is known for its ability to thrive in arid environments.",
      priceTag: "Rs. 250/-",
      imgSrc: "/top-plant-3.png",
    },
    {
      id: "top_04",
      title: "Swiss cheese Plant",
      info: "Monstera is a lush houseplant known for its distinctive perforated leaves.",
      priceTag: "Rs. 400/-",
      imgSrc: "/top-plant-4.png",
    },
    {
      id: "top_05",
      title: "Sansevieria plant",
      info: "It is a popular indoor plant admired for its striking appearance and low-maintenance nature.",
      priceTag: "Rs. 450/-",
      imgSrc: "/top-plant-2.png",
    },
    {
      id: "top_06",
      title: "Agave plant",
      info: "The Agave plant is a succulent noted for its bold presence. It has strong, sword-like leaves.",
      priceTag: "Rs. 350/-",
      imgSrc: "/top-plant-5.png",
    }
  ];

  return (
    <section id="top-sellers" className="max-w-7xl mx-auto px-6 md:px-12 py-24 pb-32">
      {/* Centered Heading with custom brackets */}
      <div className="mb-8">
        <SectionTitle title="Our Top Selling Plants" />
      </div>
      
      {/* Responsive Grid for Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
        {topProductList.map((product) => (
          <TopSellingCard 
            key={product.id}
            title={product.title}
            description={product.info}
            price={product.priceTag}
            image={product.imgSrc}
          />
        ))}
      </div>
    </section>
  );
}
