import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Christian",
    lastName: "Flores",
    initials: "CF", // the example uses first and last, but feel free to use three or more if you like.
    position: "A Full Stack Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '⛽',
            text: 'I am driven by hard work and determination.'
        },
        {
            emoji: '🥅',
            text: 'I thrive on the relentless pursuit of my goals.'
        },
        {
            emoji: '🌎',
            text: 'Based in the US'
        },
        {
            emoji: "📧",
            text: "Floresc712@yahoo.com"
        }
    ],
    socials: [
        {
            link: "https://www.instagram.com/ambitiousflo_/?hl=en",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/AmbitiousFlo",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/christian-flores-197557163/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Hello, I'm Christian Flores, a Full Stack Developer currently exploring the United States with my wife and our 1 year old son. I have had the honor of serving in the U.S. Air Force for 6 years, and I've also worked as an IT Support Specialist for the United States District Courts. Being a developer is not just rewarding in terms of creating innovative solutions, but it's also amazing how our code can impact the world, one line at a time.",
    skills:
        {
            proficientWith: ['Javascript', 'React', 'Git', 'Github', 'Bootstrap', 'HTML5', 'CSS3', 'NODEJS', 'JQUERY','MongoDB','Express'],
            exposedTo: ['Python', 'Word Press','NextJs']
        }
    ,
    hobbies: [
        {
            label: 'Reading',
            emoji: '📖'
        },
        {
            label: 'Sports',
            emoji: '🏅'
        },
        {
            label: 'Movies',
            emoji: '🎥'
        },
        {
            label: 'Cooking',
            emoji: '🍳'
        },
        {
            label: 'Video Games',
            emoji: '🎮'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "My Portfolio",
            live: "https://christianflores.netlify.app/", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/AmbitiousFlo/My-Portfolio", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "Task Master",
            live: "https://taskmaster-grp3-ef54a6c054dc.herokuapp.com/",
            source: "https://github.com/AmbitiousFlo/Task-Master",
            image: mock2
        },
        {
            title: "Weather Dashboard",
            live: "https://ambitiousflo.github.io/WeatherDashboard/",
            source: "https://github.com/AmbitiousFlo/WeatherDashboard",
            image: mock3
        },
        {
            title: "Sports Trivia",
            live: "https://ambitiousflo.github.io/Sports-Trivia/",
            source: "https://github.com/AmbitiousFlo/Sports-Trivia",
            image: mock4
        },
        {
            title: "Project 5",
            live: "",
            source: "",
            image: mock5
        }
    ]
}