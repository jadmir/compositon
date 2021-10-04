import { useStore } from 'vuex'


const useAuth = () => {
    
    const store = useStore()

    const createUser = async ( user ) => {
        console.log(user)

        //Todo: store.dispatch('auth/createuser, user)
        // return resp
    } 


    return {

    }
}

export default useAuth