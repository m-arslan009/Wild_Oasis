import Filter from "../../UI/Filter";
import SortBy from "../../UI/SortBy";

function CabinTableOperations() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "1rem",
      }}
    >
      <Filter
        filterField={"filter"}
        options={[
          { value: "all", label: "All" },
          { value: "no-discount", label: "No Discount" },
          { value: "with-discount", label: "With Discount" },
        ]}
      />
      <SortBy
        options={[
          { value: "name-asc", label: "Sort by name (A-Z)" },
          { value: "name-desc", label: "Sort by name (Z-A)" },
          { value: "regularPrice-asc", label: "Sort by price (Low First)" },
          { value: "regularPrice-desc", label: "Sort by price (High First)" },
          { value: "maxCapacity-asc", label: "Sort by capacity (Low First)" },
          { value: "maxCapacity-desc", label: "Sort by capacity (High First)" },
        ]}
      />
    </div>
  );
}

export default CabinTableOperations;
