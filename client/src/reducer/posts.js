// eslint-disable-next-line
export default (posts = [], action) => {
  switch (action.type) {
    case "FETCH-ALL": {
      return action.payload;
    }
    case "CREATE": {
      return [...posts, action.payload];
    }
    case "UPDATE":{
      return posts.map((post)=>post.id === action.payload._id ? action.payload :post)
    }
    case "DELETE":{
      return posts.filter((post) => post._id !== action.payload);
    }
    
    default: {
      return posts;
    }
  }
};
