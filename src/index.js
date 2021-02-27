import React, { memo } from "react";
import ReactDOM from "react-dom";
import "./index.module.css";
import App from "./app";
import Authentication from "./service/auth_service";
import ImgService from "./service/img_service";
import ImgFileInput from "./components/img_file_input/img_file_input";
import DBService from "./service/db_service";

const authService = new Authentication();
const dbService = new DBService();
const imgService = new ImgService();
const FileInput = memo((props) => (
  <ImgFileInput {...props} imgService={imgService} />
));
//✨ Component Props
//컴포넌트를 외부에서 만들어서 전달할것! 이렇게 하지 않으면 계속 app-> cardmaker->editor
//이렇게 전달해야된다. fileInput을 사용할 때 원하는 props을 전달하면 그 props를 imgFileInput 에 전달할 수 있다.
//조금 더 확장 가능함!, 이 경우 보통 대문자로 시작함
// 장점 - 쓸데없이 많은 서비스를 전달하지 않아도 된다/ 나중에조금더 많은 서비스를 필요로한다면 한곳에서만 수정하면되서
// 심플하게 Dependency injection하면 된다.

ReactDOM.render(
  <React.StrictMode>
    <App
      authService={authService}
      FileInput={FileInput}
      dbService={dbService}
    />
  </React.StrictMode>,
  document.getElementById("root")
);
