import "./App.css";
import Paragraph from "./components/Paragraph/Paragraph";
import { NavLink, Outlet } from "react-router-dom";
import useAuth from "./hooks/useAuth";
import AppWrapper from "./components/AppWrapper/AppWrapper";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Content from "./components/Content/Content";
import { UsersProvider } from "./context/usersContext";
function App() {
  useAuth();

  // const userName = JSON.parse(localStorage.getItem("user"))?.username;

  return (
    <AppWrapper>
      <UsersProvider>
        <Header />
        <Content>
          <Outlet />
        </Content>
      </UsersProvider>
      <Footer>
        <Paragraph paragraphText="Witaj w 2-gim semestrze" />
      </Footer>
    </AppWrapper>
  );
}

export default App;
