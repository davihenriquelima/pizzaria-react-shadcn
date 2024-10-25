import { getAllStates } from "@/services/locations";
import { City, State } from "@/types/State";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

type StatesContextType = {
    states: State[];
    cities: City[];
    handleStateChange: (value:State["code"]) => void;
};

export const StatesContext = createContext<StatesContextType | null >(null);

export const StatesProvider = ({children}: {children:ReactNode}) => {
    const [states, setStates] = useState<State[]>([]);
    const [cities, setCities] = useState<City[]>([]);
    const [selectedState, setSelectedState] = useState<string | null>(null);

    useEffect(() => {
        const fetchStates = async () => {
            const statesData = await getAllStates();
            setStates(statesData);
        };
        fetchStates();
    }, []);

    const handleStateChange = (value:State["code"]) => {
        const stateCode = value;
        setSelectedState(stateCode);
        const state = states.find((s)=> s.code === stateCode);
        setCities([]);
        setCities(state?.cities || []);
    }

    return (
        <StatesContext.Provider 
            value={{states, cities, handleStateChange}}
        >
            {children}
        </StatesContext.Provider>
    )
}

export const useStatesCtx = () => {
    const context = useContext(StatesContext);
    if (!context) {
        throw new Error('useListCtx must be used within a StatesProvider');
    }
    return context;
};