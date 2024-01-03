document.addEventListener("DOMContentLoaded", function () {
    const quotes = [
        "Every moment with you is a beautiful line in the story of my life.",
        "In your smile, I find the courage to face the challenges of life.",
        "Your love is the melody that makes my heart dance with joy.",
        "With you, every day is a canvas waiting to be painted with moments of love.",
        "In your eyes, I see a reflection of a future filled with happiness and love.",
        "Our love story is my favorite, and it gets more beautiful with each passing day.",
        "You are the sunshine that brightens my darkest days.",
        "Your laughter is the sweetest melody that plays in my heart.",
        "I cherish the way you make ordinary moments extraordinary.",
        "Being with you feels like a dream I never want to end.",
        "Your love is the compass that guides me through life's journey.",
        "The more I know you, the more I love you.",
        "In your embrace, I find the comfort I've been searching for.",
        "You are the missing piece that completes the puzzle of my heart.",
        "Every word you speak is a poem, and every touch is a love song.",
        "Your presence is a gift that makes every day a celebration.",
        "I fall in love with you all over again, every single day.",
        "Our love is a story written in the stars, destined to shine forever.",
        "You are the muse behind the masterpiece of my life.",
        "With you, every moment is a page-turner in the book of our love."
        // ... add more quotes here
    ];

    const quoteSection = document.getElementById("quoteSection");
    quotes.forEach(quote => {
        const quoteElement = document.createElement("div");
        quoteElement.classList.add("quote");
        quoteElement.textContent = `"${quote}"`;
        quoteSection.appendChild(quoteElement);
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const floatingMessage = document.getElementById("floatingMessage");

    // Show the floating message initially
    floatingMessage.style.display = "block";

    // Animate the floating message
    animateFloatingMessage();

    function animateFloatingMessage() {
        const speed = 2; // Adjust the speed of animation

        let position = 0;
        let direction = 1;

        function move() {
            position += direction * speed;

            // Reverse direction when reaching the screen edges
            if (position > window.innerWidth - floatingMessage.offsetWidth || position < 0) {
                direction = -direction;
            }

            floatingMessage.style.right = position + "px";

            requestAnimationFrame(move);
        }

        move();
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const loveLetterToggle = document.getElementById("loveLetterToggle");
    const loveLetterContent = document.getElementById("loveLetterContent");

    loveLetterToggle.addEventListener("click", function () {
        if (loveLetterContent.style.display === "none") {
            loveLetterContent.style.display = "block";
            loveLetterToggle.textContent = "Hide My Love Letter";
        } else {
            loveLetterContent.style.display = "none";
            loveLetterToggle.textContent = "Read My Love Letter";
        }
    });
});
