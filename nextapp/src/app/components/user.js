import React from "react";
import {User} from "@nextui-org/react";

export default function UserComponent() {
  return (
    <User   
      name="Jane Doe"
      description="Product Designer"
      avatarProps={{
        src: "https://thumbs.dreamstime.com/b/unknown-male-avatar-profile-image-businessman-vector-unknown-male-avatar-profile-image-businessman-vector-profile-179373829.jpg"
      }}
    />
  );
}
