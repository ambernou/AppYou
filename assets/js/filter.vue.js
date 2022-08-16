Vue.component('Filtercomponent', {
    data() {
        return {
            userSearch: ''
        }
    },
    template:
        `<form action="#" v-on:input="$root.filter(userSearch)">
            <div class="container visually-hidden1" id="search" style="margin-bottom: 20px;">
                <div class="input-group visually-hidden1">
                    <span class="input-group-text">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" class="bi bi-search" style="width: 25px;">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
                        </svg>
                    </span>
                    <input id="mainSearch" class="form-control" type="text" style="" placeholder="Поиск" v-model="userSearch" v-on:focus="focusOnInput" v-on:blur="blurInput">
                </div>
            </div>
        </form>`,
    methods: {
        focusOnInput() {
            const horiz = window.screen.width;
            if (horiz < 600) {
              const div = document.createElement("div");
              div.style.minHeight = "30vh";
            //   div.style.background = "black";
              div.setAttribute("id", "grid");
              document.body.appendChild(div);
            }    
        },
        blurInput() {
            const horiz = window.screen.width;
            if (horiz < 600) {
              const div = document.getElementById("grid");
              div.remove();
            }   
        }
    }
});