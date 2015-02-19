
var bio = {
	"Name" : "Taylor Huston",
	"Age" : "30",
	"Role" : "Aspiring Web Developer",
	"Profile" : "images/me.jpg",
	"Skills" : ["Java","JavaScript","HTML/CSS"]

};

var education = {
	"School" : "University of Advancing Technology",
	"Degree" : "B.A. in Game Design"
}

var work = {
	"Company" : "TherapySites",
	"Role" : "Front End Developer"
}

var formattedName = HTMLheaderName.replace("%data%",bio.Name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.Role);

$("#header").prepend(formattedRole).prepend(formattedName);