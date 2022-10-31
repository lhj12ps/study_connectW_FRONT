import axios from "axios";
import { useState, useContext } from "react";
import styled from "styled-components";
import Web3 from "web3/dist/web3.min";
import GlobalStore from "../../../middleware/store/context";

const Wrapper = styled.div`
  height: 900px;
  width: 300px;
  & > ul {
    margin-top: 20px;
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

      .btnBox {
        margin-top: 20px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        button {
          width: 30%;
          height: 30px;
        }
      }
    }
  }
`;

const Login = () => {
  const [values, setValues] = useState([]);
  const [finLogin, setFinLogin] = useState(false);
  const { state, dispatch } = useContext(GlobalStore);
  // console.log("useContext 값 확인", state);

  const [account, setAccount] = useState(null); // 메타마스크가 사용하겠다고 선언한 계정정보
  const [web3, setWeb3] = useState(null); // web3가 메타마스크와 연결이 된 내용을 가져옴

  const handleChange = (e) => {
    const { id, value } = e.target;
    setValues({ ...values, [id]: value });
  };

  const handleMetaLogin = async () => {
    if (account == null) {
      try {
        console.log("메타마스크 로그인 안되어있음");

        if (!window.ethereum) return;
        const [address] = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setAccount(address);
        const web3 = new Web3(window.ethereum);
        setWeb3(web3);
      } catch (e) {
        console.log("메타마스크 로그인 오류 : ", e.message);
      }
    } else {
      console.log("메타마스크 로그인 완료");
    }
  };

  const handleLogin = async () => {
    if (account == null) {
      try {
        handleMetaLogin();
      } catch (e) {
        console.log("로그인 전에 메타마스크 로그인 이슈");
      }
    } else {
      try {
        console.log('계정 있냐 : ',account)
        const response = await axios.post(
          `http://localhost:4001/user/login`,
          {values,account}
        );

        if (response.data.option.result == 1) {
          setFinLogin(true);
          // 백에서 생성한 jwt를 로컬스토리지에 넣기
          window.localStorage.setItem("login_Cookie", response.data.jwt_token);

          setTimeout(() => {
            window.location.reload();
          }, 3000);
        }
      } catch (e) {
        console.log('로그인중 이슈',e.message)
      }
    }
  };

  return (
    <>
      <Wrapper>
        <h1 style={{ textAlign: "center" }}>로그인합시다</h1>
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
              <div className="btnBox">
                <button onClick={handleLogin}>로그인</button>
                <button>
                  <a href="">google</a>
                </button>
                <button onClick={handleMetaLogin}>Metamask</button>
              </div>
            </li>
          </ul>
        )}
      </Wrapper>
    </>
  );
};

export default Login;
