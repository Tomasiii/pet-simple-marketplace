import { RootState } from "../store";

const KEY = "redux-state";
export const loadState = () => {
    try {
        const serializedState = localStorage.getItem(KEY);
        if (!serializedState) return undefined;
        return JSON.parse(serializedState);
    } catch (e) {
        return undefined;
    }
};

export const saveState = async (state: RootState) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem(KEY, serializedState);
    } catch (e) {
        console.error(e);
    }
};
