import { Status } from "../types";

export function findCategory(name: string, category: string) {
  category = category ? category.toLowerCase() : "";
  name = name ? name.toLowerCase() : "";
  const petInfo = [category, name];

  if (arrayIncludesSubstring(petInfo, "cat")) {
    return "cat";
  }
  if (arrayIncludesSubstring(petInfo, "dog")) {
    return "dog";
  }

  if (arrayIncludesSubstring(petInfo, "fish")) {
    return "fish";
  }

  if (arrayIncludesSubstring(petInfo, "bird")) {
    return "bird";
  }
  return "unknown";
}

function arrayIncludesSubstring(arr: string[], subString: string): boolean {
  return arr.some((item) => item.includes(subString));
}

export function areAllStatusesFalse(
  statuses: Record<Status, boolean>
): boolean {
  return Object.values(statuses).every((status) => status === false);
}
