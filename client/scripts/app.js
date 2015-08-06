//have document read at the top and functions at the bottom, all the click events and ajax call lie within.

$(document).ready(function(){
    $.ajax({
        url: "/data",
        success: function(data){
            console.log(data);

            createButtons();
            $.each(data,function(){

                peopleArray.push(this.name);

            })
            console.log(peopleArray);

        //since i didn't use the data() attribute i ended up having different click events for each button.
            $('.button2').on('click', function(){
                removeHighlighted();
                $(this).addClass('highlighted');
                groups = 2;
            });
            $('.button3').on('click', function(){
                removeHighlighted();
                $(this).addClass('highlighted');
                groups = 3;
            });
            $('.button4').on('click', function(){
                removeHighlighted();
                $(this).addClass('highlighted');
                groups = 4;
            });
            $('.button5').on('click', function(){
                removeHighlighted();
                $(this).addClass('highlighted');
                groups = 5;
            });
            $('.button6').on('click', function(){
                removeHighlighted();
                $(this).addClass('highlighted');
                groups = 6;
            });
            $('.button7').on('click', function(){
                removeHighlighted();
                $(this).addClass('highlighted');
                groups = 7;
            });
            $('.button8').on('click', function(){
                removeHighlighted();
                $(this).addClass('highlighted');
                groups = 8;
            });
            $('.button9').on('click', function(){
                removeHighlighted();
                $(this).addClass('highlighted');
                groups = 9;
            });
            $('.button10').on('click', function(){
                removeHighlighted();
                $(this).addClass('highlighted');
                groups = 10;

            });
            $('.button11').on('click', function(){
                removeHighlighted();
                $(this).addClass('highlighted');
                groups = 11;
            });


            $('.randomize').on('click',function(){
                if (groups == 0){
                    alert("You must select a group size");
                } else {


                    clearGroups();
                    peopleArray = shuffleArray(peopleArray);
                    createGroups(peopleArray, groups);
                    showGroups();
                }


            })



        }
    })

});
//some global variables i use without
var groups = 0;
var peopleArray =[];

//creates the buttons for the number of groups we would like to create
var createButtons = function(){
    for (var i = 2; i<12; i++) {
        $('.groupSize').append('<button class="most button'+[i]+'">'+[i]+ '</button>');
    }
    $('.main').append("<div class='randBtn'><button class='randomize'>Randomize</button></div>");

}

//function that creates our groups, one for loop to put out the number of groups and the next to
//append each name to a group

var createGroups = function(array, groups){
    var a=0;
    var i=0;
    var y=1;
    for (a=1; a<=groups; a++){
        $('.main').append('<div class="all group'+[a]+'">'+'<p><strong>Group: '+[a]+'</strong></p>'+ '</div>');
    }
    for (i=0;i<array.length;i++){
        $('.group'+y).append("<p> "+array[i]+"</p>");
        $('.group'+y+ ' p').last().hide().delay(200*i).fadeIn();

        y++;
        if (y>groups){
            y=1;
        }
    }
}

//simple function to clear the groups when we need it
var clearGroups = function(){
    $('.all').remove();
}

//function to remove the highlight from the button we selected for groups

var removeHighlighted = function(){
    $('.main').find('.highlighted').removeClass('highlighted');

}

//shuffles our array of people up

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

