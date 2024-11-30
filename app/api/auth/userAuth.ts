import { environment } from "@/env/env";
import axios from "axios";
import Swal from "sweetalert2";


export const userAuth = async (username: string='', password: string=''):Promise<any> => {
    let data: any;
    
    try {
        data = await axios.post(`${environment.baseUrl}/users/auth/sign`, { username, password });
        
        // if ( data.data.status != 200 ) {       
        //     return null;
        // }
    } catch (error) {
        return null;  
    }
    return data.data.data;
}; 
  