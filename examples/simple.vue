<!--
 * @Author: your name
 * @Date: 2021-10-11 16:21:12
 * @LastEditTime: 2022-05-20 10:28:07
 * @LastEditors: t-anying.fan fan02288@163.com
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vue-contextmenu\examples\simple.vue
-->
<template>
  <div
    id="app"
    @contextmenu="showMenu"
    style="width: 100px; height: 100px; background: blue"
  >
    <vue-context-menu
      :contextMenuData="contextMenuData"
      @savedata="savedata"
      @newdata="newdata"
    >
    </vue-context-menu>
  </div>
</template>
	<script>
export default {
  name: "app",
  data() {
    return {
      // contextmenu data (菜单数据)
      contextMenuData: {
        // the contextmenu name(1.4.1+ updated)
        menuName: "demo",
        // The coordinates of the display(菜单显示的位置)
        axis: {
          x: null,
          y: null,
        },
        // Menu options (菜单选项)
        menulists: [
          {
            fnHandler: "savedata", // Binding events(绑定事件)
            icoName: "fa fa-home fa-fw", // icon (icon图标 )
            btnName: "Save", // The name of the menu option (菜单名称)
          },
          {
            fnHandler: "newdata",
            icoName: "fa fa-home fa-fw",
            btnName: "New",
          },
        ],
      },
    };
  },
  methods: {
    showMenu() {
      event.preventDefault();
      var x = event.clientX;
      var y = event.clientY;
      // Get the current location
      this.contextMenuData.axis = {
        x,
        y,
      };
    },
    savedata() {
      alert(1);
    },
    newdata() {
      console.log("newdata!");
    },
  },
};
</script>
	<style>
* {
  margin: 0;
  padding: 0;
}
</style>