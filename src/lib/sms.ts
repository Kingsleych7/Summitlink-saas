import axios from "axios";

export async function sendSMS(to: string, message: string) {
  try {
    const response = await axios.post(
      "https://api.ng.termii.com/api/sms/send",
      {
        to,
        from: "Summitlink",
        sms: message,
        type: "plain",
        channel: "generic",
        api_key: process.env.TERMII_API_KEY,
      }
    );

    return response.data;
  } catch (error) {
    console.log(error);
  }
}
