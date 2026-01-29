// Select all boxes
const boxes = document.querySelectorAll('.box');

// Add click event to each box
boxes.forEach(box => {
    box.addEventListener('click', () => {

        // Close all other boxes
        boxes.forEach(item => {
            if (item !== box) {
                item.classList.remove('active');
            }
        });

        // Toggle active class on clicked box
        box.classList.toggle('active');
    });
});

