import { IAppState } from "./store";

export const getPosts = (state: IAppState) => state.postsSlice.posts