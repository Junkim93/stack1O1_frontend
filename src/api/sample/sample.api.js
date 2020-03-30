import base from '@/api/index';

export default {
  getSample() {
    return base.get('getSample').catch(err => {
      if (err.request) {
        throw new Error(err.request);
      }
    });
  },

	setSample(payload) {
		return base.post('setSample', payload).catch(err => {
			if (err.request) {
				throw new Error(err.request);
			}
		})
	},
};
