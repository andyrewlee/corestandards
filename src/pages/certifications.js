import React from 'react';
import PageTemplate from '../templates/PageTemplate';

const Certifications = () => (
  <PageTemplate>
    <h1>Certifications</h1>
    <p>
      You think you are ready for a ceritifcation test? Send me an email
      at <a href="mailto:corestandardsio@gmail.com">corestandardsio@gmail.com</a> with
      subject line CERTIFICATION REQUEST. Certification will be administered
      live over video chat on a first come first serve basis. Previous certifications
      are required before you can advance to the next one.
    </p>
    <h2>Beginner: HTML, CSS, JS</h2>
    <ul>
      <li>
        L0: HTML
       </li>
      <li>
        L1: HTML + CSS
      </li>
      <li>
        L2: HTML + CSS + JS
      </li>
    </ul>
    <h2>Intermediate: Frontend</h2>
    <ul>
      <li>
        L3: Games
      </li>
      <li>
        L5: Using external libraries
      </li>
      <li>
        L4: APIs
      </li>
      <li>
        L6: Single page application
      </li>
    </ul>
    <h2>Advanced: Backend</h2>
    <ul>
      <li>
        L7: Server
      </li>
      <li>
        L8: Database
      </li>
      <li>
        L9: Authentication
      </li>
    </ul>
    <h2>Pro: Full stack</h2>
    <ul>
      <li>
        L10: CRUD app
      </li>
      <li>
        L11: CRUD with Authentication
      </li>
      <li>
        L12: CRUD GraphQL
      </li>
      <li>
        L13: CRUD GraphQL with Authentication
      </li>
    </ul>
    <h2>Master: Algorithms</h2>
    <ul>
      <li>
        L14: Sorts
      </li>
      <li>
        L15: Recursion
      </li>
      <li>
        L16: Searches
      </li>
      <li>
        L17: Data Structures
      </li>
    </ul>
    <h2>Legend</h2>
    <ul>
      <li>
        L18: Mobile
      </li>
      <li>
        L19: Security
      </li>
      <li>
        L20: Microservices
      </li>
    </ul>
  </PageTemplate>
);

export default Certifications;
