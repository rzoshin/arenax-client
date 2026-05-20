import FacilitiesContainer from "@/components/facilities/FacilitiesContainer";

const FacilitiesPage = async ({ searchParams }) => {
  const { search = "", type = "" } = await searchParams;

  const params = new URLSearchParams();
  if (search) params.set("search", search);
  if (type) params.set("type", type);

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/facilities?${params.toString()}`,
    { cache: "no-store" }
  );
  const facilities = await res.json();

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-5xl font-bold mb-12">Explore All Facilities</h1>
        <FacilitiesContainer
          facilities={facilities}
          initialSearch={search}
          initialType={type}
        />
      </div>
    </div>
  );
};

export default FacilitiesPage;
