import sampleAPI from '@/api/sample/sample.api.js';

const mutations = {
  SET_SAMPLE(state, sample) {
    state.sample = sample;
  },
};

const actions = {
  async setSample({ commit }, payload) {
    const { data: { sample } } = await sampleAPI.setSample(payload);
    commit('SET_SAMPLE', sample);
  }
};

const state = {
  samples: [],
};

const getters = {};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
