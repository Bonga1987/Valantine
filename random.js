const valantine = document.querySelector(".valantine");
const question = document.querySelector(".question");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const pic = document.querySelector(".picture");

const valantineRect = valantine.getBoundingClientRect();
const noBtnRect = noBtn.getBoundingClientRect();

yesBtn.addEventListener('click', () => {
     question.innerHTML = 'Yayy. I Love You';
     pic.src = 'Cute Bears Love Sticker - Cute Bears Love - Discover & Share GIFs (1).gif';
     yesBtn.parentNode.removeChild(yesBtn);
     noBtn.parentNode.removeChild(noBtn);
});

noBtn.addEventListener('mouseover', () =>{
  pic.src ='Shot Sad Sticker - Shot Sad Cat - Discover & Share GIFs.gif';
  question.innerHTML = 'Please do not do this to me';

  const i = Math.floor(Math.random() * (valantineRect.width - noBtnRect.width)) + 1;
  const j = Math.floor(Math.random() * (valantineRect.height - noBtnRect.height)) + 1;

  noBtn.style.left = i + 'px';
  noBtn.style.top = j + 'px';
});

