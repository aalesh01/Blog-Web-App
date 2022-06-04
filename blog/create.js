let card=document.createElement("div");

let title=document.createElement("input");
title.setAttribute("placeholder","Enter title of blog")

let body = document.createElement("textarea");
body.setAttribute("placeholder","Start Writing your blog here");

let author = document.createElement("input");
author.setAttribute("placeholder","Enter your name");

let category= document.createElement("input");
category.setAttribute("placeholder", "Enter category");

let tags = document.createElement("input");
tags.setAttribute("placeholder","Enter tags")

let submitBT = document.createElement("button");
submitBT.innerText="Submit";

submitBT.addEventListener("click",createblog);

async function createblog(){
    await fetch(`http://localhost:3000/blog`,{
        method:"POST",
        body: JSON.stringify({
            "created_date": new Date(),
            "title": title.value,
            "author": author.value,
            "category": category.value,
            "body": body.value,
            "tags": tags.value
        }),
        headers: {
        "Content-type": "application/json; charset=UTF-8",
    }
    })
}



card.append(title,body,author,category,tags,submitBT);

document.body.append(card);



