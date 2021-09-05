function toggleElementsById(id) {
  const ids = typeof id !== 'string' ? [ ...id ] : [ id ];

  for (id of ids) {
      const element = document.getElementById(id);

      element.classList.toggle('active');
  }
}