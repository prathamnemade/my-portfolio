import React from "react";
import { SocialIcon } from "react-social-icons";
import "./style.scss";

const OPTIONS = [
  {
    name: "Facebook",
    icon: "facebook",
    url: "https://www.facebook.com/prathamesh.nemade.9",
  },
  {
    name: "Instagram",
    icon: "instagram",
    url: "https://www.instagram.com/itsprathameshsfault/",
  },
  {
    name: "Snapchat",
    icon: "snapchat",
    url: "https://www.snapchat.com/add/prathamn?share_id=RTBCMjU5&locale=en_IN",
  },
  { name: "GitHub", icon: "github", url: "https://github.com/prathamnemade" },
  {
    name: "LinkedIn",
    icon: "linkedin",
    url: "https://www.linkedin.com/in/prathamnemade/",
  },
  {
    name: "Medium",
    icon: "medium",
    url: "https://prathameshnemade.medium.com/about",
  },
  { name: "Mail", icon: "mail", url: "mailto:prathameshnemade95@gmail.com" },
];

const SharingComponent = () => {
  return (
    <div className="sharing-container">
      {OPTIONS &&
        OPTIONS.map((option, index) => (
          <SocialIcon
            key={"icon" + index}
            icon={option.icon}
            url={option.url}
          />
        ))}
    </div>
  );
};

export default SharingComponent;
