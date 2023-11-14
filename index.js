const posts = [];
let lastActivityTime = null;

function createPost(post) {
    return new Promise((resolve) => {
        setTimeout(() => {
            posts.push(post);
            resolve(post);
        }, 1000);
    });
}

function updateLastUserActivityTime() {
    return new Promise((resolve) => {
        setTimeout(() => {
            lastActivityTime = new Date();
            resolve(lastActivityTime);
        }, 1000);
    });
}

function deletePost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (posts.length > 0) {
                const deletedPost = posts.pop();
                resolve(deletedPost);
            } else {
                reject("No posts to delete");
            }
        }, 1000);
    });
}

function demo() {
    // Create a post and update last activity time simultaneously
    Promise.all([createPost({ title: "New Post" }), updateLastUserActivityTime()])
        .then(([createdPost, updatedActivityTime]) => {
            console.log("All promises resolved!");
            console.log("Posts:", posts);
            console.log("Last Activity Time:", updatedActivityTime);

            // Delete the last post
            return deletePost();
        })
        .then((deletedPost) => {
            console.log("Post deleted:", deletedPost);
            console.log("Remaining Posts:", posts);
        })
        .catch((error) => {
            console.error("Error:", error);
        });
}

// Run the demo
demo();
