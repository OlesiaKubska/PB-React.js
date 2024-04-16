import { Tab, Tabs } from "@mui/material";
import "./Header.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import Paragraph from "../Paragraph/Paragraph";
import { AuthContext } from "../../context/authContext";
import { UsersContext } from "../../context/usersContext";

const Header = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState(0);

  const { authUser, setAuthUser } = useContext(AuthContext);
  const { deleteUserByName } = useContext(UsersContext);

  const handleSelectTab = (newValue) => {
    setValue(newValue);
    if (newValue === "dashboard") {
      navigate("/dashboard");
    } else if (newValue === "users") {
      navigate("/dashboard/users");
    } else if (newValue === "newUserName") {
      setAuthUser({ ...authUser, username: "Tomek" });
    } else if (newValue === "deleteUser1") {
      deleteUserByName("user1");
    }
  };

  return (
    <div
      style={{
        height: "100px", // wysokość 100px
        width: "100%", // szerokość 100%
        backgroundColor: "#f8d7da", // kolor tła
        display: "flex", // flexbox
        justifyContent: "center", // wyśrodkowanie w poziomie
        alignItems: "center", // wyśrodkowanie w pionie
        gap: "100px", // odstęp między elementami
      }}
    >
      <Tabs
        value={value}
        onChange={(event, newValue) => handleSelectTab(newValue)}
        aria-label="basic tabs example"
      >
        <Tab label="Dashboard" value="dashboard" />
        <Tab label="Users" value="users" />
        <Tab label="Change user name" value="newUserName" />
        <Tab label="Delete user1" value="deleteUser1" />
      </Tabs>
      <Paragraph
        paragraphText={`Cześć, jesteś zalogowany jako: ${authUser.username}`}
      />
      <NavLink to="/login">Wyloguj</NavLink>
    </div>
  );
};

export default Header;
