import { store } from "../app/store";
import {Provider} from 'react-redux';

export const AppProvider = ({children}) => {
    return <Provider store={store}>{children}</Provider>
}