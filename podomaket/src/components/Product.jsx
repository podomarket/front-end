// 게시글 페이지
import React from "react";
import {
  Button,
  Comment,
  Container,
  H1,
  H4,
  Image,
  Like,
  LikeAndComment,
  P,
  Products,
  ProductTitleAndAuthor,
  Wrap,
} from "../style/Product_styled";

export const Product = () => {
  return (
    <Wrap>
      <Container>
        <Products>
          <ProductTitleAndAuthor>
            <H1>글 제목</H1>
            <H4>작성자</H4>
          </ProductTitleAndAuthor>
          <Button>채팅하기</Button>
        </Products>
        <Image>사진</Image>
        <P>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
          fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
          elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
          lectus. Class aptent taciti sociosqu ad litora torquent per conubia
          nostra, per inceptos
        </P>
        <hr />
        <LikeAndComment>
          <Like>❤ 5</Like>
          <div>💬 3</div>
        </LikeAndComment>
      </Container>
    </Wrap>
  );
};

export default Product;
