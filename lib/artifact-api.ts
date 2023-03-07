import { IArtifact } from "@/types/artifact";
import { API } from ".";

export const getAllArtifacts = async () => {
  const resp = await API.get("/reliquary");
  const data = resp.data.data;

  const artifacts: IArtifact[] = [];

  // transform data into array of objects
  Object.keys(data.items).map((key) => {
    artifacts.push({ ...data.items[key] });
  });

  return artifacts;
};
