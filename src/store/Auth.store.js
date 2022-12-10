import create from "zustand";

const Auth = create((set) => ({
  isLoading: false,
  setIsloading: (isAuth) => set(() => ({ isLoading: isAuth })),
}));

export { Auth };
