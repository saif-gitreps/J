import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type User = {
   email: string;
   token: string;
};

interface AuthState {
   isAuthenticated: boolean;
   user: User | null;
   loading: boolean;
   error: string | null;
}

const initialState: AuthState = {
   isAuthenticated: false,
   user: null,
   loading: false,
   error: null,
};

const authSlice = createSlice({
   name: "auth",
   initialState,
   reducers: {
      loginStart(state) {
         state.loading = true;
         state.error = null;
      },
      loginSuccess(state, action: PayloadAction<User>) {
         state.loading = false;
         state.isAuthenticated = true;
         state.user = action.payload;
      },
      loginFailure(state, action: PayloadAction<string>) {
         state.loading = false;
         state.error = action.payload;
         state.isAuthenticated = false;
         state.user = null;
      },
      logout(state) {
         state.isAuthenticated = false;
         state.user = null;
         state.error = null;
         state.loading = false;
      },
   },
});

export const { loginStart, loginSuccess, loginFailure, logout } = authSlice.actions;

export default authSlice.reducer;
