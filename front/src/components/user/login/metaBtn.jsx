import Web3 from "web3/dist/web3.min";
import { useState, useEffect } from "react";

const MetaLogin = () => {
  const [account, setAccount] = useState(null); // 메타마스크가 사용하겠다고 선언한 계정정보
  const [web3, setWeb3] = useState(null); // web3가 메타마스크와 연결이 된 내용을 가져옴
  const [click, setClick] = useState(false);

  useEffect(() => {
    (async () => {
      if (!window.ethereum) return;
      const [address] = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccount(address);
      const web3 = new Web3(window.ethereum);
      setWeb3(web3);
    })();
  }, [click]);

  const handleClick = () => {
    setClick(true);
  };

  return <button onClick={handleClick}>Metamask</button>;
};

export default MetaLogin;
