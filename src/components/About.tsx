import React from 'react';
import { Link } from 'react-router-dom'

const AboutPage: React.FC = () => {
  return (
    <div className="py-4 px-6 text-gray-700 max-w-[800px] mx-auto">
      <h1 className="text-3xl font-semibold mb-6">About Our Password Manager</h1>
      <div className="text-lg leading-7">
        <p>
          At <Link to='/' className="text-red-500 hover:text-red-600">LockIt</Link>, we are committed to helping you maintain good password hygiene.
          Your online security is of paramount importance, and secure passwords are your first line of defense against threats on the internet.
          Follow these best practices to ensure the safety of your online accounts:
        </p>
        <ul className="list-disc pl-6 mt-4">
          <li>
            <strong>Avoid Personal Information:</strong> Don't be predictable. Refrain from using easily discoverable personal information in your passwords.
          </li>
          <li>
            <strong>Don't Share Credentials:</strong> Keep your secrets secret. Never share your credentials over email or text messages.
          </li>
          <li>
            <strong>Use Unique Passwords:</strong> One size doesn't fit all. Always use a different password for each of your online accounts.
          </li>
          <li>
            <strong>Embrace Password Managers:</strong> Simplify your life with technology. Password managers make it easy to generate, store, and manage unique, complex passwords for each of your accounts.
          </li>
          <li>
            <strong>Secure Your "Master" Passphrase:</strong> Think of it as your fortress key. Protect your password manager with a long, unique, and memorable "master" passphrase.
          </li>
          <li>
            <strong>Answer Security Questions Securely:</strong> Think outside the box. For security questions, use random passwords or passphrases. Store these answers in your password manager as well.
          </li>
          <li>
            <strong>Change Your "Master" Password Periodically:</strong> Keep them guessing. Periodically change your "master" passphrase.
          </li>
        </ul>
      </div>
      <div className="text-lg mt-8">
        <p>Thank you for choosing <Link to='/' className="text-red-500 hover:text-red-600">LockIt</Link> as your password manager. We're here to assist you on your path to a more secure online experience.</p>
        <p>If you have any questions or need help, don't hesitate to <span className="underline text-blue-700 cursor-not-allowed">reach out to our support team</span>.</p>
      </div>
    </div>
  );
};

export default AboutPage;
