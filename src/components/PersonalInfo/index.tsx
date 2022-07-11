export const PersonalInfo = () => {
  return (
    <div className="personal-info">
      <img src="images/profile-picture.jpg" alt="personal img" />
      <div className="details-list">
        <div className="details-list__item">
          <div className="key">Full Name</div>
          <div className="value">Utku Alavanda</div>
        </div>
        <div className="details-list__item">
          <div className="key">Year of Birth</div>
          <div className="value">1997</div>
        </div>
        <div className="details-list__item">
          <div className="key">Nationality</div>
          <div className="value">Turkish</div>
        </div>
        <div className="details-list__item">
          <div className="key">Current Residence</div>
          <div className="value">Istanbul / Turkey</div>
        </div>
        <div className="details-list__item">
          <div className="key">Current Workplace</div>
          <div className="value">Sekerbank</div>
        </div>
        <div className="details-list__item">
          <div className="key">Job Description</div>
          <div className="value">Front-end Developer</div>
        </div>
      </div>
    </div>
  );
};
