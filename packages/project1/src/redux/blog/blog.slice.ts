import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import firebase from "../../firebase/utils";
import { Blog } from "./blog.types";

const BlogInitialState: Blog[] = [
  {
    id: "AX34234",
    title: "This is the tile of blog",
    description: "This the description of the blog",
    error: null,
  },
];

const blogSlice = createSlice({
  name: "blog",
  initialState: BlogInitialState,
  reducers: {
    firstRender: (state, { payload }: PayloadAction<Blog>) => {},
    createNewBlog: (state, { payload }: PayloadAction<Blog>) => {
      payload.error = null;
      state.push(payload);
    },
    getBlogDetailsSuccess(state, { payload }: PayloadAction<Blog>) {
      state.push(payload);
    },
    // getBlogDetailsFailed(state, { payload }: PayloadAction<string>) {
    //   state.id = null;
    //   state.error = payload.error;
    // },
  },
});

// export const fetchBlog = createAsyncThunk("blog", async (userId, thunkAPI) => {
//   const reponse;
// });

export default blogSlice;
