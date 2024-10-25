import { State } from "@/types/State";

export const getAllStates = async ():Promise<State[]> => {
    return new Promise((resolve, reject) => {
        return setTimeout(()=> {
            resolve(loadData());
        }, 2000)
    });
}

const loadData = async () => {
    const response = await fetch('/data/states.json');
    const data = await response.json();
    return data;
};