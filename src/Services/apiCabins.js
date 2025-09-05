import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  let { data, error } = await supabase
    .from("cabins")
    .select("*")
    .order("created_at", { ascending: true });
  if (error) {
    return [];
  }
  return data;
}

export async function deleteCabin(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);
  if (error) {
    return [];
  }
  return data;
}

export async function createEditCabin(newCabin, id) {
  const hasImagePath = typeof newCabin.image === "string";

  const imageName = `public/${Math.random()}-${newCabin.image?.name?.replaceAll(
    "/",
    ""
  )}`;

  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/Cabin-Images/${imageName}`;

  let query = supabase.from("cabins");

  // A) CREATE
  if (!id) {
    query = query.insert([{ ...newCabin, image: imagePath }]).select();
  }

  // B) EDIT
  if (id) {
    query = query
      .update({ ...newCabin, image: imagePath })
      .eq("id", id)
      .select();
  }

  const { data, error } = await query;

  if (error) {
    console.error("Database error:", error);
    throw new Error(id ? "Unable to edit cabin" : "Unable to create cabin");
  }

  // 2. Upload image only if it's a new file
  if (hasImagePath) return data;

  const { error: storageError } = await supabase.storage
    .from("Cabin-Images")
    .upload(imageName, newCabin.image);

  // 3. Delete the cabin IF there was an error uploading image
  if (storageError) {
    console.error("Storage error:", storageError);
    await supabase.from("cabins").delete().eq("id", data[0].id);
    throw new Error(`Unable to upload image: ${storageError.message}`);
  }

  return data;
}
