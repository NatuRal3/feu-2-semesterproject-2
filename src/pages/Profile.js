import React, { useEffect, useState } from "react";
import Tile from "../components/Card";
import userInfo from "../tools/userInfo.js";
import CardsGrid from "../components/CardsGrid";
import getUserListings from "../tools/userListings";
import FormGroup from "../components/FormGroup";
import { Form, Button } from "react-bootstrap";
import validateForm from "../tools/validateForm";
import { updateUserAvatar } from "../services/apiEngine";

function Profile() {
  const { userName, userCredits, userEmail, userAvatar } = userInfo();
  const [rerender, setRerender] = useState(false);
  const [listings, setListings] = useState([]);

  const handleUpload = (event) => {
    event.preventDefault();

    const formData = validateForm(event.currentTarget);

    if (formData) {
      updateUserAvatar(formData.imageUrl)
        .then(() => {
          console.log("Avatar uploaded successfully!");

          localStorage.setItem(
            "userSessionData",
            JSON.stringify({
              ...userInfo(),
              userAvatar: formData.imageUrl,
            })
          );

          setRerender(!rerender);
        })
        .catch((error) => {
          console.error("Failed to upload avatar:", error);
        });
    }
  };

  useEffect(() => {
    async function fetchData() {
      const data = await getUserListings();
      setListings(data.listings);
    }
    fetchData();
  }, []);

  return (
    <div className="container">
      <div className="userAvatar flex center-items column">
        <img src={`${userAvatar}`} alt="Profile avatar" />

        <Form onSubmit={handleUpload}>
          <FormGroup
            required={true}
            name="imageUrl"
            label="Update Avatar"
            type="url"
            placeholder="Enter avatar url"
          />

          <Button type="submit">Update</Button>
        </Form>
      </div>
      <div className="userinfo flex row">
        <Tile title="Username" subtitle={userName} />
        <Tile title="Mail" subtitle={userEmail} />
        <Tile title="Credits" subtitle={userCredits} />
      </div>
      <h3>Your listings</h3>
      <CardsGrid listings={listings} delButton={true} />
    </div>
  );
}

export default Profile;
