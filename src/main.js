const formEl = document.querySelector(".form");



const onSubmit = async (e) => {
  e.preventDefault();
  const { name, email, message } = e.currentTarget.elements;
  const formData = ` заявка на регистрацію на івент 
  ім'я: ${name.value.trim()},
    email: ${email.value.trim()},
    message: ${message.value.trim()}`;
  console.log(formData);
  const response = await fetch(
    `https://api.telegram.org/bot/${botToken}/sendMessage`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatID,
        text: formData,
      }),
    }
  );
};

formEl.addEventListener("submit", onSubmit);
