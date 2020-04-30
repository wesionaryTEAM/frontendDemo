import React from "react";
import { WithTranslation, withTranslation } from "react-i18next";

import Blog from "./components/page/Blog";

interface Props extends WithTranslation {}

function App(props: Props) {
  const { t } = props;

  return (
    <div className="App">
      {t("welcome")}
      <Blog />
    </div>
  );
}

export default withTranslation()(App);
