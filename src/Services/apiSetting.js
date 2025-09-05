import supabase from "./supabase";

export async function getSetting() {
  const { data, error } = await supabase.from("settings").select("*").single();
  console.log(data);
  if (error) {
    console.error(error);
    throw new Error("Error fetching settings");
  }
  return data;
}

export async function updateSetting(newSettings) {
  const { data, error } = await supabase
    .from("settings")
    .update(newSettings)
    .eq("id", 1)
    .select()
    .single();
  if (error) {
    console.error(error);
    throw new Error("Error updating settings");
  }
  return data;
}
