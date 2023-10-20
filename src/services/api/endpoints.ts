import { api } from "./axios";

export const GET = async (url: string) => {
  return await api
    .get(url)
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

export const getEndpoint = async (url: string, token: string) => {
  return await api
    .get(url, { headers: { token: token } })
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

export const putEndpoint = async (
  url: string,
  token: string,
  ticketId: string,
  userId: string
) => {
  return await api
    .put(url, {
      headers: { token: token },
      data: { ticket_id: ticketId, user_id: userId },
    })
    .then((res) => res.status)
    .catch((err) => console.log(err));
};

export const updateEndpoint = async (url: string, token: string, data: any) => {
  return await api
    .put(url, data, { headers: { token: token } })
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

export const postEndpoint = async (url: string, token: string, body: any) => {
  return await api.post(url, body, { headers: { token: token } });
};

export const loginPostEndpoint = async (url: string, body: any) => {
  return await api.post(url, body);
};
