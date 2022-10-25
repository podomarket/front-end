// data.map((post) => {
//   return (
//     <List>
//       <Product>
//         <Thumbnail
//           onClick={() => navigate("/product/" + post.id)}
//         ></Thumbnail>
//         <LikeAndReply>
//           <Title onClick={() => navigate("/product/" + post.id)}>
//             {post?.title}
//           </Title>
//           {/* <LikeAndReplyFlex>
//                 <Like
//                   onClick={() => {
//                     setLike(like + 1);
//                   }}
//                 >
//                   ❤<span>{like}</span>
//                 </Like>
//                 <Reply
//                   onClick={() => {
//                     setReply(reply + 1);
//                   }}
//                 >
//                   💬<span>{reply}</span>
//                 </Reply>
//               </LikeAndReplyFlex> */}
//         </LikeAndReply>
//         <FlexDiv>
//           {/* <Price>{post?.price}</Price> */}
//           {/* <div>{detailDate(post.date)}</div> */}
//         </FlexDiv>
//       </Product>
//     </List>
//   );

// {Object.keys(items)
//     .slice(0, visible)
//     .map((podo) => {
//       console.log(podo.data);
//       return (
//         <List>
//           <Product>
//             <Thumbnail
//               onClick={() => navigate("/product/" + podo.id)}
//             ></Thumbnail>
//             <LikeAndReply>
//               <Title onClick={() => navigate("/product/" + podo.id)}>
//                 {podo?.title}
//               </Title>
//               {/* <LikeAndReplyFlex>
//                 <Like
//                   onClick={() => {
//                     setLike(like + 1);
//                   }}
//                 >
//                   ❤<span>{like}</span>
//                 </Like>
//                 <Reply
//                   onClick={() => {
//                     setReply(reply + 1);
//                   }}
//                 >
//                   💬<span>{reply}</span>
//                 </Reply>
//               </LikeAndReplyFlex> */}
//             </LikeAndReply>
//             <FlexDiv>
//               <Price>{podo?.price}</Price>
//               <div>{detailDate(podo.date)}</div>
//             </FlexDiv>
//           </Product>
//         </List>
//       );
