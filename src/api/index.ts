import { Pet, Status } from "../types";

export async function getPetsByStatus(
  status: Status
): Promise<Pet[] | undefined> {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_BASE_API_URL}?status=${status}`
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch pets`);
    }

    return await response.json();
  } catch (error) {
    console.log(error);
  }
}
