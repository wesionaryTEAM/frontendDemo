import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { firestore } from "../../firebase/utils";
import { BlogCollectionType,BlogType } from "./blog.types";

const BlogInitialState = {
  blogCollection: [] as BlogType[],
  loading: false,
  error: "",
  message: "",
} as BlogCollectionType;

export const fetchBlogData = createAsyncThunk("blog/fetchingBlog", async () => {
  const blogRef = await firestore.collection("blog");
  const blogSnapShot = await blogRef.get();
  return blogSnapShot.docs.map((doc: any) => {
    const { title, description } = doc.data();
    return {
      id: doc.id,
      title,
      description,
    } as BlogType;
  });
});

export const addBlogData = createAsyncThunk(
  "blog/addingBlog",
  async (formValues: any) => {
    await firestore.collection("blog").add({
      title: formValues.title,
      description: formValues.description,
    });
  }
);

const blogSlice = createSlice({
  name: "blogs",
  initialState: BlogInitialState,
  reducers: {},
  extraReducers: {
    [fetchBlogData.pending.toString()]: (state) => {
      state.loading = true;
    },
    [fetchBlogData.fulfilled.toString()]: (
      state,
      { payload }: PayloadAction<BlogType[]>
    ) => {
      state.blogCollection = payload;
      state.loading = false;
      state.error = "";
    },
    [fetchBlogData.rejected.toString()]: (
      state,
      { payload }: PayloadAction<string>
    ) => {
      state.loading = false;
      state.error = payload;
    },
    [addBlogData.pending.toString()]: (state) => {
      state.loading = true;
    },
    [addBlogData.fulfilled.toString()]: (
      state,
      { payload }: PayloadAction<BlogType[]>
    ) => {
      state.loading = false;
      state.message = "Blog added sucessfully";
    },
    [addBlogData.rejected.toString()]: (
      state,
      { payload }: PayloadAction<string>
    ) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export default blogSlice;
