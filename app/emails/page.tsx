// import {
//   Body,
//   Container,
//   Head,
//   Heading,
//   Hr,
//   Html,
//   Img,
//   Link,
//   Preview,
//   Section,
//   Text,
// } from "@react-email/components";
// import * as React from "react";

// interface DeliveryEmailProps {
//   verificationCode?: string;
// }

// export default function DeliveryEmail({
//   verificationCode = "596853",
// }: DeliveryEmailProps) {
//   console.log(verificationCode);
//   return (
//     <Html>
//       <Head />
//       <Preview>AWS Email Verification</Preview>
//       <Body style={main}>
//         <Container style={container}>
//           <Section style={coverSection}>
//             <Section style={imageSection}>
//               <Img
//                 src={`https://firebasestorage.googleapis.com/v0/b/solana-digital-marketplace.appspot.com/o/sol-kart-logo.png?alt=media&token=559ba06e-b7e4-4c99-991b-9e1c6202534b`}
//                 width="80"
//                 height="80"
//                 alt="SolKart Logo"
//               />
//             </Section>
//             <Section style={upperSection}>
//               <Heading style={h1}>Thank you for Shopping!</Heading>
//               <Text style={mainText}>
//                 Thank you for shopping with Solkart. We&apos;re pleased to
//                 provide you with your order, which you can find attached below.
//                 We hope you like your purchase!.
//               </Text>
//               <Section style={center}>
//                 <Img
//                   src={`https://firebasestorage.googleapis.com/v0/b/solana-digital-marketplace.appspot.com/o/heart.gif?alt=media&token=22cb2a87-b3f1-4a39-accc-28dbae013679`}
//                   width="200"
//                   height="200"
//                   alt="Heart Image"
//                 />
//               </Section>
//             </Section>
//             <Hr />
//             <Section style={lowerSection}>
//               <Text style={cautionText}>
//                 Solkart will never email you and ask you to disclose or verify
//                 your password, credit card, or banking account number.
//               </Text>
//             </Section>
//           </Section>
//           <Text style={footerText}>
//             This message was produced and distributed by Solkart © 2024, All
//             rights reserved. Solkart is a registered trademark of{" "}
//             <Link href="https://www.solkart.xyz" target="_blank" style={link}>
//               Solkart.xyz
//             </Link>
//             , Inc.
//           </Text>
//         </Container>
//       </Body>
//     </Html>
//   );
// }

// const center = {
//   marginBottom: "10px",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
// };

// const main = {
//   backgroundColor: "#fff",
//   color: "#212121",
// };

// const container = {
//   padding: "20px",
//   margin: "0 auto",
//   backgroundColor: "#eee",
// };

// const h1 = {
//   color: "#333",
//   fontFamily:
//     "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
//   fontSize: "20px",
//   fontWeight: "bold",
// };

// const link = {
//   color: "#2754C5",
//   fontFamily:
//     "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
//   fontSize: "14px",
//   textDecoration: "underline",
// };

// const text = {
//   color: "#333",
//   fontFamily:
//     "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
//   fontSize: "14px",
//   margin: "24px 0",
// };

// const imageSection = {
//   backgroundColor: "black",
//   marginBottom: "10px",
//   display: "flex",
//   padding: "20px 0",
//   alignItems: "center",
//   justifyContent: "center",
// };

// const coverSection = { backgroundColor: "#fff" };

// const upperSection = { padding: "25px 35px" };

// const lowerSection = { padding: "25px 35px" };

// const footerText = {
//   ...text,
//   fontSize: "12px",
//   padding: "0 20px",
// };

// const mainText = {
//   color: "#333",
//   fontFamily:
//     "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
//   fontSize: "14px",
//   marginBottom: "14px",
// };

// const cautionText = { ...text, margin: "0px" };

export default function DeliveryEmail() {
  return <div>Email Template for dev</div>;
}
