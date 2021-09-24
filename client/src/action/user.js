import { toast } from 'react-toastify';
// create user action creator
export const createUser = (user,history) => async (dispatch) => {
  fetch("http://localhost:5000/user/signup", {
    method: "POST", 
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => response.json())
    .then((data) => {
        if(data.message){
          toast.error(data.message)
        }else
        {
         dispatch({ type: "AUTH", data: data });
         toast.success("user successfuly created")
         history.push('/login')
         
        }
     
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

export const SignUser = (user,history) => async (dispatch) => {
  fetch("http://localhost:5000/user/signin", {
    method: "POST", 
    headers: {
      "Content-Type": "application/json",
    
    },
    body: JSON.stringify(user),
  })
    .then((response) => response.json())
    .then((data) => {
        if(data.message){
         toast.error(data.message)
       
        }else
        {
        localStorage.setItem("jwt",data.token);
         dispatch({ type: "AUTH", data: data});
         toast.success("Login successfully")
         history.push('/')
        }
     
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};