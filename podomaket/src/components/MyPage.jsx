// 프로필 페이지
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { openModal } from "../features/modalSlice";
import { __getProfile } from "../features/profileSlice";
import { Main, Profile, ProfileEdit, Sub, Wrap } from "../style/myPage_styled";
import MyPageEdit from "./MyPageEdit";

export const MyPage = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.modalSlice.isOpen);
  const profiles = useSelector((state) => state.profileSlice.profile);

  const { id } = useParams();

  // 프로필 하나만 보여주도록 find 함수 사용
  const profile =
    profiles && profiles.find((profile) => profile.id === Number(id));

  console.log(id);

  // 상품 보여주기
  useEffect(() => {
    dispatch(__getProfile());
  }, []);
  return (
    <>
      {isOpen && <MyPageEdit />}
      <Wrap>
        <Profile></Profile>
        <Main>{profile?.nickname}</Main>
        <Sub>{profile?.content}</Sub>
        <ProfileEdit
          onClick={() => {
            dispatch(openModal());
          }}
        >
          프로필 수정
        </ProfileEdit>
      </Wrap>
      <hr />
    </>
  );
};

export default MyPage;
