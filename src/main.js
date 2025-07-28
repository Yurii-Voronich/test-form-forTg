import axios from "axios";
import "./style.css";
const formEl = document.querySelector(".form");

const onSubmit = async (e) => {
  e.preventDefault();
  const { name, email, message } = e.currentTarget.elements;
  try {
    const response = await axios.post(
      "https://test-server-fortg.onrender.com/send-message",
      {
        name: name.value.trim(),
        email: email.value.trim(),
        message: message.value.trim(),
      }
    );

    console.log("Відповідь сервера:", response.data);
  } catch (error) {
    console.error("Помилка при надсиланні:", error);
  }
};

formEl.addEventListener("submit", onSubmit);
