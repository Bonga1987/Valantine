const valantine = document.querySelector(".valantine");
const question = document.querySelector(".question");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const pic = document.querySelector(".picture");

const valantineRect = valantine.getBoundingClientRect();
const noBtnRect = noBtn.getBoundingClientRect();

yesBtn.addEventListener('click', () => {
     question.innerHTML = "Yayy. I Love You, if bendilapho I would say see you on the 14th but I can't. I promise I will make it up to you when I see you again";
     pic.src = 'cute-bears.webp';
     yesBtn.parentNode.removeChild(yesBtn);
     noBtn.parentNode.removeChild(noBtn);
});

noBtn.addEventListener('mouseover', () =>{
  pic.src ='cat_gun.gif';
  question.innerHTML = 'Please do not do this to me';

  const i = Math.floor(Math.random() * (valantineRect.width - noBtnRect.width)) + 1;
  const j = Math.floor(Math.random() * (valantineRect.height - noBtnRect.height)) + 1;

  noBtn.style.left = i + 'px';
  noBtn.style.top = j + 'px';
});

