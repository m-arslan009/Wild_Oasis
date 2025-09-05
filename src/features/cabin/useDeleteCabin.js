import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCabin as deleteCabinRecord } from "../../Services/apiCabins";
import toast from "react-hot-toast";

export function useDeleteCabin() {
  // to update the UI also when deleting a record we need to tell react query that the data is no more valid and fetch valid data again and for that we need to invalidate the queryClient that we fetch in App.jsx for cabins and make it invalid
  const queryClient = useQueryClient();

  const { isLoading, mutate: deleteCabin } = useMutation({
    // mutationFn: (id) => deleteCabin(id), // as we just passing the same value as id to the function so we can rewrite it as below
    mutationFn: deleteCabinRecord,
    onSuccess: () => {
      toast.success("Cabin Successfully deleted");
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
    },

    onError: (err) => toast.error(err.message),
  });

  return { isLoading, deleteCabin };
}
