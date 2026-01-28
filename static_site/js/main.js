/**
 * Deaxautt Static Website - Main JavaScript
 * Using jQuery for DOM manipulation and interactivity
 */

$(document).ready(function() {
  
  // ========================================
  // Mobile Menu Toggle
  // ========================================
  $('#mobileMenuBtn').on('click', function() {
    $('#mobileMenu').toggleClass('open');
    const icon = $(this).find('i');
    if ($('#mobileMenu').hasClass('open')) {
      icon.removeClass('fa-bars').addClass('fa-times');
    } else {
      icon.removeClass('fa-times').addClass('fa-bars');
    }
  });

  // Close mobile menu when clicking on a link
  $('.mobile-nav-link').on('click', function() {
    $('#mobileMenu').removeClass('open');
    $('#mobileMenuBtn').find('i').removeClass('fa-times').addClass('fa-bars');
  });

  // ========================================
  // Services Dropdown Menu
  // ========================================
  let dropdownTimeout;
  
  // Desktop dropdown - hover behavior
  $('.dropdown')
    .on('mouseenter', function() {
      clearTimeout(dropdownTimeout);
      $(this).addClass('open');
    })
    .on('mouseleave', function() {
      const dropdown = $(this);
      dropdownTimeout = setTimeout(function() {
        dropdown.removeClass('open');
      }, 150);
    });

  // Desktop dropdown - click behavior (for touch devices)
  $('.dropdown-trigger').on('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    $(this).closest('.dropdown').toggleClass('open');
  });

  // Close dropdown when clicking outside
  $(document).on('click', function(e) {
    if (!$(e.target).closest('.dropdown').length) {
      $('.dropdown').removeClass('open');
    }
  });

  // ========================================
  // Dark Mode Toggle
  // ========================================
  function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      $('html').addClass('dark');
      updateThemeIcon(true);
    }
  }

  function updateThemeIcon(isDark) {
    const icon = $('#themeToggle i');
    if (isDark) {
      icon.removeClass('fa-moon').addClass('fa-sun');
    } else {
      icon.removeClass('fa-sun').addClass('fa-moon');
    }
  }

  $('#themeToggle').on('click', function() {
    const isDark = $('html').toggleClass('dark').hasClass('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    updateThemeIcon(isDark);
  });

  // Initialize theme on page load
  initTheme();

  // ========================================
  // FAQ Accordion
  // ========================================
  $('.accordion-trigger').on('click', function() {
    const item = $(this).closest('.accordion-item');
    const wasOpen = item.hasClass('open');
    
    // Close all other items
    $('.accordion-item').removeClass('open');
    
    // Toggle current item
    if (!wasOpen) {
      item.addClass('open');
    }
  });

  // ========================================
  // Blog Category Filter
  // ========================================
  $('.category-btn').on('click', function() {
    const category = $(this).data('category');
    
    // Update active button
    $('.category-btn').removeClass('btn-primary').addClass('btn-outline');
    $(this).removeClass('btn-outline').addClass('btn-primary');
    
    // Filter blog posts
    if (category === 'all') {
      $('.blog-card').show();
    } else {
      $('.blog-card').hide();
      $('.blog-card[data-category="' + category + '"]').show();
    }
  });

  // ========================================
  // Smooth Scroll for Anchor Links
  // ========================================
  $('a[href^="#"]').on('click', function(e) {
    const target = $(this.getAttribute('href'));
    if (target.length) {
      e.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top - 80
      }, 500);
    }
  });

  // ========================================
  // Form Submission (Contact Page)
  // ========================================
  $('#contactForm').on('submit', function(e) {
    e.preventDefault();
    
    const formData = {
      name: $('#name').val(),
      email: $('#email').val(),
      phone: $('#phone').val(),
      company: $('#company').val(),
      service: $('#service').val(),
      budget: $('#budget').val(),
      message: $('#message').val()
    };

    // Create mailto link
    const subject = encodeURIComponent('Contact Form: ' + formData.service);
    const body = encodeURIComponent(
      'Name: ' + formData.name + '\n' +
      'Email: ' + formData.email + '\n' +
      'Phone: ' + formData.phone + '\n' +
      'Company: ' + (formData.company || 'N/A') + '\n' +
      'Service: ' + formData.service + '\n' +
      'Budget: ' + (formData.budget || 'N/A') + '\n\n' +
      'Message:\n' + formData.message
    );

    window.location.href = 'mailto:sales@deaxautt.com?subject=' + subject + '&body=' + body;
    
    // Show success message
    alert('Email client opened! Please send the email from your email client.');
    
    // Reset form
    this.reset();
  });

  // ========================================
  // Scroll-based Header Shadow
  // ========================================
  $(window).on('scroll', function() {
    if ($(window).scrollTop() > 10) {
      $('.header').css('box-shadow', '0 1px 3px 0 rgb(0 0 0 / 0.1)');
    } else {
      $('.header').css('box-shadow', 'none');
    }
  });

  // ========================================
  // Animate Elements on Scroll
  // ========================================
  function animateOnScroll() {
    $('.animate-on-scroll').each(function() {
      const elementTop = $(this).offset().top;
      const elementBottom = elementTop + $(this).outerHeight();
      const viewportTop = $(window).scrollTop();
      const viewportBottom = viewportTop + $(window).height();
      
      if (elementBottom > viewportTop && elementTop < viewportBottom) {
        $(this).addClass('animate-fade-in');
      }
    });
  }

  $(window).on('scroll', animateOnScroll);
  animateOnScroll(); // Run on page load

  // ========================================
  // Current Year in Footer
  // ========================================
  $('#currentYear').text(new Date().getFullYear());

});
