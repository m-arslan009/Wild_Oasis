import styled from "styled-components";
import Row from "../../UI/Row";
import { formatCurrency } from "../../Utils/helpers";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCabin } from "../../Services/apiCabins";
import toast from "react-hot-toast";

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;
  padding: 0.5rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-gray-100);
  }
`;

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
  } = cabin;

  // to update the UI also when deleting a record we need to tell react query that the data is no more valid and fetch valid data again and for that we need to invalidate the queryClient that we fetch in App.jsx for cabins and make it invalid

  const queryCliend = useQueryClient();

  const { isLoading, mutate } = useMutation({
    // mutationFn: (id) => deleteCabin(id), // as we just passing the same value as id to the function so we can rewrite it as below
    mutationFn: deleteCabin,
    onSuccess: () => {
      toast.success("Cabin Successfully deleted");
      queryCliend.invalidateQueries({ queryKey: ["cabins"] });
    },

    onError: (err) => toast.error(err.message),
  });

  return (
    <TableRow>
      <Img src={image} />
      <Cabin>{name}</Cabin>
      <div>Fits up to {maxCapacity}</div>
      <Price>{formatCurrency(regularPrice)}</Price>
      <Discount>{formatCurrency(discount)}</Discount>
      <button onClick={() => mutate(cabinId)} disabled={isLoading}>
        {isLoading ? "Deleting..." : "Delete"}
      </button>
    </TableRow>
  );
}
