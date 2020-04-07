<template>
  <button
    class="button"
    :class="`button-color--${color}`"
  >
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: 'normal', // 'normal' or 'primary'
    },
  },
};
</script>

<style lang="scss" scoped>
.button {
	appearance: none;
	border: none;
	font-family: sans-serif;
	padding: 8px 16px;
	border-radius: 2px;

	&-color--normal {
		background-color: #eee;
		color: #222;

		&:hover, &:focus {
			background-color: #e0e0e0;
		}
		&:active {
			background-color: #bdbdbd;
		}
	}

	&-color--primary {
		background-color: #2196f3;
		color: #fff;

		&:hover, &:focus {
			background-color: #1e88e5;
		}
		&:active {
			background-color: #1976D2;
		}
	}
}
</style>
