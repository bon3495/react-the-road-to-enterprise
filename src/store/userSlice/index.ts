import { createSlice, PayloadAction, createSelector } from '@reduxjs/toolkit';
import { RootState } from '@/store';
import { Posts, User } from './user.types';

export type UserState = {
  user: User | null;
  token: string;
  posts: Posts[] | [];
};

const initialState: UserState = {
  user: null,
  token: '',
  posts: [],
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLogin: (state, action: PayloadAction<UserState>) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },

    setLogout: state => {
      state.user = initialState.user;
      state.token = initialState.token;
    },

    setFriends: (state, action: PayloadAction<User>) => {
      if (state.user) {
        state.user.friends = action.payload.friends;
      } else {
        console.error('user friends non-exist');
      }
    },

    setPosts: (state, action: PayloadAction<Posts[]>) => {
      state.posts = action.payload;
    },

    setPost: (state, action: PayloadAction<Posts>) => {
      const updatedPosts = state.posts.map(post => {
        if (post._id === action.payload._id) return action.payload;

        return post;
      });

      state.posts = updatedPosts;
    },
  },
});

export const { setLogin, setLogout, setFriends, setPosts, setPost } =
  userSlice.actions;

export const getSelectedUser = createSelector(
  (state: RootState) => state.user,
  user => user
);

export default userSlice.reducer;
