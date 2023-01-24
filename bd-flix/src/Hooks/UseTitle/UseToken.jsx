import { useState } from "react";

const useToken = (user) => {
    const [token, setToken] = useState('')
    console.log('usetoken', user)
    return [token]
}
export default useToken;