 import axios from "axios";
export default function Register() {

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const res = await axios.post("http://localhost:5000/api/user/register",{
        firstname: "Ajay",
        lastname: "Kumar",
        age: 22,
        phone: "1234567890",
        email: "ajay@example.com",
        password: "password123"
      });
      console.log(res.data);
    }catch(error){
      console.log(error);
    }
  }
  return (
 
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 bg-gray-900 p-8 ">
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm bg-gray-300 p-8 rounded-lg">
        <htmlForm action="#" method="POST" className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm/6 font-medium ">Email address</label>
            <div className="mt-2">
              <input id="email" type="email" name="email" required autoComplete="email" className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm/6 font-medium ">Password</label>
              <div className="text-sm">
                <a href="#" className="font-semibold text-indigo-400 hover:text-indigo-300">htmlForgot password?</a>
              </div>
            </div>
            <div className="mt-2">
              <input id="password" type="password" name="password" required autoComplete="current-password" className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" />
            </div>
          </div>

         <Button text="Register" onClick={handleSubmit}/>
        </htmlForm>

        <p className="mt-10 text-center text-sm/6 text-gray-400">
          Not a member?
          <a href="#" className="font-semibold text-indigo-400 hover:text-indigo-300">Start a 14 day free trial</a>
        </p>
      </div>
    </div>

  )
}
 