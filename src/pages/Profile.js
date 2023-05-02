import React, { useEffect, useState } from "react";
import Tile from "../components/Card";
import userInfo from "../tools/userInfo.js";
import Buttons from "../components/Buttons";
import uploadAvatar from "../tools/uploadAvatar.js";
import Forms from "../components/Forms";
import CardsGrid from "../components/CardsGrid";
import getUserListings from "../tools/userListings";

function Profile() {
  const { userName, userCredits, userEmail, userAvatar } = userInfo();
  const [imageUrl, setImageUrl] = useState("");
  const [listings, setListings] = useState([]);

  const handleImageUrlChange = (event) => {
    setImageUrl(event.target.value);
  };

  const handleUploadClick = (event) => {
    event.preventDefault();
    uploadAvatar(imageUrl)
      .then(() => {
        console.log("Avatar uploaded successfully!");
      })
      .catch((error) => {
        console.error("Failed to upload avatar:", error);
      });
  };

  useEffect(() => {
    async function fetchData() {
      const data = await getUserListings();
      setListings(data.listings);
    }
    console.log("Hello im from useEffect");
    fetchData();
  }, []);

  return (
    <>
      <Tile title="Avatar" subtitle={userName} />
      <div className="userAvatar">
        <img src={`${userAvatar}`} alt="Profile avatar" />
      </div>
      <form>
        <Forms
          controlId="formAvatarURL"
          label="URL"
          type="url"
          placeholder="Enter avatar url"
          value={imageUrl}
          onChange={handleImageUrlChange}
        />
      </form>
      <Buttons text="Upload" variant="primary" type="submit" onClick={handleUploadClick} />
      <Tile title="Username" subtitle={userName} />
      <Tile title="Mail" subtitle={userEmail} />
      <Tile title="Credits" subtitle={userCredits} />
      <h3>Your listings</h3>
      <CardsGrid listings={listings} delButton={true} />
    </>
  );
}

export default Profile;
