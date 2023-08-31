// import ImageBox from "./components/page";
// import Text from "./MyNext/text";
// import styles from "./StyleSheet/AOT.module.css"
// export default  function Home() {
//   return (
//     <div>
//       <div className={styles.image}>
//         <ImageBox></ImageBox>
//         <ImageBox></ImageBox>
//         <ImageBox></ImageBox>
//       </div>
//       <div className={styles.header}>
//         <Text></Text>
//         <Text></Text>
//       </div>
//     </div>
//   );
// }
// import styles from "./StyleSheet/SunFlower.module.css"
// import Nuur from "./header/page"
// import Card from "./Card/page"
// import Blogs from "./blogs/page"
// export default function School() {
//   return (
//     <div className={styles.MainConpose}>
//       <div></div>
//       <Nuur className={styles.header}></Nuur>
//       <Blogs className={styles.Blogs}></Blogs>
//       <Card ></Card>
//     </div>
//   )
// }
import Count from "./conclusion/page";
import Container from "./mainBody/page";
import styles from "./StyleSheet/ToDo.module.css";
export default function Tetris() {
  return (
    <div className={styles.mainConclose}>
      <div>
        <Count></Count>
      </div>
      <div>
        <Container></Container>
      </div>
    </div>
  );
}
