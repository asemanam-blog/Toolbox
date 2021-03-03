<script>
  let headers = document.querySelectorAll('h3, h4, h5');
  for (let i = 0; i < headers.length; i++) {
    headers[i].setAttribute('id', 'title-' + i);
  }
  let headerss = document.querySelectorAll('h3, h4, h5');
  for (let j = 0; j < headers.length; j++) {
    let isame = headerss[j].getAttribute('id');
    let kisame = document.createElement('a');
    kisame.setAttribute('href', '#' + isame);
    kisame.innerHTML = headerss[j].innerHTML;
    headerss[j].innerHTML = kisame.outerHTML;
  }
</script>
