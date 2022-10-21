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
} from "../style/productEdit_styled";

const ProductEdit = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const addProduct = () => {
    dispatch(addProductDB({ title, body }));
  };

  return (
    <Wrap>
      <Container>
        <Input
          id="title"
          type="text"
          placeholder="원래 제목"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <div>
          <TextArea
            className="textarea"
            id="body"
            name="body"
            placeholder="원래 내용"
            onChange={(e) => {
              setBody(e.target.value);
            }}
          ></TextArea>
        </div>
        <div>
          <UploadName value="첨부파일" placeholder="첨부파일" />
          <Label for="file">파일찾기</Label>
        </div>
        <ButtonSet>
          <BackButton to="/">뒤로가기</BackButton>
          <NewButton onClick={addProduct}>수정하기</NewButton>
        </ButtonSet>
      </Container>
    </Wrap>
  );
};

export default ProductEdit;
