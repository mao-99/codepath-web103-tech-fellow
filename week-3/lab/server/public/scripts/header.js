const header = document.querySelector('header');

const headerContainer = document.createElement('div');
headerContainer.className = 'header-container';

const headerLeft = document.createElement('div');
headerLeft.className = 'header-left';

const img = document.createElement('img');
img.src = '/unearthed-logo.png';

const h1 = document.createElement('h1');
h1.textContent = 'UnEarthed';

headerLeft.appendChild(img);
headerLeft.appendChild(h1);

const headerRight = document.createElement('div');
headerRight.className = 'header-right';

const headerButton = document.createElement('button');
headerButton.textContent = 'Home';

headerButton.addEventListener('click', function handleClick(event) {
    window.location = '/';
})

headerRight.appendChild(headerButton);

headerContainer.appendChild(headerLeft);
headerContainer.appendChild(headerRight);

header.appendChild(headerContainer);