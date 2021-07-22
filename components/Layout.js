import Main from "./Main";
import Footer from "./Footer";
import Header from "./Header";

function Layout(props) {
  return (
    <Main>
      <Header/>
      {props.children}
      <Footer />
    </Main>
  );
}

export default Layout;
