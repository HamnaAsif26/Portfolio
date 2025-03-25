$(document).ready(() => {
    // Set current year in footer
    $("#currentYear").text(new Date().getFullYear())
  
    // Initialize animations on page load - simplified to ensure visibility
    $(".hero-badge, .hero-title, .hero-description, .hero-buttons, .hero-image-container, .scroll-indicator").addClass(
      "show",
    )
  
    // Backup animation with setTimeout
    setTimeout(() => {
      $(".hero-badge, .hero-title, .hero-description, .hero-buttons, .hero-image-container, .scroll-indicator").addClass(
        "animate-fade-in",
      )
    }, 100)
  
    // Animate scroll indicator
    setInterval(() => {
      $(".scroll-dot").animate(
        {
          top: "60%",
        },
        1000,
        function () {
          $(this).animate(
            {
              top: "20%",
            },
            1000,
          )
        },
      )
    }, 2000)
  
    // Navbar scroll effect
    $(window).scroll(function () {
      if ($(this).scrollTop() > 50) {
        $(".navbar").addClass("navbar-scrolled")
      } else {
        $(".navbar").removeClass("navbar-scrolled")
      }
  
      // Show/hide scroll to top button
      if ($(this).scrollTop() > 300) {
        $("#scrollToTop").addClass("active")
      } else {
        $("#scrollToTop").removeClass("active")
      }
  
      // Animate elements on scroll
      $(".fade-in, .slide-up, .slide-right, .slide-left").each(function () {
        var elementTop = $(this).offset().top
        var elementVisible = 150
        var windowHeight = $(window).height()
        var scrollTop = $(window).scrollTop()
  
        if (elementTop < windowHeight + scrollTop - elementVisible) {
          $(this).addClass("active")
        }
      })
  
      // Parallax effect for hero section
      var scrollTop = $(window).scrollTop()
      $(".parallax-hero-image").css({
        transform: "translateY(" + scrollTop * 0.1 + "px)",
      })
    })
  
    // Trigger scroll once to initialize animations
    $(window).trigger("scroll")
  
    // Smooth scrolling for anchor links
    $('a[href*="#"]')
      .not('[href="#"]')
      .not('[href="#0"]')
      .click(function (event) {
        if (
          location.pathname.replace(/^\//, "") === this.pathname.replace(/^\//, "") &&
          location.hostname === this.hostname
        ) {
          var target = $(this.hash)
          target = target.length ? target : $("[name=" + this.hash.slice(1) + "]")
          if (target.length) {
            event.preventDefault()
            $("html, body").animate(
              {
                scrollTop: target.offset().top - 70,
              },
              1000,
            )
  
            // Close mobile menu if open
            $(".navbar-collapse").collapse("hide")
          }
        }
      })
  
    // Scroll to top button
    $("#scrollToTop").click(() => {
      $("html, body").animate({ scrollTop: 0 }, 800)
      return false
    })
  
    // Form validation
    $("#contactForm").submit((event) => {
      event.preventDefault()
  
      let isValid = true
      const nameValue = $("#name").val()
      const emailValue = $("#email").val()
      const subjectValue = $("#subject").val()
      const messageValue = $("#message").val()
  
      // Simple validation
      if (nameValue === "") {
        $("#name").addClass("is-invalid")
        isValid = false
      } else {
        $("#name").removeClass("is-invalid")
      }
  
      if (emailValue === "" || !isValidEmail(emailValue)) {
        $("#email").addClass("is-invalid")
        isValid = false
      } else {
        $("#email").removeClass("is-invalid")
      }
  
      if (subjectValue === "") {
        $("#subject").addClass("is-invalid")
        isValid = false
      } else {
        $("#subject").removeClass("is-invalid")
      }
  
      if (messageValue === "") {
        $("#message").addClass("is-invalid")
        isValid = false
      } else {
        $("#message").removeClass("is-invalid")
      }
  
      if (isValid) {
        // Show success message
        $("#formSuccess").fadeIn()
  
        // Reset form
        $("#contactForm")[0].reset()
  
        // Hide success message after 3 seconds
        setTimeout(() => {
          $("#formSuccess").fadeOut()
        }, 3000)
      }
    })
  
    // Email validation helper
    function isValidEmail(email) {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      return regex.test(email)
    }
  
    // Form input focus effects
    $(".form-control")
      .focus(function () {
        $(this).parent().find("label").addClass("active")
      })
      .blur(function () {
        if ($(this).val() === "") {
          $(this).parent().find("label").removeClass("active")
        }
      })
  
    // Fix for textarea label
    $("textarea.form-control").parent().find("label").addClass("active")
  })
  
  