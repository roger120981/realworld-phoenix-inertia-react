import React from "react";
import { Button } from "@/components/button";
import { useForm } from "@inertiajs/react";
import { User } from "@/types";
import { FieldError } from "../fieldError";

interface Props {
  currentUser: User;
}

export const SettingsForm = ({ currentUser }: Props) => {
  const formData = useForm({
    image: currentUser.image,
    username: currentUser.username,
    bio: currentUser.bio,
    email: currentUser.email,
    password: "",
  });
  const handleInput = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    formData.setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = (e: SubmitEvent) => {
    e.preventDefault();
    formData.post(`/user/${currentUser.id}/settings`);
  };

  return (
    <>
      <form id="settings-form" onSubmit={handleSubmit}>
        <fieldset>
          <fieldset className="form-group">
            <input
              onChange={handleInput}
              type="text"
              name="avatar-url"
              value={formData.data.image}
              placeholder="URL of profile picture"
              className="form-control"
            />
            <FieldError error={formData.errors.image} />
          </fieldset>
          <fieldset className="form-group">
            <input
              onChange={handleInput}
              type="text"
              name="username"
              placeholder="Your Name"
              value={formData.data.username}
              className="form-control form-control-lg"
            />
            <FieldError error={formData.errors.username} />
          </fieldset>
          <fieldset className="form-group">
            <textarea
              onChange={handleInput}
              name="bio"
              placeholder="Short bio about you"
              value={formData.data.bio}
              className="form-control form-control-lg"
              rows={8}
            ></textarea>
            <FieldError error={formData.errors.bio} />
          </fieldset>
          <fieldset className="form-group">
            <input
              onChange={handleInput}
              type="email"
              name="email"
              value={formData.data.email}
              placeholder="Email"
              className="form-control form-control-lg"
            />
            <FieldError error={formData.errors.email} />
          </fieldset>
          <fieldset className="form-group">
            <input
              onChange={handleInput}
              type="password"
              name="password"
              value={formData.data.password}
              placeholder="New Password"
              autoComplete="new-password"
              className="form-control form-control-lg"
            />
            <FieldError error={formData.errors.password} />
          </fieldset>
          <Button
            component="button"
            size="lg"
            color="primary"
            variant="filled"
            type="submit"
            className="pull-xs-right"
            disabled={formData.processing}
          >
            Update Settings
          </Button>
        </fieldset>
      </form>
    </>
  );
};
