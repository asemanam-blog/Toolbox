<script>
  // Capture All hn tags of post content
  let headers = document.querySelectorAll('h3, h4, h5, h6');

  // Loop through all hn tags and add id attribute
  for (let i = 0; i < headers.length; i++) {
    headers[i].setAttribute('id', 'title-' + i);
  }


  // Capture hn's after the loop again
  let headerss = document.querySelectorAll('h3, h4, h5, h6');

  // Loop through captured tags and Create an a element
  // then replace them with it's inner html
  for (let j = 0; j < headers.length; j++) {
    let isame = headerss[j].getAttribute('id');
    let kisame = document.createElement('a');
    kisame.setAttribute('href', '#' + isame);
    kisame.innerHTML = headerss[j].innerHTML;
    headerss[j].innerHTML = kisame.outerHTML;
  }
</script>
