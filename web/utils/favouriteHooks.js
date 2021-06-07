import axios from 'axios';
import { useCallback } from 'react';
import useUser from './UserHook' 

export default function useFavourite(){
    const { jwt, userEmail } = useUser();

    const isMyFavourite = useCallback( async (id) =>{
        try{
            const res= await axios({
                        method: "get",
                        url: process.env.SERVER_URL+"/inmueble/favoritos/"+userEmail,
                        data: {
                            idinmueble:id
                        },
                        headers: { "token": jwt }
                    })
            return res.data.res.some(obj=>obj.inmueble_idinmueble===id);
        }catch(er){
            return false;
        }
    })

    const addFavourite = useCallback( async (id)=>{
        try{
            axios({
                method: "post",
                url: process.env.SERVER_URL+"/inmueble/agregarFavorito",
                data: {
                    idinmueble:id
                },
                headers: { "token": jwt }
              })
            return true;
        }catch(er){
            return false;
        }
    })

    const trashFavourite = useCallback(async (id)=>{
        try{
            axios({
                method: "post",
                url: process.env.SERVER_URL+"/inmueble/eliminarFavorito",
                data: {
                    idinmueble:id
                },
                headers: { "token": jwt }
              })
            return true;
        }catch(er){
            return false;
        }
    })

    return{
        addFavourite,
        trashFavourite,
        isMyFavourite
    }

}