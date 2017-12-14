<style  scoped>
	.content {
		width: 100%;
		display: inline-flex;
	}
	.mod1 {
		width: 200px;
	}
	.mod2 {
		flex: 1;
	}
	.item {
		display: block;
		height: 40px;
		padding: 10px;

		text-align: center;
		font-size: larger;
	}

</style>
<template>
	<div>

		<div style="padding: 50px;margin: 0 auto">用户 {{user.name}},欢迎回家</div>
		<div class="content">
			<div class="mod1">
				<router-link  class="item" to="/home/page1">模块1</router-link><br>
				<router-link  class="item" to="/home/page2">模块2</router-link>
				<!--<router-link  class="item" to="/home/page3">模块3</router-link>-->
			</div>
			<div class="mod2">
				<router-view> </router-view>
			</div>
		</div>
	</div>
</template>
<script>
    import { mapState } from 'vuex'
    export default {
        computed: mapState({ user: state => state.user }),
    }
</script>