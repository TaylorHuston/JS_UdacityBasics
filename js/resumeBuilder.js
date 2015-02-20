
var bio = {
	"name" : "Taylor Huston",
	"age" : "30",
	"role" : "Aspiring Web Developer",
	"picture" : "images/me.jpg",
	"skills" : ["Java", "JavaScript", "HTML/CSS"]

};

var education = {
	"school" : "University of Advancing Technology",
	"degree" : "B.A. in Game Design"
};

var work = {
    "jobs" : [ {
	
        "employer" : "TherapySites",
        "role" : "Front End Developer",
        "desc" : "Since graduating with my B.A. I have been working at TherapySites providing customer support and custom design work for our in-house CMS. I am currently the lead designer on our new set of fully responsive templates."
    }]
};

var projects = {
    "projects" : [ {
        "name" : "Responsive Templates",
        "date" : 2014,
    }]
}


projects.display = function() {
    for (i in projects.projects) {
        $("#projects").append(HTMLprojectStart);
        $(".project-entry:last").append(HTMLprojectTitle.replace("%data%",projects.projects[i].name));
    }
}

function displayBio() {
    var formattedName = HTMLheaderName.replace("%data%",bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var myPic = HTMLbioPic.replace("%data%", bio.picture);

    $("#header").prepend(formattedRole)
      .prepend(formattedName)
      .append(myPic);


    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
              
        for (var i = 0; i < bio.skills.length; i++) {
            $("#skills").append(HTMLskills.replace("%data%",bio.skills[i]));
        }
    }
};
displayBio();

        
function displayWork()    {
    for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);

        $(".work-entry:last").append(
            HTMLworkEmployer.replace("%data%",work.jobs[job].employer) + 
            HTMLworkTitle.replace("%data%",work.jobs[job].role) +
            HTMLworkDescription.replace("%data%",work.jobs[job].desc));
    }
};
displayWork();

function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
    name[0] = name[0].charAt(0).toUpperCase() + name[0].slice(1).toLowerCase();
    name[1] = name[1].toUpperCase();
    return name[0] + " " + name[1];
}

$("#main").append(internationalizeButton);
    
projects.display();

$("#mapDiv").append(googleMap);
