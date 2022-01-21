import { RootState } from "../index";

export const historySelector = (state: RootState) => {
    return state.history;
};
