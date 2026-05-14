/**
 * SMS Provider Gateway
 * Supports: Termii, Africa's Talking, SMSSmartSolution
 */

export async function sendSMS({ provider, phone, message }) {
  switch (provider) {
    case "termii":
      return await sendWithTermii(phone, message);

    case "africastalking":
      return await sendWithAfricastalking(phone, message);

    case "smssmart":
      return await sendWithSmsSmart(phone, message);

    default:
      throw new Error("Invalid SMS provider selected");
  }
}

/* =========================
   TERMII SMS
========================= */
async function sendWithTermii(phone, message) {
  const res = await fetch("https://api.ng.termii.com/api/sms/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      api_key: process.env.TERMII_API_KEY,
      to: phone,
      from: process.env.TERMII_SENDER_ID,
      sms: message,
      type: "plain",
      channel: "generic",
    }),
  });

  return await res.json();
}

/* =========================
   AFRICA'S TALKING SMS
========================= */
async function sendWithAfricastalking(phone, message) {
  const credentials = Buffer.from(
    `${process.env.AFRICASTALKING_USERNAME}:${process.env.AFRICASTALKING_API_KEY}`
  ).toString("base64");

  const res = await fetch(
    "https://api.africastalking.com/version1/messaging",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${credentials}`,
      },
      body: new URLSearchParams({
        to: phone,
        message,
        from: process.env.AFRICASTALKING_SENDER || "Summitlink",
      }),
    }
  );

  return await res.json();
}

/* =========================
   SMSSMART SOLUTION SMS
========================= */
async function sendWithSmsSmart(phone, message) {
  const res = await fetch("https://api.smssmartsolution.com/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.SMSSMART_API_KEY}`,
    },
    body: JSON.stringify({
      to: phone,
      message,
      sender: process.env.SMSSMART_SENDER_ID,
    }),
  });

  return await res.json();
}
