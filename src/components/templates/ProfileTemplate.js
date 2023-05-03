import React from 'react';
import ProfileContent from '../molecules/ProfileContent';
import ProfileLinks from '../molecules/ProfileLinks';
import ProfileMenu from '../molecules/ProfileMenu';

function ProfileTemplate() {
  return (
    <div>
      <ProfileLinks />
      <div className="columns my-6">
        <div className="column is-3 is-offset-1">
          <ProfileMenu />
        </div>
        <div className="column is-8">
          <ProfileContent />
        </div>
      </div>
    </div>
  );
}

export default ProfileTemplate;
