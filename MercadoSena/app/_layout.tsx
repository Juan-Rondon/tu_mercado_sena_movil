import { useFonts } from "expo-font";
import { Slot, SplashScreen } from "expo-router";
import { useEffect } from "react";
import "./global.css";

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
    const [fontsLoaded, error] = useFonts({
        'OpenSans-Bold': require('../assets/fonts/OpenSans-Bold.ttf'),
        'OpenSans-Light': require('../assets/fonts/OpenSans-Light.ttf'),
        'OpenSans-Medium': require('../assets/fonts/OpenSans-Medium.ttf'),
    });
    
    useEffect(() => {
      if (error) throw error;

      if (fontsLoaded) SplashScreen.hideAsync();
     
    }, [fontsLoaded, error]);
    
    if (!fontsLoaded && !error) return null;

    return (
      <Slot />
    );
}

export default RootLayout