import userInfo from "./userInfo";
import { apiUserAvatarLink } from "../services/apiPresets.js";

async function uploadAvatar(url) {
  const response = await fetch(
    `https://api.noroff.dev/api/v1/auction/profiles/${userInfo().userName}/media`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo().userAccessToken}`,
      },
      body: JSON.stringify({
        avatar: url,
      }),
    }
  );
  if (!response.ok) {
    throw new Error("Failed to upload avatar.");
  }
}
export default uploadAvatar;
