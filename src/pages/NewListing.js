import React from "react";
import FormGroup from "../components/FormGroup";
import { registerListing } from "../services/apiEngine";
import { Form, Button } from "react-bootstrap";
import validateForm from "../tools/validateForm";
import { useNavigate } from "react-router-dom";

function NewListing() {
  const navigate = useNavigate();

  const submit = async (event) => {
    event.preventDefault();
    const formData = validateForm(event.currentTarget);
    if (formData) {
      registerListing(formData.title, formData.description, formData.endsAt, formData.media)
        .then((data) => {
          console.log(data);
          navigate(`/listing/${data.id}`);
        })
        .catch((error) => {
          console.log("ERROR:", error);
        });
    }
  };

  return (
    <div className="flex column center-items">
      <Form className="newlisting" onSubmit={submit}>
        <FormGroup
          name="title"
          label="Listing Name"
          required={true}
          minLength={5}
          type="text"
          placeholder="Artname"
        />

        <FormGroup
          name="description"
          required={true}
          minLength={20}
          label="Description"
          type="textarea"
          placeholder="Description"
        />

        <FormGroup name="endsAt" required={true} label="Deadline" type="date" />

        <FormGroup
          name="media"
          required={true}
          label="URL"
          type="url"
          placeholder="Enter image url"
        />
        <Button type="submit"> Register Listing </Button>
      </Form>
    </div>
  );
}

export default NewListing;
