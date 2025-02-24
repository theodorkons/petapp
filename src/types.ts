export type Status = "available" | "pending" | "sold";

export type Pet = {
  id: number;
  name: string;
  category?: { name: string };
  status: Status;
};
