function handleHeroSearch(e) {
  if (e.key === 'Enter') doSearch(e.target.value);
}

function quickSearch(q) {
  doSearch(q);
}

function startNewSearch() {
  state.query = '';
  state.results = [];
  state.searchError = '';
  state.activeFilter = 'all';
  navigate('search');
  requestAnimationFrame(() => {
    const input = el('searchPageSearch') || el('heroSearch');
    if (input) input.focus();
  });
}



