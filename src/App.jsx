import React, { useState } from 'react';

    function App() {
      const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
      });
      const [status, setStatus] = useState('');

      const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');

        try {
          const response = await fetch('https://send-any-foam.indunissanka.workers.dev/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });

          if (response.ok) {
            setStatus('Message sent successfully!');
            setFormData({
              name: '',
              email: '',
              message: ''
            });
          } else {
            setStatus('Failed to send message. Please try again.');
          }
        } catch (error) {
          setStatus('An error occurred. Please try again.');
        }
      };

      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        });
      };

      return (
        <div className="container">
          <header className="header">
            <div className="profile-picture">
              <img src="https://via.placeholder.com/150" alt="Mark Wu" />
            </div>
            <div className="header-content">
              <h1>Mark Wu</h1>
              <h2>Senior Sales Manager, Overseas</h2>
              <div className="contact-badges">
                <div className="badge">
                  <span>📞</span> 0932891588
                </div>
                <div className="badge">
                  <span>✉️</span> mark@markwu.uk
                </div>
                <div className="badge">
                  <a href="https://www.facebook.com/mark.wu.9588" target="_blank" rel="noopener noreferrer">
                    <span><i className="fab fa-facebook"></i></span> Facebook
                  </a>
                </div>
                <div className="badge">
                  <a href="https://www.linkedin.com/in/markwu2/" target="_blank" rel="noopener noreferrer">
                    <span><i className="fab fa-linkedin"></i></span> LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </header>

          <section className="section about-section">
            <h3>About Me</h3>
            <p className="summary">
              Experienced Sales Manager with over 20 years of expertise in sales, customer service, and technical support. 
              Proven ability to manage international sales initiatives and foster global client relationships to achieve business growth. 
              Extensive experience in traveling across Southeast Asia and the Middle East, with a strong understanding of cultural dynamics 
              and business practices. Skilled in negotiation, team leadership, and identifying market opportunities.
            </p>
          </section>

          <section className="section experience-section">
            <h3>Experience</h3>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-content">
                  <h4>Senior Sales Manager, Overseas</h4>
                  <p className="timeline-date">August 2009 - Present</p>
                  <p className="company">Tai County Chemical CO., LTD.</p>
                  <ul>
                    <li>Spearhead global sales initiatives and develop strategic business plans</li>
                    <li>Build and maintain strong relationships with clients and partners worldwide</li>
                    <li>Analyze market trends and competitive dynamics</li>
                    <li>Lead and manage a team of sales professionals</li>
                  </ul>
                </div>
              </div>
              {/* Add other timeline items similarly */}
            </div>
          </section>

          <section className="section skills-section">
            <h3>Skills</h3>
            <div className="skills-grid">
              <div className="skill-card">International Market Expertise</div>
              <div className="skill-card">Negotiation Skills</div>
              <div className="skill-card">Client Service Excellence</div>
              <div className="skill-card">Cross-Cultural Communication</div>
            </div>
          </section>

          <section className="section contact-section">
            <h3>Contact Me</h3>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit">Send Message</button>
              {status && <p className="status">{status}</p>}
            </form>
          </section>

          <footer className="footer">
            <p>© 2023 Mark Wu. All rights reserved.</p>
          </footer>
        </div>
      );
    }

    export default App;
