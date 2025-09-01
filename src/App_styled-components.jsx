// import styled from "styled-components";
// import GlobalStyles from "./Styles/GlobalStyles";
// import Button from "./UI/Button";
// import Input from "./UI/Input";
// import Heading from "./UI/Heading";
// import Row from "./UI/Row";

// const StyledApp = styled.div`
//   /* background-color: orangered; */
//   padding: 20px;
// `;

// function App() {
//   return (
//     <>
//       <GlobalStyles />
//       <StyledApp>
//         {/* major problem is that we define the type but still it render h1 tag as we define in heading component just like styled.h1 but we want to render html tag that is its type such as for type h2 render h2 tag and not h1 */}
//         {/* and for that we use as property that render the html tag we provide in it although it use heading component we can even render button in as to render a button */}
//         {/* type prop is our own define as we define in other react components same for as */}
//         {/* <Heading type="h1">Hello World</Heading> */}
//         {/* as the default prop is define in Row component so no need to mention default prop value such as vertical in this case */}
//         {/* <Row type="vertical"> */}
//         <Row>
//           <Row type="horizontal">
//             <Heading as="h1">Hello World</Heading>
//             <div>
//               <Heading as="h2">H2 heading</Heading>
//               <Button>Check in</Button>
//               <Button variation="secondary" size="small">
//                 Check out
//               </Button>
//             </div>
//           </Row>
//           <Row>
//             <Input placeholder="Type here..." />
//             <Heading as="h3">H3 Heading</Heading>
//           </Row>
//         </Row>
//       </StyledApp>
//     </>
//   );
// }

// export default App;
