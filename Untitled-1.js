/*
 * @Author: your name
 * @Date: 2021-11-02 10:45:42
 * @LastEditTime: 2021-11-02 15:18:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-contextmenu\Untitled-1.js
 */

function a(b,a='filenames'){
    console.log(b[a])
}

let b={'filename':111111}

a(b,'filename')

let a=['a','b']
let s=[1,3,5]
let r=[]
for(let i=0;i<a.length;i++){
  for(let j=0;j<s.length;j++){
    r.push({key:s[j]})
  }
}
console.log(r);