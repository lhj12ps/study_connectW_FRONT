import { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  height: 900px;
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
        width: 60%;
        border: 1px solid #000;
        border-radius: 3px;
        height: 25px;
      }
    }
  }
`;

const Join = () => {
  const [input, setInput] = useState();
  const [finJoin, setFinJoin] = useState(false);
  const naviagte = useNavigate();

  const inputChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const btnJoin = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post("http://localhost:4001/user/join", input);
      setFinJoin(true);
      setTimeout(() => {
        naviagte("/");
      }, 3000);
    } catch (e) {}
  };
  return (
    <>
      {finJoin ? (
        <Wrapper style={{ marginTop: "80px" }}>
          <div>
            <p>{input.nickname}님 환영합니다!</p>
            <p>회원가입이 완료되었습니다.</p>
          </div>
        </Wrapper>
      ) : (
        <Wrapper>
          <h1 style={{ display: "block", marginBottom: "30px" }}>
            회원가입페이지입니다
          </h1>
          <ul>
            <li>
              <label htmlFor="userid">아이디 : </label>
              <input id="userid" name="userid" onChange={inputChange} />
            </li>
            <li>
              <label htmlFor="nickname">닉네임 : </label>
              <input id="nickname" name="nickname" onChange={inputChange} />
            </li>
            <li>
              <label htmlFor="email">이메일 : </label>
              <input id="email" name="email" onChange={inputChange} />
            </li>
            <li>
              <label htmlFor="tell">전화번호 : </label>
              <input id="tell" name="tell" onChange={inputChange} />
            </li>
            <li>
              <label htmlFor="address">주소 : </label>
              <input id="address" name="address" onChange={inputChange} />
            </li>
            <li>
              <label htmlFor="username">실명 : </label>
              <input id="username" name="username" onChange={inputChange} />
            </li>
            <li>
              <label htmlFor="gender">성별 : </label>
              <label>
                <input
                  type="radio"
                  id="gender"
                  name="gender"
                  value="female"
                  onChange={inputChange}
                  style={{ marginRight: "10px" }}
                />
                여
              </label>
              <label>
                <input
                  type="radio"
                  id="gender"
                  name="gender"
                  value="male"
                  onChange={inputChange}
                  style={{ marginRight: "10px" }}
                />
                남
              </label>
            </li>
            <li>
              <label htmlFor="userpw">비밀번호 : </label>
              <input id="userpw" name="userpw" onChange={inputChange} />
            </li>
            <li
              style={{
                display: "inline-block",
                width: "100%",
                paddingTop: "15px",
              }}
            >
              <input
                type="submit"
                value="가입"
                onClick={btnJoin}
                style={{ width: "100%", height: "30px" }}
              ></input>
            </li>
          </ul>
        </Wrapper>
      )}
    </>
  );
};

export default Join;
