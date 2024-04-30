// Function to load employment category content
function loadCategory(category) {
    const categoryContent = document.getElementById("categoryContent");
    categoryContent.innerHTML = ""; // Clear previous content

    switch (category) {
        case 'IT':
            categoryContent.innerHTML = `
                <h2>I.T. Positions</h2>
                <p>We are hiring for various I.T. roles including web developers, software engineers, and network administrators.</p>
                <p>Please apply with your resume and cover letter.</p>
                <button onclick="window.location.href ='../html/loginpage.html';">Submit Application</button>
            `;
            break;

        case 'Guide':
            categoryContent.innerHTML = `
                <h2>Guide Positions</h2>
                <p>Join our team as a guide for exciting outdoor adventures such as hiking, kayaking, and wildlife tours.</p>
                <p>Experience in outdoor activities and wilderness first aid certification preferred.</p>
                <button onclick="window.location.href ='../html/loginpage.html';">Submit Application</button>
            `;
            break;

        case 'HR':
            categoryContent.innerHTML = `
                <h2>HR Positions</h2>
                <p>Explore HR opportunities with Outdoor Adventures. We have openings for HR managers, recruiters, and administrative staff.</p>
                <p>Submit your application to join our dynamic HR team.</p>
                <button onclick="window.location.href ='../html/loginpage.html';">Submit Application</button>
            `;
            break;

        default:
            categoryContent.innerHTML = `<p>No information available for this category.</p>`;
            break;
    }
}
