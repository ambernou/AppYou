const app = new Vue({
  el: "#main_app",
  data: {
    tab: "1",
    appListUrl: "https://appyou.ru/app_list.json",
    appList: [],
    filteredAppList: [],
    filteredByCategoryAppList: [],
    shortAppList: [],
    // caterogyList: ["Финансы", "Бизнес", "Социальные сети"],
    // imgUrlBase: "../img/",
    infoForAppCard: {},
    showAppCard: false,
    error: false,
    isFiltered: false,
    amountShortListElements: 20,
    activCategory: "",
    tryToFind: false,
    // mobileDetect: "",
    // isiPhone: false,
    browserName: ""
  },
  methods: {
    tabChange(e) {
      let tabid = e.currentTarget.dataset.id;
      this.tab = tabid;
      this.showAppCard = false;
      this.filteredByCategoryAppList = [];
      this.tryToFind = false;
    },
    getJson(url) {
      return fetch(url)
        .then(result => result.json())
        .catch(error => this.error = true)
    },
    changeAppCard(app) {
      this.infoForAppCard = app;
      // this.showAppCard = true;
      this.tab = "card";
    },
    filter(userSearch) {
      if (userSearch !== '') {
        const regexp = new RegExp(userSearch, 'i');
        this.filteredAppList = this.appList.filter(el => regexp.test(el.title));
        this.isFiltered = true;
      } else {
        this.isFiltered = false;
      }
    },
    filteredByCategory(e) {
      this.activCategory = e.currentTarget.dataset.appcategory;
      if (this.tab == "3") {
        this.filteredByCategoryAppList = this.appList.filter(el => el.category == this.activCategory);
        this.filteredByCategoryAppList = this.filteredByCategoryAppList.filter(el => el.link_tgbot != "");
        this.filteredByCategoryAppList = this.filteredByCategoryAppList.sort(() => 0.5 - Math.random());
        this.tryToFind = true;
      } else {
        this.filteredByCategoryAppList = this.appList.filter(el => (el.category == this.activCategory) && (el.link_apk != "" || el.link_apk_xiaomi != "" || el.link_apk_huawei != "" || el.link_pwa != ""));
        this.filteredByCategoryAppList = this.filteredByCategoryAppList.sort(() => 0.5 - Math.random());
        this.tryToFind = true;
      }
    },
    startSearch() {
      this.tab = "1";
      this.$nextTick(() => {
        let el = document.getElementById("mainSearch");
        el.focus();
      });
    },
    installApp() {
      // Show the prompt
      console.log('install app');
      deferredPrompt.prompt();
      
      // installButton.disabled = true;
    
      // Wait for the user to respond to the prompt
      deferredPrompt.userChoice.then(choiceResult => {
        if (choiceResult.outcome === "accepted") {
          console.log("PWA setup accepted");
          // installButton.hidden = true;
        } else {
          console.log("PWA setup rejected");
        }
        // installButton.disabled = false;
        deferredPrompt = null;
      });
    }
  },
  created() {
    // this.mobileDetect = new MobileDetect(window.navigator.userAgent);
    // this.isiPhone = this.mobileDetect.is('iPhone');
    // console.log('iPhone? ', this.isiPhone);
    const parser = new UAParser();
    this.browserName = parser.getBrowser().name;
    console.log('Browser: ', this.browserName);
  },
  mounted() {
    this.getJson(this.appListUrl)
      .then(data => {
        for (let item of data){
          this.$data.appList.push(item);
          // this.$data.filteredAppList.push(item);
        }
        this.shortAppList = (this.appList.sort(() => 0.5 - Math.random())).slice(0, this.amountShortListElements);
      });
  }
});
