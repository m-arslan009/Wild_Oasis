import styled from "styled-components";

import { useDeleteCabin } from "./useDeleteCabin";
import { formatCurrency } from "../../Utils/helpers";
import CreateCabinForm from "./CreateCabinForm";
import { HiPencil, HiSquare2Stack, HiTrash } from "react-icons/hi2";
import { useCreateCabin } from "./useCreateCabin";
import Modal from "../../UI/Modal";
import ConfirmDelete from "../../UI/ConfirmDelete";
import Table from "../../UI/Table";
import Menus from "../../UI/Menus";

const Img = styled.img`
  display: block;
  width: 7rem;
  aspect-ratio: 3/2;
  object-fit: cover;
  object-position: center;
`;

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-gray-600);
  font-family: "Sono";
`;

const Price = styled.div`
  font-weight: 600;
  font-family: "Sono";
`;

const Discount = styled.div`
  font-weight: 500;
  font-family: "Sono";
  color: var(--color-green-700);
`;

export default function CabinRow({ cabin }) {
  const {
    id: cabinId,
    image,
    name,
    maxCapacity,
    regularPrice,
    discount,
    description,
  } = cabin;

  const { deleteCabin, isLoading } = useDeleteCabin();

  const { createCabin } = useCreateCabin();

  function handleDuplicate() {
    createCabin({
      name: `copy of ${name}`,
      image,
      maxCapacity,
      regularPrice,
      discount,
      description,
    });
  }

  return (
    <Table.Row>
      <Img src={image} />
      <Cabin>{name}</Cabin>
      <div>Fits up to {maxCapacity}</div>
      <Price>{formatCurrency(regularPrice)}</Price>
      {discount ? (
        <Discount>{formatCurrency(discount)}</Discount>
      ) : (
        <span>&mdash;</span>
      )}
      <div>
        <button onClick={handleDuplicate}>
          <HiSquare2Stack />
        </button>
        <Modal>
          <Modal.Open opens="edit">
            <button>
              <HiPencil />
            </button>
          </Modal.Open>
          <Modal.Window name={"edit"}>
            <CreateCabinForm cabinToEdit={cabin} />
          </Modal.Window>
        </Modal>
        <Modal>
          <Modal.Open opens={"delete"}>
            <button>
              <HiTrash />
            </button>
          </Modal.Open>
          <Modal.Window name={"delete"}>
            <ConfirmDelete
              resourceName={name}
              onConfirm={() => deleteCabin(cabinId)}
              disabled={isLoading}
            />
          </Modal.Window>
        </Modal>
        <Menus.Menu>
          <Menus.Toggle id={cabinId} />
          <Menus.List id={cabinId}>
            <Menus.Button icon={<HiSquare2Stack />} onClick={handleDuplicate}>
              Duplicate
            </Menus.Button>
            <Menus.Button icon={<HiPencil />}>Edit</Menus.Button>
            <Menus.Button icon={<HiTrash />}>Delete</Menus.Button>
          </Menus.List>
        </Menus.Menu>
      </div>
    </Table.Row>
  );
}
