Vue.component('Appcard', {
    props: ['appcardinfo'],
    template:
        `<div id="open_app_page" class="justify-content-center" style="margin-top: 20px;">
            <div class="container text-light justify-content-center">
                <div class="row" style="margin-left: -17px;">
                    <div class="col-4 col-sm-2"><img :src="getImagePath(appcardinfo.icon)" alt="App icon" class="line_app_pic_big" ></div>
                    <div class="col-8 col-sm-8" style="padding-right: 5px;padding-left: 0px;">
                        <p class="h4" style="color: rgb(0,0,0);margin-bottom: 2px;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;text-align: left;"><strong>{{appcardinfo.title}}</strong></p>
                        <p class="open_app_subtitle" style="color: var(--bs-gray-700);font-size: 13px;margin-bottom: 0px;">{{appcardinfo.subtitle}}</p>
                        <div style="height: 35px;"></div>
                    </div>
				
                </div>
				
            </div>
            

            <div class="container mb-2">
				<hr style="color: rgb(50,56,61);border-width: 0px;border-style: solid;" />
                <div class="row">
					<span class="d-block" style="font-size: 17px;color: var(--bs-body-color);text-align: center;margin-bottom: 12px;">Выбери свою операционную систему</span>
                    <div class="col-6 col-sm-6 col-md-6 offset-0 col-lg-6 col-">

                        <a id="gotoapp_ios-1" class="btn btn-primary btn-md ripple w-100 appbutton shadow-sm" type="button" :href="appcardinfo.link_pwa" target="_blank" v-if="appcardinfo.link_pwa">
                            <img class="opacity-50" src="assets/img/ios-logo-mini.png" style="width: 44px;" /><br />
                            iPhone<br />
                        </a>
                        <a id="gotoapp_pwa-1" class="btn btn-primary btn-md ripple w-100 appbutton shadow-sm" type="button" :href="appcardinfo.link_pwa" target="_blank" v-if="appcardinfo.link_pwa">
                            <img class="opacity-50" src="assets/img/pwa_logo_mini.png" style="width: 44px;" /><br />
                            Веб-приложение<br />
                        </a>
                        <a id="gotoapp_telegram_bot-1" class="btn btn-primary btn-md ripple w-100 appbutton shadow-sm" type="button" :href="appcardinfo.link_tgbot" target="_blank" v-if="appcardinfo.link_tgbot">
                            <img class="opacity-50" src="assets/img/telegram-logo-mini.png" style="width: 44px;" /><br />
                            Telegram Bot<br />
                        </a>						
                    </div>
                    <div class="col-6 col-sm-6 col-md-6 col-lg-6">
                        <a id="gotoapp_android-1" class="btn btn-primary btn-md ripple w-100 appbutton shadow-sm" type="button" :href="appcardinfo.link_apk" target="_blank" v-if="appcardinfo.link_apk">
                            <img class="opacity-50" src="assets/img/android_logo_mini2.png" style="width: 44px;" /><br />
                            Android<br />
                        </a>                        
						<a id="gotoapp_xiaomi-1" class="btn btn-primary btn-md ripple w-100 appbutton shadow-sm" type="button" :href="appcardinfo.link_apk_xiaomi" target="_blank" v-if="appcardinfo.link_apk_xiaomi">
                            <img class="opacity-50" src="assets/img/xiaomi_logo_mini.png" style="width: 44px;" /><br />
                            Xiaomi<br />
                        </a>
                        <a id="gotoapp_huawei-1" class="btn btn-primary btn-md ripple w-100 appbutton shadow-sm" type="button" :href="appcardinfo.link_apk_huawei" target="_blank" v-if="appcardinfo.link_apk_huawei">
                            <img class="opacity-50" src="assets/img/huawei-logo-mini.png" style="width: 44px;" /><br />
                            Huawei<br />
                        </a>

                    </div>    
                </div>
            </div>
        </div>`,
    methods: {
        getImagePath(filename) {
            return `assets/img/${filename}`;
        }
    }
});

{/* <div class="open_app_buttons"><span class="d-block" style="font-size: 14px;color: var(--bs-body-color);" v-if="appcardinfo.link_apk">Для Android</span><a :href="appcardinfo.link_apk" target="_blank" v-if="appcardinfo.link_apk"><button class="btn btn-primary btn-lg ripple" id="butInstall" type="button" style="color: rgb(13,110,253);background: rgb(255,255,255);font-size: 18px;margin-right: 10px;">Скачать</button></a></div>
                <div class="open_app_buttons"><span class="d-block" style="font-size: 14px;color: var(--bs-body-color);" v-if="appcardinfo.link_apk_xiaomi">Для Xiaomi</span><a :href="appcardinfo.link_apk_xiaomi" target="_blank" v-if="appcardinfo.link_apk_xiaomi"><button class="btn btn-primary btn-lg ripple" id="butInstall" type="button" style="color: rgb(13,110,253);background: rgb(255,255,255);font-size: 18px;margin-right: 10px;">Скачать</button></a></div>
                <div class="open_app_buttons"><span class="d-block" style="font-size: 14px;color: var(--bs-body-color);" v-if="appcardinfo.link_apk_huawei">Для Huawei</span><a :href="appcardinfo.link_apk_huawei" target="_blank" v-if="appcardinfo.link_apk_huawei"><button class="btn btn-primary btn-lg ripple" id="butInstall-1" type="button" style="color: rgb(13,110,253);background: rgb(255,255,255);font-size: 18px;margin-right: 10px;">Скачать</button></a></div>
                <div class="open_app_buttons"><span class="d-block" style="font-size: 14px;color: var(--bs-body-color);" v-if="appcardinfo.link_pwa">Для iOS</span><a :href="appcardinfo.link_pwa" target="_blank" v-if="appcardinfo.link_pwa"><button class="btn btn-primary btn-lg ripple" type="button" style="color: rgb(13,110,253);background: rgb(255,255,255);font-size: 18px;margin-right: 10px;">Скачать</button></a></div>
                <div class="open_app_buttons"><span class="d-block" style="font-size: 14px;color: var(--bs-body-color);" v-if="appcardinfo.link_tgbot">Telegram</span><a :href="appcardinfo.link_tgbot" target="_blank" v-if="appcardinfo.link_tgbot"><button class="btn btn-primary btn-lg ripple" type="button" style="color: rgb(13,110,253);background: rgb(255,255,255);font-size: 18px;margin-right: 10px;">Скачать</button></a></div> */}