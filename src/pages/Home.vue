<template>
    <el-row class="container">
        <el-col :span="24" class="header">
            <el-col :span="10" class="logo" :class="collapsed ? 'logo-collapse-width':'logo-width'">
                {{collapsed ? '' : sysName}}
            </el-col> 
            <el-col :span="10"> 
                <div class="tools" @click.prevent="collapes">
                    <i class="fa fa-align-justify"></i>
                </div> 
            </el-col> 
            <el-col :span="4" class="userinfo">
                <el-dropdown trigger="hover">
                    <span class="el-dropdown-link userinfo-inner"><img :src="this.sysUserAvatar" />{{sysUserName}}</span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>我的消息</el-dropdown-item>
                        <el-dropdown-item>设置</el-dropdown-item>
                        <el-dropdown-item divided @click.native="logout">退出登陆</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </el-col>
        </el-col>
		<el-col :span="24" class="main">
			<!-- 导航菜单 -->
			<!-- default-active只要和el-menu-item的index相等就会默认展开导航栏 -->
			<el-menu 
				:default-active="$route.path" 
				class="el-menu-vertical-demo" 
				router  
				@open="handleOpen" 
				@close="handleClose" 
				@select="handleSelect"
				:collapse="collapsed"
			>
				<template v-for="(item,index) in $router.options.routes" v-if="!item.hidden">
					<el-submenu :key="index" :index="index+''" v-if="!item.leaf">
						<!--一级导航栏 -->
						<template slot="title">
							<i :class="item.iconCls"></i>
							<span slot="title">{{item.name}}</span>
						</template>
						<!-- 二级导航栏 -->
						<el-menu-item 
							v-for="child in item.children" 
							:index="child.path" 
							:key="child.path" 
							v-if="!child.hidden"
						>
							{{child.name}}
						</el-menu-item>
					</el-submenu>
					<el-menu-item 
						:key="index" 
						v-if="item.leaf && item.children.length > 0" 
						:index="item.children[0].path"
					>
						<i :class="item.iconCls"></i>
						<span slot="title">{{item.children[0].name}}</span>
					</el-menu-item>
				</template>
			</el-menu>
			<section class="content-container">
				<div class="grid-content bg-purple-light">
					<el-col :span="24" class="breadcrumb-container">
						<strong class="title">{{$route.name}}</strong>
						<el-breadcrumb separator="/" class="breadcrumb-inner">
							<el-breadcrumb-item v-for="item in $route.matched" :key="item.path">
								{{ item.name }}
							</el-breadcrumb-item>
						</el-breadcrumb>
					</el-col>
					<el-col :span="24" class="content-wrapper">
						<transition name="fade" mode="out-in">
							<router-view></router-view>
						</transition>
					</el-col>
				</div>
			</section>
		</el-col>
    </el-row>
</template>


<script>
    export default {
        data (){
            return {
                sysName:'VUEADMIN',
                collapsed : false, //导航栏默认展开还是缩进 默认展开
                sysUserAvatar : '', //管理员的头像
                sysUserName : '', //管理员的名字
            }
        },
        methods : {
			//折叠导航栏
            collapes (){
				this.collapsed = !this.collapsed
			},
			showMenu(i,status){
				this.$refs.menuCollapsed.getElementsByClassName('submenu-hook-'+i)[0].style.display=status?'block':'none';
			},
            //用户点击退出操作
            logout (){
                let _this = this;
                this.$confirm('确认退出吗','提示',{

                }).then( () => {
                    sessionStorage.removeItem('user');
					_this.$router.push('/login');
                })
            },
            //获取用户数据
            getUserInfo (){
                let user = sessionStorage.getItem('user') //用于获取用户本地临时存储的头像
                if (user){
                    user = JSON.parse(user)
                    this.sysUserName = user.name || ''
                    this.sysUserAvatar = user.avatar || ''
                }
			},
			handleOpen (){},
			handleClose (){},
			handleSelect (){},
        },
        mounted (){
			//获取用户数据
            this.getUserInfo();
        }
    }
</script>

<style scoped lang="scss">
    @import '~scss_vars';
    .container {
		position: absolute;
		top: 0px;
		bottom: 0px;
		width: 100%;
		.header {
			height: 60px;
			line-height: 60px;
			background: $color-primary;
			color:#fff;
			.userinfo {
				text-align: right;
				padding-right: 35px;
				float: right;
				.userinfo-inner {
					cursor: pointer;
					color:#fff;
					img {
						width: 40px;
						height: 40px;
						border-radius: 20px;
						margin: 10px 0px 10px 10px;
						float: right;
					}
				}
			}
			.logo {
				//width:230px;
				height:60px;
				font-size: 22px;
				padding-left:20px;
				padding-right:20px;
				border-color: rgba(238,241,146,0.3);
				border-right-width: 1px;
				border-right-style: solid;
				img {
					width: 40px;
					float: left;
					margin: 10px 10px 10px 18px;
				}
				.txt {
					color:#fff;
				}
			}
			.logo-width{
				width:230px;
			}
			.logo-collapse-width{
				width:65px
			}
			.tools{
				padding: 0px 23px;
				width:14px;
				height: 60px;
				line-height: 60px;
				cursor: pointer;
			}
		}
		.main {
			display: flex;
			position: absolute;
			top: 60px;
			bottom: 0px;
			overflow: hidden;
			aside {
				flex:0 0 230px;
				width: 230px;
				.el-menu{
					height: 100%;
				}
				.collapsed{
					width:60px;
					.item{
						position: relative;
					}
					.submenu{
						position:absolute;
						top:0px;
						left:60px;
						z-index:99999;
						height:auto;
						display:none;
					}

				}
			}
			.menu-collapsed{
				flex:0 0 60px;
				width: 60px;
			}
			.menu-expanded{
				flex:0 0 230px;
				width: 230px;
			}
			.content-container {
				flex:1;
				overflow-y: scroll;
				padding: 20px;
				.breadcrumb-container {
					.title {
						width: 200px;
						float: left;
						color: #475669;
					}
					.breadcrumb-inner {
						float: right;
					}
				}
				.content-wrapper {
					background-color: #fff;
					box-sizing: border-box;
				}
			}
		}
	}
	.el-menu-vertical-demo:not(.el-menu--collapse) {
		width: 229px;
		min-height: 400px;
	}
	/* 给logo添加过度 */
	.logo-collapse-width,{
		transition : all .3s ease-in-out;
	}
</style>
