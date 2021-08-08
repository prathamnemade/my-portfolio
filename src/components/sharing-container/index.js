import React from 'react'
import { SocialMediaIconsReact } from 'social-media-icons-react';
import './style.scss'

const OPTIONS = [
    { name: "Facebook", icon: "facebook" },
    { name: "Instagram", icon: "instagram" },
    { name: "Snapchat", icon: "snapchat" },
    { name: "GitHub", icon: "github" },
    { name: "LinkedIn", icon: "linkedin" },
    { name: "Medium", icon: "medium" },
    { name: "Mail", icon: "mail" },
]

const SharingComponent = () => {
    return (
        <div className="sharing-container">
            {OPTIONS && OPTIONS.map((option, index) =>
                <SocialMediaIconsReact key={'icon' + index}
                    borderWidth={"1"}
                    borderColor="#c2cad7"
                    icon={option.icon}
                    iconColor="#58595b"
                    iconSize={"0"}
                    backgroundColor="#FFF"
                    roundness="50%"
                    size="30" />
            )}
        </div>
    )
}

export default SharingComponent