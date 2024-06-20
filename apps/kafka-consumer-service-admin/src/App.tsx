import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ConsumedCommentList } from "./consumedComment/ConsumedCommentList";
import { ConsumedCommentCreate } from "./consumedComment/ConsumedCommentCreate";
import { ConsumedCommentEdit } from "./consumedComment/ConsumedCommentEdit";
import { ConsumedCommentShow } from "./consumedComment/ConsumedCommentShow";
import { ConsumedPostList } from "./consumedPost/ConsumedPostList";
import { ConsumedPostCreate } from "./consumedPost/ConsumedPostCreate";
import { ConsumedPostEdit } from "./consumedPost/ConsumedPostEdit";
import { ConsumedPostShow } from "./consumedPost/ConsumedPostShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"KafkaConsumerService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="ConsumedComment"
          list={ConsumedCommentList}
          edit={ConsumedCommentEdit}
          create={ConsumedCommentCreate}
          show={ConsumedCommentShow}
        />
        <Resource
          name="ConsumedPost"
          list={ConsumedPostList}
          edit={ConsumedPostEdit}
          create={ConsumedPostCreate}
          show={ConsumedPostShow}
        />
      </Admin>
    </div>
  );
};

export default App;
