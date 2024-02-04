import { getSession } from "next-auth/react";

import bcrypt from "bcryptjs";

export default async function changePassword(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const session = await getSession({ req });
  if (!session) {
    return res.status(401).json({ message: "Not authenticated" });
  }

  const { currentPassword, newPassword, passwordConfirmation } = req.body;

  if (
    !currentPassword ||
    !newPassword ||
    newPassword !== passwordConfirmation
  ) {
    return res.status(400).json({ message: "Invalid data provided" });
  }

  try {
    
    const isMatch = await bcrypt.compare(
      currentPassword,
      session.user.passwordHash
    );
    if (!isMatch) {
      return res.status(403).json({ message: "Current password is incorrect" });
    }

    const newHashedPassword = await bcrypt.hash(newPassword, 12);

    res.status(200).json({ message: "Password updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
}
