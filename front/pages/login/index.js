import styled from "styled-components";
const Warpper = styled.div`
  display: flex;
  /* background: #ffe6f7; */
  padding-top: 95px;
  height: 900px;
`;
const Login = () => {
  return (
    <Warpper>
      <h1>로그인합시다</h1>
      <ul>
        <li>
          아이디: <input></input>
        </li>
        <li>
          비밀번호:<input></input>
        </li>
        <li>
          <button>로그인</button>
        </li>
      </ul>
    </Warpper>
  );
};

export default Login;
