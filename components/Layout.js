import styles from "../styles/Layout/Layout.module.scss";
import Header from "./Header";
import Navbar from "./Navbar";


const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Header />
      <Navbar />
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default Layout;
