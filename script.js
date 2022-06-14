$("button").click(function() {
    let nameValue = $(".name").val();
    $(".data-display").append("Starting May to the year 2050"+" "+nameValue + " " + "will be playing" + " ");
    
    let sportValue = $(".favSport").val();
    $(".data-display").append(sportValue+","+" ");
    
    let calcValue=332;
    let weekValue =$(".sportWeek").val();
    $(".data-display").append(weekValue * calcValue + " "+"times until the year 2050");

    $("input").hide();
    $("p").hide();
    $("button").hide();
    $("h1").hide();
    $(".data-display").show();
});