import React from "react";
import { SettingsForm } from "@/components/settings-form";
import { LogoutButton } from "@/components/logoutButton";
import { User } from "@/types";

interface Props {
  currentUser: User;
}

const Page = ({ currentUser }: Props) => {
  return (
    <div className="settings-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Your Settings</h1>
            <SettingsForm currentUser={currentUser} />
            <hr />
            <LogoutButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
