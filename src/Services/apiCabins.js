import supabase from "./supabase";

export async function getCabins() {
  let { data, error } = await supabase.from("cabins").select("*");
  if (error) {
    console.error("Error fetching cabins:", error);
    return [];
  }
  return data;
}

export async function deleteCabin(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);
  if (error) {
    console.error("Error fetching cabins:", error);
    return [];
  }
  return data;
}

export async function createCabin(newCabin) {
  // we can use this but as the newCabin is already in that form as we use id and htmlFor that helps to just put newCabin and not write this from scratch
  // .insert([
  //     {
  //       name: newCabin.name,
  //       maxCapacity: newCabin.maxCapacity,
  //       regularPrice: newCabin.regularPrice,
  //       discount: newCabin.discount,
  //       description: newCabin.description,
  //       image: newCabin.image,
  //     },
  //   ])

  const { data, error } = await supabase
    .from("cabins")
    .insert([newCabin])
    .select();
  if (error) {
    throw new Error("Unable to create new Cabin");
  }

  return data;
}
