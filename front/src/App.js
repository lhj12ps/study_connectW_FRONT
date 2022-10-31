import { Routes, Route } from "react-router-dom";
import React, { useEffect, useState, useReducer, useMemo } from "react";
import GlobalStore,{initialState} from "./middleware/store/context";
import reducer from "./middleware/store/reducer";

import GlobalStyle from "./styles/GlobalStyles";
import styled from "styled-components";
import Navbar from "./components/Nav/Navbar";
import Home from "./pages/home";
import Join from "./components/user/join";
import Board from "./pages/board";
import CreateBoard from "./pages/boardCreate";
import BoardView from "./pages/boardView";
import { decodePayload } from "./utils/jwt";

const BodyDiv = styled.div`
  padding-top: 100px;
  display: flex;
  justify-content: center;
`;

const App = () => {
  const [login, setLogin] = useState(false);
  const [userInfo, setUserInfo] = useState();
  // const [web3, account] = useWeb3();
  // 메타마스크 자동로그인
  const [state,dispatch] = useReducer(reducer,initialState)

  // 로그인하면 생성되는 쿠키를 확인
  useEffect(() => {
    const cookie = window.localStorage.getItem("login_Cookie");
    if (cookie !== null) {
      const decode = decodePayload(cookie);
      setLogin(true);
      setUserInfo(decode.userid);
    } else {
      return;
    }
  }, []);

  const defaultValue = useMemo(() => ({state,dispatch}), [state]);

  return (
    <>
    {/* 정의한 context를 하위 컴포넌트에게 전달하는 Provider */}
      <GlobalStore.Provider value={defaultValue}>
        <GlobalStyle />
        <Navbar />
        <BodyDiv>
          <Routes>
            <Route path="/" index element={<Home />}></Route>
            <Route path="/join" element={<Join />}></Route>
            <Route path="/board/boardList" element={<Board />}></Route>
            <Route path="/board/createBoard" element={<CreateBoard />}></Route>
            <Route path="/board/viewBoard/:id" element={<BoardView />}></Route>
          </Routes>
        </BodyDiv>
      </GlobalStore.Provider>
    </>
  );
};

export default App;
