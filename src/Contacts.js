import React from 'react';
import styles from './Contacts.module.css';

function Contacts() {
  return (
    <div className={styles.contacts} id="3">
      <div className={styles.container}>
        <span className={styles.spanContacts}>Контакты</span>
        <div className={styles.formItems}>
          <div className={styles.input}>
            <input value='Name'/>
            <input value='E-mail:'/>
          </div>
          <div className={styles.input}>
            <textarea>Введите текст</textarea>
          </div>
        </div>

        <button className={styles.buttonSend}>
        {/*  <span></span>
          <span></span>
          <span></span>
          <span></span>*/}
          Отправить
        </button>
      </div>
    </div>
  );
}

export default Contacts;
