import { getAccessToken } from "../auth/session";

export interface ApiResponseSuccess<T> {
  isSuccess: true;
  path: string;
  data: T;
}

export interface ApiResponseError {
  isSuccess: false;
  path: string;
  error: Record<string, unknown>;
}

export type ApiResponse<T> = ApiResponseSuccess<T> | ApiResponseError;

export class ApiError extends Error {
  constructor(
    public status: number,
    message: string,
    public details?: unknown,
  ) {
    super(message);
    this.name = "ApiError";
  }
}

const API_URL = process.env.API_URL || "http://127.0.0.1:8000/api";

async function apiRequest(
  endpoint: string,
  options: RequestInit = {}
): Promise<Response> {
  const accessToken = await getAccessToken();

  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    ...(options.headers as Record<string, string> ?? {}),
  };

  if (accessToken) {
    headers.Authorization = `Bearer ${accessToken}`;
  }

  return fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers,
    credentials: 'include',
  });
}

export async function getFetch<T>(
  endpoint: string,
  options: RequestInit = {},
): Promise<ApiResponse<T>> {
  const response = await apiRequest(endpoint, {
    ...options,
    method: 'GET',
  });

  return await response.json();
}

export async function deleteFetch(
  endpoint: string,
  options: RequestInit = {},
): Promise<void> {
  const response = await apiRequest(endpoint, {
    ...options,
    method: 'DELETE',
  });

  if (!response.ok) {
    throw new ApiError(response.status, 'Delete failed');
  }
}

export async function postFetch<T>(
  endpoint: string,
  options: RequestInit = {},
): Promise<ApiResponse<T>> {
  const response = await apiRequest(endpoint, {
    ...options,
    method: 'POST',
  });

  return await response.json();
}

export async function putFetch<T>(
  endpoint: string,
  options: RequestInit = {},
): Promise<ApiResponse<T>> {
  const response = await apiRequest(endpoint, {
    ...options,
    method: 'PUT',
  });

  return await response.json();
}

export async function patchFetch<T>(
  endpoint: string,
  options: RequestInit = {},
): Promise<ApiResponse<T>> {
  const response = await apiRequest(endpoint, {
    ...options,
    method: 'PATCH',
  });

  return await response.json();
}