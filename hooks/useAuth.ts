import { useEffect } from "react";
import useUuid from "./useUuid";
import { checkAuth } from "@/api/auth";
import { createUser, User } from "@/api/user";
import { asyncStorage } from "@/app/utils/asyncStorage";
import { USER } from "@/constants/StorageData";

const useAuth = ()=>{
    const uuid = useUuid();

    const setAccessToken = (accessToken:string)=> {
        asyncStorage.storeData('accessToken', accessToken);
    }

    const storeAccessToken = async()=>{
        try {
            const user = await asyncStorage.getData<User>(USER);
            if(user){
                const {accessToken} = await checkAuth(user.userId!);
                setAccessToken(accessToken);
            }
        }
        catch(e){
            alert(e);
        }
    }

    const createNewUser = async (uuid:string)=> {
        try {
            const newUser = await createUser(uuid);
            asyncStorage.storeData(USER, newUser);
        }
        catch(e){
            alert(e);
        }
    }
    
    
    useEffect(()=>{
        if(!uuid?.isNew){
            storeAccessToken();
            return;
        }
        createNewUser(uuid.value);
    },[uuid]);
}

export default useAuth;