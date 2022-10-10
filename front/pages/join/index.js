import { useState } from "react";
import axios from "axios";
import styled from "styled-components";

const Warpper = styled.div`
  display: flex;
  /* background: #ffe6f7; */
  padding-top: 95px;
  height: 900px;
`;

const Join = () => {
  // const [click, setClick] = useState();

  const [input, setInput] = useState();
  const inputChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
    console.log("input 확인용??", input);
  };

  const btnJoin = async (e) => {
    e.preventDefault();
    const result = await axios.post("http://localhost:4001/user/join", input);
    console.log("result????:", result);
  };
  return (
    <Warpper>
      <h1>회원가입페이지입니다</h1>
      <ul>
        <li>
          이름 : <input name="userid" onChange={inputChange}></input>
        </li>
        <li>
          닉네임 :<input name="nickname" onChange={inputChange}></input>
        </li>
        <li>
          이메일 :<input name="email" onChange={inputChange}></input>
        </li>
        <li>
          전화번호 :<input name="tell" onChange={inputChange}></input>
        </li>
        <li>
          주소 :<input name="address" onChange={inputChange}></input>
        </li>
        <li>
          이름 :<input name="username" onChange={inputChange}></input>
        </li>
        <li>
          성별 :<input name="gender" onChange={inputChange}></input>
        </li>
        <li>
          비밀번호 :<input name="userpw" onChange={inputChange}></input>
        </li>
        <li>
          <input type="submit" value="가입" onClick={btnJoin}></input>
        </li>
      </ul>
    </Warpper>
  );
};

export default Join;
