import { useQuery } from "@tanstack/react-query";
import { getCabins } from "../../Services/apiCabins";

export function useCabin() {
  const {
    data: cabins,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["cabins"],
    queryFn: getCabins,
  });

  return { cabins, error, isLoading };
}
