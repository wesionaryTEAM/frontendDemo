import blogSlice from "./blog/blog.slice";

const rootReducer = {
  blogs: blogSlice.reducer,
};

export default rootReducer;
