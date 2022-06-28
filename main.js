//要素を取得
const button = document.getElementById('output');
const fizzbuzzList = document.getElementById('fizzbuzzList');

// リスト状で表したいので、関数で一連の流れを生成
const addList = (outputValue) => {
  const p = document.createElement('p');
  p.innerHTML = outputValue;
  fizzbuzzList.appendChild(p);
};
// クリックされたらif文以下を実行（値を数値として受け取りたいのでNumberオブジェクトを用いた）
button.addEventListener('click', () => {
  const fizzNum = Number(document.getElementById('fizzNum').value);
  const buzzNum = Number(document.getElementById('buzzNum').value);

  if (
    Number.isInteger(fizzNum) &&
    Number.isInteger(buzzNum) &&
    fizzNum > 0 &&
    buzzNum > 0
  ) {
    for (i = 1; i < 100; i++) {
      if (i % fizzNum === 0 && i % buzzNum === 0) {
        addList('FizzBuzz' + i);
      } else if (i % fizzNum === 0) {
        addList('Fizz' + i);
      } else if (i % buzzNum === 0) {
        addList('Buzz' + i);
      }
    }
  } else {
    addList('整数値を入力してください');
  }
});
