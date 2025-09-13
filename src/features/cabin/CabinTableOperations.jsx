import Filter from "../../UI/Filter";

function CabinTableOperations() {
  return (
    <Filter
      filterField={"filter"}
      options={[
        { value: "all", label: "All" },
        { value: "no-discount", label: "No Discount" },
        { value: "with-discount", label: "With Discount" },
      ]}
    />
  );
}

export default CabinTableOperations;
