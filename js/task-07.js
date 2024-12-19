document.addEventListener('DOMContentLoaded',  onInput() {
    const fontSizeControl = document.getElementById('font-size-control');
    const textElement = document.getElementById('text');
    fontSizeControl.addEventListener('input', onInput);
    function onInput() {
    const fontSizeValue = this.value + 'px';
          textElement.style.fontSize = fontSizeValue;
    };
  });

