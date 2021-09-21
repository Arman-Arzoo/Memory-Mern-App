// create user action creator
export const createUser = (user,history,setError) => async (dispatch) => {
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
         setError(data.message)
        }else
        {
         dispatch({ type: "AUTH", data: data });
         history.push('/login')
        }
     
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

export const SignUser = (user,history,setError) => async (dispatch) => {
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
         setError(data.message)
        }else
        {
        localStorage.setItem("jwt",data.token);
         dispatch({ type: "AUTH", data: data});
         console.log(data.result)
         history.push('/')
        }
     
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};