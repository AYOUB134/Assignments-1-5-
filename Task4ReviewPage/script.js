document.getElementById("reviewForm").addEventListener("submit", function(e) {
    e.preventDefault();

    // Get the values from the form
    const name = document.getElementById("name").value;
    const rating = document.getElementById("rating").value;
    const reviewText = document.getElementById("review").value;

    // Create a new review element
    const reviewItem = document.createElement("div");
    reviewItem.classList.add("review-item");

    // Add the review content
    reviewItem.innerHTML = `
        <h3>${name} - Rating: ${rating}/5</h3>
        <p>${reviewText}</p>
    `;

    // Append the new review to the reviews list
    document.getElementById("reviewsList").appendChild(reviewItem);

    // Clear the form
    document.getElementById("reviewForm").reset();
});
