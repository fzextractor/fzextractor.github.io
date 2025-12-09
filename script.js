// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Typing effect for Hero
const textToType = "A powerful tool to extract and decode FileZilla credentials automatically.";
const typingElement = document.getElementById('typing-text');
const typingSpeed = 50; // ms per char

let i = 0;
function typeWriter() {
    if (i < textToType.length) {
        typingElement.innerHTML += textToType.charAt(i);
        i++;
        setTimeout(typeWriter, typingSpeed);
    } else {
        // Add blinking cursor after typing is done (optional visual flair)
        typingElement.innerHTML += '<span class="cursor">&nbsp;</span>';
    }
}

// Start typing effect when page loads
window.addEventListener('load', () => {
    // Small delay before start
    setTimeout(typeWriter, 1000);
});

// Copy to clipboard functionality
function copyCode(button) {
    const pre = button.parentElement;
    const code = pre.querySelector('code');
    const text = code.innerText;

    navigator.clipboard.writeText(text).then(() => {
        const originalText = button.innerText;
        button.innerText = 'COPIED!';
        button.style.borderColor = 'var(--accent-color)';
        button.style.color = 'var(--accent-color)';

        setTimeout(() => {
            button.innerText = originalText;
            button.style.borderColor = '';
            button.style.color = '';
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}

// Smooth scrolling for anchor links (Bootstrap usually handles this, but ensuring smooth behavior)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
