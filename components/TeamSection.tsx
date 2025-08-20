import React from 'react';
import './TeamSection.css'; // Assuming you have a CSS file for styling

const TeamSection: React.FC = () => {
    const teamMembers = [
        { name: 'Alice Johnson', role: 'Founder', image: '/images/alice.jpg' },
        { name: 'Michael Smith', role: 'Creative Director', image: '/images/michael.jpg' },
        { name: 'Sophia Brown', role: 'Marketing Specialist', image: '/images/sophia.jpg' },
        { name: 'James Wilson', role: 'Product Designer', image: '/images/james.jpg' },
    ];

    return (
        <section className="team-section">
            <h2 className="team-title">Meet Our Team</h2>
            <div className="team-container">
                {teamMembers.map((member, index) => (
                    <div className="team-member" key={index}>
                        <img src={member.image} alt={member.name} className="team-image" />
                        <h3 className="member-name">{member.name}</h3>
                        <p className="member-role">{member.role}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TeamSection;