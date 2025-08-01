let timeOfDay = document.getElementById('timeOfDay')
let today = new Date()
let hourNow = today.getHours()
let greeting // Undefined 

greeting = 'day'

if (hourNow > 18) 
  greeting = 'evening'

if (hourNow > 12) 
  greeting = 'afternoon'

if (hourNow >= 0) 
  greeting = 'morning'

timeOfDay.innerText = greeting

function countdown() {
  const noticeTemplate = document.getElementById('notice');
  const noticeText = noticeTemplate.innerHTML;

  let seconds = 5;
  const notice = document.createElement('small');
  notice.setAttribute('id', 'notice');

  setInterval(() => {
    const countdownText = noticeText.replace('{seconds}', seconds);
    notice.innerHTML = countdownText;
    if (seconds-- === 0) {
      window.location = '/';
    }
  }, 1000);

  notice.innerHTML = noticeText.replace('{seconds}', seconds);
  noticeTemplate.parentNode.replaceChild(notice, noticeTemplate);
}

// Run countdown function
countdown();