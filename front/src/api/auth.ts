import EncryptedStorage from 'react-native-encrypted-storage';
import { Category, Profile } from '../types/domain';
import axiosInstance from './axios';

type RequestUser = {
  email: string;
  password: string;
};

const postSignup = async ({ email, password }: RequestUser): Promise<void> => {
  const { data } = await axiosInstance.post(`/auth/signup`, {
    email,
    password,
  });

  return data;
};

type ResponseToken = {
  accessToken: string;
  refreshToken: string;
};

const postSignin = async ({
  email,
  password,
}: RequestUser): Promise<ResponseToken> => {
  const { data } = await axiosInstance.post('/auth/signin', {
    email,
    password,
  });

  return data;
};

type ResponseProfile = Profile & Category;

const getProfile = async (): Promise<ResponseProfile> => {
  const { data } = await axiosInstance.get('/auth/me');

  return data;
};

const getAccessToken = async () => {
  const refreshToken = await EncryptedStorage.getItem('refreshToken');
  const { data } = await axiosInstance.get('/auth/refresh', {
    headers: {
      Authorization: `Bearer ${refreshToken}`,
    },
  });

  return data;
};

const logout = async () => {
  await axiosInstance.post('/auth/logout');
};

export { postSignup, postSignin, getProfile, getAccessToken, logout };
export type { RequestUser, ResponseToken, ResponseProfile };
