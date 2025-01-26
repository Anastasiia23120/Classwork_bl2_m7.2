document.addEventListener('keypress', event => {
  console.log(`event.code: ${event.code}, event.key: ${event.key}`);

  if (event.code === 'Escape') {
    console.log('Hello');
  }
});

/* keypress, keydown, keyup */
