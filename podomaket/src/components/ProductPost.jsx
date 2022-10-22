import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { __addProduct } from "../features/podoSlice";
import {
  BackButton,
  ButtonSet,
  Container,
  CustomFile,
  Input,
  NewButton,
  TextArea,
  UploadName,
  Wrap,
} from "../style/productPost_styled";

const ProductPost = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const addProduct = () => {
    dispatch(__addProduct({ title, body }));
  };

  const [files, setFiles] = useState("");

  const onLoadFile = (e) => {
    const file = e.target.files;
    console.log(file);
    setFiles(file);
  };

  // const handleClick = (e) => {
  //   const formdata = new FormData();
  //   formdata.append("uploadImage", files[0]);

  //   const config = {
  //     Header: {
  //       "content-type": "multipart/form-data",
  //     },
  //   };

  //   axios.post(`http://localhost:3001/product`, formdata, config);
  // };
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
          multiple={true}
        />
        <div>
          <TextArea
            className="textarea"
            id="body"
            name="body"
            placeholder="내용을 입력해주세요"
            onChange={(e) => {
              setBody(e.target.value);
            }}
          ></TextArea>
        </div>
        <CustomFile>
          <span>이미지 파일을 선택해주세요</span>
          <UploadName
            id="file"
            type="file"
            placeholder="file"
            accept="image/*"
            onChange={onLoadFile}
          />
        </CustomFile>
        <ButtonSet>
          <BackButton to="/">뒤로가기</BackButton>
          <NewButton onClick={addProduct}>새 글 작성</NewButton>
        </ButtonSet>
      </Container>
    </Wrap>
  );
};

export default ProductPost;
