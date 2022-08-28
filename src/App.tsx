import React from "react";
import { AppScreen } from "./screens/AppScreen";

// Global styles
import "./ui-library/normalize.css";
import "./ui-library/colors.css";

// Context
import { AuthProvider } from "./features/auth";
import { RequestService } from "./infrastructure/request";

const App: React.FC = () => {
  return (
    <AuthProvider>
      <RequestService>
        <AppScreen />
      </RequestService>
    </AuthProvider>
  );
};

export default App;
