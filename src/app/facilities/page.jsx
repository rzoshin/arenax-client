import FacilitiesContainer from "@/components/facilities/FacilitiesContainer";


const FacilitiesPage = async () => {

  const res = await fetch("http://localhost:8000/facilities");

  const facilities = await res.json();

  return (
    <div className="py-16">

      <div className="max-w-7xl mx-auto px-4">

        <h1 className="text-5xl font-bold mb-12">
          Explore All Facilities
        </h1>

        <FacilitiesContainer facilities={facilities} />

      </div>
    </div>
  );
};

export default FacilitiesPage;