import styled from "styled-components";

const Warpper = styled.div`
  display: flex;
  /* background: #ffe6f7; */
  padding-top: 95px;
  height: 900px;
`;

const Join = () => {
  return (
    <Warpper>
      <h1>회원가입페이지입니다</h1>
      <ul>
        <li>
          이름 : <input></input>
        </li>
        <li>
          닉네임 :<input></input>
        </li>
        <li>
          이메일 :<input></input>
        </li>
        <li>
          전화번호 :<input></input>
        </li>
        <li>
          주소 :<input></input>
        </li>
        <li>
          <button>가입</button>
        </li>
      </ul>
    </Warpper>
  );
};

export default Join;
