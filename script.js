document.getElementById('wishButton').addEventListener('click', function() {
  const surpriseMessage = document.getElementById('surpriseMessage');
  surpriseMessage.classList.toggle('hidden');
});

const booksWithQuotes = [
  {
      title: "Secret live of Baba Segi wives", 
      quote: "The spirit of a man will not be crushed. It will rise, stronger and wiser, despite all odds"
  },
  {
      title: "Half of a yellow sun",
      quote: "You must never behave as if your life belongs to a man. Your life belongs to you and you alone"
  },
  {
      title: "Crimson blossom",
      quote: "Love, like a crimson blossom, is fragile yet resilient, capable of enduring even the harshest of storms"
  },
  {
      title: "My sister is a serial killer",
      quote: "In a world where justice is elusive and morality is subjective, who are we to judge those who walk the thin line between right and wrong?"
  },
  {
      title: "Stay with me ",
      quote: "Love is both the question and the answer. It is the bridge and the abyss."
  }
];

const booksContainer = document.getElementById('booksContainer');
booksWithQuotes.forEach(book => {
  const bookCard = document.createElement('div');
  bookCard.className = 'book-card';
  bookCard.innerHTML = `<div class="book-title">${book.title}</div><div class="book-quote">"${book.quote}"</div>`;
  bookCard.addEventListener('click', function() {
      const quote = bookCard.querySelector('.book-quote');
      quote.style.display = quote.style.display === 'none' ? 'block' : 'none';
  });
  booksContainer.appendChild(bookCard);
});

const memes = [
  'https://pbs.twimg.com/media/DlFTnNXU4AEyCye.jpg',
    'https://pbs.twimg.com/media/D1FeOYuXcAAQsRk.jpg',
    'https://pbs.twimg.com/media/EuwYXxMWYAAM_jP.jpg',
    'https://pbs.twimg.com/media/ElFT-nbXYAIAnBd.jpg',
    'https://pbs.twimg.com/media/DlFTqYRXsAAmMC_.jpg'
];

const memesContainer = document.getElementById('memesContainer');
memes.forEach(meme => {
  const img = document.createElement('img');
  img.src = meme;
  img.alt = 'Birthday Meme';
  memesContainer.appendChild(img);
});
