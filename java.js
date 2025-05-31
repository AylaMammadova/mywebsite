document.addEventListener('DOMContentLoaded', () => {
  const therapyForm = document.getElementById('therapyForm');
  const responseDiv = document.getElementById('response');
  const resetBtn = document.getElementById('resetBtn');

  therapyForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const age = parseInt(document.getElementById('age').value);
    const mood = document.getElementById('mood').value;
    const challenge = document.getElementById('challenge').value.trim().toLowerCase();
    const improvement = document.getElementById('improvement').value.trim().toLowerCase();

    let advice = generateAdvice(name, age, mood, challenge, improvement);

    responseDiv.style.opacity = 0;

    setTimeout(() => {
      responseDiv.textContent = advice;
      responseDiv.style.opacity = 1;
    }, 300);
  });

  resetBtn.addEventListener('click', () => {
    therapyForm.reset();
    responseDiv.textContent = '';
  });

  function generateAdvice(name, age, mood, challenge, improvement) {
    let base = `Hey ${name}! At age ${age}, it’s great you’re focusing on yourself.\n\n`;

    let moodAdvice = '';
    switch (mood) {
      case 'happy':
        moodAdvice = "Keep riding that wave of positivity! Share your joy with others — it’s contagious.";
        break;
      case 'stressed':
        moodAdvice = "Remember to breathe deeply and take short breaks. Stress is temporary, and you’re stronger than it.";
        break;
      case 'sad':
        moodAdvice = "It’s okay to feel down sometimes. Allow yourself to feel, then do one small thing to brighten your day.";
        break;
      case 'anxious':
        moodAdvice = "Try grounding yourself by focusing on the present moment. You’ve got this, one step at a time.";
        break;
      case 'motivated':
        moodAdvice = "Use that motivation to set clear, achievable goals. Celebrate your progress along the way!";
        break;
      default:
        moodAdvice = "Every feeling is valid. Take your time to understand yours.";
    }

    let challengeAdvice = '';
    if (challenge.includes('school')) {
      challengeAdvice = "For school challenges, break tasks into smaller parts and reward yourself for finishing them.";
    } else if (challenge.includes('work')) {
      challengeAdvice = "At work, prioritize your tasks and communicate openly about your workload.";
    } else if (challenge.includes('relationship')) {
      challengeAdvice = "Relationships take effort — listen with empathy and speak your truth kindly.";
    } else if (challenge) {
      challengeAdvice = `Regarding "${challenge}", remember that patience and persistence bring change.`;
    }

    let improvementAdvice = '';
    if (improvement.includes('confidence')) {
      improvementAdvice = "Building confidence starts with celebrating small wins and positive self-talk.";
    } else if (improvement.includes('patience')) {
      improvementAdvice = "Patience grows when you remind yourself that progress takes time.";
    } else if (improvement.includes('focus')) {
      improvementAdvice = "Improve focus by minimizing distractions and practicing mindfulness.";
    } else if (improvement) {
      improvementAdvice = `Working on "${improvement}" is a meaningful journey. Keep going!`;
    }

    let ageAdvice = '';
    if (age < 18) {
      ageAdvice = ' Remember, you’re young and full of potential! 🌱';
    } else if (age > 50) {
      ageAdvice = ' Your experience is your strength. Keep shining! 🌟';
    }

    return `${base}${moodAdvice}\n\n${challengeAdvice}\n\n${improvementAdvice}${ageAdvice}`;
  }
});

