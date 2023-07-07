/*
  Binding allows you to populate a form with data from the selected row.
*/


var grid = {
  view:"datatable", id:"datatable1",
  columns:[
    { id:"id", header:"", width:30},
    { id:"title", editor:"text", header:"Film title", width:200},
    { id:"start", editor:"popup", header:"Text A", width:120},
    { id:"end", editor:"popup", header:"Text B", width:120}
  ],
  select:true,
  autoheight:true,
  autowidth:true,
  data: [
    { id:1, title:"The Shawshank Redemption", start:"Some pretty long text here and there, here and there", end:"Short text" },
    { id:2, title:"The Godfather", start:"", end:"" }
  ]
};

var form = {
  view:"form", id:"form1", scroll:false,
  elements:[
    { view:"text", name:"title", label:"Title" },
    { view:"textarea", name:"start", label:"Text A" },
    { view:"textarea", name:"end", label:"Text B" },

    { 
      view:"button", value:"Save", 
      click:function(){ 
        $$("form1").save() 
      } 
    }
  ]
};

webix.ready(function(){
  
  webix.ui({
    rows:[
      {
        type:"wide", cols:[ grid, form ]
      },
      {}
    ]
  });

  $$("form1").bind("datatable1")

});