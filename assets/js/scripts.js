/* const divInstall = document.getElementById('installContainer');
const buttonInstall = document.getElementById('butInstall');
const publicKey = 'BBNYBIf-an8_2XyK-FQY_OPXN3EcXj0XVNUMhRM174_nAZizUAiVFTk-UMx7KRNFJRKBSU0wXWJ1YmEt6jN3-xQI'; */
// let detect = new MobileDetect(window.navigator.userAgent);


window.onload = (event) => {
  let myAlert = document.querySelectorAll('.toast')[0];
  if (myAlert) {
    let bsAlert = new bootstrap.Toast(myAlert);
    if (!localStorage.getItem('bsAlert')) {
      bsAlert.show();
      localStorage.setItem('bsAlert', 1);
    }	
  }
};

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('serviceWorker.js');
}


// // // // // // // // // // // // // // // // // // // // // // // // // // 

// Initialize deferredPrompt for use later to show browser install prompt.
let deferredPrompt;
const installButton = document.getElementById("install-appyou");
const installButtoniPhone = document.getElementById("install-appyou-iphone");

window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent the mini-infobar from appearing on mobile
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  // Update UI notify the user they can install the PWA
  // showInstallPromotion();
  // Optionally, send analytics event that PWA install promo was shown.
  console.log(`'beforeinstallprompt' event was fired.`);
});


/* buttonInstall.addEventListener('click', async () => {
  // Hide the app provided install promotion
  // hideInstallPromotion();
  // Show the install prompt
  deferredPrompt.prompt();
  // Wait for the user to respond to the prompt
  const { outcome } = await deferredPrompt.userChoice;
  // Optionally, send analytics event with outcome of user choice
  console.log(`User response to the install prompt: ${outcome}`);
  // We've used the prompt, and can't use it again, throw it away
  deferredPrompt = null;
}); */

window.addEventListener('appinstalled', (event) => {
  console.log('👍', 'appinstalled', event);
  // Очистить «deferredPrompt» для сборщика мусора
  window.deferredPrompt = null;
});
///////////////////////////////////////

// butInstall.addEventListener('click', async () => {
//   console.log('👍', 'butInstall-clicked');
//   const promptEvent = window.deferredPrompt;
//   if (!promptEvent) {
//     // Отложенный запрос недоступен.
//     return;
//   }
//   // Показать запрос на установку.
//   promptEvent.prompt();
//   // Записать результат в журнал.
//   const result = await promptEvent.userChoice;
//   console.log('👍', 'userChoice', result);
//   // Сбросить переменную отложенного запроса:
//   // prompt() можно вызвать только один раз.
//   window.deferredPrompt = null;
//   // Скрыть кнопку установки.
//   divInstall.classList.toggle('hidden', true);
// });

window.onscroll = () => {
  toggleTopButton();
}
function scrollToTop(){
  window.scrollTo({top: 0, behavior: 'smooth'});
}

function toggleTopButton() {
  if (document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20) {
    document.getElementById('back-to-up').classList.remove('d-none');
  } else {
    document.getElementById('back-to-up').classList.add('d-none');
  }
}

console.log("%cПривет, %friend%", "background: lightgrey; color: black; font-size: large");
console.log("%cСделано простенько? Это всего лишь MVP", "background: lightgrey; color: black; font-size: large");
console.log("%cВсегда можно докрутить или переделать :-)",  "background: lightgrey; color: black; font-size: large");
console.log("%cХочешь помочь в разработке пиши сюда appyou-dev@mail.ru с пометкой 'хочу в команду'",  "background: lightgrey; color: black; font-size: large");
console.log("%cНо пока инвесторов нет, только за опцион.",  "background: lightgrey; color: black; font-size: large");