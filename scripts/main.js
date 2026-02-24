/* scripts/main.js - Global interactions for Valorant Web */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize AOS (Animate On Scroll)
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-out-cubic',
            once: true,
            offset: 50,
        });
    }

    // 2. Navigation Scroll Effect
    const nav = document.querySelector('.nav');
    if (nav) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
        });
    }

    // 3. Global Search Toggle
    const searchContainer = document.querySelector('.search-container');
    const searchBtn = document.querySelector('.search-btn');
    const searchInput = document.querySelector('.search-input');

    if (searchContainer && searchBtn && searchInput) {
        searchBtn.addEventListener('click', (e) => {
            e.preventDefault();
            searchContainer.classList.toggle('active');
            if (searchContainer.classList.contains('active')) {
                searchInput.focus();
            }
        });

        document.addEventListener('click', (e) => {
            if (!searchContainer.contains(e.target)) {
                searchContainer.classList.remove('active');
            }
        });

        searchInput.addEventListener('keyup', (e) => {
            if (e.key === 'Enter') {
                const term = searchInput.value.trim();
                if (term !== '') {
                    alert('Searching for: ' + term);
                    searchInput.value = '';
                    searchContainer.classList.remove('active');
                }
            }
        });
    }

    // 4. Maps Page Logic (Accordion)
    const mapPanels = document.querySelectorAll('.map-panel');
    if (mapPanels.length > 0) {
        mapPanels.forEach(panel => {
            panel.addEventListener('click', () => {
                mapPanels.forEach(p => p.classList.remove('active'));
                panel.classList.add('active');
            });
        });
    }

    // 5. FAQ Page Logic (Accordion)
    const faqItems = document.querySelectorAll('.faq-item');
    if (faqItems.length > 0) {
        faqItems.forEach(item => {
            const questionBtn = item.querySelector('.faq-question');
            const answer = item.querySelector('.faq-answer');

            questionBtn.addEventListener('click', () => {
                const isActive = item.classList.contains('active');

                faqItems.forEach(faqItem => {
                    faqItem.classList.remove('active');
                    faqItem.querySelector('.faq-answer').style.maxHeight = null;
                });

                if (!isActive) {
                    item.classList.add('active');
                    answer.style.maxHeight = answer.scrollHeight + "px";
                }
            });
        });
    }
});
