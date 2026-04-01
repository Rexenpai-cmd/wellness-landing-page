import React from "react";

const Profile = ({ children, className }) => {
    return <div className={`rounded-full ${className}`}>{children}</div>;
};

export default Profile;
