import axios from "axios";
import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 900px;
  width: 300px;
  & > ul {
    display: flex;
    flex-direction: column;
    width: 300px;
    & > li {
      width: 100%;
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;
      font-size: 20px;
      font-weight: light;
      & > label {
        margin-right: 5px;
      }
      & > input {
        width: 70%;
        border: 1px solid #000;
        border-radius: 3px;
        height: 25px;
        padding-left: 5px;
      }
      & > button {
        width: 48%;
        height: 30px;
      }
    }
  }
`;

const Login = () => {
  const [values, setValues] = useState([]);
  const [finLogin, setFinLogin] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setValues({ ...values, [id]: value });
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        `http://localhost:4001/user/login`,
        values
      );

      if (response.data.option.result == 1) {
        setFinLogin(true);
        // 백에서 생성한 jwt를 로컬스토리지에 넣기
        window.localStorage.setItem("login_Cookie", response.data.jwt_token);

        setTimeout(() => {
          window.location.reload();
        }, 3000);
      }
    } catch (e) {}
  };

  return (
    <Wrapper>
      <h1>로그인합시다</h1>
      {finLogin ? (
        <div style={{ marginTop: "80px" }}>
          <p>{values.userid}님 환영합니다!</p>
          <p>로그인이 완료되었습니다.</p>
        </div>
      ) : (
        <ul>
          <li>
            <label htmlFor="userid">아이디 : </label>
            <input id="userid" onChange={handleChange} />
          </li>
          <li>
            <label htmlFor="userid">비밀번호 : </label>
            <input id="userpw" onChange={handleChange} />
          </li>
          <li>
            <button onClick={handleLogin}>로그인</button>
            <button>
              <a href="">google</a>
            </button>
          </li>
        </ul>
      )}
    </Wrapper>
  );
};

export default Login;
