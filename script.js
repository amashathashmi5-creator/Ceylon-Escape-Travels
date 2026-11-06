/**
 * Ceylon Escape Travels - Premium Travel Agency JavaScript
 * Vanilla JavaScript (No frameworks or external libraries)
 * Features: Mobile Navigation, Glassmorphism Scroll Header, Destination Links,
 * Package Filtering, Lightbox Gallery, Travel Inquiry Form Validation,
 * Dynamic WhatsApp Link Generators, and Image Fallbacks.
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // --- Configuration ---
  const WHATSAPP_NUMBER = '94771234567'; // International format without '+'

  // ==========================================================================
  // 1. Mobile Menu & Navigation Toggle
  // ==========================================================================
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');
  const navBackdrop = document.getElementById('navBackdrop');
  const navLinks = document.querySelectorAll('.nav-link');
  const siteHeader = document.getElementById('siteHeader');

  function openMobileMenu() {
    mobileToggle.classList.add('active');
    mobileToggle.setAttribute('aria-expanded', 'true');
    navMenu.classList.add('open');
    navBackdrop.classList.add('active');
    document.body.classList.add('no-scroll');
  }

  function closeMobileMenu() {
    mobileToggle.classList.remove('active');
    mobileToggle.setAttribute('aria-expanded', 'false');
    navMenu.classList.remove('open');
    navBackdrop.classList.remove('active');
    document.body.classList.remove('no-scroll');
  }

  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.contains('open');
      isOpen ? closeMobileMenu() : openMobileMenu();
    });
  }

  if (navBackdrop) {
    navBackdrop.addEventListener('click', closeMobileMenu);
  }

  // Close mobile menu when clicking any nav link
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeMobileMenu();
    });
  });

  // Close mobile menu on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('open')) {
      closeMobileMenu();
    }
  });

  // ==========================================================================
  // 2. Header Scroll Effect & Active Section Spy
  // ==========================================================================
  const handleScroll = () => {
    if (window.scrollY > 40) {
      siteHeader.classList.add('scrolled');
    } else {
      siteHeader.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Initial check

  // ScrollSpy using IntersectionObserver
  const sections = document.querySelectorAll('section[id]');
  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -70% 0px',
    threshold: 0
  };

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => sectionObserver.observe(section));

  // ==========================================================================
  // 3. Smooth Scroll for Anchor Links (with Offset Support)
  // ==========================================================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '') return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = targetEl.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // ==========================================================================
  // 4. Hero Quick Trip Search Bar Interaction
  // ==========================================================================
  const quickSearchForm = document.getElementById('quickSearchForm');
  if (quickSearchForm) {
    quickSearchForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const destSelect = document.getElementById('quickDest');
      const styleSelect = document.getElementById('quickStyle');

      const chosenDest = destSelect ? destSelect.value : '';
      const chosenStyle = styleSelect ? styleSelect.value : '';

      // Auto-filter tour packages if matching category found
      if (chosenStyle && chosenStyle !== 'all') {
        const targetTab = document.querySelector(`.filter-btn[data-filter="${chosenStyle}"]`);
        if (targetTab) {
          targetTab.click();
        }
      }

      // Pre-select in inquiry form if destination chosen
      const inquiryDest = document.getElementById('inquiryDestination');
      if (inquiryDest && chosenDest && chosenDest !== 'all') {
        inquiryDest.value = chosenDest;
      }

      // Smooth scroll to packages section
      const packagesSection = document.getElementById('packages');
      if (packagesSection) {
        const headerOffset = 80;
        const elementPosition = packagesSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  }

  // ==========================================================================
  // 5. Destination Link Actions (Quick Inquire / Filter)
  // ==========================================================================
  document.querySelectorAll('.dest-inquire-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      const destName = this.getAttribute('data-destination');
      const inquiryDest = document.getElementById('inquiryDestination');
      if (inquiryDest && destName) {
        inquiryDest.value = destName;
      }

      // Scroll to inquiry section
      const inquirySection = document.getElementById('inquiry');
      if (inquirySection) {
        const headerOffset = 80;
        const offsetPosition = inquirySection.getBoundingClientRect().top + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });

        // Flash inquiry field
        setTimeout(() => {
          inquiryDest.focus();
          inquiryDest.classList.add('pulse-focus');
          setTimeout(() => inquiryDest.classList.remove('pulse-focus'), 1000);
        }, 600);
      }
    });
  });

  // ==========================================================================
  // 6. Featured Tour Packages Filter
  // ==========================================================================
  const filterBtns = document.querySelectorAll('.package-filters .filter-btn');
  const packageCards = document.querySelectorAll('.package-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      filterBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');

      const filterVal = this.getAttribute('data-filter');

      packageCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (filterVal === 'all' || cardCategory === filterVal) {
          card.style.display = 'flex';
          card.style.animation = 'fadeInUp 0.4s ease forwards';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Package Card "Inquire This Package" action
  document.querySelectorAll('.btn-inquire-pkg').forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      const pkgName = this.getAttribute('data-package');
      const inquiryDest = document.getElementById('inquiryDestination');
      if (inquiryDest && pkgName) {
        inquiryDest.value = pkgName;
      }

      const inquirySection = document.getElementById('inquiry');
      if (inquirySection) {
        const offsetPosition = inquirySection.getBoundingClientRect().top + window.pageYOffset - 80;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });

        setTimeout(() => {
          inquiryDest.focus();
        }, 500);
      }
    });
  });

  // Package Direct WhatsApp Inquiry
  document.querySelectorAll('.btn-pkg-whatsapp').forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      const pkgTitle = this.getAttribute('data-package-title') || 'Sri Lanka Tour Package';
      const duration = this.getAttribute('data-duration') || '';
      const text = `Hello Ceylon Escape Travels! 👋%0A%0AI am interested in booking the "${pkgTitle}" (${duration}).%0APlease let me know available dates, customized itinerary options, and current pricing. Thank you!`;
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
    });
  });

  // ==========================================================================
  // 7. Travel Gallery Filter & Interactive Lightbox
  // ==========================================================================
  const galleryFilterBtns = document.querySelectorAll('.gallery-filter .filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');

  // Filter functionality
  galleryFilterBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      galleryFilterBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');

      const category = this.getAttribute('data-gallery-filter');

      galleryItems.forEach(item => {
        const itemCat = item.getAttribute('data-category');
        if (category === 'all' || itemCat === category) {
          item.style.display = 'block';
          item.style.animation = 'fadeIn 0.3s ease forwards';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // Lightbox Modal
  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const lightboxClose = document.getElementById('lightboxClose');
  const lightboxPrev = document.getElementById('lightboxPrev');
  const lightboxNext = document.getElementById('lightboxNext');

  let currentGalleryIndex = 0;
  let visibleGalleryItems = [];

  function updateVisibleGalleryItems() {
    visibleGalleryItems = Array.from(galleryItems).filter(item => item.style.display !== 'none');
  }

  function showLightbox(index) {
    updateVisibleGalleryItems();
    if (visibleGalleryItems.length === 0) return;

    if (index < 0) index = visibleGalleryItems.length - 1;
    if (index >= visibleGalleryItems.length) index = 0;
    currentGalleryIndex = index;

    const currentItem = visibleGalleryItems[currentGalleryIndex];
    const imgEl = currentItem.querySelector('img');
    const captionEl = currentItem.querySelector('.gallery-caption');

    lightboxImg.src = imgEl.src;
    lightboxImg.alt = imgEl.alt;
    lightboxCaption.textContent = `${captionEl ? captionEl.textContent : imgEl.alt} (${currentGalleryIndex + 1}/${visibleGalleryItems.length})`;

    lightboxModal.classList.add('active');
    document.body.classList.add('no-scroll');
  }

  function closeLightbox() {
    lightboxModal.classList.remove('active');
    document.body.classList.remove('no-scroll');
  }

  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      updateVisibleGalleryItems();
      const clickedIndex = visibleGalleryItems.indexOf(item);
      showLightbox(clickedIndex >= 0 ? clickedIndex : 0);
    });
  });

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxPrev) lightboxPrev.addEventListener('click', () => showLightbox(currentGalleryIndex - 1));
  if (lightboxNext) lightboxNext.addEventListener('click', () => showLightbox(currentGalleryIndex + 1));

  // Close lightbox clicking backdrop
  if (lightboxModal) {
    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal) {
        closeLightbox();
      }
    });
  }

  // Keyboard navigation for Lightbox
  document.addEventListener('keydown', (e) => {
    if (!lightboxModal.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') showLightbox(currentGalleryIndex - 1);
    if (e.key === 'ArrowRight') showLightbox(currentGalleryIndex + 1);
  });

  // ==========================================================================
  // 8. Travel Inquiry Form Validation & Success State
  // ==========================================================================
  const inquiryForm = document.getElementById('inquiryForm');
  const inquirySuccessMessage = document.getElementById('inquirySuccessMessage');
  const resetInquiryBtn = document.getElementById('resetInquiryBtn');
  const sendWhatsAppSummaryBtn = document.getElementById('sendWhatsAppSummaryBtn');

  // Input elements
  const inputFullName = document.getElementById('fullName');
  const inputEmail = document.getElementById('emailAddress');
  const inputPhone = document.getElementById('phoneNumber');
  const selectDestination = document.getElementById('inquiryDestination');
  const inputTravelDate = document.getElementById('travelDate');
  const selectTravelers = document.getElementById('travelersCount');
  const selectTravelStyle = document.getElementById('travelStyle');
  const inputNotes = document.getElementById('specialRequests');

  // Helper validation functions
  function setError(input, message) {
    const formGroup = input.closest('.form-group');
    if (!formGroup) return;
    formGroup.classList.add('has-error');
    input.classList.add('error');
    let errorEl = formGroup.querySelector('.error-message');
    if (!errorEl) {
      errorEl = document.createElement('span');
      errorEl.className = 'error-message';
      formGroup.appendChild(errorEl);
    }
    errorEl.textContent = message;
    errorEl.style.display = 'block';
  }

  function clearError(input) {
    const formGroup = input.closest('.form-group');
    if (!formGroup) return;
    formGroup.classList.remove('has-error');
    input.classList.remove('error');
    const errorEl = formGroup.querySelector('.error-message');
    if (errorEl) {
      errorEl.style.display = 'none';
      errorEl.textContent = '';
    }
  }

  function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).trim().toLowerCase());
  }

  // Real-time error clearing
  [inputFullName, inputEmail, inputPhone, selectDestination, inputTravelDate].forEach(field => {
    if (field) {
      field.addEventListener('input', () => clearError(field));
      field.addEventListener('change', () => clearError(field));
    }
  });

  // Data storage for WhatsApp handoff
  let latestInquiryData = null;

  if (inquiryForm) {
    inquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let isValid = true;

      // 1. Validate Full Name
      const nameVal = inputFullName.value.trim();
      if (!nameVal) {
        setError(inputFullName, 'Please enter your full name');
        isValid = false;
      } else if (nameVal.length < 2) {
        setError(inputFullName, 'Full name must be at least 2 characters');
        isValid = false;
      } else {
        clearError(inputFullName);
      }

      // 2. Validate Email
      const emailVal = inputEmail.value.trim();
      if (!emailVal) {
        setError(inputEmail, 'Please enter your email address');
        isValid = false;
      } else if (!isValidEmail(emailVal)) {
        setError(inputEmail, 'Please provide a valid email address (e.g., name@domain.com)');
        isValid = false;
      } else {
        clearError(inputEmail);
      }

      // 3. Validate Phone / WhatsApp
      const phoneVal = inputPhone.value.trim();
      if (!phoneVal) {
        setError(inputPhone, 'Please provide your WhatsApp or phone number');
        isValid = false;
      } else if (phoneVal.replace(/\D/g, '').length < 7) {
        setError(inputPhone, 'Please enter a valid phone number with country code');
        isValid = false;
      } else {
        clearError(inputPhone);
      }

      // 4. Validate Destination / Package Selection
      const destVal = selectDestination.value;
      if (!destVal) {
        setError(selectDestination, 'Please select a destination or package');
        isValid = false;
      } else {
        clearError(selectDestination);
      }

      // 5. Validate Travel Date
      const dateVal = inputTravelDate.value;
      if (!dateVal) {
        setError(inputTravelDate, 'Please select your target travel dates or month');
        isValid = false;
      } else {
        clearError(inputTravelDate);
      }

      if (!isValid) {
        // Focus first invalid input
        const firstError = inquiryForm.querySelector('.form-control.error');
        if (firstError) firstError.focus();
        return;
      }

      // Generate Reference Code (e.g. CE-84920)
      const refCode = 'CE-' + Math.floor(10000 + Math.random() * 90000);

      // Save inquiry data
      latestInquiryData = {
        ref: refCode,
        name: nameVal,
        email: emailVal,
        phone: phoneVal,
        destination: selectDestination.options[selectDestination.selectedIndex].text,
        date: dateVal,
        travelers: selectTravelers ? selectTravelers.options[selectTravelers.selectedIndex].text : '2 Adults',
        style: selectTravelStyle ? selectTravelStyle.options[selectTravelStyle.selectedIndex].text : 'Luxury Boutique',
        notes: inputNotes ? inputNotes.value.trim() : ''
      };

      // Populate Success Summary
      document.getElementById('resRefCode').textContent = latestInquiryData.ref;
      document.getElementById('resGuestName').textContent = latestInquiryData.name;
      document.getElementById('resDestination').textContent = latestInquiryData.destination;
      document.getElementById('resDate').textContent = latestInquiryData.date;
      document.getElementById('resTravelers').textContent = latestInquiryData.travelers;

      // Switch view: hide form, show success
      inquiryForm.style.display = 'none';
      inquirySuccessMessage.classList.add('active');

      // Scroll smoothly into view
      const paneTop = document.querySelector('.inquiry-form-pane').getBoundingClientRect().top + window.pageYOffset - 100;
      window.scrollTo({ top: paneTop, behavior: 'smooth' });
    });
  }

  // Send Summary to WhatsApp Button
  if (sendWhatsAppSummaryBtn) {
    sendWhatsAppSummaryBtn.addEventListener('click', () => {
      if (!latestInquiryData) return;

      const message = `*CEYLON ESCAPE TRAVELS - TRIP INQUIRY*%0A` +
        `----------------------------------------%0A` +
        `*Reference:* ${latestInquiryData.ref}%0A` +
        `*Guest:* ${encodeURIComponent(latestInquiryData.name)}%0A` +
        `*Email:* ${encodeURIComponent(latestInquiryData.email)}%0A` +
        `*Phone:* ${encodeURIComponent(latestInquiryData.phone)}%0A` +
        `*Tour / Dest:* ${encodeURIComponent(latestInquiryData.destination)}%0A` +
        `*Travel Dates:* ${encodeURIComponent(latestInquiryData.date)}%0A` +
        `*Travelers:* ${encodeURIComponent(latestInquiryData.travelers)}%0A` +
        `*Style:* ${encodeURIComponent(latestInquiryData.style)}%0A` +
        (latestInquiryData.notes ? `*Notes:* ${encodeURIComponent(latestInquiryData.notes)}%0A` : '') +
        `----------------------------------------%0A` +
        `Hello Ceylon Escape team, please review my trip inquiry and advise on itinerary proposals and quote. Thank you!`;

      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
    });
  }

  // Reset Inquiry Form
  if (resetInquiryBtn) {
    resetInquiryBtn.addEventListener('click', () => {
      inquiryForm.reset();
      inquirySuccessMessage.classList.remove('active');
      inquiryForm.style.display = 'block';
      latestInquiryData = null;
    });
  }

  // ==========================================================================
  // 9. Newsletter Subscription Mock
  // ==========================================================================
  const newsletterForm = document.getElementById('newsletterForm');
  const newsletterInput = document.getElementById('newsletterEmail');
  const newsletterFeedback = document.getElementById('newsletterFeedback');

  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const val = newsletterInput.value.trim();
      if (!isValidEmail(val)) {
        newsletterFeedback.textContent = 'Please provide a valid email address.';
        newsletterFeedback.style.color = '#f87171';
        newsletterFeedback.classList.add('active');
        return;
      }

      newsletterFeedback.textContent = '✓ Subscribed! Welcome to our Ceylon Travel Club.';
      newsletterFeedback.style.color = '#2dd4bf';
      newsletterFeedback.classList.add('active');
      newsletterInput.value = '';

      setTimeout(() => {
        newsletterFeedback.classList.remove('active');
      }, 5000);
    });
  }

  // ==========================================================================
  // 10. Scroll To Top Button
  // ==========================================================================
  const scrollTopBtn = document.getElementById('scrollTopBtn');
  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // ==========================================================================
  // 11. Image Error Fallback Handler
  // ==========================================================================
  // In case of any local or network image load issue, provide a graceful fallback
  const fallbackSVG = "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22600%22%20height%3D%22400%22%20viewBox%3D%220%200%20600%20400%22%3E%3Crect%20fill%3D%22%230c2b44%22%20width%3D%22600%22%20height%3D%22400%22%2F%3E%3Cpath%20d%3D%22M0%20280%20L180%20180%20L320%20270%20L440%20160%20L600%20280%20L600%20400%20L0%20400%20Z%22%20fill%3D%22%230d9488%22%20opacity%3D%220.5%22%2F%3E%3Ccircle%20cx%3D%22450%22%20cy%3D%22120%22%20r%3D%2240%22%20fill%3D%22%23facc15%22%20opacity%3D%220.8%22%2F%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2285%25%22%20dominant-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20font-family%3D%22sans-serif%22%20font-size%3D%2220%22%20font-weight%3D%22bold%22%20fill%3D%22%23ffffff%22%3ECeylon%20Escape%20Travels%3C%2Ftext%3E%3C%2Fsvg%3E";

  document.querySelectorAll('img').forEach(img => {
    img.addEventListener('error', function() {
      if (this.src !== fallbackSVG) {
        this.src = fallbackSVG;
      }
    });
  });

});
