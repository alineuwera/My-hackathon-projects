let index = 0;
const testimonials = document.querySelectorAll('.testimonial');

function showTestimonial() {
    testimonials.forEach(testimonial => testimonial.style.display = 'none');
    index = (index + 1) % testimonials.length;
    testimonials[index].style.display = 'block';
}

// Show the first testimonial initially
showTestimonial();

// Automatically switch testimonials every 3 seconds
setInterval(showTestimonial, 3000);