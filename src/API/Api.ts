const API_VAR = import.meta.env.VITE_MEDUSA_BACKEND_URL;

export const getPodcastApi = `${API_VAR}/store/podcast`;
export const getPodcastByIdApi =(id: string) => `${API_VAR}/store/podcast/${id}`;

export const getOrderListApi = `${API_VAR}/store/customers/me/orders`;
export const postContactApi = `${API_VAR}/store/contact`;