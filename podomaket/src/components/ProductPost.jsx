import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { __addProducts } from "../features/podoSlice";
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
  const [content, setContent] = useState("");
  const [products, setProducts] = useState({
    title: "",
    imageUrl: "",
    content: "",
    price: 0,
  });
  const addProduct = () => {
    dispatch(__addProducts({ title, content }));
  };

  const [imageUrl, setImageUrl] = useState("");
  console.log();

  const onLoadFile = (e) => {
    const file = e.target.files;
    console.log(file);
    setImageUrl(file);
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
              setContent(e.target.value);
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
          <NewButton onClick={addProduct} to="/">
            새 글 작성
          </NewButton>
        </ButtonSet>
      </Container>
    </Wrap>
  );
};

export default ProductPost;
