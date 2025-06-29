import { create } from 'zustand';

// Tạo store với Zustand
const useAppStore = create((set) => ({
    isHoveringBanner: false,
    setIsHoveringBanner: (value) => set(() => ({ isHoveringBanner: value })),
}));

export default useAppStore;