<template>
  <ul class="child-ul-wrapper" :class="float">
    <li v-for="i in itemchildren" :key="i.name" class="child-li-wrapper" :class="{'underline':i.underline}">
      <div v-if="i.children && i.children.length > 0" class="has-child">
        <div class="parent-name btn-wrapper-simple">
          <!-- <i :class="i.icoName ? i.icoName : ''" class="nav-icon-fontawe"></i> -->
          <!-- <a-icon :type="i.icoName ? i.icoName : ''" class="nav-icon-fontawe"/> -->
          <span class="nav-name-right">{{i.btnName}}</span>
          <i class="icon"></i></div>
          <tree-child-component :itemchildren="i.children" @childhandler="fnHandler" :float="float" />
      </div>
      <div v-else>
        <div @click.stop="fnHandler(i,i.disabled)" class="no-child-btn btn-wrapper-simple" :class="{'no-allow': i.disabled ? i.disabled : false}">
          <!-- <i :class="i.icoName ? i.icoName : ''" class="nav-icon-fontawe"></i> -->
          <!-- <a-icon :type="i.icoName ? i.icoName : ''" class="nav-icon-fontawe"/> -->
          <span class="nav-name-right">{{i.btnName}}</span>
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
    padding: 5px 10px;
    position: relative;
  }
  li {
    list-style: none;
  }
  .parent-name .icon {
    position: absolute;
    display: block;
    top: 4px;
    right: 0;
    border-top: 4px solid transparent;
    border-left: 8px solid #111111;
    border-bottom: 4px solid transparent;
    border-right: 4px solid transparent;
  }

  .no-child-btn {
    padding: 5px 10px;
  }

  .child-ul-wrapper {
    background: #ffffff;
    position: absolute;
    display: none;
    border: 1px solid #e8e8e8;
    border-radius: 3px;
  }
  .child-li-wrapper:hover > .has-child > .child-ul-wrapper{
    display: block;
  }
  .context-menu-list:hover, .child-li-wrapper:hover {
    background: #2894f8;
  }
  .child-ul-wrapper .underline{
    border-bottom: #dfdfdf solid 1px;
  }

  .nav-icon-fontawe {
    /* position: absolute; */
    font-size: 14px;
  }
  .nav-name-right {
    white-space: nowrap;
    /* display: block; */
    margin: auto 20px;
  }
  .btn-wrapper-simple {
    position: relative;
    height: 16px;
    line-height: 16px;
  }
  .no-allow {
    color: #d3cfcf;
    cursor: not-allowed;
  }
</style>


