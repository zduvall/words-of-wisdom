---
layout: default
title: Test
---

<div id="test-quote-container">
  <!-- A test quote will be rendered here -->
</div>
<div class="buttons has-addons is-centered">
  <button id="prevQuote" class="button">Previous</button>
  <span id="quoteProgress" class="button is-static"></span>
  <button id="nextQuote" class="button">Next</button>
</div>

<script>
  // Simple array shuffling function
  function shuffleArray(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  let shuffledQuotes = shuffleArray(window.quotes.slice());
  let currentIndex = 0;

  function renderTestQuote() {
    const container = document.getElementById('test-quote-container');
    const quote = shuffledQuotes[currentIndex];
    container.innerHTML = `
      <div class="box quote-card" id="testQuoteCard" style="cursor: pointer;">
        <div class="quote-hint">
          <p class="hint">${quote.hint}</p>
        </div>
        <div class="quote-details" style="display: none;">
          <p class="quote">“${quote.quote}”</p>
          <p class="author">— ${quote.author}</p>
          <p class="source"><em>${quote.source}</em></p>
          ${quote.hint ? `<p class="hint"><small>Hint: ${quote.hint}</small></p>` : ''}
        </div>
      </div>
    `;
    updateProgress();
    document.getElementById('testQuoteCard').addEventListener('click', toggleQuoteDetails);
  }

  function toggleQuoteDetails() {
    const card = document.getElementById('testQuoteCard');
    const details = card.querySelector('.quote-details');
    // Toggle display with a simple effect (you can enhance this with CSS transitions)
    details.style.display = (details.style.display === 'none') ? 'block' : 'none';
  }

  function updateProgress() {
    document.getElementById('quoteProgress').innerText = `Quote ${currentIndex + 1} of ${shuffledQuotes.length}`;
  }

  document.getElementById('prevQuote').addEventListener('click', function() {
    currentIndex = (currentIndex - 1 + shuffledQuotes.length) % shuffledQuotes.length;
    renderTestQuote();
  });
  document.getElementById('nextQuote').addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % shuffledQuotes.length;
    renderTestQuote();
  });

  document.addEventListener('DOMContentLoaded', renderTestQuote);
</script>
