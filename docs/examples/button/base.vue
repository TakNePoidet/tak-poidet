<template>
	<div class="example-line">
		<tp-button>Button</tp-button>
		<tp-button type="info">Button</tp-button>
		<tp-button type="primary">Button</tp-button>
		<tp-button type="success">Button</tp-button>
		<tp-button type="danger">Button</tp-button>
		<tp-button type="warning">Button</tp-button>
	</div>
	<div class="example-line">
		<tp-button round>Button</tp-button>
		<tp-button round type="info">Button</tp-button>
		<tp-button round type="primary">Button</tp-button>
		<tp-button round type="success">Button</tp-button>
		<tp-button round type="danger">Button</tp-button>
		<tp-button round type="warning">Button</tp-button>
	</div>
	<div class="example-line">
		<tp-button outline>Outline</tp-button>
		<tp-button outline type="info">Outline</tp-button>
		<tp-button outline type="primary">Outline</tp-button>
		<tp-button outline type="success">Outline</tp-button>
		<tp-button outline type="danger">Outline</tp-button>
		<tp-button outline type="warning">Outline</tp-button>
	</div>
	<div class="example-line">
		<tp-button text>Text</tp-button>
		<tp-button text type="info">Text</tp-button>
		<tp-button text type="primary">Text</tp-button>
		<tp-button text type="success">Text</tp-button>
		<tp-button text type="danger">Text</tp-button>
		<tp-button text type="warning">Text</tp-button>
	</div>
	<div class="example-line">
		<tp-button link>Link</tp-button>
		<tp-button link type="info">Link</tp-button>
		<tp-button link type="primary">Link</tp-button>
		<tp-button link type="success">Link</tp-button>
		<tp-button link type="danger">Link</tp-button>
		<tp-button link type="warning">Link</tp-button>
	</div>
	<div class="example-line">
		<tp-button disabled>Disabled</tp-button>
		<tp-button disabled type="info">Disabled</tp-button>
		<tp-button disabled type="primary">Disabled</tp-button>
		<tp-button disabled type="success">Disabled</tp-button>
		<tp-button disabled type="danger">Disabled</tp-button>
		<tp-button disabled type="warning">Disabled</tp-button>
	</div>
	<div class="example-line">
		<!--			<tp-button circle :icon="PIconChecked" type="default">Button</tp-button>-->
		<!--			<tp-button circle :icon="PIconChecked" type="primary">Button</tp-button>-->
		<!--			<tp-button circle :icon="PIconChecked" type="success">Button</tp-button>-->
		<!--			<tp-button circle :icon="PIconChecked" type="danger">Button</tp-button>-->
	</div>
	<div>
		<!--			<tp-button round type="success" :icon="PIconChecked" disabled>Button</tp-button>-->
	</div>
</template>
<script setup lang="ts">
import { TpButton } from 'tak-poidet';
</script>
