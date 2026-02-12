import React from 'react';
import './Privacy.css';

export default function Privacy() {
  return (
    <div className="privacy-container">
      <h1>Privacy Policy</h1>
      <p>Effective Date: February 12, 2026</p>

      <section>
        <h2>1. Introduction</h2>
        <p>
          At EveryBiteTaste, we respect your privacy and are committed to protecting your personal information.
          This Privacy Policy explains how we collect, use, and safeguard your data when you use our website and services.
        </p>
      </section>

      <section>
        <h2>2. Information We Collect</h2>
        <p>We may collect the following types of information:</p>
        <ul>
          <li>Personal details such as name, email, phone number.</li>
          <li>Account credentials for login and registration.</li>
          <li>Order and transaction information.</li>
          <li>Usage data and analytics about your interactions with our site.</li>
        </ul>
      </section>

      <section>
        <h2>3. How We Use Your Information</h2>
        <ul>
          <li>To provide and manage your account and orders.</li>
          <li>To respond to your inquiries and provide customer support.</li>
          <li>To send you important updates and promotional messages (with consent).</li>
          <li>To improve our website, services, and user experience.</li>
        </ul>
      </section>

      <section>
        <h2>4. Sharing Your Information</h2>
        <p>
          We do not sell your personal information. We may share your data with trusted third-party service providers to fulfill orders,
          improve services, or comply with legal obligations.
        </p>
      </section>

      <section>
        <h2>5. Security</h2>
        <p>
          We implement industry-standard security measures to protect your information against unauthorized access, alteration, or disclosure.
        </p>
      </section>

      <section>
        <h2>6. Your Rights</h2>
        <ul>
          <li>Access and receive a copy of your personal information.</li>
          <li>Request correction or deletion of your data.</li>
          <li>Withdraw consent for marketing communications at any time.</li>
        </ul>
      </section>

      <section>
        <h2>7. Contact Us</h2>
        <p>If you have any questions about this Privacy Policy, please contact us at <a href="mailto:support@everybitetastefoods.com">support@everybitetastefoods.com</a>.</p>
      </section>
    </div>
  );
}
