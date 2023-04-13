import React, { useState } from "react";
import Tile from "../components/cards/Card";
import userInfo from "../tools/userInfo.js";
import Buttons from "../components/buttons/Buttons";
import uploadAvatar from "../tools/uploadAvatar.js";
import Forms from "../components/forms/Forms";
import { apiUserAvatarLink } from "../services/apiPresets.js";

function Profile() {
  const { userName, userCredits, userEmail, userAvatar } = userInfo();
  const [imageUrl, setImageUrl] = useState("");

  const handleImageUrlChange = (event) => {
    setImageUrl(event.target.value);
  };

  const handleUploadClick = (event) => {
    event.preventDefault();
    uploadAvatar(imageUrl)
      .then(() => {
        console.log("Avatar uploaded successfully!");
        // Do something to indicate to the user that the upload was successful,
        // e.g. display a success message or update the UI to show the new avatar.
      })
      .catch((error) => {
        console.error("Failed to upload avatar:", error);
        // Do something to indicate to the user that the upload failed,
        // e.g. display an error message or log the error to a service like Sentry.
      });
  };

  return (
    <>
      <Tile title="Avatar" subtitle={userName} />
      <div className="userAvatar">
        <img src={`${userAvatar}`} alt="Profile avatar" />
      </div>

      <Forms
        controlId="formAvatarURL"
        label="URL"
        type="url"
        placeholder="Enter avatar url"
        value={imageUrl}
        onChange={handleImageUrlChange}
      />
      <Buttons text="Upload" variant="primary" type="submit" onClick={handleUploadClick} />
      <Tile title="Username" subtitle={userName} />
      <Tile title="Mail" subtitle={userEmail} />
      <Tile title="Credits" subtitle={userCredits} />
    </>
  );
}

export default Profile;
