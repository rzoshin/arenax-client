import FeaturedCarousel from "./FeaturedCarousel";

const Featured = async () => {
  const res = await fetch("http://localhost:8000/facilities");
  const facilities = await res.json();
  const featuredFacilities = facilities.slice(0, 6);

  return <FeaturedCarousel facilities={featuredFacilities} />;
};

export default Featured;