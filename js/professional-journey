/* ============================================================
   PROFESSIONAL JOURNEY — JavaScript
   Handles: reading progress, sticky timeline highlighting,
   scroll-reveal, mobile menu passthrough, theme passthrough
   ============================================================ */

(function () {
    'use strict';

    /* ─────────────────────────────────────────
       READING PROGRESS BAR
    ───────────────────────────────────────── */
    const readingBar = document.getElementById('reading-progress');

    function updateReadingProgress() {
        if (!readingBar) return;
        const scrollTop  = window.scrollY;
        const docHeight  = document.documentElement.scrollHeight - window.innerHeight;
        const progress   = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        readingBar.style.width = progress + '%';
    }

    /* ─────────────────────────────────────────
       SCROLL-TO-TOP BUTTON  (reuse existing id)
    ───────────────────────────────────────── */
    const topBtn = document.getElementById('topBtn');

    function handleTopBtn() {
        if (!topBtn) return;
        topBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
    }

    if (topBtn) {
        topBtn.addEventListener('click', function () {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    /* ─────────────────────────────────────────
       NAV SCROLL CLASS
    ───────────────────────────────────────── */
    const nav = document.querySelector('nav');

    function handleNavScroll() {
        if (!nav) return;
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    }

    /* ─────────────────────────────────────────
       STICKY TIMELINE ACTIVE STATE
       Highlights the sidebar item whose chapter
       is currently in the viewport.
    ───────────────────────────────────────── */
    const tlItems   = document.querySelectorAll('.pj-tl-item');
    const chapters  = document.querySelectorAll('.pj-chapter');

    function updateActiveChapter() {
        if (!chapters.length || !tlItems.length) return;

        const scrollMid = window.scrollY + window.innerHeight * 0.45;
        let   activeId  = null;

        chapters.forEach(function (ch) {
            if (ch.offsetTop <= scrollMid) {
                activeId = ch.id;
            }
        });

        tlItems.forEach(function (item) {
            item.classList.toggle('active', item.dataset.target === activeId);
        });
    }

    /* Timeline item click → smooth scroll to chapter */
    tlItems.forEach(function (item) {
        item.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId  = item.dataset.target;
            const targetEl  = document.getElementById(targetId);
            if (!targetEl) return;

            const navH = nav ? nav.offsetHeight : 80;
            const top  = targetEl.getBoundingClientRect().top + window.scrollY - navH - 16;
            window.scrollTo({ top: top, behavior: 'smooth' });
        });
    });

    /* ─────────────────────────────────────────
       SCROLL REVEAL
       Animates elements with .pj-reveal,
       .pj-reveal-left, .pj-reveal-stagger
    ───────────────────────────────────────── */
    const revealEls = document.querySelectorAll(
        '.pj-reveal, .pj-reveal-left, .pj-reveal-stagger'
    );

    function revealElements() {
        const viewBottom = window.scrollY + window.innerHeight;

        revealEls.forEach(function (el) {
            if (el.classList.contains('pj-visible')) return;
            const elTop = el.getBoundingClientRect().top + window.scrollY;
            if (elTop < viewBottom - 80) {
                el.classList.add('pj-visible');
            }
        });
    }

    /* ─────────────────────────────────────────
       MOBILE MENU (reuses existing nav toggle)
    ───────────────────────────────────────── */
    const menuToggle = document.getElementById('menuToggle');
    const navMenu    = document.getElementById('navMenu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function () {
            navMenu.classList.toggle('active');
            menuToggle.setAttribute(
                'aria-expanded',
                navMenu.classList.contains('active') ? 'true' : 'false'
            );
        });

        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }

    /* ─────────────────────────────────────────
       CREATIVE DROPDOWN (reuses existing logic)
    ───────────────────────────────────────── */
    const creativeBtn  = document.getElementById('creativeBtn');
    const creativeMenu = document.getElementById('creativeMenu');

    if (creativeBtn && creativeMenu) {
        creativeBtn.addEventListener('click', function (e) {
            e.stopPropagation();
            creativeMenu.classList.toggle('show');
            creativeBtn.classList.toggle('active');
            creativeBtn.setAttribute(
                'aria-expanded',
                creativeMenu.classList.contains('show') ? 'true' : 'false'
            );
        });

        document.addEventListener('click', function () {
            creativeMenu.classList.remove('show');
            creativeBtn.classList.remove('active');
            creativeBtn.setAttribute('aria-expanded', 'false');
        });

        creativeMenu.addEventListener('click', function (e) {
            e.stopPropagation();
        });
    }

    /* ─────────────────────────────────────────
       UNIFIED SCROLL HANDLER
    ───────────────────────────────────────── */
    function onScroll() {
        updateReadingProgress();
        handleTopBtn();
        handleNavScroll();
        updateActiveChapter();
        revealElements();
    }

    window.addEventListener('scroll', onScroll, { passive: true });

    /* Run once on load */
    onScroll();
    revealElements();

})();
