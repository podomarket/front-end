import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { closeModal } from "../features/modalSlice";
import { __updateProfile } from "../features/profileSlice";
import {
  BtnContainer,
  CancleButton,
  EditButton,
  ImageInput,
  ImageLabel,
  ImageLayout,
  ImagePreview,
  Input,
  Modal,
  ModalContainer,
  ModalH4,
  TextArea,
} from "../style/myPageEdit_styled";

const MyPageEdit = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  // 파일 업로드
  const [imageUrl, setImageUrl] = useState("");

  const fileUpload = (e) => {
    const image = URL.createObjectURL(e.target.files[0]);
    setImageUrl(image);
  };

  const updateProfile = () => {
    const params = {
      id,
      edit: {
        nickname: "오성은",
        content: profiles.content,
      },
    };
    dispatch(__updateProfile(params));
  };

  const [profiles, setProfiles] = useState({
    nickname: "",
    content: "",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setProfiles((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <ModalContainer>
      <Modal>
        <ImageLayout>
          <ImageLabel htmlFor="file" />
          <ImageInput
            id="file"
            type={"file"}
            name="imageUrl"
            placeholder="업로드"
            accept={"image/*"}
            onChange={fileUpload}
          />
          <ImagePreview src={imageUrl} />
        </ImageLayout>
        <Input
          id="nickname"
          name="nickname"
          type="text"
          placeholder="이름"
          onChange={onChangeHandler}
        />
        <div>
          <TextArea
            id="sub"
            name="sub"
            placeholder="자기소개"
            onChange={onChangeHandler}
          ></TextArea>
        </div>
        <BtnContainer>
          <CancleButton
            onClick={() => {
              dispatch(closeModal());
            }}
          >
            취소
          </CancleButton>
          <EditButton
            onClick={() => {
              dispatch(closeModal());
              updateProfile();
            }}
          >
            수정하기
          </EditButton>
        </BtnContainer>
      </Modal>
    </ModalContainer>
  );
};

export default MyPageEdit;
