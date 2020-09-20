if(sessionStorage.getItem("isMember") !== "true"){
    alert("Access Denied.")
    alert("Only members may access the Certificates Gallery.")
    if(confirm("Would you like to be a member?")){
        window.location = "membership.html"
    }else {
        window.location = "index.html"
    }
}