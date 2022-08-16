Vue.component('Applist', {
    props: ['applist'],
    template:
        `<div class="appList">
            <Appitem v-for="(item, idx) of applist"
                v-bind:key="item.id"
                v-bind:appitem="item"></Appitem>
        </div>`
});
{/* <div v-if="applist.length==0">Ничего не найдено</div> */}
Vue.component('Appitem', {
    props: ['appitem'],
    template:
        `<div class="container text-light justify-content-center" style="padding-right: 22px;height: 92px;">
            <div class="row" style="margin-left: -17px; " v-on:click="$parent.$emit('changeappcard', appitem)" >
                <div class="col-3 col-sm-2"><img :src="getImagePath(appitem.icon)" alt="App icon" class="line_app_pic"></div>
                <div class="col-6 col-sm-8" style="padding-right: 5px;padding-left: 0px;">
                    <p class="line_app_title" style="color: rgb(0,0,0);margin-bottom: 2px;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;text-align: left;"><strong>{{appitem.title}}</strong></p>
                    <p class="line_app_subtitle" style="color: var(--bs-gray-700);font-size: 13px;margin-bottom: 0px;">{{appitem.subtitle}}</p>
                </div>
                <div class="col-3 col-sm-2 text-center" style="padding-right: 0px;padding-left: 0px;" data-id="card"><button class="btn btn-primary d-inline-block" type="button" style="color: rgb(13,110,253);background: rgb(255,255,255);float: right;font-size: 14px;" v-on:click="$parent.$emit('changeappcard', appitem)">Открыть<br></button>
                
                </div>
            </div>
            <hr style="margin-top: 9px;margin-bottom: 0px;color: rgb(0,0,0);width: 104%;">
        </div>`,
    methods: {
        getImagePath(filename) {
            return `assets/img/${filename}`;
          }
    }
});
