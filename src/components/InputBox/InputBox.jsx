import { useEffect } from "react";
import styles from "./InputBox.module.css";
import supabase from "../../supabase.js";

const InputBox = () => {
  useEffect(() => {
    const getUsers = async () => {
      const users = await supabase.from("users").select();
      console.log(users);
    };

    getUsers();
  }, []);

  return (
    <div className={styles.inputbox}>
      <input
        id="today-i-learned"
        type="text"
        placeholder="What did you learn today?"
        spellCheck="false"
      />
      <button>Submit</button>
    </div>
  );
};

export default InputBox;
