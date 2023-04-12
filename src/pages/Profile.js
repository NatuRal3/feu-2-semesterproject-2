import React from "react";
import Tile from "../components/cards/Card";
import userInfo from "../tools/userInfo.js";
import Buttons from "../components/buttons/Buttons";
import uploadAvatar from "../tools/uploadAvatar";
import Forms from "../components/forms/Forms";
import { apiUserAvatarLink } from "../services/apiPresets.js";

function Profile() {
  const { userName, userCredits, userEmail } = userInfo();
  return (
    <>
      <Tile title="Avatar" subtitle={userName} />
      <Forms controlId="formAvatarURL" label="URL" type="url" placeholder="Enter avatar url" />
      <Buttons text="Upload" variant="primary" type="submit" onClick={uploadAvatar} />
      <Tile title="Username" subtitle={userName} />
      <Tile title="Mail" subtitle={userEmail} />
      <Tile title="Credits" subtitle={userCredits} />
    </>
  );
}

export default Profile;
