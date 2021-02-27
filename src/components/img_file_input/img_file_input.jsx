import React, { useRef, useState } from "react";
import styles from "./img_file_input.module.css";

const ImgFileInput = ({ imgService, name, onFileChange }) => {
  //✨ loading spinner - 처음에는 로딩스피너가 안도니까 기본값 : false
  const [loading, setLoading] = useState(false);
  const inputRef = useRef();
  const onButtonClick = (event) => {
    event.preventDefault();
    inputRef.current.click(); //trick
  };
  const onChange = async (event) => {
    setLoading(true); //파일이 변경될 때 loading
    const uploaded = await imgService.uploadImg(event.target.files[0]);
    setLoading(false);
    console.log(uploaded); //✨이렇게 받아옴!
    onFileChange({ name: uploaded.original_filename, url: uploaded.url });
  };

  return (
    <div className={styles.container}>
      <input
        ref={inputRef}
        className={styles.input}
        type="file"
        accept="image/*"
        name="file"
        onChange={onChange}
      ></input>
      {!loading && (
        <button
          className={`${styles.button} ${name ? styles.pink : styles.grey}`}
          onClick={onButtonClick}
        >
          {name || "no file"}
        </button>
      )}
      {loading && <div className={styles.loading}></div>}
    </div>
  );
};

export default ImgFileInput;
