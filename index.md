---
layout: default
title: Home
---

<div id="random-quote-container">
  <!-- A random quote will be rendered here -->
</div>
<button id="newRandomQuote" class="button is-link">New Random Quote</button>

<script>
  function renderRandomQuote() {
    const container = document.getElementById('random-quote-container');
    if (!window.quotes || window.quotes.length === 0) {
      container.innerHTML = "<p>No quotes available.</p>";
      return;
    }
    const randomIndex = Math.floor(Math.random() * window.quotes.length);
    const quote = window.quotes[randomIndex];
    container.innerHTML = `
      <div class="box">
        <p class="quote">“${quote.quote}”</p>
        <p class="author">— ${quote.author}</p>
        <p class="source"><em>${quote.source}</em></p>
        ${quote.hint ? `<p class="hint"><small>Hint: ${quote.hint}</small></p>` : ''}
      </div>
    `;
  }

  document.getElementById('newRandomQuote').addEventListener('click', renderRandomQuote);
  document.addEventListener('DOMContentLoaded', renderRandomQuote);
</script>
