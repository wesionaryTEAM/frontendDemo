import blogSlice from "./blog/blog.slice";

const rootReducer = {
  blog: blogSlice.reducer,
};

export default rootReducer;
