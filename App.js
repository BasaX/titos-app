import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from "@react-navigation/native";
import { AuthProvider } from "./contexts/AuthContext";
import AuthNavigator from "./navigations/AuthNavigator";

const Main = () => {
  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
};

export default function App() {
  return (
    <TailwindProvider>
      <AuthProvider>
        <Main />
      </AuthProvider>
    </TailwindProvider>
  );
}
