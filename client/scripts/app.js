$(document).ready(function(){
    $.ajax({
        url: "/data",
        success: function(data){
            console.log(data);
            //$.each(data, function(){
            //
            //});
            createButtons();
            $.each(data,function(){
                //$('.main').append(this.name);

                peopleArray.push(this.name);

            })
            console.log(peopleArray);


            $('.button2').on('click', function(){
                $(this).addClass('highlighted');
                groups = 2;
            });
            $('.button3').on('click', function(){
                $(this).addClass('highlighted');
                groups = 3;
            });
            $('.button4').on('click', function(){
                $(this).addClass('highlighted');
                groups = 4;
            });
            $('.button5').on('click', function(){
                $(this).addClass('highlighted');
                groups = 5;
            });
            $('.button6').on('click', function(){
                $(this).addClass('highlighted');
                groups = 6;
            });
            $('.button7').on('click', function(){
                $(this).addClass('highlighted');
                groups = 7;
            });
            $('.button8').on('click', function(){
                $(this).addClass('highlighted');
                groups = 8;
            });
            $('.button9').on('click', function(){
                $(this).addClass('highlighted');
                groups = 9;
            });
            $('.button10').on('click', function(){
                $(this).addClass('highlighted');
                groups = 10;
            });
            $('.button11').on('click', function(){
                $(this).addClass('highlighted');
                groups = 11;
            });


            $('.randomize').on('click',function(){
                clearGroups();
                shuffleArray(peopleArray);
                createGroups(peopleArray,groups);
                showGroups();
                removeHighlighted();

            })



        }
    })

});
var groups = 0;
var peopleArray =[];

var createButtons = function(){
    for (var i = 2; i<12; i++) {
        $('.groupSize').append('<button class="most button'+[i]+'">'+[i]+ '</button>');
    }
    $('.main').append("<div class='randBtn'><button class='randomize'>Randomize</button></div>");

}

var createGroups = function(array, groups){
    var a=0;
    var i=0;
    var y=1;
    var x=array.length/groups;
    var increment =array.length/groups;
    //for (a=1; a<=groups; a++){
    //    $('.main').append('<div class=all group'+[a]+'>'+'<p><strong>Group: '+[a]+'</strong></p>'+ '</div>');
    //        //console.log("I before 2nd for loop: " + i);
    //        for (i; i<x; i++){
    //            //console.log('I is: ' + i + " X is: " + x);
    //            console.log(array[i]);
    //            $('.main').children().last().append("<p> "+array[i]+" </p>");
    //
    //        }
    //    x+=increment;
    //}
    for (a=1; a<=groups; a++){
        $('.main').append('<div class="all group'+[a]+'">'+'<p><strong>Group: '+[a]+'</strong></p>'+ '</div>');
    }
    for (i=0;i<array.length;i++){
        //console.log("Ran: " ,  $('.group'+y));
        var el = $('.group'+y);
        el.append("<p class='names'> "+array[i]+"</p>");
        y++;
        if (y>groups){
            y=1;
        }
    }
}
var showGroups = function(){
    $('.names').fadeIn(500);
}
var clearGroups = function(){
    $('.all').remove();
}

var displayGroups = function(array, groups){
    var num = array.length/groups;
    for(var i =0; i<array.length; i++){
        $('.group'+i).append(array[i])
    }
}

var removeHighlighted = function(){
    $('.main').find('.highlighted').removeClass('highlighted');

}
var shuffleArray = function(array) {
    var currentIndex = array.length, temporaryValue, randomIndex ;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

