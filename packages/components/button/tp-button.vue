<template>
	<button :class="classes" :disabled="disabled">
		<slot />
	</button>
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue';
import { createNamespace } from '@tak-poidet/utility';
import { useClasses } from '@tak-poidet/composables';
import { useButtonProps } from './button';

const ns = createNamespace('button');
const props = defineProps({ ...useButtonProps() });
const classes = useClasses(() => [
	ns.base(),
	ns.modifier(props.type),
	ns.is('round', props.round),
	ns.is('text', !!props.text),
	ns.is('link', !!props.link),
	ns.is('circle', !!props.circle),
	ns.is('outline', !!props.outline),
	ns.is('block', !!props.block)
]);
const disabled = computed(() => props.disabled);
</script>

<style lang="scss">
@use '@tak-poidet/styles/typographic';

:root {
	--tp--button--padding-x: var(--spasing-xl);
	--tp--button--padding-y: var(--spasing-md);
	--tp--button--padding: var(--tp--button--padding-y) var(--tp--button--padding-x);
	--tp--button--font-family: var(--font-family-body);
	--tp--button--font-size: var(--font-size-body);
	--tp--button--font-weight: var(--font-weight-body--regular);
	--tp--button--line-height: var(--line-height-body);
	--tp--button--radius: var(--radius-sm);
	--tp--button--is-round--radius: var(--radius-max);
	--tp--button--disabled--opacity: var(--opacity-md);
	--tp--button--background: var(--color-secondary--base);
	--tp--button--hover--background: var(--color-secondary--dark-1);
	--tp--button--active--background: var(--color-secondary--dark-2);
	--tp--button--color: var(--color-secondary--invert);
	--tp--button--boder: currentcolor;
}

.tp-button {
	$self: &;

	padding: var(--tp--button--padding);
	color: var(--tp--button--color);
	font-weight: var(--tp--button--font-weight);
	font-size: var(--tp--button--font-size);
	font-family: var(--tp--button--font-family);
	line-height: var(--tp--button--line-height);
	background-color: var(--tp--button--background);
	border-radius: var(--tp--button--radius);
	transition: background-color 200ms ease-in, color 200ms ease-in, border 200ms ease-in;

	&:disabled {
		cursor: not-allowed;
		opacity: var(--tp--button--disabled--opacity);
	}

	@media (hover: hover) {
		cursor: pointer;

		&:hover:not(&:disabled) {
			background-color: var(--tp--button--hover--background);
		}
	}

	&:active:not(&:disabled) {
		background-color: var(--tp--button--active--background);
	}

	&#{$self}--primary {
		--tp--button--background: var(--color-brand--base);
		--tp--button--hover--background: var(--color-brand--dark-1);
		--tp--button--active--background: var(--color-brand--dark-2);
		--tp--button--color: var(--color-brand--invert);

		&#{$self}--is-outline,
		&#{$self}--is-text,
		&#{$self}--is-link {
			--tp--button--color: var(--color-brand--dark-1);
		}

		&#{$self}--is-outline,
		&#{$self}--is-text {
			@media (hover: hover) {
				&:hover:not(&:disabled) {
					--tp--button--hover--background: var(--color-brand--extra-light);
				}
			}

			&:active:not(&:disabled) {
				--tp--button--color: var(--color-brand--invert);
			}
		}

		&#{$self}--is-link {
			@media (hover: hover) {
				&:hover:not(&:disabled) {
					--tp--button--color: var(--color-brand--light-1);
				}
			}

			&:active:not(&:disabled) {
				--tp--button--color: var(--color-brand--dark-2);
			}
		}
	}

	&#{$self}--secondary {
		--tp--button--background: var(--color-secondary--base);
		--tp--button--hover--background: var(--color-secondary--dark-1);
		--tp--button--active--background: var(--color-secondary--dark-2);
		--tp--button--color: var(--color-secondary--invert);

		&#{$self}--is-outline,
		&#{$self}--is-text,
		&#{$self}--is-link {
			--tp--button--color: var(--color-secondary--dark-1);
		}

		&#{$self}--is-outline,
		&#{$self}--is-text {
			@media (hover: hover) {
				&:hover:not(&:disabled) {
					--tp--button--hover--background: var(--color-secondary--extra-light);
				}
			}

			&:active:not(&:disabled) {
				--tp--button--color: var(--color-secondary--invert);
			}
		}

		&#{$self}--is-link {
			@media (hover: hover) {
				&:hover:not(&:disabled) {
					--tp--button--color: var(--color-secondary--light-1);
				}
			}

			&:active:not(&:disabled) {
				--tp--button--color: var(--color-secondary--dark-2);
			}
		}
	}

	&#{$self}--warning {
		--tp--button--background: var(--color-warning--base);
		--tp--button--hover--background: var(--color-warning--dark-1);
		--tp--button--active--background: var(--color-warning--dark-2);
		--tp--button--color: var(--color-warning--invert);

		&#{$self}--is-outline,
		&#{$self}--is-text,
		&#{$self}--is-link {
			--tp--button--color: var(--color-warning--dark-1);
		}

		&#{$self}--is-outline,
		&#{$self}--is-text {
			@media (hover: hover) {
				&:hover:not(&:disabled) {
					--tp--button--hover--background: var(--color-warning--extra-light);
				}
			}

			&:active:not(&:disabled) {
				--tp--button--color: var(--color-warning--invert);
			}
		}

		&#{$self}--is-link {
			@media (hover: hover) {
				&:hover:not(&:disabled) {
					--tp--button--color: var(--color-warning--light-1);
				}
			}

			&:active:not(&:disabled) {
				--tp--button--color: var(--color-warning--dark-2);
			}
		}
	}

	&#{$self}--info {
		--tp--button--background: var(--color-info--base);
		--tp--button--hover--background: var(--color-info--dark-1);
		--tp--button--active--background: var(--color-info--dark-2);
		--tp--button--color: var(--color-info--invert);

		&#{$self}--is-outline,
		&#{$self}--is-text,
		&#{$self}--is-link {
			--tp--button--color: var(--color-info--dark-1);
		}

		&#{$self}--is-outline,
		&#{$self}--is-text {
			@media (hover: hover) {
				&:hover:not(&:disabled) {
					--tp--button--hover--background: var(--color-info--extra-light);
				}
			}

			&:active:not(&:disabled) {
				--tp--button--color: var(--color-info--invert);
			}
		}

		&#{$self}--is-link {
			@media (hover: hover) {
				&:hover:not(&:disabled) {
					--tp--button--color: var(--color-info--light-1);
				}
			}

			&:active:not(&:disabled) {
				--tp--button--color: var(--color-info--dark-2);
			}
		}
	}

	&#{$self}--danger {
		--tp--button--background: var(--color-danger--base);
		--tp--button--hover--background: var(--color-danger--dark-1);
		--tp--button--active--background: var(--color-danger--dark-2);
		--tp--button--color: var(--color-danger--invert);

		&#{$self}--is-outline,
		&#{$self}--is-text,
		&#{$self}--is-link {
			--tp--button--color: var(--color-danger--dark-1);
		}

		&#{$self}--is-outline,
		&#{$self}--is-text {
			@media (hover: hover) {
				&:hover:not(&:disabled) {
					--tp--button--hover--background: var(--color-danger--extra-light);
				}
			}

			&:active:not(&:disabled) {
				--tp--button--color: var(--color-danger--invert);
			}
		}

		&#{$self}--is-link {
			@media (hover: hover) {
				&:hover:not(&:disabled) {
					--tp--button--color: var(--color-danger--light-1);
				}
			}

			&:active:not(&:disabled) {
				--tp--button--color: var(--color-danger--dark-2);
			}
		}
	}

	&#{$self}--success {
		--tp--button--background: var(--color-success--base);
		--tp--button--hover--background: var(--color-success--dark-1);
		--tp--button--active--background: var(--color-success--dark-2);
		--tp--button--color: var(--color-success--invert);

		&#{$self}--is-outline,
		&#{$self}--is-text,
		&#{$self}--is-link {
			--tp--button--color: var(--color-success--dark-1);
		}

		&#{$self}--is-outline,
		&#{$self}--is-text {
			@media (hover: hover) {
				&:hover:not(&:disabled) {
					--tp--button--hover--background: var(--color-success--extra-light);
				}
			}

			&:active:not(&:disabled) {
				--tp--button--color: var(--color-success--invert);
			}
		}

		&#{$self}--is-link {
			@media (hover: hover) {
				&:hover:not(&:disabled) {
					--tp--button--color: var(--color-success--light-1);
				}
			}

			&:active:not(&:disabled) {
				--tp--button--color: var(--color-success--dark-2);
			}
		}
	}

	&#{$self}--is-outline {
		padding: calc(var(--tp--button--padding-y) - 1px) calc(var(--tp--button--padding-x) - 1px);
		background-color: transparent;
		border: 1px solid var(--tp--button--boder);

		&:active:not(&:disabled) {
			--tp--button--boder: var(--tp--button--active--background);
		}
	}

	&#{$self}--is-text,
	&#{$self}--is-link {
		background-color: transparent;
	}

	&#{$self}--is-link {
		@media (hover: hover) {
			&:hover:not(&:disabled) {
				text-decoration: underline;
				background: var(--color-transparent);
			}
		}
	}

	&#{$self}--is-round {
		border-radius: var(--tp--button--is-round--radius);
	}

	&:focus-visible {
		outline: none;
		box-shadow: 0 0 0 2px var(--fill--blank), 0 0 0 4px var(--color-brand--dark-1);
	}
}
</style>
