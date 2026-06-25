
import { WallpaperProvider } from "./context/wallpaperContext"
import { ThemeProvider } from "./context/ThemeContext";
import { Navigate, Route, Routes } from "react-router"
import ChatPage from "./pages/ChatPage"
import AuthPage from "./pages/AuthPage";
import { useAuth } from "@clerk/react";
import { Toaster } from "react-hot-toast";
import PageLoader from './components/PageLoader'

function App() {

   const { isSignedIn, isLoaded } = useAuth();

  //todo: make this a better component
  if (!isLoaded) return <PageLoadder />

  return (
    <ThemeProvider>
      <WallpaperProvider>
        <Routes>
          <Route path="/" element={isSignedIn ? <ChatPage /> : <Navigate to={"/auth"} replace />} />
          <Route
            path="/auth"
            element={!isSignedIn ? <AuthPage /> : <Navigate to={"/"} replace />}
          />
        </Routes>
        <Toaster />
      </WallpaperProvider>
    </ThemeProvider>
  );
}

export default App;
