import create from 'zustand'

type FilterState = {
  state: {
    isOpen: Boolean;
  }
  toggleModal: () => void;
};  
export const useFilter = create<FilterState>((set) => {
  const initialState = {
    isOpen: false,
  };
  return {
    state: {
      ...initialState,
    },
    toggleModal: () => set((state) => ({
      ...state, 
    })),
    }
    // toggleModal: () => 
      // set(( { state }) => {
      //   state.isOpen = !state.isOpen;
      // }),
});

