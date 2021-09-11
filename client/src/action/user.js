// create user action creator
export const createUser = (user,history,setError) => async (dispatch) => {
  fetch("http://localhost:5000/user", {
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
         dispatch({ type: "AUTH", payload: data });
         history.push('/login')
        }
     
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};