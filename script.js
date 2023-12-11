var scroll=document.querySelector("#scroller");
var insta=document.querySelector("#instagram");
var fls=document.querySelector("#fullscr");
var growth=document.querySelector("#growth");

var arr=[
    {img:"https://images.unsplash.com/photo-1514543250559-83867827ecce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2850&q=80",name:"Your Story",address:"Sheryians Coding Schoooool",time:"1m ago"},
    {img:"https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",name:"Pintu",address:"Sheryians Coding Schoooool",time:"1m ago"},
    {img:"https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=770&q=80",name:"Gourav",address:"Sheryians Coding Schoooool",time:"1m ago"},
    {img:"https://images.unsplash.com/photo-1496440737103-cd596325d314?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",name:"Ashutosh",address:"Sheryians Coding Schoooool",time:"1m ago"},
    {img:"https://images.unsplash.com/photo-1514315384763-ba401779410f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2783&q=80",name:"Ankit",address:"Sheryians Coding Schoooool",time:"1m ago"},
    {img:"https://images.unsplash.com/photo-1662421738643-d2d9903f3922?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2787&q=80",name:"Deepesh",address:"Sheryians Coding Schoooool",time:"1m ago"},
    {img:"https://images.unsplash.com/photo-1662228733182-97cc2d15f358?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2793&q=80",name:"Rahul",address:"Sheryians Coding Schoooool",time:"1m ago"},
    {img:"https://images.unsplash.com/photo-1606663889134-b1dedb5ed8b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2787&q=80",name:"Golu",address:"Sheryians Coding Schoooool",time:"1m ago"},
    {img:"https://images.unsplash.com/photo-1529335764857-3f1164d1cb24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2592&q=80",name:"Balu",address:"Sheryians Coding Schoooool",time:"1m ago"},
    {img:"https://images.unsplash.com/photo-1637858868799-7f26a0640eb6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2960&q=80",name:"Corona",address:"Sheryians Coding Schoooool",time:"1m ago"},,
]

printstory();
function printstory(){
    var clutter="";

    arr.forEach(function(val, index){
        clutter += `<div class="story">
        <img id="${index}" src="${val.img}" alt="">
        <h1>${val.name}</h1>
    </div>`
    })
    
    scroll.innerHTML= clutter;
}

var grow=0;
var ctimer;
insta.addEventListener("click",function(dets){
    if(arr[dets.target.id].img != undefined){
    fls.style.display ="block";
    instaclick.style.display="none"
    if(grow < 100){
        setInterval(function(){
        growth.style.width=`${grow++}px`
        }, 7.9)
    }
    else{
        grow=0;
    }
    fls.style.backgroundImage =`url(${arr[dets.target.id].img})`;
    close.addEventListener("click",function(){
        fls.style.display="none"
        clearTimeout(ctimer);
    })
    ctimer =setTimeout(function(){
        fls.style.display="none"
    },3000)

    }
})


var dp=document.querySelector("#dp");
dp.style.backgroundImage= `url(${arr[0].img})`
// console.log(arr[0].img)
var close=document.querySelector("#close");

var story_open_top=document.querySelector("#story_open_top");

// function printsdt(){
//     var clutter2="";
// arr.forEach(function(){
//     clutter2 += ` <div id="${index}" class="story-profile-dets">
//     <div id="sdp">
//         <img src="${val.img}" alt="" />
//     </div>
//     <div id="spdets">
//         <div id="sname">
//             <h4>${val.name}</h4>
//             &nbsp; &nbsp;
//             <h5>${val.name}</h5>
//         </div>
//         <h5>${val.address}</h5>
//     </div>`
// })
// story_open_top.innerHTML=clutter2;
// }

// --------Insta Clip-------
// --------Insta Clip-------

var instaclick=document.querySelector("#instaclick"),
instatap=document.querySelector("#instatap");
var flag=0;
instatap.addEventListener("click",function(){
    if(flag===0){
    instaclick.style.display="flex"
    flag=1;
    }
    else{
        instaclick.style.display="none"
        flag=0;
    }

})


// -------- STORY+ POST SCROLLER------ 
// -------- STORY+ POST SCROLLER------ 
printpost();
function printpost(){
var post=document.querySelector(".post");
var arrpost =[
    {dpimg:"https://ik.imagekit.io/sheryians/Sheryians_Logo_wFKd9VClG.png",idname:"Sheryians Coding School",postimg:"./images/sherypost.jpeg",caption:"More than a Coaching"},
    {dpimg:"./images/delta.jpg",idname:"Delta mike",postimg:"./images/delta.jpg",caption:"Ye jo Instagram scroll kar rahe ho maine banaya hai -- he he he"},
    {dpimg:"./images/harshbhaiyadp.jpg",idname:"Harsh JavaScriptor",postimg:"./images/harshbhaiya2.jpg",caption:"Hue Hue ,Hindi Samjho"},
    {dpimg:"./images/saarthack2.jpg",idname:"Saarthack Sharma",postimg:"./images/sarthack.jpg",caption:"hum hi hai विश्वविजेता ke Admin"},
    {dpimg:"https://images.unsplash.com/photo-1610312435958-2150a6d31ce7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2819&q=80",idname:"Army_lover_7",postimg:"https://images.unsplash.com/photo-1514978317271-63c845d39beb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2723&q=80",caption:"No caption need"},
    {dpimg:"https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",idname:"Dog_lover",postimg:"https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2688&q=80",caption:"Sabse Vafadaar bolte kya"},
]
var clutter3 ="";

arrpost.forEach(function(elem){
    clutter3 += `<div class="ptop">
    <div id="pid">
        <div class="pdp">
            <img src="${elem.dpimg}" alt="">
        </div>
        <h4>${elem.idname}</h4>
    </div>
    <i style="font-size: 2vw ;margin-top: 5px;" class="ri-more-line"></i>
</div>
<div class="pmain"><img src="${elem.postimg}" alt="">
</div>
<div class="pdown">
    <div class="likes">
        <div class="bookmark">
            <i id="heart" class="ri-heart-line"></i>
            <i class="ri-chat-3-line"></i>
            <i class="ri-send-plane-line"></i>
        </div>
        <i class="ri-bookmark-line"></i>
    </div>
    <div class="likecout">
        <h5>900 likes</h5>
    </div>
    <div class="caption">
        <h4>${elem.idname}</h4>
        <p>${elem.caption}</p>
    </div>
   
</div>`
})
post.innerHTML=clutter3
}

var heart=document.querySelector("#heart");
heart.addEventListener("click",function(){
    this.style.display="none"
    heart.innerHTML=`<i class="ri-heart-fill"></i>`
   
})