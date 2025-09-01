import CabinTable from "../features/cabin/CabinTable";
import Row from "../UI/Row";
import Heading from "../UI/Heading";
import { useState } from "react";
import CreateCabinForm from "../features/cabin/CreateCabinForm";
import Button from "../UI/Button";

export default function Cabins() {
  const [isShow, setIsShow] = useState(true);
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Cabins</Heading>
        <p>Filter / Sort</p>
      </Row>
      <Row>
        <CabinTable />
        <Button onClick={() => setIsShow((prev) => !prev)}>
          {isShow ? "Hide Form" : "Show Form"}
        </Button>

        {isShow && <CreateCabinForm />}
      </Row>
    </>
  );
}
