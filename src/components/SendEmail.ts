// src/components/SendEmail.ts
export const SendEmail = async (formdata: FormData) => {
  const message = formdata.get("message");
  const name = formdata.get("name");
  const senderEmail = formdata.get("SenderEmail");

  if (!message || !name || !senderEmail) {
    return { error: "Invalid form data" };
  }

  // 🔑 ضع هنا مفتاح Web3Forms الخاص بك
  const accessKey = "d7472ca3-f998-4cde-a48c-f7882fef54d2";

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      access_key: accessKey,
      name,
      email: senderEmail,
      message,
    }),
  });

  const result = await response.json();

  if (!result.success) {
    return { error: result.message || "Failed to send message" };
  }

  return { success: true };
};
