import {NavigationContainer} from '@react-navigation/native';
import { TabNavigation } from './tabNavigation';

export const AppNavigation = () => {
    return (
        <NavigationContainer>
            <TabNavigation />
        </NavigationContainer>
    )
}