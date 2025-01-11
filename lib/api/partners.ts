import { API_URL } from "./baseUrl";

export const fetchPartners = async () => {
  try {
    const response: {
      status: string;
      message: string;
      data: Array<{ id: number; avatar: string; company: string }>;
    } = await fetch(`${API_URL}/partner/to/all`).then((res) => res.json());
    return response;
  } catch (error) {
    console.log(error);
  }
};
