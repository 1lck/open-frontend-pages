/**
 * copyright 2024 3A
 */



// JavaScript functionality
function compileTemplate() {
  var html = document.getElementById("html-input").value;
  var css = document.getElementById("css-input").value;
  var js = document.getElementById("js-input").value;

  var output = document.getElementById("output");

  // Clear previous output
  output.innerHTML = "";

  // Create iframe to isolate styles and scripts
  var iframe = document.createElement('iframe');
  iframe.style.width = '100%';
  iframe.style.height = '300px';
  iframe.style.border = 'none';

  // Append iframe to output
  output.appendChild(iframe);

  // Write HTML content to iframe
  var iframeDocument = iframe.contentDocument;
  iframeDocument.open();
  iframeDocument.write('<style>' + css + '</style>');
  iframeDocument.write(html);
  iframeDocument.close();

  // Execute JavaScript code inside iframe
  var script = iframeDocument.createElement('script');
  script.innerHTML = js;
  iframeDocument.body.appendChild(script);
}
