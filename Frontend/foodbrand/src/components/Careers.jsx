import React from 'react'

export default function Careers() {
  return (
    <div>
      <h2 style={{marginTop:"80px"}}>Work with us..!!</h2>

      <section className="careers-intro">
  <h1>Join Our Team</h1>
  <p>At EveryBiteTaste, we value innovation, passion, and teamwork. Come grow with us! <br />
    We believe in creating delicious experiences through innovation and teamwork. <br />
     Our culture thrives on creativity, passion, and growth. <br />
    If you’re eager to make an impact and grow your career, you’ve come to the right place! <br />
  </p>
</section>

<section className="job-listings">
  <h2>Open Positions</h2>
  {/* Map over jobs */}
  <div className="job-card">
    <h3>Frontend Developer</h3>
    <p>Location: Remote</p>
    <p>Full-time</p>
    <p>We’re looking for a skilled React developer...</p>
    <button>Apply Now</button>

  </div>
</section>

<section className="application-form">
  <h2>Apply Now</h2>
  {/* Form with inputs + submit */}
</section>

<section className="culture-benefits">
  <h2>Why Work With Us?</h2>
  <p>
    At EveryBiteTaste, we value: <br />

Flexible working hours & remote options <br />

Career growth and continuous learning <br />

Friendly and collaborative team environment <br />

Health and wellness benefits
  </p>
</section>

<section className="contact-hr">
  <h2>Contact Recruitment</h2>
  <p>
  Have questions? Reach out to our recruitment team:  </p>
  <p>
Email: hr@everybitetaste.com
  </p>
<p>
Phone: +91 98765 43210</p>
</section>

    </div>
  )
}
