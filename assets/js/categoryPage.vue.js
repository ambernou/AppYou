Vue.component('Categorypage', {
    props: ['applist', 'category', 'trytofind'],
    template:
    `<div id="app_category" class="justify-content-center" style="margin-top: 20px;padding-bottom: 90px;">
        <div class="container" id="apps_category">
		<div class="row">
			<div class="col">
				<span class="app_block_title">
					<strong>Приложения</strong>
					<br />
				</span>
			</div>
		</div>

            <ul class="list-group" id="list-group-category">
                <a class="list-group-item list-group-item-action" href="#list-app-start" v-on:click="$root.filteredByCategory" data-appcategory="Финансы">
                    <i class="la la-bank" style="font-size: 21px;margin-right: 10px;"></i>
                    <span>Банки и финансы</span>
                </a>
                <a class="list-group-item list-group-item-action" href="#list-app-start" v-on:click="$root.filteredByCategory" data-appcategory="Бизнес">
                    <i class="la la-suitcase" style="font-size: 21px;margin-right: 10px;"></i>
                    <span>Бизнес</span>
                </a>
                <a class="list-group-item list-group-item-action" href="#list-app-start" v-on:click="$root.filteredByCategory" data-appcategory="Социальные сети">
                    <i class="la la-comments" style="font-size: 21px;margin-right: 10px;"></i>
                    <span>Социальные сети</span>
                </a>
				<a class="list-group-item list-group-item-action" href="#list-app-start" v-on:click="$root.filteredByCategory" data-appcategory="Производительность">
                    <i class="la la-rocket" style="font-size: 21px;margin-right: 10px;"></i>
                    <span>Производительность</span>
                </a>
                <a class="list-group-item list-group-item-action" href="#list-app-start" v-on:click="$root.filteredByCategory" data-appcategory="Образование">
                    <i class="la la-graduation-cap" style="font-size: 21px;margin-right: 10px;"></i>
                    <span>Образование</span>
                </a>
                <a class="list-group-item list-group-item-action" href="#list-app-start" v-on:click="$root.filteredByCategory" data-appcategory="Образ жизни">
                    <i class="la la-rocket" style="font-size: 21px;margin-right: 10px;"></i>
                    <span>Образ жизни</span>
                </a>				
				<a class="list-group-item list-group-item-action" href="#list-app-start" v-on:click="$root.filteredByCategory" data-appcategory="Игры">
                    <i class="la la-gamepad" style="font-size: 21px;margin-right: 10px;"></i>
                    <span>Игры</span>
                </a>
                <a class="list-group-item list-group-item-action disabled" href="#list-app-start" v-on:click="$root.filteredByCategory" data-appcategory="Новости">
                    <i class="la la-bullhorn" style="font-size: 21px;margin-right: 10px;"></i>
                    <span>Новости</span>
                </a>
				<a class="list-group-item list-group-item-action disabled" href="#list-app-start" v-on:click="$root.filteredByCategory" data-appcategory="Газеты и журналы">
                    <i class="la la-newspaper-o" style="font-size: 21px;margin-right: 10px;"></i>
                    <span>Газеты и журналы</span>
                </a>
                <a class="list-group-item list-group-item-action disabled" href="#list-app-start" v-on:click="$root.filteredByCategory" data-appcategory="Графика и дизайн">
                    <i class="la la-image" style="font-size: 21px;margin-right: 10px;"></i>
                    <span>Графика и дизайн</span>
                </a>
                <a class="list-group-item list-group-item-action disabled" href="#list-app-start" v-on:click="$root.filteredByCategory" data-appcategory="Дети">
                    <i class="la la-child" style="font-size: 21px;margin-right: 10px;"></i>
                    <span>Дети</span>
                </a>
                <a class="list-group-item list-group-item-action disabled" href="#list-app-start" v-on:click="$root.filteredByCategory" data-appcategory="Еда и напитки">
                    <i class="la la-lemon-o" style="font-size: 21px;margin-right: 10px;"></i>
                    <span>Еда и напитки</span>
                </a>
                <a class="list-group-item list-group-item-action disabled" href="#list-app-start" v-on:click="$root.filteredByCategory" data-appcategory="Здоровье и фитнес">
                    <i class="la la-heart-o" style="font-size: 21px;margin-right: 10px;"></i>
                    <span>Здоровье и фитнес</span>
                </a>
                <a class="list-group-item list-group-item-action disabled" href="#list-app-start" v-on:click="$root.filteredByCategory" data-appcategory="Книги">
                    <i class="la la-book" style="font-size: 21px;margin-right: 10px;"></i>
                    <span>Книги</span>
                </a>
                <a class="list-group-item list-group-item-action disabled" href="#list-app-start" v-on:click="$root.filteredByCategory" data-appcategory="Медицина">
                    <i class="la la-medkit" style="font-size: 21px;margin-right: 10px;"></i>
                    <span>Медицина</span>
                </a>
                <a class="list-group-item list-group-item-action disabled" href="#list-app-start" v-on:click="$root.filteredByCategory" data-appcategory="Музыка">
                    <i class="la la-music" style="font-size: 21px;margin-right: 10px;"></i>
                    <span>Музыка</span>
                </a>
                <a class="list-group-item list-group-item-action disabled" href="#list-app-start" v-on:click="$root.filteredByCategory" data-appcategory="Навигация">
                    <i class="la la-map" style="font-size: 21px;margin-right: 10px;"></i>
                    <span>Навигация</span>
                </a>
                <a class="list-group-item list-group-item-action disabled" href="#list-app-start" v-on:click="$root.filteredByCategory" data-appcategory="Погода">
                    <i class="la la-sun-o" style="font-size: 21px;margin-right: 10px;"></i>
                    <span>Погода</span>
                </a>
                <a class="list-group-item list-group-item-action disabled" href="#list-app-start" v-on:click="$root.filteredByCategory" data-appcategory="Покупки">
                    <i class="la la-shopping-cart" style="font-size: 21px;margin-right: 10px;"></i>
                    <span>Покупки</span>
                </a>				
				<a class="list-group-item list-group-item-action disabled" href="#list-app-start" v-on:click="$root.filteredByCategory" data-appcategory="Путешествия">
                    <i class="la la-plane" style="font-size: 21px;margin-right: 10px;"></i>
                    <span>Путешествия</span>
                </a>
				<a class="list-group-item list-group-item-action disabled" href="#list-app-start" v-on:click="$root.filteredByCategory" data-appcategory="Развлечения">
                    <i class="la la-smile-o" style="font-size: 21px;margin-right: 10px;"></i>
                    <span>Развлечения</span>
                </a>
				<a class="list-group-item list-group-item-action disabled" href="#list-app-start" v-on:click="$root.filteredByCategory" data-appcategory="Спорт">
                    <i class="la la-soccer-ball-o" style="font-size: 21px;margin-right: 10px;"></i>
                    <span>Спорт</span>
                </a>
				<a class="list-group-item list-group-item-action disabled" href="#list-app-start" v-on:click="$root.filteredByCategory" data-appcategory="Справочники">
                    <i class="la la-search" style="font-size: 21px;margin-right: 10px;"></i>
                    <span>Справочники</span>
                </a>
				<a class="list-group-item list-group-item-action disabled" href="#list-app-start" v-on:click="$root.filteredByCategory" data-appcategory="Утилиты">
                    <i class="la la-calculator" style="font-size: 21px;margin-right: 10px;"></i>
                    <span>Утилиты</span>
                </a>
				<a class="list-group-item list-group-item-action disabled" href="#list-app-start" v-on:click="$root.filteredByCategory" data-appcategory="Фото и видео">
                    <i class="la la-camera" style="font-size: 21px;margin-right: 10px;"></i>
                    <span>Фото и видео</span>
                </a>	

            </ul>
            <div data-bs-spy="scroll" data-bs-target="#list-group-category" data-bs-offset="0" class="scrollspy-example" tabindex="0" v-if="trytofind">
                <div class="container" style="margin-top: 0px;margin-bottom: 15px;" id="list-app-start">
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