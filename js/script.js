$(document).ready(function(){
    
    pedidos();

})
$(window).scroll(function(){
    
})

function pedidos(){
    $(".pedidos h6").click(function(){
        $(this).offsetParent().toggleClass("active");
    })
}

