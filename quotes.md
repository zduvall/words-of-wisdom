---
layout: default
title: Quotes Index
---

<input type="text" id="searchInput" class="input" placeholder="Search by author or keyword...">
<div id="quotes-list">
  <!-- The list of quotes will appear here -->
</div>

<script>
  // Render quotes from the global quotes variable
  function renderQuotes(quotes) {
    const container = document.getElementById('quotes-list');
    container.innerHTML = "";
    quotes.forEach(function(quote, index) {
      container.innerHTML += `
        <div class="box quote-card">
          <p class="quote">“${quote.quote}”</p>
          <p class="author">— ${quote.author}</p>
          <p class="source"><em>${quote.source}</em></p>
          ${quote.hint ? `<p class="hint"><small>Hint: ${quote.hint}</small></p>` : ''}
          <p><a href="/quote.html?id=${index}" class="button is-small is-link">View</a></p>
        </div>
      `;
    });
  }

  function sortQuotes(quotes) {
    return quotes.sort((a, b) => {
      const authorA = a.author.toLowerCase();
      const authorB = b.author.toLowerCase();
      if (authorA < authorB) return -1;
      if (authorA > authorB) return 1;
      // If authors are equal, sort by source
      const sourceA = a.source.toLowerCase();
      const sourceB = b.source.toLowerCase();
      if (sourceA < sourceB) return -1;
      if (sourceA > sourceB) return 1;
      return 0;
    });
  }

  function filterQuotes() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const filtered = window.quotes.filter(quote => {
      return quote.author.toLowerCase().includes(query) ||
             quote.quote.toLowerCase().includes(query) ||
             quote.source.toLowerCase().includes(query) ||
             (quote.hint && quote.hint.toLowerCase().includes(query));
    });
    renderQuotes(sortQuotes(filtered));
  }

  document.addEventListener('DOMContentLoaded', function() {
    const sorted = sortQuotes(window.quotes.slice());
    renderQuotes(sorted);
    document.getElementById('searchInput').addEventListener('input', filterQuotes);
  });
</script>
