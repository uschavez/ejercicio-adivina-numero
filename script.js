document.getElementById('startGame').addEventListener('click', startGuessing);

function startGuessing() {
  let min = 1;
  let max = 100;
  let guess;

  guessNumber(min, max);
}

function guessNumber(min, max) {
  let guess = Math.floor((min + max) / 2);
  document.getElementById('question').innerHTML = '<p>Puedo leer tu mente ¿tu número es el ' + guess + '?</p><button id="yesBtn" class="btn btn-success mr-2">Sí</button><button id="noBtn" class="btn btn-danger">No</button>';

  document.getElementById('yesBtn').addEventListener('click', function() {
    document.getElementById('result').innerHTML = '<div class="alert alert-success" role="alert">Lo sabía, tu número es el ' + guess + ', fue pan comido.</div>';
    document.getElementById('restartBtn').classList.remove('d-none');
  });

  document.getElementById('noBtn').addEventListener('click', function() {
    if (min < max) {
      guessNumber(guess + 1, max);
    } else {
      document.getElementById('result').innerHTML = '<div class="alert alert-danger" role="alert">He leído tu mente y vi que hiciste trampa</div>';
      document.getElementById('restartBtn').classList.remove('d-none');
    }
  });
}

document.getElementById('restartBtn').addEventListener('click', function() {
  document.getElementById('question').innerHTML = '';
  document.getElementById('result').innerHTML = '';
  document.getElementById('restartBtn').classList.add('d-none');
  startGuessing();
});
