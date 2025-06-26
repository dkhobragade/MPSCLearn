import { create } from "zustand"
import { axiosInstance } from "../lib/axios"
import toast from "react-hot-toast"


interface AuthUser {
    signup:(data:any)=>Promise<void>
    authUser:any
}

export const useAuthStore = create<AuthUser>((set)=>({
    authUser:null,
    isCheckingAuth:false,

    checkAuth: async () => {

        try {
            const res = await axiosInstance.get("/auth/check")
            set({authUser:res.data})
            toast.success( "Account Created Successfully" )
        } catch (error) {
            console.log("Error in checkauth",error)
        }
    },

    signup: async (data: any) => {
        try {
            const res = await axiosInstance.post("/auth/signup",data)
            set({authUser:res.data})

        } catch (error) {
            console.log("Error in signup",error)
        }
    }


}))