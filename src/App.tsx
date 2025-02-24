import PetCard from "./components/PetCard";
import "./App.css";
import { useQueries } from "@tanstack/react-query";
import { useState } from "react";
import Button from "./components/Button";
import { colors } from "./components/PetCard";
import { Pet, Status } from "./types";
import { getPetsByStatus } from "./api";

function App() {
  const [buttonsStatus, setButtonsStatus] = useState({
    available: true,
    pending: false,
    sold: false,
  });
  const statuses: Status[] = ["available", "pending", "sold"];

  const queryResults = useQueries({
    queries: statuses.map((status) => ({
      queryKey: ["petStatus", status],
      queryFn: () => getPetsByStatus(status),
      enabled: buttonsStatus[status],
    })),
  });

  const availableData = queryResults[0]?.data || [];
  const pendingData = queryResults[1]?.data || [];
  const soldData = queryResults[2]?.data || [];

  const isPending = queryResults
    .filter((result) => result.isFetched || result.isFetching)
    .some((query) => query.isPending); // check if any of the tanstack query calls are still fetching

  const isError = queryResults.some((query) => query.isError);

  if (isPending) {
    return (
      <div className="flex justify-center h-screen items-center">
        <div className="loader"></div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-center text-4xl mt-14">Something went wrong</div>
    );
  }

  const data = [
    buttonsStatus.available ? availableData : [],
    buttonsStatus.pending ? pendingData : [],
    buttonsStatus.sold ? soldData : [],
  ]
    .flat()
    .filter(Boolean);

  const createButtons = () => {
    return statuses.map((status) => {
      return (
        <Button
          status={status}
          onClick={() => {
            setButtonsStatus((prev) => ({
              ...prev,
              [status]: !prev[status],
            }));
          }}
          active={buttonsStatus[status]}
          className={`${colors[status]}`}
        />
      );
    });
  };

  return (
    <div className="px-2">
      <div className="flex gap-6 justify-center py-12">{createButtons()}</div>

      <div
        id="cardsContainer"
        className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-md md:max-w-3xl lg:max-w-4xl lg:grid-cols-5 mx-auto justify-center place-items-center"
      >
        {data.map((pet: Pet, index) => {
          return (
            <PetCard
              name={pet?.name}
              category={pet?.category?.name ?? ""}
              status={pet?.status}
              key={index} //api id's were not unique
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
