// $(document).ready(function () {
//     $('.s-type').click(function () {
//         $('.school-type').toggle()
//     })
// })
// $(document).ready(function () {
//     $('.l-type').click(function () {
//         $('.location-type').toggle()
//     })
// })


// navbar 
const menuIcon = document.querySelector('.menu-icon span');
const navLinks = document.querySelector('.nav-btn ul');
const closeBtn = document.querySelector('.close-btn');

// Toggle menu on click
menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

// Close menu on close button click
closeBtn.addEventListener('click', () => {
    navLinks.classList.remove('show');
});





// get consultation

// Get elements
const modal = document.getElementById('consultationModal');
const openModalBtn = document.querySelector('.get-consultation');
const closeModalBtn = document.getElementById('closeBtn');
const bookConsultationBtn = document.getElementById('bookConsultation');

// Open modal on button click
openModalBtn.addEventListener('click', function () {
    modal.style.display = 'flex';
});

// Close modal on close button click
closeModalBtn.addEventListener('click', function () {
    modal.style.display = 'none';
});

// Close modal if user clicks outside the modal content
window.addEventListener('click', function (e) {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
});






// main page  to select school and location
// Close modal on "Book Consultation" button click
bookConsultationBtn.addEventListener('click', function () {
    alert('Consultation Booked!'); // You can replace this with form submission logic.
    modal.style.display = 'none';
});

// Event listeners for "School Type" and "Location" clicks
document.querySelector('.s-type').addEventListener('click', function () {
    toggleDropdown('school-type');
});

document.querySelector('.l-type').addEventListener('click', function () {
    toggleDropdown('location-type');
});

function toggleDropdown(type) {
    const schoolTypeBox = document.querySelector('.school-type');
    const locationTypeBox = document.querySelector('.location-type');

    if (type === 'school-type') {
        // Toggle school-type dropdown visibility
        if (schoolTypeBox.style.display === 'none' || schoolTypeBox.style.display === '') {
            schoolTypeBox.style.display = 'block'; // Show it
            locationTypeBox.style.display = 'none'; // Hide location-type dropdown
        } else {
            schoolTypeBox.style.display = 'none'; // Hide it if it's already visible
        }
    }

    if (type === 'location-type') {
        // Toggle location-type dropdown visibility
        if (locationTypeBox.style.display === 'none' || locationTypeBox.style.display === '') {
            locationTypeBox.style.display = 'block'; // Show it
            schoolTypeBox.style.display = 'none'; // Hide school-type dropdown
        } else {
            locationTypeBox.style.display = 'none'; // Hide it if it's already visible
        }
    }
}













// for testimonials slider 
let currentSlideIndex = 0;
showSlides(currentSlideIndex);

function showSlides(n) {
    const slides = document.getElementsByClassName("slide");
    const dots = document.getElementsByClassName("dot");

    if (n >= slides.length) {
        currentSlideIndex = 0;
    } else if (n < 0) {
        currentSlideIndex = slides.length - 1;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        dots[i].classList.remove("active");
    }

    slides[currentSlideIndex].style.display = "flex";
    dots[currentSlideIndex].classList.add("active");
}

function moveSlide(n) {
    showSlides((currentSlideIndex += n));
}

function currentSlide(n) {
    showSlides((currentSlideIndex = n - 1));
}









// read more
function toggleReadMore() {
    var moreContent = document.getElementById("moreContent");
    var btn = document.querySelector(".read-more-btn");

    if (moreContent.classList.contains("hidden")) {
        moreContent.classList.remove("hidden");
        btn.innerText = "Read Less";
    } else {
        moreContent.classList.add("hidden");
        btn.innerText = "Read More";
    }
}