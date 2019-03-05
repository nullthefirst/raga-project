import React, { Component } from 'react';

import '../Main.css';

export default class Info extends Component {
  render() {
    return(
      <div>
        <div>
          <h1><span className="note">What is RAGA?</span></h1>
          <p>Raising Girls Ambition (RAGA) is a project that has taken a central role in the fight for girls’ human right to education, life, and equality, meaningful physical, mental, emotional and socially developed life.</p>
          <p>Raising Girls’ Ambition Conference was conceived to bring together Researchers, Development Practitioners, Policy makers, Educational institutions, Students in Tertiary and Secondary Schools, as well as other Stakeholders who have concern for the development of the girl-child and her place in the society.</p>
        </div>
        <div>
          <h1><span className="note">Why RAGA?</span></h1>
          <p>RAGA envisions a society where girls can grow up to be educated, informed, able to make decisions for their lives and contribute meaningfully to the development of their immediate communities and society at large.</p>
          <p>In order for this to take place, we all must ensure she grows in a gender sensitive environment, whereby she is able to attain her God-given potentials through quality education.</p>
        </div>
        <div>
          <h1><span className="note">Importance</span></h1>
          <p>RAGA conferences therefore bring to the front-burner, issues that would otherwise not allow girls’ ambitions to be raised and/or issues that will enhance their ambition.</p>
          <p>The Conference features presentations from academia, policy makers, legal practitioners, international and national NGOs, High School students and health workers.</p>
        </div>
      </div>
    );
  }
}
