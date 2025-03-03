import axios from "axios";


export const useRegistration = () => {

    

    interface LoginPayload{
   
        membership_number: string,
        payroll_number: string,
        first_name: string,
        last_name: string,
        gender: string,
        marital_status: string,
        location: string,
        date_of_birth: string,
        phone_number_1: string,
        phone_number_2: string,
        email: string,
        nationality: string,
        date_of_application: string,
      }

    async function register_user(payload: LoginPayload) {
        const resp = await axios.post("/users", payload)
        //localStorage.storedData = resp.data.data;
    
        useRouter().push(`${resp.data.data.id}`)
    }
     
 
    return {
        register_user,

    }
}