
function showsize_add () {
    document.querySelector("div").classlist.add("add")
}


function showsize_minus () {
    document.querySelector("div").classlist.add("minusbtn")
}

document.querySelector("addbtn").onclick = showsize_add;
document.querySelector("minusbtn").onclick =  showsize_minus;