import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header";
import HomePage from "./pages/home";
import { routes } from "./utils/routes";

function App() {

  setTimeout(() => {
    window.addEventListener('resize', () => {
      window.location.reload();
    })
  }, 1000)

  return (
    <>
      <Header />
      <main className="flex-auto">
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.id}
              path={route.path}
              element={route.element}
            ></Route>
          ))}
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
