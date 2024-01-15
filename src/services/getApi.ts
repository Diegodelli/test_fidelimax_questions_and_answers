import { iResponse } from "@/interfaces";
import axios from "axios";

export const getApi = axios.create({
  baseURL: "https://fdlmx-backgrounds.sfo3.digitaloceanspaces.com",
  timeout: 5000,
});

export async function getQuestions(): Promise<iResponse> {
  const { data } = await getApi.get<iResponse>("/front-test/survey.json");

  return data;
}
