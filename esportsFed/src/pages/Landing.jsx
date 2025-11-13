import { useDispatch, useSelector } from "react-redux";
// dispatch to add data, seelctor to get data
import { useEffect  } from "react";
import { setUser } from "../store/authSlice";

export default function Home() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
   useEffect(() => {
    const fetchUser =async ()=>{
        try {
            const res = await fetch('https://dummyjson.com/users');
            const data = await res.json();                   
            console.log(data.users)
            dispatch(setUser(data.users[0]));    
        } catch (error) {
        console.log(error)    
        }
    }
    fetchUser();
  }, [])
  
  return (
    <>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </>
  );
}
