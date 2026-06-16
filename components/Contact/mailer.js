import emailjs from "@emailjs/browser";

const mail = ({ name, email, message }) => {
  const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_USER_ID;

  if (!serviceId || !templateId || !publicKey) {
    return Promise.reject(
      new Error(
        "Missing EmailJS configuration. Set NEXT_PUBLIC_SERVICE_ID, NEXT_PUBLIC_TEMPLATE_ID, and NEXT_PUBLIC_USER_ID."
      )
    );
  }

  return emailjs.send(
    serviceId,
    templateId,
    { name, email, message },
    {
      publicKey,
      limitRate: {
        throttle: 10000, // 10s
      },
    }
  );
};

export default mail;
