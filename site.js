/* =========================================================
   HANNAH CLAREECE — PORTFOLIO INTERACTIONS
   ========================================================= */


/* ---------- ACTIVE NAV ---------- */

(function () {

  const currentPage =
    location.pathname.replace(/\/$/, '') || '/';

  document
    .querySelectorAll('.sitebar nav a')
    .forEach(link => {

      const href =
        link.getAttribute('href').replace(/\/$/, '') || '/';

      if (href === currentPage) {
        link.classList.add('active');
      }

    });

})();



/* ---------- SCROLL REVEAL ---------- */

(function () {

  const elements =
    document.querySelectorAll('.reveal');

  if (!elements.length) return;

  const observer =
    new IntersectionObserver(
      entries => {

        entries.forEach(entry => {

          if (entry.isIntersecting) {

            entry.target.classList.add('in');

            observer.unobserve(entry.target);

          }

        });

      },
      {
        threshold: 0.15
      }
    );


  elements.forEach(element => {

    observer.observe(element);

  });

})();



/* ---------- PAGE TRANSITIONS ---------- */

(function () {

  const veil =
    document.getElementById('page-veil');

  if (!veil) return;


  document
    .querySelectorAll('a[href]')
    .forEach(link => {

      const href =
        link.getAttribute('href');

      if (
        !href ||
        href.startsWith('http') ||
        href.startsWith('#') ||
        href.startsWith('mailto:') ||
        href.startsWith('tel:')
      ) {
        return;
      }


      link.addEventListener('click', event => {

        event.preventDefault();

        veil.classList.add('show');

        setTimeout(() => {

          window.location.href = href;

        }, 300);

      });

    });


  window.addEventListener('pageshow', () => {

    veil.classList.remove('show');

  });

})();



/* ---------- MAGNETIC BUTTONS ---------- */

(function () {

  const buttons =
    document.querySelectorAll('.magnetic');

  if (!buttons.length) return;


  buttons.forEach(button => {

    button.addEventListener('mousemove', event => {

      const rect =
        button.getBoundingClientRect();

      const x =
        event.clientX - rect.left - rect.width / 2;

      const y =
        event.clientY - rect.top - rect.height / 2;


      button.style.transform =
        `translate(${x * 0.08}px, ${y * 0.08}px)`;

    });


    button.addEventListener('mouseleave', () => {

      button.style.transform =
        'translate(0, 0)';

    });

  });

})();



/* ---------- PROJECT HOVER ---------- */

(function () {

  const cards =
    document.querySelectorAll('.project-card');

  cards.forEach(card => {

    card.addEventListener('mouseenter', () => {

      card.style.zIndex = '2';

    });


    card.addEventListener('mouseleave', () => {

      card.style.zIndex = '1';

    });

  });

})();



/* ---------- BACK TO TOP ---------- */

(function () {

  const button =
    document.getElementById('totop');

  if (!button) return;


  window.addEventListener('scroll', () => {

    button.classList.toggle(
      'show',
      window.scrollY > 600
    );

  });


  button.addEventListener('click', () => {

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

  });

})();
