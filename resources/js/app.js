/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
 
require("./bootstrap");

window.Vue = require("vue");
import { Form, HasError, AlertError } from "vform";
import moment from "moment";
import VueRouter from "vue-router";
import VueProgressBar from "vue-progressbar";
import swal from "sweetalert2";
import "@progress/kendo-ui/js/kendo.grid";
import "@progress/kendo-theme-default/dist/all.css";
import { Grid, GridInstaller } from "@progress/kendo-grid-vue-wrapper";


//AG Grid
import { AgGridVue } from "ag-grid-vue";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
window.AgGridVue = AgGridVue;
window.moment = moment;
//End AG Grid
Vue.use(GridInstaller);

window.Form = Form;
window.swal = swal;

const toast = swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    onOpen: toast => {
        toast.addEventListener("mouseenter", swal.stopTimer);
        toast.addEventListener("mouseleave", swal.resumeTimer);
    }
});
//NIQUE ADD ONS
import jsPDF from "jspdf";
Vue.use(jsPDF);
import autoTable from "jspdf-autotable";

import vueNumeralFilterInstaller from "vue-numeral-filter";

Vue.use(vueNumeralFilterInstaller, { locale: "en-gb" });

//END NIQUE ADD ONS
// Dave
Vue.filter("formatDate", function(value) {
    if (value) {
        return moment(String(value)).format("MMM DD, YYYY");
    }
});
Vue.filter("formatNumber", function(value) {
    if (value) {
        var digits = 2;
        if (digits === undefined) {
            digits = 0;
        }

        var multiplicator = Math.pow(10, digits);
        value = parseFloat((value * multiplicator).toFixed(11));
        var number = (Math.round(value) / multiplicator).toFixed(2);
        var dec = number.toString().split(".");
        if (dec.length == 1) {
            return (
                dec[0].replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") + "." + "00"
            );
        } else {
            return (
                dec[0].replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") +
                "." +
                dec[1].padEnd(2, "0")
            );
        }
    }
});
// End Dave

window.toast = toast;
window.Fire = new Vue();

import Logo from "./logo.js";
window.Logo = Logo;
Vue.component(HasError.name, HasError);
Vue.component(AlertError.name, AlertError);

Vue.use(VueRouter);

import routes from "./routes";

const router = new VueRouter({
    mode: "history",
    routes
});

Vue.use(VueProgressBar, {
    color: "rgb(143, 255, 199)",
    failedColor: "red",
    height: "2px"
});

//NIQUE ADD ONS

//END NIQUE ADDONS
import BootstrapVue from "bootstrap-vue";

Vue.use(BootstrapVue);

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component(
    "example-component",
    require("./components/ExampleComponent.vue").default
);
Vue.component(
    "billing-signatories",
    require("./components/BillingSignatoriesComponent.vue").default
);
Vue.component("pagination", require("laravel-vue-pagination"));

Vue.component(
    "passport-clients",
    require("./components/passport/Clients.vue").default
);

Vue.component(
    "passport-authorized-clients",
    require("./components/passport/AuthorizedClients.vue").default
);

Vue.component(
    "passport-personal-access-tokens",
    require("./components/passport/PersonalAccessTokens.vue").default
);
// Vue.component('search-signatory', require('./components/search/SearchSignatory.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: "#app",
    router,
    components: {
        Grid
    },
    data: {
        search: "",
        signatories: {},
        soas: {} //searchDmpiDar
    },
    methods: {
        searchit: _.debounce(() => {
            Fire.$emit("searching");
            //NIQUE ADD ONS
            Fire.$emit("searchingDriver");
            Fire.$emit("searchingOperator");
            Fire.$emit("searchingVehicle");
            Fire.$emit("searchingVehicleType");
            Fire.$emit("searchingVehicleRate");
            Fire.$emit("searchingJVL");
            Fire.$emit("searchingJVCP");
            Fire.$emit("searchingClient");
            Fire.$emit("searchingSOA");
            //END NIQUE ADD ONS
        }, 500),
        getSignatories() {
            axios
                .get("/api/getSignatories")
                .then(({ data }) => {
                    this.signatories = data;
                })
                .catch(err => {
                    console.log(err);
                });
        },
        toCapitalizeFirstLetter(str) {
            str = str
                .toLowerCase()
                .replace(
                    /^[\u00C0-\u1FFF\u2C00-\uD7FF\w]|\s[\u00C0-\u1FFF\u2C00-\uD7FF\w]/g,
                    function(letter) {
                        return letter.toUpperCase();
                    }
                );
            return str;
        },
        //NIQUE ADD ONS
        getSearchDriver() {
            axios
                .get("/api/getSearchDriver")
                .then(({ data }) => {
                    this.drivers = data;
                })
                .catch(err => {
                    console.log(err);
                });
        },
        getSearchOperator() {
            axios
                .get("/api/getSearchOperator")
                .then(({ data }) => {
                    this.operators = data;
                })
                .catch(err => {
                    console.log(err);
                });
        },
        getSearchVehicle() {
            axios
                .get("/api/getSearchVehicle")
                .then(({ data }) => {
                    this.vehicles = data;
                })
                .catch(err => {
                    console.log(err);
                });
        },
        getSearchVehicleType() {
            axios
                .get("/api/getSearchVehicleType")
                .then(({ data }) => {
                    this.vehicletypes = data;
                })
                .catch(err => {
                    console.log(err);
                });
        },
        getSearchVehicleRate() {
            axios
                .get("/api/getSearchVehicleRate")
                .then(({ data }) => {
                    this.vehiclerates = data;
                })
                .catch(err => {
                    console.log(err);
                });
        },
        getSearchJVL() {
            axios
                .get("/api/getSearchJVL")
                .then(({ data }) => {
                    this.jeepvehiclelog = data;
                })
                .catch(err => {
                    console.log(err);
                });
        },
        getSearchJVCP() {
            axios
                .get("/api/getSearchJVCP")
                .then(({ data }) => {
                    this.jvcps = data;
                })
                .catch(err => {
                    console.log(err);
                });
        },
        getSearchClient() {
            axios
                .get("/api/getSearchClient")
                .then(({ data }) => {
                    this.clients = data;
                })
                .catch(err => {
                    console.log(err);
                });
        },
        getSearchSOA() {
            axios
                .get("/api/getSearchSOA")
                .then(({ data }) => {
                    this.csoas = data;
                })
                .catch(err => {
                    console.log(err);
                });
        },
        currencyFormatter(params) {
            return (
                Math.floor(params.value)
                    .toString()
                    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") +
                "." +
                "00"
            );
        },
        //END NIQUE ADD ONS
        // Dave
        formatNumber(str) {
            var string = str.toString();
            while (string.search(",") >= 0) {
                string = (string + "").replace(",", "");
            }
            return parseFloat(string);
        },
        formatNumberComma(num) {
            var dec = num.toString().split(".");
            return (
                dec[0].replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") + "." + dec[1]
            );
        },
        formatNumberCommaRound(num) {
            if (!num) {
                return "0.00";
            }
            var number = this.roundTo(num);
            var dec = number.toString().split(".");
            if (dec.length == 1) {
                return (
                    dec[0].replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") +
                    "." +
                    "00"
                );
            } else {
                return (
                    dec[0].replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") +
                    "." +
                    dec[1].padEnd(2, "0")
                );
            }
        },
        roundTo(n) {
            var digits = 2;
            if (digits === undefined) {
                digits = 0;
            }

            var multiplicator = Math.pow(10, digits);
            n = parseFloat((n * multiplicator).toFixed(11));
            return (Math.round(n) / multiplicator).toFixed(2);
        },
        formatDate(date) {
            var d = new Date(date),
                month = "" + (d.getMonth() + 1),
                day = "" + d.getDate(),
                year = d.getFullYear();

            if (month.length < 2) month = "0" + month;
            if (day.length < 2) day = "0" + day;

            return [year, month, day].join("-");
        },
        formatDateMonth(date) {
            var d = new Date(date),
                month = "" + (d.getMonth() + 1),
                day = "" + d.getDate(),
                year = d.getFullYear();

            if (month.length < 2) month = "0" + month;
            if (day.length < 2) day = "0" + day;

            return [year, month].join("-");
        },
        formatDateYear(date) {
            var d = new Date(date),
                month = "" + (d.getMonth() + 1),
                day = "" + d.getDate(),
                year = d.getFullYear();

            if (month.length < 2) month = "0" + month;
            if (day.length < 2) day = "0" + day;

            return [year].join("-");
        },
        number2word(n, custom_join_character) {
            var string = n.toString(),
                units, tens, scales, start, end, chunks, chunksLen, chunk, ints, i, word, words;
        
            var and = custom_join_character || 'and';
        
            /* Is number zero? */
            if (parseInt(string) === 0) {
                return 'zero';
            }
        
            /* Array of units as words */
            units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
        
            /* Array of tens as words */
            tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
        
            /* Array of scales as words */
            scales = ['', 'thousand', 'million', 'billion', 'trillion', 'quadrillion', 'quintillion', 'sextillion', 'septillion', 'octillion', 'nonillion', 'decillion', 'undecillion', 'duodecillion', 'tredecillion', 'quatttuor-decillion', 'quindecillion', 'sexdecillion', 'septen-decillion', 'octodecillion', 'novemdecillion', 'vigintillion', 'centillion'];
        
            /* Split user arguemnt into 3 digit chunks from right to left */
            start = string.length;
            chunks = [];
            while (start > 0) {
                end = start;
                chunks.push(string.slice((start = Math.max(0, start - 3)), end));
            }
        
            /* Check if function has enough scale words to be able to stringify the user argument */
            chunksLen = chunks.length;
            if (chunksLen > scales.length) {
                return '';
            }
        
            /* Stringify each integer in each chunk */
            words = [];
            for (i = 0; i < chunksLen; i++) {
        
                chunk = parseInt(chunks[i]);
        
                if (chunk) {
        
                    /* Split chunk into array of individual integers */
                    ints = chunks[i].split('').reverse().map(parseFloat);
        
                    /* If tens integer is 1, i.e. 10, then add 10 to units integer */
                    if (ints[1] === 1) {
                        ints[0] += 10;
                    }
        
                    /* Add scale word if chunk is not zero and array item exists */
                    if ((word = scales[i])) {
                        words.push(word);
                    }
        
                    /* Add unit word if array item exists */
                    if ((word = units[ints[0]])) {
                        words.push(word);
                    }
        
                    /* Add tens word if array item exists */
                    if ((word = tens[ints[1]])) {
                        words.push(word);
                    }
        
                    /* Add 'and' string after units or tens integer if: */
                    if (ints[0] || ints[1]) {
        
                        /* Chunk has a hundreds integer or chunk is the first of multiple chunks */
                        if (ints[2] || !i && chunksLen) {
                            words.push(and);
                        }
        
                    }
        
                    /* Add hundreds word if array item exists */
                    if ((word = units[ints[2]])) {
                        words.push(word + ' hundred');
                    }
        
                }
        
            }
        
            return words.reverse().join(' ');
        
        }
        // end of dave
    }
});
