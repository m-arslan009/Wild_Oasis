import styled from "styled-components";

import Spinner from "../../UI/Spinner";
import CabinRow from "./CabinRow";
import { useCabin } from "./useCabin";
import Table from "../../UI/Table";
import Menus from "../../UI/Menus";
import { useSearchParams } from "react-router";

export default function CabinTable() {
  const { cabins, isLoading } = useCabin();
  const [searchParam] = useSearchParams();
  if (isLoading) return <Spinner />;
  const filterValue = searchParam.get("filter") || "all";

  let filteredCabins;
  if (filterValue === "all") {
    filteredCabins = cabins;
  } else if (filterValue === "no-discount") {
    filteredCabins = cabins.filter((cabin) => !cabin.discount);
  } else if (filterValue === "with-discount") {
    filteredCabins = cabins.filter((cabin) => cabin.discount);
  }

  return (
    <Menus>
      <Table columns={"0.6fr 1.8fr 2.2fr 1fr 1fr 1fr"}>
        <Table.Header role="row">
          <div></div>
          <div>Cabin</div>
          <div>Capacity</div>
          <div>Price</div>
          <div>Discount</div>
          <div></div>
        </Table.Header>
        <Table.Body
          data={filteredCabins}
          render={(cabin) => <CabinRow key={cabin.id} cabin={cabin} />}
        />
      </Table>
    </Menus>
  );
}
