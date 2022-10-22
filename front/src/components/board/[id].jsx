import axios from "axios";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Wrapper = styled.div``;

const ViewBoard = () => {
  const router = useRouter();

  useEffect(() => {
    if (router.query.tokenId === undefined) return;

    (async () => {
      const { tokenId } = router.query;
      if (tokenId) {
        const response = await axios.get(`/video/get/${tokenId}`);
       
      }
    })();

    (async () => {
      // 비디오 db에 저장되는 _id
      const { tokenId } = router.query;
      const response = await axios.get(`/video/get/${tokenId}`);
    })();
  }, [router.query]);

  return (
    <>

    </>
  );
};

export default ViewBoard;
