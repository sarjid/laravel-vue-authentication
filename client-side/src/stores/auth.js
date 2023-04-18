import { defineStore } from "pinia";
import axiosInstance from "@/services/axiosService";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: {},
    isLoggedIn: false,
  }),

  persist: [
    {
      paths: ["user", "isLoggedIn"],
      storage: localStorage,
    },
  ],

  getters: {
    getUser: (state) => {
      return state.user;
    },

    loggedInStatus: (state) => {
      return state.isLoggedIn;
    },
  },

  actions: {
    async login(values) {
      try {
        const res = await axiosInstance.post("/login", values);
        if (res.status == 200) {
          this.user = res.data.data;
          this.isLoggedIn = true;
          return new Promise((resolve) => {
            resolve(res.data);
          });
        }
      } catch (error) {
        if (error.response) {
          return new Promise((reject) => {
            reject(error.response.data.errors);
          });
        }
      }
    },

    async logout() {
      try {
        const res = await axiosInstance.post("/logout");
        console.log(res);
        if (res.status == 200) {
          this.isLoggedIn = false;
          this.$reset();
        }
        console.log(res);
      } catch (error) {}
    },
  },
});
