const renderGifts = async () => {
    const response = await fetch('/gifts');
    const data = await response.json();

    const mainContent = document.getElementById('main-content');

    if (data){
        data.map(gift => {
            const giftDiv = document.createElement('div')
            giftDiv.classList.add('card')
            const topDiv = document.createElement('div')
            topDiv.classList.add('top-container')
            const bottomDiv = document.createElement('div')
            bottomDiv.classList.add('bottom-container')
            topDiv.style.backgroundImage = `url(${gift.image})`
            const giftName = document.createElement('h3')
            giftName.textContent = `${gift.name}`
            bottomDiv.appendChild(giftName)
            const giftPrice = document.createElement('p')
            giftPrice.textContent = `${gift.pricePoint}`
            bottomDiv.appendChild(giftPrice)
            const giftAudience = document.createElement('p')
            giftAudience.textContent = `${gift.audience}`
            bottomDiv.appendChild(giftAudience)
            const giftLink = document.createElement('a')
            giftLink.textContent = 'Read More >'
            giftLink.href = `/gifts/${gift.id}`
            giftLink.role = 'button'
            bottomDiv.appendChild(giftLink)
            giftDiv.appendChild(topDiv)
            giftDiv.appendChild(bottomDiv)
            mainContent.appendChild(giftDiv)
        })
    } else {
        const h2 = document.createElement('h2');
        h2.textContent = 'No Gifts Available 😞'
        mainContent.appendChild(mainContent);
    }
}

const renderGift = async () => {
    const requestedID = parseInt(window.location.href.split('/').pop());
    const response = await fetch(`/gifts`);
    const data = await response.json();
    const giftContent = document.getElementById('gift-content')

    let gift;

    gift = data.find(gift => gift.id === requestedID);

    if (gift) {
        document.getElementById('image').src = gift.image
        document.getElementById('name').textContent = gift.name
        document.getElementById('submittedBy').textContent = 'Submitted by: ' + gift.submittedBy
        document.getElementById('pricePoint').textContent = 'Price: ' + gift.pricePoint
        document.getElementById('audience').textContent = 'Great For: ' + gift.audience
        document.getElementById('description').textContent = gift.description
        document.title = `UnEarthed - ${gift.name}`
    } else {
        const h2 = document.createElement('h2')
        h2.textContent = 'No Gifts Available 😞'
        giftContent.appendChild(h2)
    }
}

renderGifts();
renderGift();