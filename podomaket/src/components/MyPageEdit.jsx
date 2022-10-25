import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { closeModal } from "../features/modalSlice";
import { updateProfile, __updateProfile } from "../features/profileSlice";
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
  // const dispatch = useDispatch();
  // const { id } = useParams();

  // // 파일 업로드
  // const [imageUrl, setImageUrl] = useState("");

  // const fileUpload = (e) => {
  //   const image = URL.createObjectURL(e.target.files[0]);
  //   setImageUrl(image);
  // };
  // const updateProfile = () => {
  //   const params = {
  //     id,
  //     edit: {
  //       nickname: "오성은",
  //       content: profiles.content,
  //     },
  //   };
  //   dispatch(__updateProfile(params));
  // };

  // const [profiles, setProfiles] = useState({
  //   nickname: "",
  //   content: "",
  // });

  // const onChangeHandler = (e) => {
  //   const { name, value } = e.target;
  //   setProfiles((prev) => {
  //     return { ...prev, [name]: value };
  //   });
  // };

  const dispatch = useDispatch();
  const { id } = useParams();

  // text useState
  const [nickname, setNickname] = useState("");
  const [content, setContent] = useState("");

  // image preview useState
  const [previewImage, setPreviewImage] = useState("");
  const [uploadImageForm, setUploadImageForm] = useState(null);

  // post useState
  const [profile, setProfile] = useState({
    nickname: "",
    content: "",
    // file: "",
  });

  // const imgFileHandler = (e) => {
  //   setUploadImageForm(e.target.files[0]);

  //   let reader = new FileReader();
  //   if (e.target.files[0]) {
  //     reader.readAsDataURL(e.target.files[0]);
  //   }
  //   reader.onload = () => {
  //     const previewImgUrl = reader.result;
  //     if (previewImgUrl) {
  //       setPreviewImage([...previewImage, previewImgUrl]);
  //     }
  //   };
  // };

  const postHandler = (e) => {
    setNickname(e.target.value);
    setContent(e.target.value);
    const { value, name } = e.target;
    setProfile({
      ...profile,
      [name]: value,
      // file: uploadImageForm,
    });
  };

  const submitHandler = () => {
    const params = {
      id,
    };
    dispatch(updateProfile(profile, params));
    // if (!title || !content || !previewImage) {
    if (!nickname || !content) {
      return alert("빈칸 없이 입력해 주세요");
    }
  };

  return (
    <ModalContainer>
      <Modal>
        {/* <ImageLayout>
          <ImageLabel htmlFor="file" />
          <ImageInput
            id="addFile"
            type="file"
            name="imageUrl"
            placeholder="업로드"
            accept={"image/*"}
            onChange={imgFileHandler}
          />
          <ImagePreview src={previewImage} />
        </ImageLayout> */}
        <Input
          id="nickname"
          name="nickname"
          type="text"
          placeholder="이름"
          onChange={postHandler}
        />
        <div>
          <TextArea
            id="content"
            name="content"
            placeholder="자기소개"
            onChange={postHandler}
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
              submitHandler();
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
