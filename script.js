// ==========================================
// 100 BOOKS DATA
// ==========================================

const books = [

    {
        id: 1,
        title: "HTML & CSS Complete Guide",
        author: "John Smith",
        category: "Programming",
        price: 399
    },
    {
        id: 2,
        title: "JavaScript for Beginners",
        author: "David Miller",
        category: "Programming",
        price: 499
    },
    {
        id: 3,
        title: "Learning Java",
        author: "James Gosling",
        category: "Programming",
        price: 599
    },
    {
        id: 4,
        title: "Python Programming",
        author: "Mark Lee",
        category: "Programming",
        price: 449
    },
    {
        id: 5,
        title: "C Programming",
        author: "Dennis Ritchie",
        category: "Programming",
        price: 349
    },
    {
        id: 6,
        title: "C++ Programming",
        author: "Bjarne Stroustrup",
        category: "Programming",
        price: 499
    },
    {
        id: 7,
        title: "React JS Guide",
        author: "Robert Brown",
        category: "Programming",
        price: 549
    },
    {
        id: 8,
        title: "Node JS Complete",
        author: "Alex Martin",
        category: "Programming",
        price: 599
    },
    {
        id: 9,
        title: "PHP Development",
        author: "Peter Wilson",
        category: "Programming",
        price: 399
    },
    {
        id: 10,
        title: "SQL Database Guide",
        author: "Tom Anderson",
        category: "Programming",
        price: 449
    },

    {
        id: 11,
        title: "The Great Adventure",
        author: "William Brown",
        category: "Fiction",
        price: 299
    },
    {
        id: 12,
        title: "Mystery of the Night",
        author: "Emily Stone",
        category: "Fiction",
        price: 349
    },
    {
        id: 13,
        title: "The Lost World",
        author: "Arthur King",
        category: "Fiction",
        price: 299
    },
    {
        id: 14,
        title: "Dreams and Reality",
        author: "Anna White",
        category: "Fiction",
        price: 249
    },
    {
        id: 15,
        title: "The Silent Forest",
        author: "David Clark",
        category: "Fiction",
        price: 329
    },
    {
        id: 16,
        title: "Journey to Tomorrow",
        author: "Michael Young",
        category: "Fiction",
        price: 399
    },
    {
        id: 17,
        title: "Secret Island",
        author: "James Wilson",
        category: "Fiction",
        price: 299
    },
    {
        id: 18,
        title: "Moonlight Story",
        author: "Sarah Jones",
        category: "Fiction",
        price: 279
    },
    {
        id: 19,
        title: "The Last Kingdom",
        author: "Henry King",
        category: "Fiction",
        price: 449
    },
    {
        id: 20,
        title: "Hidden Treasure",
        author: "Daniel Wood",
        category: "Fiction",
        price: 319
    },

    {
        id: 21,
        title: "Physics Fundamentals",
        author: "Albert Thomas",
        category: "Science",
        price: 499
    },
    {
        id: 22,
        title: "Modern Chemistry",
        author: "Robert Taylor",
        category: "Science",
        price: 459
    },
    {
        id: 23,
        title: "Biology Basics",
        author: "Susan Green",
        category: "Science",
        price: 399
    },
    {
        id: 24,
        title: "Astronomy Today",
        author: "Neil Carter",
        category: "Science",
        price: 599
    },
    {
        id: 25,
        title: "World of Science",
        author: "David Adams",
        category: "Science",
        price: 349
    },
    {
        id: 26,
        title: "Space Exploration",
        author: "James Scott",
        category: "Science",
        price: 499
    },
    {
        id: 27,
        title: "Human Biology",
        author: "Laura Hill",
        category: "Science",
        price: 449
    },
    {
        id: 28,
        title: "Environmental Science",
        author: "Mark Green",
        category: "Science",
        price: 399
    },
    {
        id: 29,
        title: "Earth Science",
        author: "John Adams",
        category: "Science",
        price: 379
    },
    {
        id: 30,
        title: "Science Experiments",
        author: "Chris White",
        category: "Science",
        price: 329
    },

    {
        id: 31,
        title: "Business Management",
        author: "Peter Drucker",
        category: "Business",
        price: 599
    },
    {
        id: 32,
        title: "Marketing Basics",
        author: "Philip Kotler",
        category: "Business",
        price: 499
    },
    {
        id: 33,
        title: "Entrepreneurship",
        author: "Steve Miller",
        category: "Business",
        price: 549
    },
    {
        id: 34,
        title: "Digital Marketing",
        author: "Ryan Smith",
        category: "Business",
        price: 449
    },
    {
        id: 35,
        title: "Financial Management",
        author: "Robert King",
        category: "Business",
        price: 599
    },
    {
        id: 36,
        title: "Leadership Skills",
        author: "John Maxwell",
        category: "Business",
        price: 399
    },
    {
        id: 37,
        title: "Startup Guide",
        author: "Alex Johnson",
        category: "Business",
        price: 349
    },
    {
        id: 38,
        title: "Business Strategy",
        author: "Michael Porter",
        category: "Business",
        price: 499
    },
    {
        id: 39,
        title: "Sales Management",
        author: "David Miller",
        category: "Business",
        price: 399
    },
    {
        id: 40,
        title: "Business Communication",
        author: "Sarah Brown",
        category: "Business",
        price: 299
    },

    {
        id: 41,
        title: "Indian History",
        author: "Ramesh Sharma",
        category: "History",
        price: 399
    },
    {
        id: 42,
        title: "World History",
        author: "John Carter",
        category: "History",
        price: 449
    },
    {
        id: 43,
        title: "Ancient India",
        author: "Raj Kumar",
        category: "History",
        price: 349
    },
    {
        id: 44,
        title: "Medieval India",
        author: "Suresh Gupta",
        category: "History",
        price: 399
    },
    {
        id: 45,
        title: "Modern India",
        author: "Amit Sharma",
        category: "History",
        price: 449
    },
    {
        id: 46,
        title: "World War History",
        author: "James Clark",
        category: "History",
        price: 499
    },
    {
        id: 47,
        title: "History of Civilization",
        author: "David Smith",
        category: "History",
        price: 549
    },
    {
        id: 48,
        title: "Indian Freedom Movement",
        author: "Anil Kumar",
        category: "History",
        price: 399
    },
    {
        id: 49,
        title: "Kings of India",
        author: "Raj Singh",
        category: "History",
        price: 329
    },
    {
        id: 50,
        title: "Historical Places",
        author: "Ravi Verma",
        category: "History",
        price: 299
    },

    {
        id: 51,
        title: "Mathematics for Students",
        author: "John Mathew",
        category: "Education",
        price: 399
    },
    {
        id: 52,
        title: "English Grammar",
        author: "David Brown",
        category: "Education",
        price: 299
    },
    {
        id: 53,
        title: "Computer Fundamentals",
        author: "Rajiv Kumar",
        category: "Education",
        price: 349
    },
    {
        id: 54,
        title: "General Knowledge",
        author: "Amit Singh",
        category: "Education",
        price: 249
    },
    {
        id: 55,
        title: "Reasoning Book",
        author: "Rakesh Sharma",
        category: "Education",
        price: 399
    },
    {
        id: 56,
        title: "Aptitude Guide",
        author: "Sanjay Kumar",
        category: "Education",
        price: 349
    },
    {
        id: 57,
        title: "Communication Skills",
        author: "Neha Gupta",
        category: "Education",
        price: 299
    },
    {
        id: 58,
        title: "Study Skills",
        author: "Anita Sharma",
        category: "Education",
        price: 279
    },
    {
        id: 59,
        title: "Competitive Exams",
        author: "Vikas Kumar",
        category: "Education",
        price: 399
    },
    {
        id: 60,
        title: "English Vocabulary",
        author: "Robert Smith",
        category: "Education",
        price: 249
    },

    {
        id: 61,
        title: "Web Development",
        author: "Alex Brown",
        category: "Programming",
        price: 499
    },
    {
        id: 62,
        title: "Full Stack Development",
        author: "Mike Johnson",
        category: "Programming",
        price: 699
    },
    {
        id: 63,
        title: "Git and GitHub",
        author: "Tom Wilson",
        category: "Programming",
        price: 349
    },
    {
        id: 64,
        title: "Data Structures",
        author: "Mark Smith",
        category: "Programming",
        price: 599
    },
    {
        id: 65,
        title: "Algorithms",
        author: "Thomas Cormen",
        category: "Programming",
        price: 699
    },
    {
        id: 66,
        title: "Computer Networks",
        author: "Andrew Tanenbaum",
        category: "Programming",
        price: 549
    },
    {
        id: 67,
        title: "Operating Systems",
        author: "Abraham Silberschatz",
        category: "Programming",
        price: 599
    },
    {
        id: 68,
        title: "Database Management",
        author: "Raghu Ramakrishnan",
        category: "Programming",
        price: 649
    },
    {
        id: 69,
        title: "Artificial Intelligence",
        author: "Stuart Russell",
        category: "Programming",
        price: 699
    },
    {
        id: 70,
        title: "Machine Learning",
        author: "Tom Mitchell",
        category: "Programming",
        price: 599
    },

    {
        id: 71,
        title: "The Power of Dreams",
        author: "Chris Evans",
        category: "Fiction",
        price: 299
    },
    {
        id: 72,
        title: "A New Beginning",
        author: "Anna Wilson",
        category: "Fiction",
        price: 279
    },
    {
        id: 73,
        title: "The Secret Garden",
        author: "Frances Hodgson",
        category: "Fiction",
        price: 349
    },
    {
        id: 74,
        title: "The Young Explorer",
        author: "James Allen",
        category: "Fiction",
        price: 299
    },
    {
        id: 75,
        title: "The Magic World",
        author: "Sarah Miller",
        category: "Fiction",
        price: 329
    },
    {
        id: 76,
        title: "Ocean Adventure",
        author: "Daniel Scott",
        category: "Fiction",
        price: 299
    },
    {
        id: 77,
        title: "Mountain Journey",
        author: "Kevin Brown",
        category: "Fiction",
        price: 349
    },
    {
        id: 78,
        title: "The Hidden Door",
        author: "Emily Green",
        category: "Fiction",
        price: 319
    },
    {
        id: 79,
        title: "Future World",
        author: "John Young",
        category: "Fiction",
        price: 399
    },
    {
        id: 80,
        title: "The Final Chapter",
        author: "David King",
        category: "Fiction",
        price: 349
    },

    {
        id: 81,
        title: "Physics Advanced",
        author: "Albert Brown",
        category: "Science",
        price: 549
    },
    {
        id: 82,
        title: "Chemistry Advanced",
        author: "William Green",
        category: "Science",
        price: 499
    },
    {
        id: 83,
        title: "Biology Advanced",
        author: "Susan Miller",
        category: "Science",
        price: 549
    },
    {
        id: 84,
        title: "Genetics",
        author: "James Watson",
        category: "Science",
        price: 599
    },
    {
        id: 85,
        title: "Quantum Physics",
        author: "Richard Feynman",
        category: "Science",
        price: 699
    },
    {
        id: 86,
        title: "Space Science",
        author: "Neil Armstrong",
        category: "Science",
        price: 499
    },
    {
        id: 87,
        title: "Climate Change",
        author: "David Green",
        category: "Science",
        price: 399
    },
    {
        id: 88,
        title: "Ocean Science",
        author: "Mark Wilson",
        category: "Science",
        price: 449
    },
    {
        id: 89,
        title: "Medical Science",
        author: "Robert Adams",
        category: "Science",
        price: 599
    },
    {
        id: 90,
        title: "Scientific Discoveries",
        author: "John Smith",
        category: "Science",
        price: 499
    },

    {
        id: 91,
        title: "Success Principles",
        author: "Brian Tracy",
        category: "Business",
        price: 299
    },
    {
        id: 92,
        title: "Time Management",
        author: "David Allen",
        category: "Business",
        price: 349
    },
    {
        id: 93,
        title: "Personal Finance",
        author: "Robert Kiyosaki",
        category: "Business",
        price: 399
    },
    {
        id: 94,
        title: "Investment Guide",
        author: "Benjamin Graham",
        category: "Business",
        price: 449
    },
    {
        id: 95,
        title: "Rich Mindset",
        author: "James Allen",
        category: "Business",
        price: 299
    },
    {
        id: 96,
        title: "The Business Idea",
        author: "Mark Wilson",
        category: "Business",
        price: 349
    },
    {
        id: 97,
        title: "Professional Skills",
        author: "John Brown",
        category: "Education",
        price: 299
    },
    {
        id: 98,
        title: "Career Development",
        author: "Sarah Wilson",
        category: "Education",
        price: 349
    },
    {
        id: 99,
        title: "Interview Preparation",
        author: "David Kumar",
        category: "Education",
        price: 399
    },
    {
        id: 100,
        title: "Complete Study Guide",
        author: "Amit Sharma",
        category: "Education",
        price: 449
    }
];


// ==========================================
// CART
// ==========================================

let cart = JSON.parse(localStorage.getItem("bookCart")) || [];


// ==========================================
// DISPLAY BOOKS
// ==========================================

const bookContainer = document.getElementById("book-container");

function displayBooks(bookList) {

    bookContainer.innerHTML = "";

    if (bookList.length === 0) {
        bookContainer.innerHTML = `
            <h2 style="grid-column: 1/-1; text-align:center;">
                No books found
            </h2>
        `;
        return;
    }

    bookList.forEach(book => {

        const imageNumber = ((book.id - 1) % 10) + 1;

        const card = document.createElement("div");

        card.className = "book-card";

        card.innerHTML = `
            <img 
                class="book-image"
                src="https://picsum.photos/300/400?random=${book.id}"
                alt="${book.title}"
            >

            <div class="book-info">

                <span class="category">
                    ${book.category}
                </span>

                <h3>${book.title}</h3>

                <p class="author">
                    Author: ${book.author}
                </p>

                <p class="price">
                    ₹${book.price}
                </p>

                <button 
                    class="add-btn"
                    onclick="addToCart(${book.id})"
                >
                    🛒 Add to Cart
                </button>

            </div>
        `;

        bookContainer.appendChild(card);
    });
}

/*function displayBooks(bookList) {

    bookContainer.innerHTML = "";

    if (bookList.length === 0) {
        bookContainer.innerHTML = `
            <h2 style="grid-column: 1/-1; text-align:center;">
                No books found
            </h2>
        `;
        return;
    }

    bookList.forEach(book => {

        const card = document.createElement("div");

        card.className = "book-card";

        card.innerHTML = `
            <div class="book-image-box">

                <img 
                    class="book-image"
                    src="https://picsum.photos/300/400?random=${book.id}"
                    alt="${book.title}"
                >

                <button 
                    class="wishlist-btn"
                    onclick="toggleWishlist(${book.id})"
                >
                    ${isWishlisted(book.id) ? "❤️" : "♡"}
                </button>

            </div>

            <div class="book-info">

                <span class="category">
                    ${book.category}
                </span>

                <h3>${book.title}</h3>

                <p class="author">
                    Author: ${book.author}
                </p>

                <div class="rating">
                    ⭐⭐⭐⭐⭐
                </div>

                <p class="price">
                    ₹${book.price}
                </p>

                <button 
                    class="details-btn"
                    onclick="showBookDetails(${book.id})"
                >
                    📖 View Details
                </button>

                <button 
                    class="add-btn"
                    onclick="addToCart(${book.id})"
                >
                    🛒 Add to Cart
                </button>

            </div>
        `;

        bookContainer.appendChild(card);
    });
}*/


// ==========================================
// ADD TO CART
// ==========================================

function addToCart(id) {

    const book = books.find(book => book.id === id);

    const existingBook = cart.find(item => item.id === id);

    if (existingBook) {

        existingBook.quantity++;

    } else {

        cart.push({
            ...book,
            quantity: 1
        });

    }

    saveCart();

    alert(book.title + " added to cart!");
}


// ==========================================
// REMOVE FROM CART
// ==========================================

function removeFromCart(id) {

    cart = cart.filter(item => item.id !== id);

    saveCart();
}


// ==========================================
// CHANGE QUANTITY
// ==========================================

function changeQuantity(id, change) {

    const item = cart.find(book => book.id === id);

    if (!item) {
        return;
    }

    item.quantity += change;

    if (item.quantity <= 0) {
        removeFromCart(id);
        return;
    }

    saveCart();
}


// ==========================================
// DISPLAY CART
// ==========================================

function displayCart() {

    const cartContainer = document.getElementById("cart-container");

    cartContainer.innerHTML = "";

    if (cart.length === 0) {

        cartContainer.innerHTML = `
            <p style="
                text-align:center;
                padding:30px;
                color:#666;
            ">
                Your cart is empty.
            </p>
        `;

        document.getElementById("cart-total").innerText = "0";
        document.getElementById("cart-count").innerText = "0";

        return;
    }

    let total = 0;
    let count = 0;

    cart.forEach(item => {

        total += item.price * item.quantity;

        count += item.quantity;

        const div = document.createElement("div");

        div.className = "cart-item";

        div.innerHTML = `

            <div>
                <h3>${item.title}</h3>

                <p>
                    ₹${item.price} × ${item.quantity}
                </p>
            </div>

            <div class="quantity">

                <button 
                    onclick="changeQuantity(${item.id}, -1)"
                >
                    -
                </button>

                <strong>
                    ${item.quantity}
                </strong>

                <button 
                    onclick="changeQuantity(${item.id}, 1)"
                >
                    +
                </button>

            </div>

            <div>
                <strong>
                    ₹${item.price * item.quantity}
                </strong>
            </div>

            <button 
                class="remove-btn"
                onclick="removeFromCart(${item.id})"
            >
                Remove
            </button>
        `;

        cartContainer.appendChild(div);
    });

    document.getElementById("cart-total").innerText = total;

    document.getElementById("cart-count").innerText = count;
}


// ==========================================
// SAVE CART
// ==========================================

function saveCart() {

    localStorage.setItem(
        "bookCart",
        JSON.stringify(cart)
    );

    displayCart();
}


// ==========================================
// SEARCH
// ==========================================

document.getElementById("searchInput")
.addEventListener("input", filterBooks);


// ==========================================
// CATEGORY
// ==========================================

document.getElementById("categoryFilter")
.addEventListener("change", filterBooks);


// ==========================================
// FILTER BOOKS
// ==========================================

function filterBooks() {

    const searchValue =
        document.getElementById("searchInput")
        .value
        .toLowerCase();

    const categoryValue =
        document.getElementById("categoryFilter")
        .value;

    const filteredBooks = books.filter(book => {

        const matchesSearch =
            book.title
            .toLowerCase()
            .includes(searchValue);

        const matchesCategory =
            categoryValue === "all" ||
            book.category === categoryValue;

        return matchesSearch && matchesCategory;
    });

    displayBooks(filteredBooks);
}


// ==========================================
// CHECKOUT
// ==========================================

function checkout() {

    if (cart.length === 0) {

        alert("Your cart is empty!");

        return;
    }

    alert(
        "Thank you for your order! 📚\n\n" +
        "Your order has been placed successfully."
    );

    cart = [];

    saveCart();
}


// ==========================================
// INITIAL LOAD
// ==========================================

displayBooks(books);

displayCart();