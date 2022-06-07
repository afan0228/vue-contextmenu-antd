<template>
  <ul class="vue-contextmenu-listWrapper"
    @contextmenu.stop=""
    :class="'vue-contextmenuName-' + contextMenuData.menuName">
    <li v-for="item in contextMenuData.menulists"
      class="context-menu-list"
      :class="{'underline':item.underline}"
      :key="item.btnName">
      <div v-if="item.children && item.children.length > 0" class="has-child">
        <div class="parent-name btn-wrapper-simple" :class="{'no-allow': item.disabled ? item.disabled : false}">
          <!-- <a-icon :type="item.icoName ? item.icoName : ''" class="nav-icon-fontawe"/> -->
          <span class="nav-name-right">{{item.btnName}}</span>
          <a-icon :type="item.icoName ? item.icoName : ''" class="nav-icon-fontawe"/>
          <!-- <i class="icon"><s>◇</s></i> -->
          <!-- <a-icon type="right" /> -->
          <!-- <div class=""><img src="./arrow-right.png" alt=""></div> -->
        </div>
        <Tree :itemchildren="item.children" @childhandler="fnHandler" :float="floatDirection" v-if="!item.disabled" />
      </div>
      <div v-else>
        <div @click.stop="item.disabled === true ? '' : fnHandler(item)"
          class="no-child-btn btn-wrapper-simple"
          :class="{'no-allow': item.disabled ? item.disabled : false}">
          <span class="nav-name-right">{{item.btnName}}</span>
          <span class="shortcutkey">{{item.shortcutkey}}</span>
        </div>
      </div>
    </li>
  </ul>
</template>
<script>
  import Tree from './Tree.vue'
  export default {
    name: 'context-menu-component',
    components: {
      Tree
    },
    data () {
      return {
        floatDirection: 'float-statue-1'
      }
    },
    props: {
      contextMenuData: {
        type: Object,
        requred: false,
        default () {
          return {
            menuName: null,
            axis: {
              x: null,
              y: null
            },
            menulists: [
              {
                fnHandler: '',
                icoName: '',
                btnName: ''
              }
            ]
          }
        }
      },
      transferIndex: {
        type: Number,
        default: 0
      }
    },
    watch: {
      'contextMenuData.axis' (val) {
        var x = val.x
        var y = val.y
        var innerWidth = window.innerWidth
        var innerHeight = window.innerHeight
        var _this = this
        var index = _this.transferIndex
        var menuName = 'vue-contextmenuName-' + _this.contextMenuData.menuName
        var menu = document.getElementsByClassName(menuName)[index]
        menu.style.display = 'block'
        var menuHeight = this.contextMenuData.menulists.length * 45
        var menuWidth = 150
        menu.style.top = (y + menuHeight > innerHeight ? innerHeight - menuHeight : y) + 'px'
        menu.style.left = (x + menuWidth > innerWidth ? innerWidth - menuWidth : x) + 'px'
        document.addEventListener('mouseup', function (e) {
          // 解决mac电脑在鼠标右键后会执行mouseup事件
          if (e.button === 0) {
            menu.style.display = 'none' 
          }
        }, false)
        if ((x + 2 * menuWidth) > innerWidth && (y + 2 * menuHeight) > innerHeight) {
          this.floatDirection = 'float-status-4'
        }
        if((x + 2 * menuWidth) < innerWidth && (y + 2 * menuHeight) > innerHeight) {
          this.floatDirection = 'float-status-1'
        }
        if((x + 2 * menuWidth) > innerWidth && (y + 2 * menuHeight) < innerHeight) {
          this.floatDirection = 'float-status-3'
        }
        if((x + 2 * menuWidth) < innerWidth && (y + 2 * menuHeight) < innerHeight) {
          this.floatDirection = 'float-status-2'
        }
      }
    },
    methods: {
      fnHandler (item) {
        this.$emit(item.fnHandler)
      }
    }
  }
</script>
<style scoped>
  ul,li{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .vue-contextmenu-listWrapper {
    display: none;
    position: fixed;
    z-index: 9999;
    background: #ffffff;
    top: 0;
    left: 0;
    /* border-radius: 2px; */
    border-radius: 0px 2px 2px 0px;
    border: 1px solid #E3E6F2;
    /* box-shadow: 0 2px 2px 0 #cccccc; */
    font-family: 'Courier New', Courier, monospace;
    font-size: 12px;
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.2);
  }
  .vue-contextmenu-listWrapper .context-menu-list {
    position: relative;
    width: 170px;
    background: #ffffff;
    text-decoration: none;
    list-style: none;
    border: solid transparent;
    border-width: 1px 0;
    font-family:Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
    /* border-image: linear-gradient(90deg, #fefefe 0%,#E3E6F2 50%, #fefefe 100%) 0 0 1; */
  }
  .vue-contextmenu-listWrapper .underline{
    border-bottom: #dfdfdf solid 1px;
  }
  .context-menu-list:hover {
    background: #F6F9FF;
    border: solid #E3E6F2;
    border-width: 1px 0;
  }
  .nav-name-right {
    position: relative;
    padding-left: 12px;
    color: #595959;
    /* margin: 0 20px;
    height: 16px;
    line-height: 16px;
    display: block; */
  }
  .nav-name-right::after{
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    display: block;
    content: '';
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #D8D8D8;
  }
  .shortcutkey{
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
    color: #989BAD;
  }
  .context-menu-list:hover > div .nav-name-right{
     color: #4682FD;
     /* font-weight: bold; */
  }
  .context-menu-list:hover .icon s{
    color: #4682FD;
  }
  .context-menu-list:hover .nav-name-right::after{
    background: #4682FD;
  }
  .context-menu-list:hover .nav-icon-fontawe{
    color: #4682FD;
  }
  .context-menu-list .has-child {
    position: relative;
    cursor: pointer;
    /* padding: 5px 10px; */
  }

  .context-menu-list:hover > .has-child > .child-ul-wrapper {
    display: block;
  }
  .parent-name .icon {
    font-style: normal;
    position: relative;
    display: block;
    width: 8px;
    overflow: hidden;
    /* border-top: 4px solid transparent;
    border-left: 8px solid #111111;
    border-bottom: 4px solid transparent;
    border-right: 4px solid transparent; */
  }
  .parent-name .icon s{
      text-decoration: none;
      display: inline-block;
      width: 18px;
      font-size: 18px;
      font-weight: bold;
      color: #595959;             
      /*利用微调 控制箭头方向 未设置向上*/
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
    }
  .no-child-btn {
    cursor: pointer;
  }
  .nav-icon-fontawe {
    font-size: 12px;
    color: #989BAD;
  }
  .no-allow {
    cursor: not-allowed;
  }
  .no-allow .nav-name-right,.no-allow .nav-name-right::after,.no-allow .icon s{
    color: #989BAD;
  }

  .btn-wrapper-simple {
    position: relative;
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    line-height: 40px;
  }
</style>
