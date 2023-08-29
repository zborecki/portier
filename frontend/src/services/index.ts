import type { AxiosRequestConfig } from 'axios';

import { api } from '#libraries/axios';

export const fetch = async <T extends unknown>(
  endpoint: string,
  options?: AxiosRequestConfig,
) => api.get<T>(endpoint, options);
