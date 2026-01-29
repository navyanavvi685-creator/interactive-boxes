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

// Handle color selection
const colorOptions = document.querySelectorAll('.color');
colorOptions.forEach(color => {
    color.addEventListener('click', (e) => {
        e.stopPropagation();

        const parent = color.parentElement;
        const colors = parent.querySelectorAll('.color');

        colors.forEach(c => c.classList.remove('active'));
        color.classList.add('active');
    });
});

// Handle size selection
const sizeButtons = document.querySelectorAll('.sizes button');
sizeButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.stopPropagation();

        const parent = button.parentElement;
        const buttons = parent.querySelectorAll('button');

        buttons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    });
});

const cartButtons = document.querySelectorAll('.add-to-cart-btn');

cartButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.stopPropagation();
        alert('Item added to cart!');
    });
});
