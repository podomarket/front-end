import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addPost, __addProducts, __getProducts } from "../features/podoSlice";
import {
  BackButton,
  ButtonSet,
  Container,
  ImageInput,
  ImageLabel,
  ImageLayout,
  ImagePreview,
  Input,
  NewButton,
  TextArea,
  Wrap,
} from "../style/productPost_styled";

const ProductPost = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // text useState
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // image preview useState
  const [previewImage, setPreviewImage] = useState("");
  const [uploadImageForm, setUploadImageForm] = useState(null);

  // post useState
  const [post, setPost] = useState({
    title: "",
    content: "",
    price: "",
    file: "",
  });

  const imgFileHandler = (e) => {
    setUploadImageForm(e.target.files[0]);

    let reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onload = () => {
      const previewImgUrl = reader.result;
      if (previewImgUrl) {
        setPreviewImage([...previewImage, previewImgUrl]);
      }
    };
  };

  const postHandler = (e) => {
    setTitle(e.target.value);
    setContent(e.target.value);
    const { value, name } = e.target;
    setPost({
      ...post,
      [name]: value,
      file: uploadImageForm,
    });
  };

  const submitHandler = () => {
    dispatch(addPost(post));
    if (!title || !content || !previewImage) {
      return alert("빈칸 없이 입력해 주세요");
    }
  };

  return (
    <Wrap>
      <Container>
        <ImageLayout>
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
        </ImageLayout>
        <Input
          id="title"
          name="title"
          type="text"
          placeholder="제목을 입력해주세요"
          onChange={postHandler}
        />
        <div>
          <TextArea
            id="content"
            name="content"
            placeholder="내용을 입력해주세요"
            onChange={postHandler}
          ></TextArea>
        </div>
        <Input
          id="price"
          name="price"
          type="text"
          placeholder="가격을 입력해주세요"
          onChange={postHandler}
        />
        <ButtonSet>
          <BackButton to="/">뒤로가기</BackButton>
          <NewButton onClick={submitHandler}>새 글 작성</NewButton>
        </ButtonSet>
      </Container>
    </Wrap>
  );
};

export default ProductPost;
