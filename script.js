
const questions = [
  {
    text: "清璃，你记得第一次和我对视的时候吗？",
    answers: [
      { text: "当然记得，那是个很温柔的瞬间。", score: 3, reaction: "纪书珩微微一笑：“我也是，从那一刻开始，我的世界只剩你一人。”" },
      { text: "有点模糊了……", score: 1, reaction: "纪书珩眼底闪过一丝暗色：“这样啊……可我记得很清楚。”" },
      { text: "并没有什么特别的感觉。", score: 0, reaction: "纪书珩低声：“……那我就再制造更多你忘不了的瞬间。”" }
    ]
  }
];
let current = 0;
let score = 0;

function playSound(id) {
  const sound = document.getElementById(id);
  if (sound) {
    sound.currentTime = 0;
    sound.play();
  }
}

function showQuestion() {
  const q = questions[current];
  document.getElementById("question").textContent = q.text;
  const answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = "";
  q.answers.forEach((ans, i) => {
    const btn = document.createElement("button");
    btn.textContent = ans.text;
    btn.onclick = () => {
      playSound("keyboard");
      score += ans.score;
      alert(ans.reaction);
      current++;
      if (current < questions.length) {
        showQuestion();
      } else {
        showResult();
      }
    };
    answersDiv.appendChild(btn);
  });
}

function showResult() {
  document.getElementById("question-box").style.display = "none";
  document.getElementById("result-box").style.display = "block";
  const title = document.getElementById("result-title");
  const desc = document.getElementById("result-description");
  if (score >= 50) {
    title.textContent = "【“凌驾恐怖病娇crush之上的主宰】";
    desc.textContent = "你已完全顺从，甚至凌驾于纪书珩之上……";
  } else if (score >= 35) {
    title.textContent = "【危险依赖】";
    desc.textContent = "你们在扭曲的牵绊中纠缠，互相沉溺。";
  } else if (score >= 20) {
    title.textContent = "【失败反抗】";
    desc.textContent = "你试图反抗，却已无法挣脱他构筑的牢笼。";
  } else {
    title.textContent = "【“你的一辈子属于我…”】";
    desc.textContent = "你已经失去自我，被彻底支配。";
    playSound("heartbeat");
  }
}
window.onload = showQuestion;
