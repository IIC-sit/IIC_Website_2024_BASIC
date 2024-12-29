import React from "react";

const Team = () => {
  return (
    <div className="team">
      <h1>Meet Our Team</h1>
      <p>Our team consists of passionate and driven individuals from diverse backgrounds who work together to make innovation a reality.</p>

      <div className="team-members">
        <div className="team-member-card">
          <img src="iic-coordinator.png" alt="sharanya" className="team-member-img" />
          <h3>Sharanya</h3>
          <p>co-ordinator</p>
        </div>
        <div className="team-member-card">
          <img src="https://via.placeholder.com/150" alt="jhon" className="team-member-img" />
          <h3>Jhon</h3>
          <p>Vice President</p>
        </div>
        <div className="team-member-card">
          <img src="https://via.placeholder.com/150" alt="Alex B" className="team-member-img" />
          <h3>Alex</h3>
          <p>Technical Lead</p>
        </div>
        <div className="team-member-card">
          <img src="https://via.placeholder.com/150" alt="Emma White" className="team-member-img" />
          <h3>Emma </h3>
          <p>reporter</p>
        </div>
      </div>
    </div>
  );
};

export default Team;
