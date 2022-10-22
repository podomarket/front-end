import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProductDB } from "../redux/async/post";
import {
  BackButton,
  ButtonSet,
  Container,
  Input,
  Label,
  NewButton,
  TextArea,
  UploadName,
  Wrap,
} from "../style/productPost_styled";

const ProductPost = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const addProduct = () => {
    dispatch(addProductDB({ title, content }));
  };

  const [imageUrl, setImageUrl] = useState("");

  const onLoadFile = (e) => {
    const file = e.target.files;
    console.log(file);
    setImageUrl(file);
  };

  return (
    <Wrap>
      <Container>
        <Input
          id="title"
          type="text"
          placeholder="제목을 입력해주세요"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <div>
          <TextArea
            className="textarea"
            id="body"
            name="body"
            placeholder="내용을 입력해주세요"
            onChange={(e) => {
              setContent(e.target.value);
            }}
          ></TextArea>
        </div>
        <div>
          <UploadName
            id="file"
            type="file"
            placeholder="file"
            accept="img/*"
            onChange={onLoadFile}
          />
          <Label htmlFor="file">파일찾기</Label>
        </div>
        <ButtonSet>
          <BackButton to="/">뒤로가기</BackButton>
          <NewButton onClick={addProduct}>새 글 작성</NewButton>
        </ButtonSet>
      </Container>
    </Wrap>
  );
};

export default ProductPost;
