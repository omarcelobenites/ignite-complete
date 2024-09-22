import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'
import { StatusBar} from 'react-native';
import { GluestackUIProvider} from "@gluestack-ui/themed"
import { config } from "./config/gluestack-ui.config"

import { Routes } from "./src/routes"
import { Loading } from '@components/Loading';



export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_700Bold, Roboto_400Regular })
  return (
    <GluestackUIProvider config={config}>

      <StatusBar barStyle="light-content" backgroundColor="transparent"  translucent/>
      {
      fontsLoaded ? (
      <Routes />
        ) : (
        <Loading />
        )}
   
    </GluestackUIProvider>
  );
}

