function range1() {
    var rng1 = document.querySelector('#range1'),
        value = rng1.value,
        valueBlock = document.querySelector('.range1-value');

        valueBlock.style.left = (value - 5) + '%';
        valueBlock.innerHTML = rng1.value;
}



var rng2 = document.querySelector('#range2');
var container = rng2.parentNode;
var values = rng2.getAttribute('value').split(',');

values.forEach(function (value, i, values) {
  var rangePart = rng2.cloneNode();
  rangePart.type = 'range';
  rangePart.removeAttribute('value');
  rangePart.value = value;
  rangePart = container.insertBefore(rangePart, rng2);
});

rng2.remove();

function range2() {
  var rngOrig = document.querySelector("[type='range'][multiple]"),
      rngOrigVal = rngOrig.value,

      rngClone = document.querySelector("[type='range'][multiple] + [type='range'][multiple]"),
      rngCloneVal = rngClone.value,

      line = document.getElementById('input-value2');

      line.style.left = (rngOrigVal) + '%';
      line.style.width = (rngCloneVal - rngOrigVal) + '%';

}


function range3() {
    var rng3 = document.querySelector('#range3'),
        line = document.getElementById('input-value3'),
        value = rng3.value;
        line.style.width = value + '%';
}
