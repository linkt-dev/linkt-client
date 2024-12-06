import { asyncStorage } from '@/app/utils/asyncStorage';
import { UUID } from '@/constants/StorageData';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import uuid from 'react-native-uuid'

interface Id {
    isNew: boolean;
    value: string;
}

const useUuid = ()=>{
    const [id, setId] = useState<Id>();
    
    const manageUuid = async ()=> {
        const ogUuid = await asyncStorage.getData<Id>(UUID);

        if(!ogUuid){
            const newId = {isNew:true, value: uuid.v4().toString()};
            asyncStorage.storeData(UUID, newId);
            setId(newId);
            return;
        }
        else {
            if(ogUuid.isNew){
                asyncStorage.storeData(UUID, {...ogUuid, isNew:false});
            }
            setId(ogUuid);
        }
        
    }

    useEffect(()=>{
        manageUuid();
    },[]);

    return id;
}

export default useUuid;