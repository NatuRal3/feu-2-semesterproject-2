import React from "react";
import Tile from "../components/cards/Card";
import userInfo from "../tools/userInfo.js";
import Button from "react-bootstrap/Button";
import uploadAvatar from "../tools/uploadAvatar";

function Profile() {
  const { userName, userCredits, userEmail } = userInfo();
  return (
    <>
      <Tile title="Avatar" subtitle={userName} />
      <Button variant="primary" type="submit" onClick={uploadAvatar}>
        Upload
      </Button>
      <Tile title="Username" subtitle={userName} />
      <Tile title="Mail" subtitle={userEmail} />
      <Tile title="Credits" subtitle={userCredits} />
    </>
  );
}

export default Profile;
