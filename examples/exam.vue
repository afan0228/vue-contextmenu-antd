<template>
  <div style="position: fixed;left:0px;top:0;">
    <div
      @contextmenu="showMenu(index)"
      style="width: 100px;height: 100px;background: red;"
      v-for="(n, index) in 2"
      :key="n"
    >
      <vue-context-menu
        :contextMenuData="contextMenuData"
        :transferIndex="transferIndex"
        @Handler1="Handler_A(index)"
        @Handler2="Handler_B(index)"
        @Handler3="Handler_C(index)"
        @Handler4="Handler_D(index)"
        @Handler5="Handler_E(index)"
      ></vue-context-menu>
    </div>
  </div>
</template>
<script>
export default {
  name: "app",
  data() {
    return {
      transferIndex: null, // Show the menu that was clicked
      contextMenuData: {
        menuName: "demo",
        axis: {
          x: null,
          y: null
        },
        menulists: [
          {
            btnName: "选项1111111",
            icoName: "",
            disabled: true,
            children: [
              {
                icoName: "",
                btnName: "选项1-1",
                children: [
                  {
                    icoName: "",
                    children: [
                      {
                        icoName: "",
                        fnHandler: "Handler1",
                        btnName: "选项1-1-1"
                      }
                    ],
                    btnName: "选项1-1-1"
                  }
                ]
              }
            ]
          },
          {
            btnName: "选项2",
            underline: true,
            children: [
              {
                fnHandler: "Handler5",
                btnName: "选项2-1",
                children: [
                  {
                    fnHandler: "Handler5",
                    btnName: "选项2-1-1",
                  },
                ]
              },
              {
                fnHandler: "Handler5",
                btnName: "选项2-2",
                disabled: true,
              },{
                fnHandler: "Handler5",
                btnName: "选项2-3",
              }
            ]
          },
          {
            btnName: "选项3",
            fnHandler: "Handler4",
            shortcutkey:'ctrl+D'
          },
          {
            btnName: "选项4",
            disabled: false,
            children: [
              {
                icoName: "",
                btnName: "选项4-1",
                children: [
                  {
                    icoName: "",
                    btnName: "选项4-1-1"
                  }
                ]
              },
              {
                icoName: "",
                btnName: "选项4-2",
                children: [
                  {
                    icoName: "",
                    btnName: "选项4-2-1"
                  }
                ]
              },
              {
                icoName: "",
                btnName: "选项4-3",
                children: [
                  {
                    icoName: "",
                    btnName: "选项4-3-1"
                  }
                ]
              }
            ]
          }
        ]
      }
    };
  },
  methods: {
    showMenu(index) {
      this.transferIndex = index; // tranfer index to child component
      event.preventDefault();
      var x = event.clientX;
      var y = event.clientY;
      this.contextMenuData.axis = {
        x,
        y
      };
    },
    Handler_A (index) {
      console.log('index:', index, '选项1-1-1绑定事件执行');
    },
    Handler_B (index) {
      console.log('index:', index, '选项1-1-2绑定事件执行');
    },
    Handler_C (index) {
      console.log('index:', index, '选项1-2-1绑定事件执行');
    },
    Handler_D (index) {
      console.log('index:', index, '选项1-2-2绑定事件执行');
    },
    Handler_E (index) {
      console.log('index:', index, '选项2-1绑定事件执行');
    }
  }
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
}
</style>