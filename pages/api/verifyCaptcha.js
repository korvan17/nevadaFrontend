export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const secret_key = process.env.RECAPTCHA_SECRET_KEY;  
      const token = req.body.token;

      const googleVerifyURL = `https://www.google.com/recaptcha/api/siteverify?secret=${secret_key}&response=${token}`;
      const response = await fetch(googleVerifyURL, {
        method: "POST",
      });
      const data = await response.json();

      if (data.success) {
        res.status(200).json({ success: true });
      } else {
        res.status(200).json({ success: false, error: "Invalid Captcha" });
      }
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  } else {
    res.status(405).json({ success: false, error: "Method Not Allowed" });
  }
}
