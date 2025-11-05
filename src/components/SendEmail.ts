// src/components/SendEmail.ts
export const SendEmail = async (formdata: FormData) => {
  const message = formdata.get("message");
  const name = formdata.get("name");
  const senderEmail = formdata.get("SenderEmail");

  if (!message || !name || !senderEmail) {
    return { error: "Invalid form data" };
  }

  // استبدل هذا الرابط بخدمة مثل Formspree أو Web3Forms
  const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name,
      email: senderEmail,
      message,
    }),
  });

  if (!response.ok) {
    return { error: "Failed to send message" };
  }

  return { success: true };
};
