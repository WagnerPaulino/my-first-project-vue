import { ActionTree, StoreOptions } from 'vuex';
import GithubRepositorie from '@/domains/github-repositories';


const state: Array<GithubRepositorie> = [];

const getters = {
    findGithubRepositories: (): Array<GithubRepositorie> => {
        return state;
    }
}

const mutations = {
    setGithubRepositories: (state: Array<GithubRepositorie>, payload: Array<GithubRepositorie>): void => {
        state.splice(0, state.length)
        state.push(...payload);
    }
};

const actions: ActionTree<Array<GithubRepositorie>, Array<GithubRepositorie>> = {
    findAllRepos: async ({ commit }, user?: string) => {
        let response = null;
        if (user) {
            response = await fetch(`https://api.github.com/users/${user}/repos?page=1`);
        } else {
            response = await fetch(`https://api.github.com/users/WagnerPaulino/repos?page=1`);
        }
        commit('setGithubRepositories', await response.json());
    }
}

const GithubRepositorieStore: StoreOptions<Array<GithubRepositorie>> = {
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters
};

export default GithubRepositorieStore;