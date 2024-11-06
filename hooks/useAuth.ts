import { asyncStorage } from '@/app/utils/asyncStorage';
import { UUID } from '@/constants/StorageData';
import { useEffect, useState } from 'react';
import uuid from 'react-native-uuid'

const useAuth = ()=>{
    const [id, setId] = useState<string>();
    const setUuid = async ()=> {
        const uuid = await asyncStorage.getData(UUID);    
        setId(uuid);
    }

    useEffect(()=>{
        setUuid();
    },[])

    useEffect(()=>{
        if(id === null){
            asyncStorage.storeData(UUID, uuid.v4());
        }
    },[id])
}

export default useAuth;