let currDate = new Date();
let currHour = currDate.getHours();
//to force update
function loadHTML(){
    const $root = $('#page');
    let elt = 
        `<section id="welcome" class="hero is-fullheight is-bold" style="background-size: 300px; background-repeat: no-repeat; background-position: center;">
            <div id = "container" style = "margin-top: 200px">
                <span class = "text1">Welcome</span>
            </div>
        </section>
        <section class="section" id = "AM">
            <div class="container">
                <div class="content">
                    <h1 class="title" >Hello!</h1>
                    <h5 class="subtitle has-text-weight-normal">-An Informal Introduction</h5>
                    <p>
                        My name is Andres Menjivar Jr. and welcome to my personal site! 
                        Currently, I am a senior studying Computer Science (BS) and a minor in Neuroscience at 
                        The University of North Carolina at Chapel Hill. I am grateful to be a first generation student, 
                        with my older sibling being graduate of UNC-CH in 2016. 
                        Prior to university life, I was heavily focused in student government and had hobbies such as playing cello, 
                        digital art design, and mobile photography. These hobbies remain today and are presented throughout some of my work 
                        (such as this). This site has grown from an individual project 
                        to an accumulation of work from me and my colleagues. Being the organizer and head developer has been an exciting 
                        experience, giving me a new sense of responsibility and teamwork. While I love programming, I also enjoy making the 
                        user experience the best it can be. I continue improving my previous projects, making them more accessabile to employers, 
                        colleagues, and anyone who would like to view them. They show a snippet of my knowledge in the field, 
                        and as this site continues to expand, I hope my work continues to express this.
                    </p>
                    <p class ="notification is-warning">
                            Note [2-18-22]: Site update underway (exciting!). That being said, some portions may seem outdated. 
                            For employers viewing this: Resume pdf is the most up to date regardng course work, projects, and experience. : ]
                </p>
                </div>
            </div>
        </section>
        <div class = "break"></div>
        <section class="section" id = "Projects">
            <div class="container">
                <div class="content">
                    <h1 class="title">Projects</h1>
                    <h5 class="subtitle has-text-weight-normal">-cool caption to be :)</h5>
                    <p>Some projects I have personally enjoyed creating. Hope you enjoy!</p>
                </div>
                <div class="columns box has-text-centered" style = "background-color:transparent; border-radius:25px;">
                    <div class="column">
                        <p> This is <a href = "https://kmps-spicy-9-adventure.herokuapp.com/">KMP'S Spicy 9 Adventure!</a> Play as either a Ketan Mayer Patel, 
                        the head of the Computer Science Dept. at UNC-CH, or as a UNC CS professor. 
                        The goal is to either collect all the sushi as KMP, or be a professor and stop him! 
                        Good luck and have fun!</p>
                        </div>
                    <div class="column">
                        <figure class="image">
                            <img src="./images/gameplay_gif.gif" style="width:100%; height:auto; margin:0 auto;">
                        </figure>
                        <h1 class="title">Designed and Created by:</h1>
                        <figure class="image">
                            <img src="./images/team_signoff.png" style="width:33%;margin:0 auto;" alt="Team signoff">
                        </figure>
                        <strong>Spicy 9 Adventure</strong>
                        <br>
                        Nelson Lopez
                        <br>
                        Andres Menjivar
                        <br>
                        Samuel Miller
                        <br>
                        Alexander Harvey
                        <br>
                    </div>
                </div>
            </div>
        </section>`
    $(elt).appendTo($root);
}
function loadmode(hour){
    
    $('head').append('<link rel="stylesheet" type="text/css" href="./css/night.css">');
    $('#welcome').css({"background-image": "url(./images/Walter.png)"});
    $('.navbar').css("background-color","hsl(0, 0%, 4%)");
    $('#navbarBasicExample').css("background-color","hsl(0, 0%, 4%)");
    $('section > div > div > h1, h5, p').css("color","rgb(150,150,150)");
    $('.moretext1').css("color","rgb(70,18,161)")
    $('#me').attr("src","./images/AMJ_logo/Andres_Logo_BlueBlack.png")
    $('.column > h1').css("color", "rgb(150,150,150)");
    $('.resume_content').css("background-color", "hsl(0,0%,4%)");
    $('.resume_content > .box').css("background-color", "hsl(0,0%,10%)");
    $('#AM').css({"background-image": `url(./images/randomdrops/night/r${Math.floor(Math.random() * (12-1)+1)}.png)`});
    $('#Photography').css({"background-image": `url(./images/randomdrops/night/r${Math.floor(Math.random() * (12-1)+1)}.png)`});
    $('#Projects').css({"background-image": `url(./images/randomdrops/night/r${Math.floor(Math.random() * (12-1)+1)}.png)`});
    $('#Resume').css({"background-image": `url(./images/randomdrops/night/r${Math.floor(Math.random() * (12-1)+1)}.png)`});

    $("#warning").css("color","black");
}

function mobile (){
    if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i)  
        || navigator.userAgent.match(/iPad/i)  
        || navigator.userAgent.match(/iPod/i) 
        || navigator.userAgent.match(/BlackBerry/i) 
        || navigator.userAgent.match(/Windows Phone/i)) { 
            $('#welcome').css("background-size","75%");
            $('.text1').css("font-size","100px");
            $('#burger').css("zoom","300%");
            $('.navbar-item').css("font-size","300%");
            $('#AM').css("font-size","225%");
            $('#Photography').css("font-size","225%");
            $('.cols').css("zoom","35%");
            $('#Projects').css("font-size","225%");
            $('#Resume').css("font-size","225%");
            $('p').css("font-size","100%");
    }
}
$(function() {
    loadHTML();
    loadmode(currHour);
    mobile();
});