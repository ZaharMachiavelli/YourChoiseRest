
function Checker(dishes) {
    
    for(let i=0;i<dishes.length;i++) {
        if(dishes[i].count>0) return true
    }
    return false;
}

$(function(){
    
    
    
    let order=false;
    let dishes = [
        {name:"Borcht", count:0},
        {name:"Borcht with changes", count:0},
        {name:"Shchi", count:0},
        {name:"Shchi with changes", count:0},
        {name:"Veal Orloff",count:0}
    ];
    
    $(".supbutton").click(function() {
        $("h1").css('display', 'none');
        $(".row").css('display','none');
        $(".support-service").css('display','block');
        $(".txt-area").css('display','flex');
        $(".exit-button").css('display',"block");
        $(".support-answer").css('display',"block");
        $(".support-answer").css("visibility", "hidden");
    });

    $(".sell_to_sup").click(function() {
        var val =$(".review").val().split(' ').join('');
        if(val!=="") {
            $(".support-answer").css("visibility", "visible");
            $(".review").attr('disabled',true);  
        }
        
    });

    $(".exit-button").click(function() {
        val="";
        $(".support-answer").css('display',"none");
        $(".review").attr('disabled',false);
        $(".review").val('');
        $("h1").css('display', 'block');
        $(".row").css('display','flex');
        $(".support-service").css('display','none');
        $(".txt-area").css('display','none');
        $(".exit-button").css('display',"none");
    });

    $(".orderbutton").click(function(){
        $("h1").css('display', 'none');
        $(".row").css('display','none');
        $(".confirm_order").css('display', 'block');
        $(".tomenu_order").css("display","block");
        $(".orderes").css("height","85vh");
        $(".orderes").css("display","flex");
        $(".order_list").empty();
        for(let i=0;i<dishes.length;i++) {
            if(dishes[i].count>0) {
                order = true;
                if(dishes[i].count==1) $(".order_list").append($("<p></p>").text(`${dishes[i].name} - ${dishes[i].count} serving`));
                else $(".order_list").append($("<p></p>").text(`${dishes[i].name} - ${dishes[i].count} servings`));
                 
            }
            
        }
        if(!order) {
            $(".order_list").append($("<p></p>").text("Your orderlist is empty!"));
        }
    });

    $(".confirm_order").click(function() {
        if(order){
            alert("Your Choise thanks you for your order. Buon appetito");
            location.reload();  
        }
        else {
            alert("Sorry, but you haven't ordered anything")
        }
    });

    $(".tomenu_order").click(function(){
        $("h1").css('display', 'block');
        $(".row").css('display','flex');
        $(".confirm_order").css('display', 'none');
        $(".tomenu_order").css("display","none");
        $(".orderes").css("height","0");
        $(".orderes").css("display","none");
    });

    $(".menubutton").click(function(){
        $("h1").css('display', 'none');
        $(".row").css('display','none');
        $(".menu").css("display",'block');
        
    });

    $(".add_to_menu_borcht").click(function(){
        dishes[0].count++;
        $(".borcht").text(`Borcht(${dishes[0].count})`);
    });

    $(".remove_from_menu_borcht").click(function(){
        if (dishes[0].count!=0){
            dishes[0].count--;
            if(dishes[0].count!=0) {
                $(".borcht").text(`Borcht(${dishes[0].count})`);
            }
            else {
                $(".borcht").text("Borcht");
            }  
        }
        
        
    });

    $(".menu_cancel").click(function(){
        $("h1").css('display', 'block');
        $(".row").css('display','flex');
        for(let i=0;i<dishes.length;i++) {
            dishes[i].count = 0;
        }
        $(".menu").css("display",'none');
        order=false;
        $(".borcht").text("Borcht");
        $(".shchi").text("Shchi");
        $(".orloff").text("Veal Orloff");

    });

    $(".menu_accept").click(function(){
        $("h1").css('display', 'block');
        $(".row").css('display','flex');
        $(".menu").css("display",'none');
        if(Checker(dishes)) order = true
        else order = false;
    });


    $(".add_to_menu_shchi").click(function(){
        dishes[2].count++;
        $(".shchi").text(`Shchi(${dishes[2].count})`);
    });

    $(".remove_from_menu_shchi").click(function(){
        if (dishes[2].count!=0){
            dishes[2].count--;
            if(dishes[2].count!=0) {
                $(".shchi").text(`Shchi(${dishes[2].count})`);
            }
            else {
                $(".shchi").text("Shchi");
            }  
        }
        
        
    });

    $(".add_to_menu_orloff").click(function(){
        dishes[4].count++;
        $(".orloff").text(`Veal Orloff(${dishes[4].count})`);
    });

    $(".remove_from_menu_orloff").click(function(){
        if (dishes[4].count!=0){
            dishes[4].count--;
            if(dishes[4].count!=0) {
                $(".orloff").text(`Veal Orloff(${dishes[4].count})`);
            }
            else {
                $(".orloff").text("Veal Orloff");
            }  
        }
        
        
    });

});