import apiRequester from "./requester"

interface AuthResponse {
    accessToken: string;
}

export const checkAuth = async (userId:string):Promise<AuthResponse>=>{
    const { data } =  await apiRequester.post<AuthResponse>('/auth', {
        userId
    })

    return data;
}