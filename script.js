// Base URL for the backend API
const BASE_URL = 'http://127.0.0.1:5000'; // Update if hosted elsewhere

// Theme toggle functionality
document.getElementById('themeToggleButton').addEventListener('click', function() {
    document.body.classList.toggle('light-mode');
    document.getElementById('sunIcon').style.display = document.body.classList.contains('light-mode') ? 'none' : 'inline';
    document.getElementById('moonIcon').style.display = document.body.classList.contains('light-mode') ? 'inline' : 'none';
});

// Sidebar toggle functionality
document.getElementById('sidebarToggleButton').addEventListener('click', function() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('open');
});

// Function to open an app
async function openApp() {
    const appName = prompt('Enter the app name:');
    if (appName) {
        try {
            const response = await fetch(`${BASE_URL}/open-app`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ app_name: appName }),
            });
            const result = await response.json();
            document.getElementById('output').innerText = result.message;
        } catch (error) {
            console.error('Error:', error);
            document.getElementById('output').innerText = 'Failed to open app. Please try again later.';
        }
    }
}

// Function to open a website
async function openWebsite() {
    const url = prompt('Enter the website URL:');
    if (url) {
        try {
            const response = await fetch(`${BASE_URL}/open-website`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ url: url }),
            });
            const result = await response.json();
            document.getElementById('output').innerText = result.message;
        } catch (error) {
            console.error('Error:', error);
            document.getElementById('output').innerText = 'Failed to open website. Please try again later.';
        }
    }
}

// Function to remember something
async function remember() {
    const key = prompt('Enter the key:');
    const value = prompt('Enter the value:');
    if (key && value) {
        try {
            const response = await fetch(`${BASE_URL}/remember`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ key: key, value: value }),
            });
            const result = await response.json();
            document.getElementById('output').innerText = result.message;
        } catch (error) {
            console.error('Error:', error);
            document.getElementById('output').innerText = 'Failed to remember. Please try again later.';
        }
    }
}

// Function to ask AI
async function askAI() {
    const question = document.getElementById('askInput').value;
    if (question) {
        try {
            const response = await fetch(`${BASE_URL}/ask-ai`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ question: question }),
            });
            const result = await response.json();
            document.getElementById('output').innerText = result.answer;
        } catch (error) {
            console.error('Error:', error);
            document.getElementById('output').innerText = 'Failed to get answer from AI. Please try again later.';
        }
    }
}

// Add event listeners to buttons
document.getElementById('openAppButton').addEventListener('click', openApp);
document.getElementById('openWebsiteButton').addEventListener('click', openWebsite);
document.getElementById('rememberButton').addEventListener('click', remember);
document.getElementById('askButton').addEventListener('click', askAI);