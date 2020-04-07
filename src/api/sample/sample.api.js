import base from '@/api/index';

export default {
  getSample() {
    return base.get('getSample');
  },

  setSample(payload) {
    return base.post('setSample', payload);
  },
};
