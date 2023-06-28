export const state = () => ({
    mobileWorksLoaded: false,
    homePageLoaded: false
});

export const mutations = {
    MOBILE_WORKS_LOADED(state, data) {
        state.mobileWorksLoaded = data;
    },
    HOME_PAGE_LOADED(state, data) {
        state.homePageLoaded = data;
    },
}

export const actions = {
    async setMobileWorksLoaded({ commit }) {
        commit('MOBILE_WORKS_LOADED', true);
    },
    async setHomePageLoaded({ commit }) {
        commit('HOME_PAGE_LOADED', true);
    }
}