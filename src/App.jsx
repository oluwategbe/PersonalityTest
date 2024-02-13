import ThemeContextProvider from "./context";
import RoutesWrapper from "./routes";

function App() {
  return (
    <ThemeContextProvider>
      <RoutesWrapper />
    </ThemeContextProvider>
  );
}

export default App;
