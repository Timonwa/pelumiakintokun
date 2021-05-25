function menu(){
    if (document.getElementById("open").style.display === "block"  )
    {
    document.getElementById("open").style.display = "none";
    document.getElementById("close").style.display = "block";
    document.getElementById("menu").style.right = "0%";
    }
    else
    {
    document.getElementById("open").style.display = "block";
    document.getElementById("close").style.display = "none";
    document.getElementById("menu").style.right = "-60%";
    }
};

function navLinkCloseMenu(){
    document.getElementById("open").style.display = "block";
    document.getElementById("close").style.display = "none";
    document.getElementById("menu").style.right = "-50%"; 
}