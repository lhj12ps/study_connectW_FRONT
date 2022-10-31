import { useState, } from "react";
import Login from "../components/user/login";

const Home = () => {
  const [login, setLogin] = useState(false);
  const [userInfo, setUserInfo] = useState();

  return (
    <div>
      {login ? (
        <div>
          <p>로그인 상태입니다</p>
          <button>로그아웃</button>
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default Home;
