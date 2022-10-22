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
      }
      & > button {
        width: 48%;
        height: 30px;
      }
    }
  }
`;

const Login = () => {
  return (
    <Wrapper>
      <h1>로그인합시다</h1>
      <ul>
        <li>
          <label htmlFor="userid">아이디 : </label>
          <input id="userid" name="userid" />
        </li>
        <li>
          <label htmlFor="userid">비밀번호 : </label>
          <input id="userid" name="userid" />
        </li>
        <li>
          <button>로그인</button>
          <button>
            <a href="">google</a>
          </button>
        </li>
      </ul>
    </Wrapper>
  );
};

export default Login;
