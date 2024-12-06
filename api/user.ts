import apiRequester from "./requester";

export interface User {
  id: number,
  userId: string,
  createdAt: string,
  updatedAt: string
}

export const createUser = async (uuid:string):Promise<User>=>{
    const { data } = await apiRequester.post<User>('/members', {
        uuid 
    });

    return data;
}