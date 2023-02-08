import { useQuery } from "@tanstack/react-query"; //it is used to fetch data and requires a key and a fetch function
import fetchBreedList from "./fetchBreedList";

export default function useBreedList(animal) {
  const results = useQuery(["breeds", animal], fetchBreedList);
  return [results?.data?.breeds ?? [], results.status];
}
