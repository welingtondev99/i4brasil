// Complementa o 404.html: se a pessoa chegou por um endereço interno,
// restaura o caminho original antes do site carregar.
(function () {
  var busca = location.search;
  if (busca.charAt(1) !== '/') return;
  var base = '/i4brasil/';
  var resto = busca.slice(2).replace('&', '?');
  history.replaceState(null, '', base + resto + location.hash);
})();
