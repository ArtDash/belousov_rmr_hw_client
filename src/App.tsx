import { AppScreen } from "./screens/AppScreen";

// Global styles
import "./ui-library/normalize.css";
import "./ui-library/colors.css";
import { AuthProvider } from "./features/auth";

function App() {
  return (
    <AuthProvider>
      <AppScreen />
    </AuthProvider>
  );
}

export default App;
