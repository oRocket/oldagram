const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

document.addEventListener("DOMContentLoaded", function() {
    const heartIcon = document.querySelector('.heart');
    const likesCount = document.getElementById('likes-count');

    // Extract the current number of likes from the text
    let currentLikes = parseInt(likesCount.textContent.replace(/\D/g, ''), 10);

    // Add event listener to the heart icon
    heartIcon.addEventListener('click', function() {
        // Increase the number of likes by 1
        currentLikes += 1; 
        likesCount.textContent = currentLikes.toLocaleString() + ' likes'; // Update the likes text

        // Change the heart icon to red
        heartIcon.src = 'images/red-heart-icon.png'; 

        // After 1 second, change the heart icon back to the original
        setTimeout(function() {
            heartIcon.src = 'images/icon-heart.png'; // Restore the original heart icon
        }, 1000); // 1000 milliseconds = 1 second
    });
});

