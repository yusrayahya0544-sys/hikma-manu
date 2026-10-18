
function filterMenu(category) {
    const menuItems = document.querySelectorAll('.menu-card');
    const filterButtons = document.querySelectorAll('.filter-btn');

    // Remove 'active' class from all buttons
    filterButtons.forEach(btn => btn.classList.remove('active'));
    
    // Add 'active' class to the clicked button
    if (event && event.target) {
        event.target.classList.add('active');
    }

    // Show or hide items based on category
    menuItems.forEach(item => {
        if (category === 'all' || item.getAttribute('data-category') === category) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });

    // Clear search bar
    document.getElementById('searchInput').value = '';
}

// =========================================
// 2. SEARCH BAR
// =========================================
function searchMenu() {
    const searchValue = document.getElementById('searchInput').value.toLowerCase();
    const menuItems = document.querySelectorAll('.menu-card');

    menuItems.forEach(item => {
        const foodName = item.querySelector('h3').textContent.toLowerCase();
        if (foodName.includes(searchValue)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// =========================================
// 3. POPUP MODAL
// =========================================
function openModal(imageSrc, foodName, foodPrice) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImg');
    const modalCaption = document.getElementById('modalCaption');
    const modalPrice = document.getElementById('modalPrice');

    modal.style.display = 'flex';
    modalImg.src = imageSrc;
    modalCaption.textContent = foodName;
    modalPrice.textContent = foodPrice;
}

function closeModal() {
    document.getElementById('imageModal').style.display = 'none';
}

window.onclick = function(event) {
    const modal = document.getElementById('imageModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// =========================================
// 4. BACK TO TOP BUTTON
// =========================================
window.onscroll = function() {
    const backToTopBtn = document.getElementById('backToTop');
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        backToTopBtn.style.display = 'block';
    } else {
        backToTopBtn.style.display = 'none';
    }
};

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}