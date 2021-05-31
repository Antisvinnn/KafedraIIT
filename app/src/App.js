import { Route, Switch } from "react-router-dom";
import { whoAmI } from "@redux/actions/users";

import Header from "@components/header/Header";

import MainPage from "@pages/main/Main";
import Stuff from "@pages/stuff/Stuff";
import TeacherPage from "@pages/teacherPage/TeacherPage";
import LoginPage from "@pages/login/LoginPage";
import Page404 from "@pages/page404/Page404";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Spin } from "antd";
import React from "react";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("accessToken") && !authData) dispatch(whoAmI());
  }, []);
  const loading = useSelector((store) => store.user.isProfileLoading);
  const authData = useSelector((store) => store.user.authData);
  return (
    <>
      <Header />
      {loading ? (
        <Spin />
      ) : (
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/stuff/:id" component={TeacherPage} />
          <Route exact path="/stuff" component={Stuff} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="*" component={Page404} />
        </Switch>
      )}
    </>
  );
};

export default App;
