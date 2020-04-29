import React from 'react';
import { WithTranslation, withTranslation } from "react-i18next";

interface Props extends WithTranslation {}

function App(props: Props) {

  const {t} = props;

  return (
    <div className="App">
      {t("welcome")}
    </div>
  );
}

export default withTranslation()(App) 
