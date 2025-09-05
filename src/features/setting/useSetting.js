import { useQuery } from "@tanstack/react-query";
import { getSetting } from "../../Services/apiSetting";

export function useSetting() {
  const {
    data: setting,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["setting"],
    queryFn: getSetting,
  });

  console.log("isLoading:", isLoading);

  return { setting, isLoading, error };
}
