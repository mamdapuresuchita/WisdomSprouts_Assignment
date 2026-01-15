import React from 'react'


const Profile = ({ user }) => {
  if (!user) return null;

  return (
    <div className="profile-wrapper">
      <div className="profile-card">

        {/* Header */}
        <div className="profile-header">
          <div className="profile-avatar">
            {user.userImage ? (
              <img src={user.userImage} alt="profile" />
            ) : (
              <span>{user.name.charAt(0).toUpperCase()}</span>
            )}
          </div>

          <div className="profile-info">
            <h3>{user.name}</h3>
            <p className={`role-badge ${user.role?.toLowerCase()}`}>
              {user.role}
            </p>
          </div>
        </div>

        <hr />

        {/* Details */}
        <div className="profile-details">
          <div className="detail-row">
            <label>Email</label>
            <span>{user.email}</span>
          </div>

          <div className="detail-row">
            <label>Phone</label>
            <span>{user.phone || "N/A"}</span>
          </div>

          <div className="detail-row">
            <label>Address</label>
            <span>{user.address || "N/A"}</span>
          </div>

          <div className="detail-row">
            <label>Joined On</label>
            <span>
              {new Date(user.createdAt).toLocaleDateString()}
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Profile;

