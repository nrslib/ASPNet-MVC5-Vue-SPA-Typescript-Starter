import Vue from "vue";
import VueRouter from "vue-router";
import Route from "./Routes";

/* Register your error handler
window.onerror = (msg, url, line, out, error) =>{
};

Vue.config.errorHandler = (err, vm, info) => {
};
*/

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes: Route
});

const app = new Vue({
    el: "#app",
    router: router
});