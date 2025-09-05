import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateSetting as updateSettingAPI } from "../../Services/apiSetting";
import toast from "react-hot-toast";

export function useUpdateSetting() {
  const queryClient = useQueryClient();

  const { mutate: updateSetting } = useMutation({
    mutationKey: ["settings"],
    mutationFn: updateSettingAPI,
    onSuccess: () => {
      toast.success("Settings updated successfully");
      queryClient.invalidateQueries({ queryKey: ["settings"] });
    },

    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { updateSetting };
}
