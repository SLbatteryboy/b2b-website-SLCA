// Shared nav and footer
(function() {
  const page = location.pathname.split('/').pop() || 'index.html';

  const links = [
    { href: 'index.html', label: 'Home' },
    { label: 'Recycling & Disposal', dropdown: [
      { href: 'disposal.html', label: 'Battery disposal & re-use' },
      { href: 'businesses.html', label: 'How we help businesses' },
      { href: 'repurpose-vs-recycle.html', label: 'Repurposing vs. recycling guide' },
      { href: 'changing-recycling.html', label: 'Changing recycling in Australia' },
      { href: 'economics.html', label: 'Economics of battery recycling' },
    ]},
    { label: 'Repairs & Builds', dropdown: [
      { href: 'repairs.html', label: 'Repairs & custom builds' },
      { href: 'workshops.html', label: 'Workshops & consultations' },
      { href: 'safety.html', label: 'Safety resources' },
      { href: 'safety-manual.html', label: 'Safety manual (members)' },
    ]},
    { href: 'mission.html', label: 'Our mission' },
    { href: 'faqs.html', label: 'FAQs' },
    { href: 'contact.html', label: 'Contact' },
  ];

  function buildNav() {
    let ul = '<ul class="nav-links" id="navLinks">';
    links.forEach(l => {
      if (l.dropdown) {
        ul += `<li class="has-dropdown"><button>${l.label} ▾</button><div class="dropdown">`;
        l.dropdown.forEach(d => {
          ul += `<a href="${d.href}"${d.href===page?' class="active"':''}>${d.label}</a>`;
        });
        ul += '</div></li>';
      } else {
        ul += `<li><a href="${l.href}"${l.href===page?' class="active"':''}>${l.label}</a></li>`;
      }
    });
    ul += '</ul>';
    return ul;
  }

  const navEl = document.getElementById('site-nav');
  if (navEl) {
    navEl.innerHTML = `
      <a class="nav-logo" href="index.html"><span>Sustainable</span> Lithium Cells Australia</a>
      ${buildNav()}
      <button class="nav-hamburger" id="hamburger" aria-label="Menu">
        <span></span><span></span><span></span>
      </button>
    `;
    document.getElementById('hamburger').addEventListener('click', () => {
      document.getElementById('navLinks').classList.toggle('open');
    });
  }

  const footEl = document.getElementById('site-footer');
  if (footEl) {
    footEl.innerHTML = `
      <div class="footer-inner">
        <div>
          <h4>Second Life Battery Sales</h4>
          <p>Sustainable Lithium Cells Australia PTY LTD (S.L.C.A PTY LTD)</p>
          <p>Brisbane-based company with national reach.</p>
          <p>ABN: 67 661 094 159</p>
          <p style="margin-top:0.5rem">📞 <a href="tel:0493644092" style="color:rgba(255,255,255,0.5);text-decoration:none">0493 644 092</a></p>
          <p>✉️ <a href="mailto:econtact@slbatteries.com.au" style="color:rgba(255,255,255,0.5);text-decoration:none">econtact@slbatteries.com.au</a></p>
        </div>
        <div>
          <h4>Services</h4>
          <ul>
            <li><a href="disposal.html">Battery disposal</a></li>
            <li><a href="businesses.html">Business services</a></li>
            <li><a href="repairs.html">Repairs & builds</a></li>
            <li><a href="workshops.html">Workshops</a></li>
          </ul>
        </div>
        <div>
          <h4>Learn</h4>
          <ul>
            <li><a href="mission.html">Our mission</a></li>
            <li><a href="repurpose-vs-recycle.html">Repurpose vs. recycle</a></li>
            <li><a href="changing-recycling.html">Changing recycling in AU</a></li>
            <li><a href="economics.html">Economics of recycling</a></li>
            <li><a href="safety.html">Safety resources</a></li>
            <li><a href="faqs.html">FAQs</a></li>
          </ul>
        </div>
        <div>
          <h4>Connect</h4>
          <ul>
            <li><a href="contact.html">Contact us</a></li>
            <li><a href="https://www.facebook.com/profile.php?id=100083340639181" target="_blank">Facebook</a></li>
            <li><a href="https://www.instagram.com/slbatteries_brisbane/" target="_blank">Instagram</a></li>
            <li><a href="https://www.linkedin.com/company/second-life-battery-sales/" target="_blank">LinkedIn</a></li>
            <li><a href="https://www.productreview.com.au/listings/second-life-battery-sales/write-review" target="_blank">Leave a review</a></li>
            <li><a href="https://slbatteries.com.au" target="_blank">Main store →</a></li>
          </ul>
        </div>
      </div>
      <div class="acknowledgement">
        <p>We acknowledge the Turrbal and Yuggera Peoples of Meanjin (Brisbane), and the Yugambeh People of the Logan region, as the Traditional Custodians of the lands on which we live and work.</p>
      </div>
      <div class="footer-bottom">
        <span>© 2026 Sustainable Lithium Cells Australia PTY LTD</span>
        <span>Brisbane, Queensland, Australia</span>
      </div>
    `;
  }
})();
