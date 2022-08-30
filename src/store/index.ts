import { configureStore } from "@reduxjs/toolkit";
import favoriteData from "./modules/Favorite/reducer";
export const store = configureStore({
  reducer: {
    favorites: favoriteData,
  }
});
