// 프로필 페이지
import React from "react";
import { Main, Profile, ProfileEdit, Sub, Wrap } from "../style/myPage_styled";

export const MyPage = () => {
  return (
    <>
      <Wrap>
        <Profile></Profile>
        <Main>오성은</Main>
        <Sub>자기소개를 적어보세요! 본인 어필에 큰 도움이 됩니당</Sub>
        <ProfileEdit to="/mypage/edit/1">프로필 수정</ProfileEdit>
      </Wrap>
      <hr />
    </>
  );
};

export default MyPage;
