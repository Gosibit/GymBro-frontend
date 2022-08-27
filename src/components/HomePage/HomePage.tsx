import FirstHeader from "./Header";
import Main from "./Main";
import { Fragment } from "react";
import { BrowserRouter } from "react-router-dom";

function HomePage() {
  return (
    <Fragment>
      <FirstHeader></FirstHeader>
      <Main></Main>
    </Fragment>
  );
}
export default HomePage;
