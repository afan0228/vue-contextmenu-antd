<template>
  <ul class="child-ul-wrapper" :class="float">
    <li v-for="i in itemchildren" :key="i.name" class="child-li-wrapper" :class="{'underline':i.underline}">
      <div v-if="i.children && i.children.length > 0" class="has-child">
        <div class="parent-name btn-wrapper-simple">
          <!-- <i :class="i.icoName ? i.icoName : ''" class="nav-icon-fontawe"></i> -->
          <!-- <a-icon :type="i.icoName ? i.icoName : ''" class="nav-icon-fontawe"/> -->
          <span class="nav-name-right">{{i.btnName}}</span>
          <a-icon :type="item.icoName ? item.icoName : ''" class="nav-icon-fontawe"/>
          <!-- <i class="icon"><s>◇</s></i> -->
          
        </div>  
        <tree-child-component :itemchildren="i.children" @childhandler="fnHandler" :float="float" />
      </div>
      <div v-else>
        <div @click.stop="fnHandler(i,i.disabled)" class="no-child-btn btn-wrapper-simple" :class="{'no-allow': i.disabled ? i.disabled : false}">
          <span class="nav-name-right">{{i.btnName}}</span>
          <span class="shortcutkey">{{i.shortcutkey}}</span>
        </div>
      </div>
    </li>
  </ul>
</template>
<script>
export default {
  name: 'tree-child-component',
  props: ['itemchildren', 'float'],
  methods: {
    fnHandler (item,disabled) {
      if(!disabled){
        this.$emit('childhandler', item)
      }
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
  .float-status-1 {
    left: 100%;
    bottom: -1px;
    z-index: 10001
  }
  .float-status-2 {
    left: 100%;
    top: -1px;
    z-index: 10001
  }
  .float-status-3 {
    right: 100%;
    top: -1px;
    z-index: 10001
  }
  .float-status-4 {
    right: 100%;
    bottom: -1px;
    z-index: 10001
  }

  .child-ul-wrapper .has-child {
    /* padding: 0px 10px; */
    position: relative;
  }
  li {
    list-style: none;
  }
  .parent-name .icon {
    font-style: normal;
    position: relative;
    display: block;
    width: 8px;
    overflow: hidden;

    /* position: absolute;
    display: block;
    top: 4px;
    right: 0;
    border-top: 4px solid transparent;
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
    /* padding: 5px 10px; */
  }

  .child-ul-wrapper {
    width: 170px;
    background: #ffffff;
    position: absolute;
    display: none;
    border: 1px solid #D5D8E3;
    border-radius: 2px;
    box-shadow:5px 5px 8px -4px rgba(0, 0, 0, 0.2),
              5px -5px 8px -4px  rgba(0, 0, 0, 0.2);
    /* box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.2); */

  }
  .child-li-wrapper:hover > .has-child > .child-ul-wrapper{
    display: block;
  }
  .child-li-wrapper{
    border: solid transparent;
    border-width: 1px 0;
    /* border-image: linear-gradient(90deg, #fefefe 0%,#E3E6F2 50%, #fefefe 100%) 0 0 1; */
  }
  .child-li-wrapper:hover {
    background: #F6F9FF;
    border: solid #E3E6F2;
    border-width: 1px 0;
  }
  .child-li-wrapper:hover > div > div .nav-name-right{
    color: #4682FD;
  }
  .child-li-wrapper:hover > div > div .nav-name-right::after{
    background: #4682FD;
  }
  .shortcutkey{
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
    color: #989BAD;
  }
  .child-li-wrapper:hover .icon s{
    color: #4682FD;
  }
    .context-menu-list:hover .nav-icon-fontawe{
    color: #4682FD;
  }
  .child-ul-wrapper .underline{
    border-bottom: #dfdfdf solid 1px;
  }

  .nav-icon-fontawe {
    font-size: 12px;
    color: #989BAD;
  }
  .nav-name-right {
    position: relative;
    padding-left: 12px;
    white-space: nowrap;
    color: #595959;
    /* display: block; */
    /* margin: auto 20px; */
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
  .btn-wrapper-simple {
    position: relative;
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    line-height: 40px;
  }
  .no-allow {
    cursor: not-allowed;
  }
  .no-allow .nav-name-right,.no-allow .nav-name-right::after,.no-allow .icon s{
    color: #989BAD;
  }
</style>


