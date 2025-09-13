import CabinTable from "../features/cabin/CabinTable";
import Row from "../UI/Row";
import Heading from "../UI/Heading";
import AddCabin from "../features/cabin/AddCabin";
import CabinTableOperations from "../features/cabin/CabinTableOperations";

export default function Cabins() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Cabins</Heading>
        <CabinTableOperations />
      </Row>
      <Row>
        <CabinTable />
        <AddCabin />
      </Row>
    </>
  );
}
