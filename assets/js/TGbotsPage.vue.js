Vue.component('Tgbotspage', {
    props: ['applist', 'category', 'trytofind'],
    template:
    `<div id="app_category" class="justify-content-center" style="margin-top: 20px;padding-bottom: 90px;">
        <div class="container" id="apps_category">
		<div class="row">
			<div class="col">
				<span class="app_block_title">
					<strong>Телеграм боты</strong>
					<br />
				</span>
			</div>
		</div>
            <ul class="list-group" id="list-group-category">
               
			   <a class="list-group-item list-group-item-action" href="#list-app-start" v-on:click="$root.filteredByCategory" data-appcategory="Бизнес">
                    <i class="la la-suitcase" style="font-size: 21px;margin-right: 10px;"></i>
                    <span>Бизнес</span>
                </a>
				<a class="list-group-item list-group-item-action" href="#list-app-start" v-on:click="$root.filteredByCategory" data-appcategory="Производительность">
                    <i class="la la-rocket" style="font-size: 21px;margin-right: 10px;"></i>
                    <span>Производительность</span>
                </a>
                <a class="list-group-item list-group-item-action" href="#list-app-start" v-on:click="$root.filteredByCategory" data-appcategory="Образ жизни">
                    <i class="la la-rocket" style="font-size: 21px;margin-right: 10px;"></i>
                    <span>Образ жизни</span>
                </a>	
                <a class="list-group-item list-group-item-action" href="#list-app-start" v-on:click="$root.filteredByCategory" data-appcategory="Игры">
                    <i class="la la-gamepad" style="font-size: 21px;margin-right: 10px;"></i>
                    <span>Игры</span>
                </a>
                <a class="list-group-item list-group-item-action" href="#list-app-start" v-on:click="$root.filteredByCategory" data-appcategory="Социальные сети">
                    <i class="la la-soccer-ball-o" style="font-size: 21px;margin-right: 10px;"></i>
                    <span>Социальные сети</span>
                </a>
                <a class="list-group-item list-group-item-action" href="#list-app-start" v-on:click="$root.filteredByCategory" data-appcategory="Музыка">
                    <i class="la la-music" style="font-size: 21px;margin-right: 10px;"></i>
                    <span>Музыка</span>
                </a>
            </ul>
            <div data-bs-spy="scroll" data-bs-target="#list-group-category" data-bs-offset="0" class="scrollspy-example" tabindex="0" v-if="trytofind">
                <div class="container app_block_title" style="margin-top: 0px;margin-bottom: 15px;" id="list-app-start">
                    <span class="app_block_title">
                        <strong>{{category}}</strong>
                    </span>
                </div>
                <div class="text-center" v-if="applist.length==0">Пока пусто, <a href="https://docs.google.com/forms/d/e/1FAIpQLSc4G09X5x7d_qfTewphnxwAxtxWftIzRiHW6_sDrAEUChfNKA/viewform" target="_blank">но можно добавить&nbsp;тут</a></div>
                <Applist :applist="applist" v-on:changeappcard="$root.changeAppCard"></Applist>
                <div class="text-center" v-if="applist.length != 0"><a href="https://docs.google.com/forms/d/e/1FAIpQLSc4G09X5x7d_qfTewphnxwAxtxWftIzRiHW6_sDrAEUChfNKA/viewform" target="_blank">Можно добавить&nbsp;тут</a></div>
            </div>
        </div>
    </div>`
});