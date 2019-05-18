/**
 * Created by chen on 2019/5/14.
 */

var tabs = document.getElementById("tabs").getElementsByTagName("li");
console.log(tabs);
var lists = document.getElementById("lists").getElementsByTagName("ul");
console.log(lists);

for(var i = 0; i < tabs.length; i++){
    tabs[i].onclick = showlist;
}

function showlist(){
    for( var i = 0; i < tabs.length; i++){
        if(tabs[i] === this){
            tabs[i].className = "active";
            lists[i].className = "cleafix active";
        }
        else {
            tabs[i].className = "";
            lists[i].className = "cleafix";
        }
    }

}