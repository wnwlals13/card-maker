import React, { memo, useRef, useState } from "react";
import Button from "../button/button";
import styles from "./card_add.module.css";

const CardAdd = memo(({ FileInput, onAdd }) => {
  const [updateFile, setUpdateFile] = useState({
    fileName: null,
    fileURL: null,
  });
  const formRef = useRef();
  const nameRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const onSubmit = (event) => {
    event.preventDefault();
    const card = {
      id: Date.now(), // uuid
      name: nameRef.current.value || "",
      company: companyRef.current.value || "",
      theme: themeRef.current.value,
      title: titleRef.current.value || "",
      email: emailRef.current.value || "",
      message: messageRef.current.value || "",
      fileName: updateFile.fileName || "",
      fileURL: updateFile.fileURL || "",
    };
    formRef.current.reset();

    setUpdateFile({
      fileName: null,
      fileURL: null,
    }); //초기화
    onAdd(card);
  };

  const onFileChange = (file) => {
    setUpdateFile({ fileName: file.name, fileURL: file.url });
  };
  return (
    <form ref={formRef} className={styles.cardInfo}>
      <input
        ref={nameRef}
        className={styles.input}
        tyle="text"
        name="name"
        placeholder="name"
      />
      <input
        ref={companyRef}
        className={styles.input}
        tyle="text"
        name="company"
        placeholder="company"
      />
      <select
        ref={themeRef}
        className={styles.select}
        name="theme"
        placeholder="theme"
      >
        <option value="light">light</option>
        <option value="dark">dark</option>
        <option value="colorful">colorful</option>
      </select>
      <input
        ref={titleRef}
        className={styles.input}
        tyle="text"
        name="title"
        placeholder="title"
      />
      <input
        ref={emailRef}
        className={styles.input}
        tyle="text"
        name="email"
        placeholder="email"
      />
      <textarea
        ref={messageRef}
        className={styles.textarea}
        name="message"
        placeholder="comment here..."
      ></textarea>

      <div className={styles.fileInput}>
        <FileInput name={updateFile.fileName} onFileChange={onFileChange} />
      </div>
      <Button name="Add" onClick={onSubmit} />
    </form>
  );
});
//✨ card add와 card edit은 FileInput에서 받아온 것을 살짝 다르게 처리한다.
// card edit 은 qkedkdhs 파일을 바로 업로드하지만, card add는 state에 저장해놨다가
// 사용자가 add를 누를 경우! 업로드 해야하기 때문이다.
export default CardAdd;
