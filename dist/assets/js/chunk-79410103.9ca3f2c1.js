(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-79410103"],{"4cb6":function(e,t,r){"use strict";var a=r("67a7"),l=r.n(a);l.a},"67a7":function(e,t,r){},b19d:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"container"},[r("div",{staticClass:"handle-box"},[r("el-input",{staticClass:"handle-input mr10",attrs:{placeholder:"树苗"},model:{value:e.query.tree,callback:function(t){e.$set(e.query,"tree",t)},expression:"query.tree"}}),r("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.handleSearch}},[e._v("搜索")]),r("el-button",{attrs:{type:"primary",icon:"el-icon-plus"},on:{click:function(t){return e.handleAdd("add")}}},[e._v("新建树苗")])],1),r("el-table",{ref:"multipleTable",staticClass:"table",attrs:{data:e.tableData,border:"","header-cell-class-name":"table-header"},on:{"selection-change":e.handleSelectionChange}},[r("el-table-column",{attrs:{type:"index",label:"序号",align:"center",index:function(t){return t+1+(e.query.pageIndex-1)*e.query.pageSize}}}),r("el-table-column",{attrs:{prop:"name",label:"树苗名称",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.tree_name))]}}])}),r("el-table-column",{attrs:{prop:"name",label:"树苗介绍",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.tree_detail))]}}])}),r("el-table-column",{attrs:{prop:"name",label:"树苗剩余数量",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.tree_num))]}}])}),r("el-table-column",{attrs:{prop:"name",label:"树苗所需能量",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.tree_energy)+"g")]}}])}),r("el-table-column",{attrs:{label:"树苗icon",align:"center"},scopedSlots:e._u([{key:"default",fn:function(e){return[r("el-image",{staticClass:"table-td-thumb-square",attrs:{src:e.row.tree_icon,"preview-src-list":[e.row.tree_icon]}})]}}])}),r("el-table-column",{attrs:{prop:"user_energy",label:"树苗图",align:"center"},scopedSlots:e._u([{key:"default",fn:function(e){return[r("el-image",{staticClass:"table-td-thumb",attrs:{src:e.row.tree_img,"preview-src-list":[e.row.tree_img]}})]}}])}),r("el-table-column",{attrs:{prop:"date",label:"创建时间",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.createdAt))]}}])}),r("el-table-column",{attrs:{label:"操作",width:"180",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"text",icon:"el-icon-edit"},on:{click:function(r){return e.handleEdit(t.$index,t.row)}}},[e._v("编辑")]),r("el-button",{staticClass:"red",attrs:{type:"text",icon:"el-icon-delete"},on:{click:function(r){return e.handleDelete(t.$index,t.row)}}},[e._v("删除")])]}}])})],1),r("div",{staticClass:"pagination"},[r("el-pagination",{attrs:{background:"",layout:"total, prev, pager, next","current-page":e.query.pageIndex,"page-size":e.query.pageSize,total:e.pageTotal},on:{"current-change":e.handlePageChange}})],1)],1),r("el-dialog",{attrs:{title:e.titleType,visible:e.editVisible,width:"30%"},on:{"update:visible":function(t){e.editVisible=t}}},[r("el-form",{ref:"treeForm",attrs:{model:e.treeForm,"label-width":"120px"}},[r("el-form-item",{attrs:{label:"树苗名称",prop:"tree_name",rules:[{required:!0,message:"不能为空"}]}},[r("el-input",{model:{value:e.treeForm.tree_name,callback:function(t){e.$set(e.treeForm,"tree_name",t)},expression:"treeForm.tree_name"}})],1),r("el-form-item",{attrs:{label:"树苗介绍",prop:"tree_detail",rules:[{required:!0,message:"不能为空"}]}},[r("el-input",{attrs:{type:"textarea",autosize:{minRows:3,maxRows:4},placeholder:"请输入内容"},model:{value:e.treeForm.tree_detail,callback:function(t){e.$set(e.treeForm,"tree_detail",t)},expression:"treeForm.tree_detail"}})],1),r("el-form-item",{attrs:{label:"树苗数量",prop:"tree_num",rules:[{required:!0,message:"不能为空"}]}},[r("el-input",{model:{value:e.treeForm.tree_num,callback:function(t){e.$set(e.treeForm,"tree_num",e._n(t))},expression:"treeForm.tree_num"}})],1),r("el-form-item",{attrs:{label:"树苗所需能量",prop:"tree_energy",rules:[{required:!0,message:"不能为空"}]}},[r("el-input",{model:{value:e.treeForm.tree_energy,callback:function(t){e.$set(e.treeForm,"tree_energy",e._n(t))},expression:"treeForm.tree_energy"}})],1),r("el-form-item",{attrs:{label:"树苗图标",prop:"tree"}},[r("el-upload",{attrs:{action:"https://www.colynlu.cn/upload","list-type":"picture-card",multiple:"",limit:1,"on-success":e.successUploadTreeIcon,"file-list":e.fileListTreeIcon}},[r("i",{staticClass:"el-icon-plus"})]),r("el-dialog",{attrs:{visible:e.dialogVisible},on:{"update:visible":function(t){e.dialogVisible=t}}},[r("img",{attrs:{width:"100%",src:e.dialogImageUrl,alt:""}})])],1),r("el-form-item",{attrs:{label:"树苗图",prop:"code_num"}},[r("el-upload",{attrs:{action:"https://www.colynlu.cn/upload","list-type":"picture-card",multiple:"","on-preview":e.preview,"on-success":e.successUploadTreeImg,"file-list":e.fileListTreeImg}},[r("i",{staticClass:"el-icon-plus"})])],1)],1),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.editVisible=!1}}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:function(t){"新建"==e.titleType?e.saveAdd():e.saveEdit()}}},[e._v("确 定")])],1)],1)],1)},l=[],i=r("b775"),n=function(e){return Object(i["a"])({url:"get_all_tree",method:"get",params:e})},o=function(e){return Object(i["a"])({url:"del_tree",method:"get",params:e})},s=function(e){return Object(i["a"])({url:"edit_tree",method:"post",data:e})},c=function(e){return Object(i["a"])({url:"create_tree",method:"post",data:e})},u={name:"TreeManagement",data:function(){return{query:{tree:"",pageIndex:1,pageSize:10},tableData:[],multipleSelection:[],delList:[],editVisible:!1,pageTotal:0,treeForm:{tree_name:"",tree_icon:"",tree_mid_icon:"",tree_big_icon:"",bg_icon:"",tree_status:""},idx:-1,id:-1,titleType:"",dialogVisible:!1,dialogImageUrl:"",temp:{},fileListTreeImg:[],fileListTreeIcon:[]}},created:function(){this.getData()},computed:{},methods:{preview:function(e){this.dialogImageUrl=e.url,this.dialogVisible=!0},successUploadTreeIcon:function(e){console.log(e),this.treeForm.tree_icon=e.filename},successUploadTreeImg:function(e){console.log(e),this.treeForm.tree_img=e.filename},getData:function(){var e=this;n({tree:this.query.tree,page:this.query.pageIndex}).then((function(t){e.tableData=t.data,e.pageTotal=t.total}))},handleSearch:function(){this.$set(this.query,"pageIndex",1),this.getData()},handleDelete:function(e,t){var r=this;console.log(t.tree_id),this.$confirm("确定要删除吗？","提示",{type:"warning"}).then((function(){o({tree_id:t.tree_id}).then((function(t){200==t.code&&(r.$message.success("删除成功"),r.tableData.splice(e,1))}))})).catch((function(){r.$message.error("删除失败")}))},handleSelectionChange:function(e){this.multipleSelection=e},handleAdd:function(e){this.titleType="add"==e?"新建":"编辑",this.treeForm={},this.editVisible=!0},handleEdit:function(e,t){this.temp=Object.assign({},t),this.titleType="add"==this.titleType?"新建":"编辑",this.idx=e,this.treeForm=t,console.log("row",t),this.editVisible=!0,this.fileListTreeImg=[{url:this.temp.tree_img,name:"img"}],this.fileListTreeIcon=[{url:this.temp.tree_icon,name:"img"}]},saveAdd:function(){var e=this;console.log("saveAdd",this.treeForm),this.$refs["treeForm"].validate((function(t){if(!t)return console.log("error submit!!"),!1;c(e.treeForm).then((function(t){console.log("aaaaaaaaa",t),200==t.code&&(e.editVisible=!1,e.$message.success("新建成功"),e.getData())}))}))},saveEdit:function(){var e=this;this.$refs["treeForm"].validate((function(t){if(!t)return console.log("error submit!!"),!1;s(e.treeForm).then((function(t){200==t.code&&(e.editVisible=!1,e.$message.success("修改成功"),e.$set(e.tableData,e.idx,e.treeForm))}))}))},handlePageChange:function(e){this.$set(this.query,"pageIndex",e),console.log("val",this.query),this.getData()}}},d=u,m=(r("4cb6"),r("2877")),p=Object(m["a"])(d,a,l,!1,null,"febc9fb0",null);t["default"]=p.exports}}]);
//# sourceMappingURL=chunk-79410103.9ca3f2c1.js.map