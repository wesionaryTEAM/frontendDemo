import React from "react";
import { WithTranslation, withTranslation } from "react-i18next";

import { convertCollectionSnapshotToMap,firestore } from "./firebase/utils";

interface Props extends WithTranslation {}

function App(props: Props) {
  const { t } = props;
  const [blog, setBlog] = React.useState();

  const putData = async () => {
    //@ts-ignore
    const collectionRef = await firestore.collection("blog");
    const snapshot = await collectionRef.get();
    let collectionMap;
    if (snapshot) {
      collectionMap = convertCollectionSnapshotToMap(snapshot);
    }
    setBlog(collectionMap);
  };

  React.useEffect(() => {
    putData();
  }, []);

  return (
    <div className="App">
      {console.log(blog)}
      {t("welcome")}
      {/* {blog
        ? blog>.map((singleBlog: any) => {
            return <h1>{singleBlog.title}</h1>;
          })
        : null} */}
    </div>
  );
}

export default withTranslation()(App);
