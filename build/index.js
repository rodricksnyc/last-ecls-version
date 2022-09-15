"use strict";

$(document).ready(function () {

	//create and append teacher divs with objects

	var teacher = { "teachers": [{
			"teacherId": '9999992-S01',
			"name": 'Zach Tyler',
			"type": "Primary",
			"status": "<i class='fal fa-spinner'></i>In Progress",
			"percentage": 50,
			"date": "3/15/20",
			"launch": "<i class='fas fa-arrow-right darkBlue'></i>"
		}, {
			"teacherId": '7999994-S01',
			"name": 'Jack De Sena',
			"type": "Special Ed",
			"status": "Not Started",
			"percentage": 0,
			"date": "--",
			"launch": "<i class='fas fa-arrow-right darkBlue'></i>"
		}, {
			"teacherId": '9676994-S01',
			"name": 'Mae Whitman',
			"type": "Primary",
			"status": "Complete",
			"percentage": 100,
			"date": "3/15/20",
			"launch": "<i class='fas fa-check limeCheck'></i>"
		}, {
			"teacherId": '9676994-S01',
			"name": 'John Smith',
			"type": "Special Ed",
			"status": "<i class='fal fa-spinner'></i>In Progress",
			"percentage": 75,
			"date": "3/15/20",
			"launch": "<i class='fas fa-arrow-right darkBlue'></i>"
		}]

	};

	for (var j in teacher.teachers) {

		$('.teacherBlocks').append("<div class='teacher newBlocks d-flex align-items-center flex-wrap'><div class=\"col-lg-2 col-md-6 col-sm-6 col-xs-6\"><div class=\"mobile\">TEACHER ID</div><p class=\"black teacherId\">" + teacher.teachers[j].teacherId + "</p></div><div class=\"col-lg-2 col-md-6 col-sm-6 col-xs-6\"><div class=\"mobile\">TEACHER NAME</div><p class=\"black teacherName\">" + teacher.teachers[j].name + "</p></div><div class=\"col-lg-2 col-md-6 col-sm-6 col-xs-6\"><div class=\"mobile\">TYPE</div><p class=\"black teacherType\">" + teacher.teachers[j].type + "</p></div><div class=\"col-lg-2 col-md-6 col-sm-6 col-xs-6\"><div class=\"mobile\">STATUS</div><p class=\"black teacherStatus\">" + teacher.teachers[j].status + "</p></div><div class=\"col-lg-2 col-md-6 col-sm-6 col-xs-6\"><div class=\"mobile\">% COMPLETE</div><div class=\"percentageCircle\"><p class=\"black teacherComplete\">" + teacher.teachers[j].percentage + "</p></div></div><div class=\"col-lg-1 col-md-6 col-sm-6 col-xs-6 margin2\"><div class=\"mobile\">DATE LAST ACCESSED</div><p class=\"black teacherDate\">" + teacher.teachers[j].date + "</p></div><div class=\"col-lg-1 col-md-6 col-sm-6 col-xs-6\"><div class=\"mobile\">LAUNCH</div><div class=\"launchStatus\">" + teacher.teachers[j].launch + "</div></div><div class='progressBarEmpty'></div><div class='progressBarFull'></div></div>");
	}

	//create and append child divs with objects

	var child = { "children": [{
			"childId": '9999992-S01',
			"name": 'Zach Tyler',
			"type": "Primary",
			"status": "<i class='fal fa-spinner'></i>In Progress",
			"percentage": 50,
			"date": "3/15/20",
			"launch": "<i class='fas fa-arrow-right darkBlue'></i>"
		}, {
			"childId": '7999994-S01',
			"name": 'Jack De Sena',
			"type": "Special Ed",
			"status": "Not Started",
			"percentage": 0,
			"date": "--",
			"launch": "<i class='fas fa-arrow-right darkBlue'></i>"
		}, {
			"childId": '9676994-S01',
			"name": 'Mae Whitman',
			"type": "Primary",
			"status": "Complete",
			"percentage": 100,
			"date": "3/15/20",
			"launch": "<i class='fas fa-check limeCheck'></i>"
		}, {
			"childId": '9676994-S01',
			"name": 'John Smith',
			"type": "Special Ed",
			"status": "<i class='fal fa-spinner'></i>In Progress",
			"percentage": 75,
			"date": "3/15/20",
			"launch": "<i class='fas fa-arrow-right darkBlue'></i>"
		}, {
			"childId": '7999994-S01',
			"name": 'Jack De Sena',
			"type": "Special Ed",
			"status": "Not Started",
			"percentage": 0,
			"date": "--",
			"launch": "<i class='fas fa-arrow-right darkBlue'></i>"
		}, {
			"childId": '9999992-S01',
			"name": 'Zach Tyler',
			"type": "Primary",
			"status": "<i class='fal fa-spinner'></i>In Progress",
			"percentage": 50,
			"date": "3/15/20",
			"launch": "<i class='fas fa-arrow-right darkBlue'></i>"
		}, {
			"childId": '9676994-S01',
			"name": 'John Smith',
			"type": "Special Ed",
			"status": "<i class='fal fa-spinner'></i>In Progress",
			"percentage": 75,
			"date": "3/15/20",
			"launch": "<i class='fas fa-arrow-right darkBlue'></i>"
		}, {
			"childId": '9999992-S01',
			"name": 'Zach Tyler',
			"type": "Primary",
			"status": "<i class='fal fa-spinner'></i>In Progress",
			"percentage": 50,
			"date": "3/15/20",
			"launch": "<i class='fas fa-arrow-right darkBlue'></i>"
		}, {
			"childId": '7999994-S01',
			"name": 'Jack De Sena',
			"type": "Special Ed",
			"status": "Not Started",
			"percentage": 0,
			"date": "--",
			"launch": "<i class='fas fa-arrow-right darkBlue'></i>"
		}, {
			"childId": '9999992-S01',
			"name": 'Zach Tyler',
			"type": "Primary",
			"status": "<i class='fal fa-spinner'></i>In Progress",
			"percentage": 50,
			"date": "3/15/20",
			"launch": "<i class='fas fa-arrow-right darkBlue'></i>"
		}, {
			"childId": '7999994-S01',
			"name": 'Jack De Sena',
			"type": "Special Ed",
			"status": "Not Started",
			"percentage": 0,
			"date": "--",
			"launch": "<i class='fas fa-arrow-right darkBlue'></i>"
		}, {
			"childId": '9676994-S01',
			"name": 'Mae Whitman',
			"type": "Primary",
			"status": "Complete",
			"percentage": 100,
			"date": "3/15/20",
			"launch": "<i class='fas fa-check limeCheck'></i>"
		}, {
			"childId": '9676994-S01',
			"name": 'John Smith',
			"type": "Special Ed",
			"status": "<i class='fal fa-spinner'></i>In Progress",
			"percentage": 75,
			"date": "3/15/20",
			"launch": "<i class='fas fa-arrow-right darkBlue'></i>"
		}, {
			"childId": '7999994-S01',
			"name": 'Jack De Sena',
			"type": "Special Ed",
			"status": "Not Started",
			"percentage": 0,
			"date": "--",
			"launch": "<i class='fas fa-arrow-right darkBlue'></i>"
		}, {
			"childId": '9999992-S01',
			"name": 'Zach Tyler',
			"type": "Primary",
			"status": "<i class='fal fa-spinner'></i>In Progress",
			"percentage": 50,
			"date": "3/15/20",
			"launch": "<i class='fas fa-arrow-right darkBlue'></i>"
		}, {
			"childId": '9676994-S01',
			"name": 'John Smith',
			"type": "Special Ed",
			"status": "<i class='fal fa-spinner'></i>In Progress",
			"percentage": 75,
			"date": "3/15/20",
			"launch": "<i class='fas fa-arrow-right darkBlue'></i>"
		}, {
			"childId": '9999992-S01',
			"name": 'Zach Tyler',
			"type": "Primary",
			"status": "<i class='fal fa-spinner'></i>In Progress",
			"percentage": 50,
			"date": "3/15/20",
			"launch": "<i class='fas fa-arrow-right darkBlue'></i>"
		}, {
			"childId": '7999994-S01',
			"name": 'Jack De Sena',
			"type": "Special Ed",
			"status": "Not Started",
			"percentage": 0,
			"date": "--",
			"launch": "<i class='fas fa-arrow-right darkBlue'></i>"
		}, {
			"childId": '9999992-S01',
			"name": 'Zach Tyler',
			"type": "Primary",
			"status": "<i class='fal fa-spinner'></i>In Progress",
			"percentage": 50,
			"date": "3/15/20",
			"launch": "<i class='fas fa-arrow-right darkBlue'></i>"
		}, {
			"childId": '7999994-S01',
			"name": 'Jack De Sena',
			"type": "Special Ed",
			"status": "Not Started",
			"percentage": 0,
			"date": "--",
			"launch": "<i class='fas fa-arrow-right darkBlue'></i>"
		}, {
			"childId": '9676994-S01',
			"name": 'Mae Whitman',
			"type": "Primary",
			"status": "Complete",
			"percentage": 100,
			"date": "3/15/20",
			"launch": "<i class='fas fa-check limeCheck'></i>"
		}, {
			"childId": '9676994-S01',
			"name": 'John Smith',
			"type": "Special Ed",
			"status": "<i class='fal fa-spinner'></i>In Progress",
			"percentage": 75,
			"date": "3/15/20",
			"launch": "<i class='fas fa-arrow-right darkBlue'></i>"
		}, {
			"childId": '7999994-S01',
			"name": 'Jack De Sena',
			"type": "Special Ed",
			"status": "Not Started",
			"percentage": 0,
			"date": "--",
			"launch": "<i class='fas fa-arrow-right darkBlue'></i>"
		}, {
			"childId": '9999992-S01',
			"name": 'Zach Tyler',
			"type": "Primary",
			"status": "<i class='fal fa-spinner'></i>In Progress",
			"percentage": 50,
			"date": "3/15/20",
			"launch": "<i class='fas fa-arrow-right darkBlue'></i>"
		}, {
			"childId": '9676994-S01',
			"name": 'John Smith',
			"type": "Special Ed",
			"status": "<i class='fal fa-spinner'></i>In Progress",
			"percentage": 75,
			"date": "3/15/20",
			"launch": "<i class='fas fa-arrow-right darkBlue'></i>"
		}, {
			"childId": '9999992-S01',
			"name": 'Zach Tyler',
			"type": "Primary",
			"status": "<i class='fal fa-spinner'></i>In Progress",
			"percentage": 50,
			"date": "3/15/20",
			"launch": "<i class='fas fa-arrow-right darkBlue'></i>"
		}, {
			"childId": '7999994-S01',
			"name": 'Jack De Sena',
			"type": "Special Ed",
			"status": "Not Started",
			"percentage": 0,
			"date": "--",
			"launch": "<i class='fas fa-arrow-right darkBlue'></i>"
		}, {
			"childId": '9999992-S01',
			"name": 'Zach Tyler',
			"type": "Primary",
			"status": "<i class='fal fa-spinner'></i>In Progress",
			"percentage": 50,
			"date": "3/15/20",
			"launch": "<i class='fas fa-arrow-right darkBlue'></i>"
		}, {
			"childId": '7999994-S01',
			"name": 'Jack De Sena',
			"type": "Special Ed",
			"status": "Not Started",
			"percentage": 0,
			"date": "--",
			"launch": "<i class='fas fa-arrow-right darkBlue'></i>"
		}, {
			"childId": '9676994-S01',
			"name": 'Mae Whitman',
			"type": "Primary",
			"status": "Complete",
			"percentage": 100,
			"date": "3/15/20",
			"launch": "<i class='fas fa-check limeCheck'></i>"
		}, {
			"childId": '9676994-S01',
			"name": 'John Smith',
			"type": "Special Ed",
			"status": "<i class='fal fa-spinner'></i>In Progress",
			"percentage": 75,
			"date": "3/15/20",
			"launch": "<i class='fas fa-arrow-right darkBlue'></i>"
		}, {
			"childId": '7999994-S01',
			"name": 'Jack De Sena',
			"type": "Special Ed",
			"status": "Not Started",
			"percentage": 0,
			"date": "--",
			"launch": "<i class='fas fa-arrow-right darkBlue'></i>"
		}, {
			"childId": '9999992-S01',
			"name": 'Zach Tyler',
			"type": "Primary",
			"status": "<i class='fal fa-spinner'></i>In Progress",
			"percentage": 50,
			"date": "3/15/20",
			"launch": "<i class='fas fa-arrow-right darkBlue'></i>"
		}, {
			"childId": '9676994-S01',
			"name": 'John Smith',
			"type": "Special Ed",
			"status": "<i class='fal fa-spinner'></i>In Progress",
			"percentage": 75,
			"date": "3/15/20",
			"launch": "<i class='fas fa-arrow-right darkBlue'></i>"
		}, {
			"childId": '9999992-S01',
			"name": 'Zach Tyler',
			"type": "Primary",
			"status": "<i class='fal fa-spinner'></i>In Progress",
			"percentage": 50,
			"date": "3/15/20",
			"launch": "<i class='fas fa-arrow-right darkBlue'></i>"
		}, {
			"childId": '7999994-S01',
			"name": 'Jack De Sena',
			"type": "Special Ed",
			"status": "Not Started",
			"percentage": 0,
			"date": "--",
			"launch": "<i class='fas fa-arrow-right darkBlue'></i>"
		}, {
			"childId": '9999992-S01',
			"name": 'Zach Tyler',
			"type": "Primary",
			"status": "<i class='fal fa-spinner'></i>In Progress",
			"percentage": 50,
			"date": "3/15/20",
			"launch": "<i class='fas fa-arrow-right darkBlue'></i>"
		}, {
			"childId": '7999994-S01',
			"name": 'Jack De Sena',
			"type": "Special Ed",
			"status": "Not Started",
			"percentage": 0,
			"date": "--",
			"launch": "<i class='fas fa-arrow-right darkBlue'></i>"
		}, {
			"childId": '9676994-S01',
			"name": 'Mae Whitman',
			"type": "Primary",
			"status": "Complete",
			"percentage": 100,
			"date": "3/15/20",
			"launch": "<i class='fas fa-check limeCheck'></i>"
		}, {
			"childId": '9676994-S01',
			"name": 'John Smith',
			"type": "Special Ed",
			"status": "<i class='fal fa-spinner'></i>In Progress",
			"percentage": 75,
			"date": "3/15/20",
			"launch": "<i class='fas fa-arrow-right darkBlue'></i>"
		}, {
			"childId": '7999994-S01',
			"name": 'Jack De Sena',
			"type": "Special Ed",
			"status": "Not Started",
			"percentage": 0,
			"date": "--",
			"launch": "<i class='fas fa-arrow-right darkBlue'></i>"
		}, {
			"childId": '9999992-S01',
			"name": 'Zach Tyler',
			"type": "Primary",
			"status": "<i class='fal fa-spinner'></i>In Progress",
			"percentage": 50,
			"date": "3/15/20",
			"launch": "<i class='fas fa-arrow-right darkBlue'></i>"
		}, {
			"childId": '9676994-S01',
			"name": 'John Smith',
			"type": "Special Ed",
			"status": "<i class='fal fa-spinner'></i>In Progress",
			"percentage": 75,
			"date": "3/15/20",
			"launch": "<i class='fas fa-arrow-right darkBlue'></i>"
		}, {
			"childId": '9999992-S01',
			"name": 'Zach Tyler',
			"type": "Primary",
			"status": "<i class='fal fa-spinner'></i>In Progress",
			"percentage": 50,
			"date": "3/15/20",
			"launch": "<i class='fas fa-arrow-right darkBlue'></i>"
		}, {
			"childId": '7999994-S01',
			"name": 'Jack De Sena',
			"type": "Special Ed",
			"status": "Not Started",
			"percentage": 0,
			"date": "--",
			"launch": "<i class='fas fa-arrow-right darkBlue'></i>"
		}]

	};

	for (var j in child.children) {

		$('.childBlocks').append("<div class='child newBlocks d-flex align-items-center flex-wrap'><div class=\"col-lg-2 col-md-6 col-sm-6 col-xs-6\"><div class=\"mobile\">CHILD ID</div><p class=\"black\" id=\"childId\">" + child.children[j].childId + "</p></div><div class=\"col-lg-2 col-md-6 col-sm-6 col-xs-6\"><div class=\"mobile\">CHILD NAME</div><p class=\"black\" id=\"childName\">" + child.children[j].name + "</p></div><div class=\"col-lg-2 col-md-6 col-sm-6 col-xs-6\"><div class=\"mobile\">TYPE</div><p class=\"black\" id=\"childType\">" + child.children[j].type + "</p></div><div class=\"col-lg-2 col-md-6 col-sm-6 col-xs-6\"><div class=\"mobile\">STATUS</div><p class=\"black\" id=\"childStatus\">" + child.children[j].status + "</p></div><div class=\"col-lg-2 col-md-6 col-sm-6 col-xs-6\"><div class=\"mobile\">% COMPLETE</div><div class=\"percentageCircle\"><p class=\"black childComplete\">" + child.children[j].percentage + "</p></div></div><div class=\"col-lg-1 col-md-6 col-sm-6 col-xs-6 margin2\"><div class=\"mobile\">DATE LAST ACCESSED</div><p class=\"black\" id=\"childDate\">" + child.children[j].date + "</p></div><div class=\"col-lg-1 col-md-6 col-sm-6 col-xs-6\"><div class=\"mobile\">LAUNCH</div><div id=\"launchStatus\">" + child.children[j].launch + "</div></div><div class='progressBarEmpty'></div><div class='progressBarFull'></div></div>");
	}

	//create and append child divs with objects

	var child = { "childrenComplete": [{

			"childId": '9676994-S01',
			"name": 'Mae Whitman',
			"type": "Primary",
			"status": "Complete",
			"percentage": 100,
			"date": "3/15/20",
			"launch": "<i class='fas fa-check limeCheck'></i>"
		}, {
			"childId": '9676994-S01',
			"name": 'Mae Whitman',
			"type": "Primary",
			"status": "Complete",
			"percentage": 100,
			"date": "3/15/20",
			"launch": "<i class='fas fa-check limeCheck'></i>"
		}, {
			"childId": '9676994-S01',
			"name": 'Mae Whitman',
			"type": "Primary",
			"status": "Complete",
			"percentage": 100,
			"date": "3/15/20",
			"launch": "<i class='fas fa-check limeCheck'></i>"
		}] };

	for (var j in child.childrenComplete) {

		$('.childBlocksComplete').append("<div class='child newBlocks d-flex align-items-center flex-wrap'><div class=\"col-lg-2 col-md-6 col-sm-6 col-xs-6\"><div class=\"mobile\">CHILD ID</div><p class=\"black childId\">" + child.childrenComplete[j].childId + "</p></div><div class=\"col-lg-2 col-md-6 col-sm-6 col-xs-6\"><div class=\"mobile\">CHILD NAME</div><p class=\"black childName\">" + child.childrenComplete[j].name + "</p></div><div class=\"col-lg-2 col-md-6 col-sm-6 col-xs-6\"><div class=\"mobile\">TYPE</div><p class=\"black childType\">" + child.childrenComplete[j].type + "</p></div><div class=\"col-lg-2 col-md-6 col-sm-6 col-xs-6\"><div class=\"mobile\">STATUS</div><p class=\"black childStatus\">" + child.childrenComplete[j].status + "</p></div><div class=\"col-lg-2 col-md-6 col-sm-6 col-xs-6\"><div class=\"mobile\">% COMPLETE</div><div class=\"percentageCircle\"><p class=\"black childComplete\">" + child.childrenComplete[j].percentage + "</p></div></div><div class=\"col-lg-1 col-md-6 col-sm-6 col-xs-6 margin2\"><div class=\"mobile\">DATE LAST ACCESSED</div><p class=\"black childDate\">" + child.childrenComplete[j].date + "</p></div><div class=\"col-lg-1 col-md-6 col-sm-6 col-xs-6\"><div class=\"mobile\">LAUNCH</div><div class=\"launchStatus\">" + child.childrenComplete[j].launch + "</div></div><div class='progressBarEmpty'></div><div class='progressBarFull'></div></div>");
	}

	var teacher = { "teachersComplete": [{

			"teacherId": '9676994-S01',
			"name": 'Mae Whitman',
			"type": "Primary",
			"status": "Complete",
			"percentage": 100,
			"date": "3/15/20",
			"launch": "<i class='fas fa-check limeCheck'></i>"
		}]

	};

	for (var j in teacher.teachersComplete) {

		$('.teacherBlocksComplete').append("<div class='teacher newBlocks d-flex align-items-center flex-wrap'><div class=\"col-lg-2 col-md-6 col-sm-6 col-xs-6\"><div class=\"mobile\">TEACHER ID</div><p class=\"black teacherId\">" + teacher.teachersComplete[j].teacherId + "</p></div><div class=\"col-lg-2 col-md-6 col-sm-6 col-xs-6\"><div class=\"mobile\">TEACHER NAME</div><p class=\"black teacherName\">" + teacher.teachersComplete[j].name + "</p></div><div class=\"col-lg-2 col-md-6 col-sm-6 col-xs-6\"><div class=\"mobile\">TYPE</div><p class=\"black teacherType\">" + teacher.teachersComplete[j].type + "</p></div><div class=\"col-lg-2 col-md-6 col-sm-6 col-xs-6\"><div class=\"mobile\">STATUS</div><p class=\"black teacherStatus\">" + teacher.teachersComplete[j].status + "</p></div><div class=\"col-lg-2 col-md-6 col-sm-6 col-xs-6\"><div class=\"mobile\">% COMPLETE</div><div class=\"percentageCircle\"><p class=\"black teacherComplete\">" + teacher.teachersComplete[j].percentage + "</p></div></div><div class=\"col-lg-1 col-md-6 col-sm-6 col-xs-6 margin2\"><div class=\"mobile\">DATE LAST ACCESSED</div><p class=\"black teacherDate\">" + teacher.teachersComplete[j].date + "</p></div><div class=\"col-lg-1 col-md-6 col-sm-6 col-xs-6\"><div class=\"mobile\">LAUNCH</div><div class=\"launchStatus\">" + teacher.teachersComplete[j].launch + "</div></div><div class='progressBarEmpty'></div><div class='progressBarFull'></div></div>");
	}

	var parent = { "parents": [{
			"parentId": '9999991C',
			"name": 'Zach Tyler',
			"type": "Primary",
			"status": "<i class='fal fa-spinner'></i>In Progress",
			"percentage": 75,
			"date": "3/15/20",
			"launch": "<i class='fas fa-arrow-right darkBlue'></i>"
		}]

	};

	for (var j in parent.parents) {

		$('.parentBlocks').append("<div class='parent newBlocks d-flex align-items-center flex-wrap'><div class=\"col-lg-2 col-md-6 col-sm-6 col-xs-6\"><div class=\"mobile\">PARENT ID</div><p class=\"black parentId\">" + parent.parents[j].parentId + "</p></div><div class=\"col-lg-2 col-md-6 col-sm-6 col-xs-6\"><div class=\"mobile\">PARENT NAME</div><p class=\"black parentName\">" + parent.parents[j].name + "</p></div><div class=\"col-lg-2 col-md-6 col-sm-6 col-xs-6\"><div class=\"mobile\">TYPE</div><p class=\"black parentType\">" + parent.parents[j].type + "</p></div><div class=\"col-lg-2 col-md-6 col-sm-6 col-xs-6\"><div class=\"mobile\">STATUS</div><p class=\"black parentStatus\">" + parent.parents[j].status + "</p></div><div class=\"col-lg-2 col-md-6 col-sm-6 col-xs-6\"><div class=\"mobile\">% COMPLETE</div><div class=\"percentageCircle\"><p class=\"black parentComplete\">" + parent.parents[j].percentage + "</p></div></div><div class=\"col-lg-1 col-md-6 col-sm-6 col-xs-6 margin2\"><div class=\"mobile\">DATE LAST ACCESSED</div><p class=\"black parentDate\">" + parent.parents[j].date + "</p></div><div class=\"col-lg-1 col-md-6 col-sm-6 col-xs-6\"><div class=\"mobile\">LAUNCH</div><div class=\"launchStatus\">" + parent.parents[j].launch + "</div></div><div class='progressBarEmpty'></div><div class='progressBarFull'></div></div>");
	}

	var sAdmin = { "sAdmins": [{
			"section": 'School Characteristics',
			"status": "Complete",
			"percentage": 100,
			"date": "3/15/20",
			"title": "School Administrator",
			"name": "Dharmapuri Thirumala Anantharam",
			"launch": "<i class='fas fa-check limeCheck'></i>"
		}, {

			"section": 'School Facilities and Resources',
			"status": "Complete",
			"percentage": 100,
			"date": "3/15/20",
			"title": "School Administrator",
			"name": "John Smith",
			"launch": "<i class='fas fa-check limeCheck'></i>"
		}, {
			"section": 'School-Family-Community Connections',
			"status": "<i class='fal fa-spinner'></i>In Progress",
			"percentage": 75,
			"date": "3/15/20",
			"title": "School Administrator",
			"name": "Jane Doe",
			"launch": "<i class='fas fa-arrow-right darkBlue'></i>"
		}, {

			"section": 'School Policies and Practices',
			"status": "<i class='fal fa-spinner'></i>In Progress",
			"percentage": 75,
			"date": "3/15/20",
			"title": "School Administrator",
			"name": "Alex Johnson",
			"launch": "<i class='fas fa-arrow-right darkBlue'></i>"
		}, {

			"section": 'School Programs for Particular Populations',
			"status": "Not Started",
			"percentage": 0,
			"date": "3/15/20",
			"title": "School Administrator",
			"name": "Bill Thomas",
			"launch": "<i class='fas fa-arrow-right darkBlue'></i>"
		}, {

			"section": 'Federal Programs',
			"status": "Not Started",
			"percentage": 0,
			"date": "3/15/20",
			"title": "School Administrator",
			"name": "Andrew Smith",
			"launch": "<i class='fas fa-arrow-right darkBlue'></i>"
		}, {

			"section": 'Staffing and Teacher Characteristics',
			"status": "Not Started",
			"percentage": 0,
			"date": "3/15/20",
			"title": "School Administrator",
			"name": "Kelly Jones",
			"launch": "<i class='fas fa-arrow-right darkBlue'></i>"
		}, {
			"section": 'School Administrator Characteristics',
			"status": "<i class='fal fa-spinner'></i>In Progress",
			"percentage": 100,
			"date": "3/15/20",
			"title": "School Administrator",
			"name": "Hubert Blaine Wolfe­schlegel­stein­hausen­berger­dorff",
			"launch": "<i class='fas fa-check limeCheck'></i>"
		}]

	};

	for (var j in sAdmin.sAdmins) {

		$('.sAdminBlocks').append("<div class='sAdmin newBlocks d-flex align-items-center flex-wrap'><div class=\"col-lg-3 col-md-6 col-sm-6 col-xs-6\"><div class=\"mobile\">SECTION</div><p class=\"black sASection\">" + sAdmin.sAdmins[j].section + "</p></div><div class=\"col-lg-2 col-md-6 col-sm-6 col-xs-6\"><div class=\"mobile\">STATUS</div><p class=\"black sAdminStatus\">" + sAdmin.sAdmins[j].status + "</p></div><div class=\"col-lg-2 col-md-6 col-sm-6 col-xs-6\"><div class=\"mobile\">% COMPLETE</div><div class=\"percentageCircle\"><p class=\"black sAdminComplete\">" + sAdmin.sAdmins[j].percentage + "</p></div></div><div class=\"col-lg-1 col-md-6 col-sm-6 col-xs-6 margin2\"><div class=\"mobile\">DATE LAST ACCESSED</div><p class=\"black sAdminDate\">" + sAdmin.sAdmins[j].date + "</p></div><div class=\"col-lg-3 col-md-6 col-sm-6 col-xs-6\"><div class=\"mobile\">COMPLETED BY</div><div class=\"dropdown\"><button class=\"appendInfo btn btn-default dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\"><div class=\"horizontalBlock\"><div class=\"vertical\"><p class=\"black appendedTitle\">" + sAdmin.sAdmins[j].title + "</p><p class=\"black appendedName\">" + sAdmin.sAdmins[j].name + "</p></div><i class=\"fal fa-angle-down darkBlue\"></i></div></button><div class=\"dropdown-menu\" aria-labelledby=\"appendInfo\"><div class=\"blackLine\"><p class=\"black small\">Select School Staff</p><div class=\"d-flex justify-content-end\"><i class=\"fal fa-angle-down darkBlue\"></i></div></div><div class=\"greyBubble\">School Administrator</div><form><legend>Other School Staff</legend><div class=\"blueBubble\"><p class=\"darkBlue small\">Other School Staff</p><div class=\"form-group\"><label for=\"new-name\">Name</label><input type=\"text\" name=\"\" class=\"form-control new-name\" placeholder=\"Jane Smith\"></div><div class=\"form-group\"><label for=\"new-title\">Title</label><input type=\"text\" name=\"\" class=\"form-control new-title\" placeholder=\"Assistant Principal\"></div><center><button type=\"button\" class=\"btn greenButton add\" data-toggle=\"dropdown\">ADD <i class=\"far fa-plus\"></i></button></center></div></div></form></div></div><div class=\"col-lg-1 col-md-6 col-sm-6 col-xs-6\"><div class=\"mobile\">LAUNCH</div><div class=\"launchStatus\">" + sAdmin.sAdmins[j].launch + "</div></div><div class='progressBarEmpty'></div><div class='progressBarFull'></div></div>");
	}

	var district = { "districts": [{
			"leadid": 'LEA8671A',
			"schoolName": "Nazareth School District",
			"dflag": 'Dolor ipsum',
			"dStatus": "Approval Received"
		}, {
			"leadid": 'LEA9971A',
			"schoolName": "Easton Area School District",
			"dflag": 'Dolor ipsum',
			"dStatus": "Special Handling– In Progress"
		}, {
			"leadid": 'LEA8971A',
			"schoolName": "Bethlehem School District",
			"dflag": 'Lorem ipsum',
			"dStatus": "Approval Received"
		}, {
			"leadid": 'LEA8881A',
			"schoolName": "Kutztown Area School District",
			"dflag": 'Dolor ipsum',
			"dStatus": "Special Handling– In Progress"
		}, {
			"leadid": 'LEA3971A',
			"schoolName": "Nazareth School District",
			"dflag": 'Dolor ipsum',
			"dStatus": "Special Handling– In Progress"
		}, {
			"leadid": 'LEA8971A',
			"schoolName": "Nazareth School District",
			"dflag": 'Lorem ipsum',
			"dStatus": "Special Handling– In Progress"
		}, {
			"leadid": 'LEA1971A',
			"schoolName": "Nazareth School District",
			"dflag": 'Dolor ipsum',
			"dStatus": "Approval Received"
		}, {
			"leadid": 'LEA8571A',
			"schoolName": "Nazareth School District",
			"dflag": 'Dolor ipsum',
			"dStatus": "Approval Received"
		}, {
			"leadid": 'LEA8551A',
			"schoolName": "Nazareth School District",
			"dflag": 'Morem ipsum',
			"dStatus": "Approval Received"
		}, {
			"leadid": 'LEA5571A',
			"schoolName": "Nazareth School District",
			"dflag": 'Dolor ipsum',
			"dStatus": "Approval Received"
		}, {
			"leadid": 'LEA8971A',
			"schoolName": "Nazareth School District",
			"dflag": 'Dolor ipsum',
			"dStatus": "Special Handling– In Progress"
		}, {
			"leadid": 'LEA2971A',
			"schoolName": "Nazareth School District",
			"dflag": 'Dolor ipsum',
			"dStatus": "Special Handling– In Progress"
		}, {
			"leadid": 'LEA7971A',
			"schoolName": "Nazareth School District",
			"dflag": 'Dolor ipsum',
			"dStatus": "Approval Received"
		}, {
			"leadid": 'LEA7771A',
			"schoolName": "Nazareth School District",
			"dflag": 'Morem ipsum',
			"dStatus": "Special Handling– In Progress"
		}, {
			"leadid": 'LEA6671A',
			"schoolName": "Nazareth School District",
			"dflag": 'Dolor ipsum',
			"dStatus": "Approval Received"
		}, {
			"leadid": 'LEA8871A',
			"schoolName": "Nazareth School District",
			"dflag": 'Dolor ipsum',
			"dStatus": "Special Handling– In Progress"
		}, {
			"leadid": 'LEA8071A',
			"schoolName": "Nazareth School District",
			"dflag": 'Ipsum ipsum',
			"dStatus": "Approval Received"
		}, {
			"leadid": 'LEA8681A',
			"schoolName": "Nazareth School District",
			"dflag": 'Dolor ipsum',
			"dStatus": "Special Handling– In Progress"
		}, {
			"leadid": 'LEA9979A',
			"schoolName": "Nazareth School District",
			"dflag": 'Dolor ipsum',
			"dStatus": "Approval Received"
		}, {
			"leadid": 'LEA4941A',
			"schoolName": "Nazareth School District",
			"dflag": 'Dolor ipsum',
			"dStatus": "Approval Received"
		}, {
			"leadid": 'LEA4471A',
			"schoolName": "Nazareth School District",
			"dflag": 'Ipsum ipsum',
			"dStatus": "Special Handling– In Progress"
		}, {
			"leadid": 'LEA3371A',
			"schoolName": "Nazareth School District",
			"dflag": 'Dolor ipsum',
			"dStatus": "Special Handling– In Progress"
		}, {
			"leadid": 'LEA8971A',
			"schoolName": "Nazareth School District",
			"dflag": 'Dolor ipsum',
			"dStatus": "Approval Received"
		}, {
			"leadid": 'LEA1971A',
			"schoolName": "Nazareth School District",
			"dflag": 'Dolor ipsum',
			"dStatus": "Special Handling– In Progress"
		}, {
			"leadid": 'LEA8971A',
			"schoolName": "Nazareth School District",
			"dflag": 'Dolor ipsum',
			"dStatus": "Special Handling– In Progress"
		}, {
			"leadid": 'LEA1171A',
			"schoolName": "Nazareth School District",
			"dflag": 'Dolor ipsum',
			"dStatus": "Special Handling– In Progress"
		}, {
			"leadid": 'LEA8971A',
			"schoolName": "Nazareth School District",
			"dflag": 'Dolor ipsum',
			"dStatus": "Approval Received"
		}, {
			"leadid": 'LEA2271A',
			"schoolName": "Nazareth School District",
			"dflag": 'Dolor ipsum',
			"dStatus": "Approval Received"
		}, {
			"leadid": 'LEA8953A',
			"schoolName": "Nazareth School District",
			"dflag": 'Dolor ipsum',
			"dStatus": "Approval Received"
		}, {
			"leadid": 'LEA8971A',
			"schoolName": "Nazareth School District",
			"dflag": 'Dolor ipsum',
			"dStatus": "Special Handling– In Progress"
		}, {
			"leadid": 'LEA8461A',
			"schoolName": "Nazareth School District",
			"dflag": 'Dolor ipsum',
			"dStatus": "Approval Received"
		}, {
			"leadid": 'LEA8993A',
			"schoolName": "Nazareth School District",
			"dflag": 'Dolor ipsum',
			"dStatus": "Approval Received"
		}, {
			"leadid": 'LEA8994A',
			"schoolName": "Nazareth School District",
			"dflag": 'Dolor ipsum',
			"dStatus": "Special Handling– In Progress"
		}, {
			"leadid": 'LEA8977A',
			"schoolName": "Nazareth School District",
			"dflag": 'Dolor ipsum',
			"dStatus": "Approval Received"
		}, {
			"leadid": 'LEA7772A',
			"schoolName": "Nazareth School District",
			"dflag": 'Dolor ipsum',
			"dStatus": "Special Handling– In Progress"
		}, {
			"leadid": 'LEA6771A',
			"schoolName": "Nazareth School District",
			"dflag": 'Dolor ipsum',
			"dStatus": "Approval Received"
		}, {
			"leadid": 'LEA5671A',
			"schoolName": "Nazareth School District",
			"dflag": 'Dolor ipsum',
			"dStatus": "Approval Received"
		}, {
			"leadid": 'LEA4471A',
			"schoolName": "Nazareth School District",
			"dflag": 'Dolor ipsum',
			"dStatus": "Approval Received"
		}, {
			"leadid": 'LEA8971A',
			"schoolName": "Nazareth School District",
			"dflag": 'Dolor ipsum',
			"dStatus": "Approval Received"
		}, {
			"leadid": 'LEA8971A',
			"schoolName": "Nazareth School District",
			"dflag": 'Dolor ipsum',
			"dStatus": "Approval Received"
		}, {
			"leadid": 'LEA8971A',
			"schoolName": "Nazareth School District",
			"dflag": 'Dolor ipsum',
			"dStatus": "Approval Received"
		}, {
			"leadid": 'LEA8971A',
			"schoolName": "Nazareth School District",
			"dflag": 'Dolor ipsum',
			"dStatus": "Approval Received"
		}, {
			"leadid": 'LEA8971A',
			"schoolName": "Nazareth School District",
			"dflag": 'Dolor ipsum',
			"dStatus": "Approval Received"
		}, {
			"leadid": 'LEA8971A',
			"schoolName": "Nazareth School District",
			"dflag": 'Dolor ipsum',
			"dStatus": "Approval Received"
		}, {
			"leadid": 'LEA8971A',
			"schoolName": "Nazareth School District",
			"dflag": 'Dolor ipsum',
			"dStatus": "Approval Received"
		}, {
			"leadid": 'LEA8971A',
			"schoolName": "Nazareth School District",
			"dflag": 'Dolor ipsum',
			"dStatus": "Approval Received"
		}] };

	for (var j in district.districts) {

		$('.renderDistricts').append("<div class='addBlocks d-flex align-items-center flex-wrap goToInfo' type=\"submit\" tabindex=\"0\" aria-hidden=\"false\" role=\"button\"><div class=\"col-lg-3 col-md-6 col-sm-6 col-xs-6\"><div class=\"mobile\">LEAID</div><p class=\"black leadid\">" + district.districts[j].leadid + "</p></div><div class=\"col-lg-3 col-md-6 col-sm-6 col-xs-6\"><div class=\"mobile\">DISTRICT NAME</div><p class=\"black schoolName\">" + district.districts[j].schoolName + "</p></div><div class=\"col-lg-3 col-md-6 col-sm-6 col-xs-6\"><div class=\"mobile\">DFLAG</div><p class=\"black dflag\">" + district.districts[j].dflag + "</p></div><div class=\"col-lg-3 col-md-6 col-sm-6 col-xs-6\"><div class=\"mobile\">DISTRICT STATUS</div><p class=\"black received dStatus\">" + district.districts[j].dStatus + "</p></div><div class='progressBarEmpty'></div><div class='progressBarFull'></div></div>");
	}

	var schoolList = { "schoolLists": [{
			"schoolId": '9999994C',
			"schoolName": "Edward Tracy Elementary School",
			"schoolAddress": 'Street Name, Easton PA 18040'
		}, {
			"schoolId": '9999994C',
			"schoolName": "Edward Tracy Elementary School",
			"schoolAddress": 'Street Name, Easton PA 18040'
		}, {
			"schoolId": '9999994C',
			"schoolName": "Edward Tracy Elementary School",
			"schoolAddress": 'Street Name, Easton PA 18040'
		}, {
			"schoolId": '9999994C',
			"schoolName": "Edward Tracy Elementary School",
			"schoolAddress": 'Street Name, Easton PA 18040'
		}, {
			"schoolId": '9999994C',
			"schoolName": "Edward Tracy Elementary School",
			"schoolAddress": 'Street Name, Easton PA 18040'
		}, {
			"schoolId": '9999994C',
			"schoolName": "Edward Tracy Elementary School",
			"schoolAddress": 'Street Name, Easton PA 18040'
		}] };

	for (var j in schoolList.schoolLists) {

		$('.renderSchoolList').append("<div class='addBlocks newBlocks d-flex align-items-center flex-wrap position-relative mb-3' type=\"submit\" tabindex=\"0\" aria-hidden=\"false\" role=\"button\"><div class=\"goldLeftBar\"></div><div class=\"col-lg-4 col-md-6 col-sm-12 col-xs-12\"><div class=\"mobile\">SCHOOL ID</div><p class=\"black schoolId\">" + schoolList.schoolLists[j].schoolId + "</p></div><div class=\"col-lg-4 col-md-6 col-sm-12 col-xs-12\"><div class=\"mobile\">SCHOOL NAME</div><p class=\"black schoolName\">" + schoolList.schoolLists[j].schoolName + "</p></div><div class=\"col-lg-4 col-md-12 col-sm-12 col-xs-12\"><div class=\"mobile\">SCHOOL ADDRESS</div><p class=\"black schoolAddress\">" + schoolList.schoolLists[j].schoolAddress + "</p></div></div>");
	}

	//render schools section on schools.html

	var school = { "schools": [{
			"schoolid": '9999993S',
			"theSchools": "Forks Elementary",
			"aDate": '09/12/2020',
			"srCode": 'Lorem ipsum dolor',
			"scCode": 'Ipsum dorem',
			'sStatus': 'Approval Received'

		}, {
			"schoolid": '9999991S',
			"theSchools": "Palmer Elementary",
			"aDate": '03/22/2020',
			"srCode": 'Rem ipsum dolor',
			"scCode": 'Lirem ipsum',
			'sStatus': 'Approval Received'

		}, {
			"schoolid": '9999992S',
			"theSchools": "Holy Family",
			"aDate": '06/02/2020',
			"srCode": 'Ipsum dolor',
			"scCode": 'Rorem lipsum',
			'sStatus': 'Special Handling– In Progress'

		}, {
			"schoolid": '9999988S',
			"theSchools": "Moravian",
			"aDate": '07/18/2020',
			"srCode": 'Dolor Lorem Ipsum',
			"scCode": 'Ipsum soretum',
			'sStatus': 'Special Handling– In Progress'

		}, {
			"schoolid": '9943991S',
			"theSchools": "Liberty",
			"aDate": '08/22/2020',
			"srCode": 'Rem ipsum dolor',
			"scCode": 'Lirem ipsum',
			'sStatus': 'Approval Received'

		}, {
			"schoolid": '9209991S',
			"theSchools": "St. Janes",
			"aDate": '01/22/2020',
			"srCode": 'Rem ipsum dolor',
			"scCode": 'Lirem ipsum',
			'sStatus': 'Approval Received'

		}, {
			"schoolid": '9999993S',
			"theSchools": "Forks Elementary",
			"aDate": '09/12/2020',
			"srCode": 'Lorem ipsum dolor',
			"scCode": 'Ipsum dorem',
			'sStatus': 'Approval Received'

		}, {
			"schoolid": '9999991S',
			"theSchools": "Palmer Elementary",
			"aDate": '03/22/2020',
			"srCode": 'Rem ipsum dolor',
			"scCode": 'Lirem ipsum',
			'sStatus': 'Approval Received'

		}, {
			"schoolid": '9999992S',
			"theSchools": "Holy Family",
			"aDate": '06/02/2020',
			"srCode": 'Ipsum dolor',
			"scCode": 'Rorem lipsum',
			'sStatus': 'Special Handling– In Progress'

		}, {
			"schoolid": '9999988S',
			"theSchools": "Moravian",
			"aDate": '07/18/2020',
			"srCode": 'Dolor Lorem Ipsum',
			"scCode": 'Ipsum soretum',
			'sStatus': 'Special Handling– In Progress'

		}, {
			"schoolid": '9943991S',
			"theSchools": "Liberty",
			"aDate": '08/22/2020',
			"srCode": 'Rem ipsum dolor',
			"scCode": 'Lirem ipsum',
			'sStatus': 'Approval Received'

		}, {
			"schoolid": '9209991S',
			"theSchools": "St. Janes",
			"aDate": '01/22/2020',
			"srCode": 'Rem ipsum dolor',
			"scCode": 'Lirem ipsum',
			'sStatus': 'Approval Received'

		}, {
			"schoolid": '9999993S',
			"theSchools": "Forks Elementary",
			"aDate": '09/12/2020',
			"srCode": 'Lorem ipsum dolor',
			"scCode": 'Ipsum dorem',
			'sStatus': 'Approval Received'

		}, {
			"schoolid": '9999991S',
			"theSchools": "Palmer Elementary",
			"aDate": '03/22/2020',
			"srCode": 'Rem ipsum dolor',
			"scCode": 'Lirem ipsum',
			'sStatus': 'Approval Received'

		}, {
			"schoolid": '9999992S',
			"theSchools": "Holy Family",
			"aDate": '06/02/2020',
			"srCode": 'Ipsum dolor',
			"scCode": 'Rorem lipsum',
			'sStatus': 'Special Handling– In Progress'

		}, {
			"schoolid": '9999988S',
			"theSchools": "Moravian",
			"aDate": '07/18/2020',
			"srCode": 'Dolor Lorem Ipsum',
			"scCode": 'Ipsum soretum',
			'sStatus': 'Special Handling– In Progress'

		}, {
			"schoolid": '9943991S',
			"theSchools": "Liberty",
			"aDate": '08/22/2020',
			"srCode": 'Rem ipsum dolor',
			"scCode": 'Lirem ipsum',
			'sStatus': 'Approval Received'

		}, {
			"schoolid": '9209991S',
			"theSchools": "St. Janes",
			"aDate": '01/22/2020',
			"srCode": 'Rem ipsum dolor',
			"scCode": 'Lirem ipsum',
			'sStatus': 'Approval Received'

		}, {
			"schoolid": '9999993S',
			"theSchools": "Forks Elementary",
			"aDate": '09/12/2020',
			"srCode": 'Lorem ipsum dolor',
			"scCode": 'Ipsum dorem',
			'sStatus': 'Approval Received'

		}, {
			"schoolid": '9999991S',
			"theSchools": "Palmer Elementary",
			"aDate": '03/22/2020',
			"srCode": 'Rem ipsum dolor',
			"scCode": 'Lirem ipsum',
			'sStatus': 'Approval Received'

		}, {
			"schoolid": '9999992S',
			"theSchools": "Holy Family",
			"aDate": '06/02/2020',
			"srCode": 'Ipsum dolor',
			"scCode": 'Rorem lipsum',
			'sStatus': 'Special Handling– In Progress'

		}, {
			"schoolid": '9999988S',
			"theSchools": "Moravian",
			"aDate": '07/18/2020',
			"srCode": 'Dolor Lorem Ipsum',
			"scCode": 'Ipsum soretum',
			'sStatus': 'Special Handling– In Progress'

		}, {
			"schoolid": '9943991S',
			"theSchools": "Liberty",
			"aDate": '08/22/2020',
			"srCode": 'Rem ipsum dolor',
			"scCode": 'Lirem ipsum',
			'sStatus': 'Approval Received'

		}, {
			"schoolid": '9209991S',
			"theSchools": "St. Janes",
			"aDate": '01/22/2020',
			"srCode": 'Rem ipsum dolor',
			"scCode": 'Lirem ipsum',
			'sStatus': 'Approval Received'

		}, {
			"schoolid": '9999993S',
			"theSchools": "Forks Elementary",
			"aDate": '09/12/2020',
			"srCode": 'Lorem ipsum dolor',
			"scCode": 'Ipsum dorem',
			'sStatus': 'Approval Received'

		}, {
			"schoolid": '9999991S',
			"theSchools": "Palmer Elementary",
			"aDate": '03/22/2020',
			"srCode": 'Rem ipsum dolor',
			"scCode": 'Lirem ipsum',
			'sStatus': 'Approval Received'

		}, {
			"schoolid": '9999992S',
			"theSchools": "Holy Family",
			"aDate": '06/02/2020',
			"srCode": 'Ipsum dolor',
			"scCode": 'Rorem lipsum',
			'sStatus': 'Special Handling– In Progress'

		}, {
			"schoolid": '9999988S',
			"theSchools": "Moravian",
			"aDate": '07/18/2020',
			"srCode": 'Dolor Lorem Ipsum',
			"scCode": 'Ipsum soretum',
			'sStatus': 'Special Handling– In Progress'

		}, {
			"schoolid": '9943991S',
			"theSchools": "Liberty",
			"aDate": '08/22/2020',
			"srCode": 'Rem ipsum dolor',
			"scCode": 'Lirem ipsum',
			'sStatus': 'Approval Received'

		}, {
			"schoolid": '9209991S',
			"theSchools": "St. Janes",
			"aDate": '01/22/2020',
			"srCode": 'Rem ipsum dolor',
			"scCode": 'Lirem ipsum',
			'sStatus': 'Approval Received'

		}] };

	for (var j in school.schools) {

		$('.renderSchools').append("<div class=\"addBlocks schoolBlocks d-flex align-items-center flex-wrap goToInfo\" type=\"submit\" tabindex=\"0\" aria-hidden=\"false\" role=\"button\"><div class=\"col-lg-2 col-md-6 col-sm-6 col-xs-6 negPos\"><div class=\"mobile\">SCHOOL ID</div><p class=\"black schoolid\">" + school.schools[j].schoolid + "</p></div><div class=\"col-lg-2 col-md-6 col-sm-6 col-xs-6\"><div class=\"mobile\">SCHOOL NAME</div><p class=\"black theSchools\">" + school.schools[j].theSchools + "</p></div><div class=\"col-lg-2 col-md-6 col-sm-6 col-xs-6\"><div class=\"mobile\">ASSESSMENT DATE</div><p class=\"black aDate\">" + school.schools[j].aDate + "</p></div><div class=\"col-lg-2 col-md-6 col-sm-6 col-xs-6\"><div class=\"mobile\">SCHOOL RECRUITMENT CODE</div><p class=\"black srCode\">" + school.schools[j].srCode + "</p></div><div class=\"col-lg-2 col-md-6 col-sm-6 col-xs-6\"><div class=\"mobile\">SCHOOL COMPLETION CODE</div><p class=\"black scCode\">" + school.schools[j].scCode + "</p></div><div class=\"col-lg-2 col-md-6 col-sm-6 col-xs-6\"><div class=\"mobile\">SCHOOL EROC STATUS</div><p class=\"black received sStatus\">" + school.schools[j].sStatus + "</p></div><div class=\"progressBarEmpty\"></div><div class=\"progressBarFull\"></div></div>");
	}

	//show added eRocs - this needs to be appended from new info added to the database

	var eRoc = { "eRocs": [{
			"time": '10/13/2020 11:05AM',
			"mode": "Phone",
			"result": "Appointment Made",
			"name": "Marcy Young",
			"title": "Title",
			"comment": "<i class='fas fa-comment-alt-dots darkBlue'></i>",
			"attempt": "Liza Herle"
		}] };

	for (var j in eRoc.eRocs) {

		$('.renderErocs').append("<div class=\"addBlocks d-flex align-items-center flex-wrap position-relative mb-3 hidden\" type=\"submit\" tabindex=\"0\" aria-hidden=\"false\" role=\"button\"><div class=\"goldLeftBar\"></div><div class=\"col-lg-2 col-md-6 col-sm-12 col-xs-12\"><div class=\"mobile\">CONTACT DATE & TIME</div><p class=\"black time\">" + eRoc.eRocs[j].time + "</p></div><div class=\"col-lg-1 col-md-6 col-sm-12 col-xs-12\"><div class=\"mobile\">MODE</div><p class=\"black mode\">" + eRoc.eRocs[j].mode + "</p></div><div class=\"col-lg-2 col-md-6 col-sm-12 col-xs-12\"><div class=\"mobile\">RESULT</div><p class=\"black result\">" + eRoc.eRocs[j].result + "</p></div><div class=\"col-lg-2 col-md-6 col-sm-12 col-xs-12\"><div class=\"mobile\">CONTACT NAME</div><p class=\"black name\">" + eRoc.eRocs[j].name + "</p></div><div class=\"col-lg-1 col-md-6 col-sm-12 col-xs-12\"><div class=\"mobile\">CONTACT TITLE/POSITION</div><p class=\"black eRoctitle\">" + eRoc.eRocs[j].title + "</p></div><div class=\"col-lg-2 col-md-6 col-sm-12 col-xs-12\"><div class=\"mobile\">COMMENTS/INSTRUCTIONS</div><div class=\"comment\">" + eRoc.eRocs[j].comment + "</div></div><div class=\"col-lg-2 col-md-6 col-sm-12 col-xs-12\"><div class=\"mobile\">PERSON WHO MADE CONTACT ATTEMPT</div><p class=\"black attempt\">" + eRoc.eRocs[j].attempt + "</p></div></div>");
	}

	$('.doneEroc').click(function () {

		$('.grayBoxEmpty').remove();
		$('.eRocAttr').removeClass('hidden');
		$('.renderErocs').removeClass('hidden');
	});

	var districtUpdate = { "districtsUpdate": [{
			"checkboxID": 'custom11',
			"leadid": 'LEA8671A',
			"schoolName": "Nazareth School District",
			"dflag": 'Dolor ipsum',
			"dStatus": "Approval Received"
		}, {
			"checkboxID": 'custom12',
			"leadid": 'LEA9971A',
			"schoolName": "Easton Area School District",
			"dflag": 'Dolor ipsum',
			"dStatus": "Special Handling– In Progress"
		}, {
			"checkboxID": 'custom13',
			"leadid": 'LEA8971A',
			"schoolName": "Bethlehem School District",
			"dflag": 'Lorem ipsum',
			"dStatus": "Approval Received"
		}, {
			"checkboxID": 'custom14',
			"leadid": 'LEA8671A',
			"schoolName": "Nazareth School District",
			"dflag": 'Dolor ipsum',
			"dStatus": "Approval Received"
		}, {
			"checkboxID": 'custom15',
			"leadid": 'LEA9971A',
			"schoolName": "Easton Area School District",
			"dflag": 'Dolor ipsum',
			"dStatus": "Special Handling– In Progress"
		}, {
			"checkboxID": 'custom16',
			"leadid": 'LEA8971A',
			"schoolName": "Bethlehem School District",
			"dflag": 'Lorem ipsum',
			"dStatus": "Approval Received"
		}, {
			"checkboxID": 'custom17',
			"leadid": 'LEA8671A',
			"schoolName": "Nazareth School District",
			"dflag": 'Dolor ipsum',
			"dStatus": "Approval Received"
		}, {
			"checkboxID": 'custom18',
			"leadid": 'LEA9971A',
			"schoolName": "Easton Area School District",
			"dflag": 'Dolor ipsum',
			"dStatus": "Special Handling– In Progress"
		}, {
			"checkboxID": 'custom19',
			"leadid": 'LEA8971A',
			"schoolName": "Bethlehem School District",
			"dflag": 'Lorem ipsum',
			"dStatus": "Approval Received"
		},, {
			"checkboxID": 'custom190',
			"leadid": 'LEA9971A',
			"schoolName": "Easton Area School District",
			"dflag": 'Dolor ipsum',
			"dStatus": "Special Handling– In Progress"
		}, {
			"checkboxID": 'custom160',
			"leadid": 'LEA8971A',
			"schoolName": "Bethlehem School District",
			"dflag": 'Lorem ipsum',
			"dStatus": "Approval Received"
		}, {
			"checkboxID": 'custom170',
			"leadid": 'LEA8671A',
			"schoolName": "Nazareth School District",
			"dflag": 'Dolor ipsum',
			"dStatus": "Approval Received"
		}, {
			"checkboxID": 'custom180',
			"leadid": 'LEA9971A',
			"schoolName": "Easton Area School District",
			"dflag": 'Dolor ipsum',
			"dStatus": "Special Handling– In Progress"
		}, {
			"checkboxID": 'custom190',
			"leadid": 'LEA8971A',
			"schoolName": "Bethlehem School District",
			"dflag": 'Lorem ipsum',
			"dStatus": "Approval Received"
		}, {
			"checkboxID": 'custom110',
			"leadid": 'LEA8671A',
			"schoolName": "Nazareth School District",
			"dflag": 'Dolor ipsum',
			"dStatus": "Approval Received"
		}, {
			"checkboxID": 'custom120',
			"leadid": 'LEA9971A',
			"schoolName": "Easton Area School District",
			"dflag": 'Dolor ipsum',
			"dStatus": "Special Handling– In Progress"
		}, {
			"checkboxID": 'custom130',
			"leadid": 'LEA8971A',
			"schoolName": "Bethlehem School District",
			"dflag": 'Lorem ipsum',
			"dStatus": "Special Handling– In Progress"
		}, {
			"checkboxID": 'custom140',
			"leadid": 'LEA8671A',
			"schoolName": "Nazareth School District",
			"dflag": 'Dolor ipsum',
			"dStatus": "Approval Received"
		}, {
			"checkboxID": 'custom222',
			"leadid": 'LEA9971A',
			"schoolName": "Easton Area School District",
			"dflag": 'Dolor ipsum',
			"dStatus": "Special Handling– In Progress"
		}, {
			"checkboxID": 'custom223',
			"leadid": 'LEA8971A',
			"schoolName": "Bethlehem School District",
			"dflag": 'Lorem ipsum',
			"dStatus": "Special Handling– In Progress"
		}, {
			"checkboxID": 'custom224',
			"leadid": 'LEA8671A',
			"schoolName": "Nazareth School District",
			"dflag": 'Dolor ipsum',
			"dStatus": "Approval Received"
		}, {
			"checkboxID": 'custom225',
			"leadid": 'LEA9971A',
			"schoolName": "Easton Area School District",
			"dflag": 'Dolor ipsum',
			"dStatus": "Special Handling– In Progress"
		}, {
			"checkboxID": 'custom226',
			"leadid": 'LEA8971A',
			"schoolName": "Bethlehem School District",
			"dflag": 'Lorem ipsum',
			"dStatus": "Special Handling– In Progress"
		}, {
			"checkboxID": 'custom227',
			"leadid": 'LEA8671A',
			"schoolName": "Nazareth School District",
			"dflag": 'Dolor ipsum',
			"dStatus": "Approval Received"
		}, {
			"checkboxID": 'custom228',
			"leadid": 'LEA9971A',
			"schoolName": "Easton Area School District",
			"dflag": 'Dolor ipsum',
			"dStatus": "Special Handling– In Progress"
		}, {
			"checkboxID": 'custom229',
			"leadid": 'LEA8971A',
			"schoolName": "Bethlehem School District",
			"dflag": 'Lorem ipsum',
			"dStatus": "Special Handling– In Progress"
		}, {
			"checkboxID": 'custom230',
			"leadid": 'LEA8671A',
			"schoolName": "Nazareth School District",
			"dflag": 'Dolor ipsum',
			"dStatus": "Approval Received"
		}] };

	for (var j in districtUpdate.districtsUpdate) {

		$('.renderDistrictUpdate').append("<div class=\"updateBlocks districtUpdateBlocks d-flex align-items-center flex-wrap position-relative mb-3\" type=\"submit\" tabindex=\"0\" aria-hidden=\"false\" role=\"button\"><div class=\"goldLeftBar\"></div><div class=\"one absoluteCheckbox\"><input class=\"form-check-input\" type=\"checkbox\" name=\"validation\" id=\"" + districtUpdate.districtsUpdate[j].checkboxID + "\"><label class=\"form-check-label fontZero\" tabindex=\"0\" for=\"" + districtUpdate.districtsUpdate[j].checkboxID + "\">something</label></div><div class=\"col-lg-3 col-md-6 col-sm-12 col-xs-12\"><div class=\"mobile\">LEAID</div><p class=\"black leadid\">" + districtUpdate.districtsUpdate[j].leadid + "</p></div><div class=\"col-lg-3 col-md-6 col-sm-12 col-xs-12\"><div class=\"mobile\">DISTRICT NAME</div><p class=\"black schoolName\">" + districtUpdate.districtsUpdate[j].schoolName + "</p></div><div class=\"col-lg-3 col-md-12 col-sm-12 col-xs-12\"><div class=\"mobile\">DFLAG</div><p class=\"black dflag\">" + districtUpdate.districtsUpdate[j].dflag + "</p></div><div class=\"col-lg-3 col-md-12 col-sm-12 col-xs-12\"><div class=\"mobile\">STATUS</div><p class=\"black dStatus\">" + districtUpdate.districtsUpdate[j].dStatus + "</p></div></div>");
	}

	var schoolUpdate = { "schoolsUpdate": [{
			"checkboxID": 'custom13',
			"schoolid": '9939993S',
			"theSchools": "Holy Family",
			"sdisp": '72'
		}, {
			"checkboxID": 'custom14',
			"schoolid": '9999993S',
			"theSchools": "Palmer Elementary",
			"sdisp": '73'
		}, {
			"checkboxID": 'custom15',
			"schoolid": '9566993S',
			"theSchools": "Forks Elementary",
			"sdisp": '75'
		}, {
			"checkboxID": 'custom16',
			"schoolid": '9222973S',
			"theSchools": "Moravian",
			"sdisp": '77'
		}, {
			"checkboxID": 'custom17',
			"schoolid": '8228973S',
			"theSchools": "Linerty",
			"sdisp": '90'
		}, {
			"checkboxID": 'custom18',
			"schoolid": '9939993S',
			"theSchools": "Holy Family",
			"sdisp": '72'
		}, {
			"checkboxID": 'custom19',
			"schoolid": '9999993S',
			"theSchools": "Palmer Elementary",
			"sdisp": '73'
		}, {
			"checkboxID": 'custom20',
			"schoolid": '9566993S',
			"theSchools": "Forks Elementary",
			"sdisp": '75'
		}, {
			"checkboxID": 'custom21',
			"schoolid": '9222973S',
			"theSchools": "Moravian",
			"sdisp": '77'
		}, {
			"checkboxID": 'custom22',
			"schoolid": '8228973S',
			"theSchools": "Linerty",
			"sdisp": '90'
		},, {
			"checkboxID": 'custom23',
			"schoolid": '8228973S',
			"theSchools": "Linerty",
			"sdisp": '90'
		}, {
			"checkboxID": 'custom24',
			"schoolid": '9939993S',
			"theSchools": "Holy Family",
			"sdisp": '72'
		}, {
			"checkboxID": 'custom25',
			"schoolid": '9999993S',
			"theSchools": "Palmer Elementary",
			"sdisp": '73'
		}, {
			"checkboxID": 'custom26',
			"schoolid": '9566993S',
			"theSchools": "Forks Elementary",
			"sdisp": '75'
		}, {
			"checkboxID": 'custom27',
			"schoolid": '9222973S',
			"theSchools": "Moravian",
			"sdisp": '77'
		}, {
			"checkboxID": 'custom28',
			"schoolid": '8228973S',
			"theSchools": "Linerty",
			"sdisp": '90'
		}, {
			"checkboxID": 'custom29',
			"schoolid": '8228973S',
			"theSchools": "Linerty",
			"sdisp": '90'
		},, {
			"checkboxID": 'custom30',
			"schoolid": '8228973S',
			"theSchools": "Linerty",
			"sdisp": '90'
		}, {
			"checkboxID": 'custom31',
			"schoolid": '9939993S',
			"theSchools": "Holy Family",
			"sdisp": '72'
		}, {
			"checkboxID": 'custom32',
			"schoolid": '9999993S',
			"theSchools": "Palmer Elementary",
			"sdisp": '73'
		}, {
			"checkboxID": 'custom33',
			"schoolid": '9566993S',
			"theSchools": "Forks Elementary",
			"sdisp": '75'
		}, {
			"checkboxID": 'custom34',
			"schoolid": '9222973S',
			"theSchools": "Moravian",
			"sdisp": '77'
		}, {
			"checkboxID": 'custom35',
			"schoolid": '8228973S',
			"theSchools": "Linerty",
			"sdisp": '90'
		}, {
			"checkboxID": 'custom43',
			"schoolid": '9939993S',
			"theSchools": "Holy Family",
			"sdisp": '72'
		}, {
			"checkboxID": 'custom44',
			"schoolid": '9999993S',
			"theSchools": "Palmer Elementary",
			"sdisp": '73'
		}, {
			"checkboxID": 'custom45',
			"schoolid": '9566993S',
			"theSchools": "Forks Elementary",
			"sdisp": '75'
		}, {
			"checkboxID": 'custom46',
			"schoolid": '9222973S',
			"theSchools": "Moravian",
			"sdisp": '77'
		}, {
			"checkboxID": 'custom47',
			"schoolid": '8228973S',
			"theSchools": "Linerty",
			"sdisp": '90'
		}, {
			"checkboxID": 'custom48',
			"schoolid": '9939993S',
			"theSchools": "Holy Family",
			"sdisp": '72'
		}, {
			"checkboxID": 'custom49',
			"schoolid": '9999993S',
			"theSchools": "Palmer Elementary",
			"sdisp": '73'
		}, {
			"checkboxID": 'custom50',
			"schoolid": '9566993S',
			"theSchools": "Forks Elementary",
			"sdisp": '75'
		}, {
			"checkboxID": 'custom51',
			"schoolid": '9222973S',
			"theSchools": "Moravian",
			"sdisp": '77'
		}, {
			"checkboxID": 'custom52',
			"schoolid": '8228973S',
			"theSchools": "Linerty",
			"sdisp": '90'
		},, {
			"checkboxID": 'custom53',
			"schoolid": '8228973S',
			"theSchools": "Linerty",
			"sdisp": '90'
		}, {
			"checkboxID": 'custom54',
			"schoolid": '9939993S',
			"theSchools": "Holy Family",
			"sdisp": '72'
		}, {
			"checkboxID": 'custom55',
			"schoolid": '9999993S',
			"theSchools": "Palmer Elementary",
			"sdisp": '73'
		}, {
			"checkboxID": 'custom56',
			"schoolid": '9566993S',
			"theSchools": "Forks Elementary",
			"sdisp": '75'
		}, {
			"checkboxID": 'custom57',
			"schoolid": '9222973S',
			"theSchools": "Moravian",
			"sdisp": '77'
		}, {
			"checkboxID": 'custom58',
			"schoolid": '8228973S',
			"theSchools": "Linerty",
			"sdisp": '90'
		}, {
			"checkboxID": 'custom59',
			"schoolid": '8228973S',
			"theSchools": "Linerty",
			"sdisp": '90'
		},, {
			"checkboxID": 'custom60',
			"schoolid": '8228973S',
			"theSchools": "Linerty",
			"sdisp": '90'
		}, {
			"checkboxID": 'custom61',
			"schoolid": '9939993S',
			"theSchools": "Holy Family",
			"sdisp": '72'
		}, {
			"checkboxID": 'custom62',
			"schoolid": '9999993S',
			"theSchools": "Palmer Elementary",
			"sdisp": '73'
		}, {
			"checkboxID": 'custom63',
			"schoolid": '9566993S',
			"theSchools": "Forks Elementary",
			"sdisp": '75'
		}, {
			"checkboxID": 'custom64',
			"schoolid": '9222973S',
			"theSchools": "Moravian",
			"sdisp": '77'
		}, {
			"checkboxID": 'custom65',
			"schoolid": '8228973S',
			"theSchools": "Linerty",
			"sdisp": '90'
		}] };

	for (var j in schoolUpdate.schoolsUpdate) {

		$('.renderSchoolUpdate').append("<div class=\"updateBlocks schoolUpdateBlocks d-flex align-items-center flex-wrap position-relative mb-3\" type=\"submit\" tabindex=\"0\" aria-hidden=\"false\" role=\"button\"><div class=\"goldLeftBar\"></div><div class=\"one absoluteCheckbox\"><input class=\"form-check-input\" type=\"checkbox\" name=\"validation\" id=\"" + schoolUpdate.schoolsUpdate[j].checkboxID + "\"><label class=\"form-check-label fontZero\" tabindex=\"0\" for=\"" + schoolUpdate.schoolsUpdate[j].checkboxID + "\">Something</label></div><div class=\"col-lg-4 col-md-6 col-sm-12 col-xs-12\"><div class=\"mobile\">SCHOOL ID</div><p class=\"black schoolid\">" + schoolUpdate.schoolsUpdate[j].schoolid + "</p></div><div class=\"col-lg-4 col-md-6 col-sm-12 col-xs-12\"><div class=\"mobile\">SCHOOL NAME</div><p class=\"black theSchools\">" + schoolUpdate.schoolsUpdate[j].theSchools + "</p></div><div class=\"col-lg-4 col-md-12 col-sm-12 col-xs-12\"><div class=\"mobile\">SDISP</div><p class=\"black sdisp\">" + schoolUpdate.schoolsUpdate[j].sdisp + "</p></div></div>");
	}

	var childUpdate = { "childsUpdate": [{
			"checkboxID": 'custom80',
			"childid": '9119993S',
			"childName": "Kelly Smith",
			"cStatus": "C_CONSENT"
		}, {
			"checkboxID": 'custom81',
			"childid": '9117793S',
			"childName": "Billy Bob",
			"cStatus": "C_ASSESS"
		}, {
			"checkboxID": 'custom82',
			"childid": '9100993S',
			"childName": "Jojo Momo",
			"cStatus": "C_CONSENT"
		}, {
			"checkboxID": 'custom83',
			"childid": '9124993S',
			"childName": "Sal Hal",
			"cStatus": "C_ASSESS"
		}, {
			"checkboxID": 'custom84',
			"childid": '9119993S',
			"childName": "Kelly Smith",
			"cStatus": "C_CONSENT"
		}, {
			"checkboxID": 'custom85',
			"childid": '9117793S',
			"childName": "Billy Bob",
			"cStatus": "C_ASSESS"
		}, {
			"checkboxID": 'custom86',
			"childid": '9100993S',
			"childName": "Jojo Momo",
			"cStatus": "C_ASSESS"
		}, {
			"checkboxID": 'custom87',
			"childid": '9124993S',
			"childName": "Sal Hal",
			"cStatus": "C_CONSENT"
		}, {
			"checkboxID": 'custom88',
			"childid": '9119993S',
			"childName": "Kelly Smith",
			"cStatus": "C_CONSENT"
		}, {
			"checkboxID": 'custom89',
			"childid": '9117793S',
			"childName": "Billy Bob",
			"cStatus": "C_ASSESS"
		}, {
			"checkboxID": 'custom90',
			"childid": '9100993S',
			"childName": "Jojo Momo",
			"cStatus": "C_CONSENT"
		}, {
			"checkboxID": 'custom91',
			"childid": '9124993S',
			"childName": "Sal Hal",
			"cStatus": "C_ASSESS"
		}, {
			"checkboxID": 'custom92',
			"childid": '9119993S',
			"childName": "Kelly Smith",
			"cStatus": "C_CONSENT"
		}, {
			"checkboxID": 'custom93',
			"childid": '9117793S',
			"childName": "Billy Bob",
			"cStatus": "C_ASSESS"
		}, {
			"checkboxID": 'custom94',
			"childid": '9100993S',
			"childName": "Jojo Momo",
			"cStatus": "C_ASSESS"
		}, {
			"checkboxID": 'custom95',
			"childid": '9124993S',
			"childName": "Sal Hal",
			"cStatus": "C_CONSENT"
		}, {
			"checkboxID": 'custom96',
			"childid": '9119993S',
			"childName": "Kelly Smith",
			"cStatus": "C_CONSENT"
		}, {
			"checkboxID": 'custom97',
			"childid": '9117793S',
			"childName": "Billy Bob",
			"cStatus": "C_ASSESS"
		}, {
			"checkboxID": 'custom98',
			"childid": '9100993S',
			"childName": "Jojo Momo",
			"cStatus": "C_CONSENT"
		}, {
			"checkboxID": 'custom99',
			"childid": '9124993S',
			"childName": "Sal Hal",
			"cStatus": "C_ASSESS"
		}, {
			"checkboxID": 'custom100',
			"childid": '9119993S',
			"childName": "Kelly Smith",
			"cStatus": "C_CONSENT"
		}, {
			"checkboxID": 'custom101',
			"childid": '9117793S',
			"childName": "Billy Bob",
			"cStatus": "C_ASSESS"
		}, {
			"checkboxID": 'custom102',
			"childid": '9100993S',
			"childName": "Jojo Momo",
			"cStatus": "C_ASSESS"
		}, {
			"checkboxID": 'custom100',
			"childid": '9124993S',
			"childName": "Sal Hal",
			"cStatus": "C_CONSENT"
		}] };

	for (var j in childUpdate.childsUpdate) {

		$('.renderChildUpdate').append("<div class=\"updateBlocks childUpdateBlocks d-flex align-items-center flex-wrap position-relative mb-3\" type=\"submit\" tabindex=\"0\" aria-hidden=\"false\" role=\"button\"><div class=\"goldLeftBar\"></div><div class=\"one absoluteCheckbox\"><input class=\"form-check-input\" type=\"checkbox\" name=\"validation\" id=\"" + childUpdate.childsUpdate[j].checkboxID + "\"><label class=\"form-check-label fontZero\" tabindex=\"0\" for=\"" + childUpdate.childsUpdate[j].checkboxID + "\">Something</label></div><div class=\"col-lg-4 col-md-6 col-sm-12 col-xs-12\"><div class=\"mobile\">SCHOOL ID</div><p class=\"black childid\">" + childUpdate.childsUpdate[j].childid + "</p></div><div class=\"col-lg-4 col-md-6 col-sm-12 col-xs-12\"><div class=\"mobile\">SCHOOL NAME</div><p class=\"black childName\">" + childUpdate.childsUpdate[j].childName + "</p></div><div class=\"col-lg-4 col-md-12 col-sm-12 col-xs-12\"><div class=\"mobile\">SDISP</div><p class=\"black cStatus\">" + childUpdate.childsUpdate[j].cStatus + "</p></div></div>");
	}

	var parentUpdate = { "parentsUpdate": [{
			"checkboxID": 'custom30',
			"parentid": 'Y116001P',
			"parentName": "Kelly Smith",
			"pStatus": "Complete"
		}, {
			"checkboxID": 'custom31',
			"parentid": 'Y116002P',
			"parentName": "Billy Bob",
			"pStatus": "Not Started"
		}, {
			"checkboxID": 'custom32',
			"parentid": 'Y116034P',
			"parentName": "Jojo Momo",
			"pStatus": "In-Progress"
		}, {
			"checkboxID": 'custom33',
			"parentid": 'Y116182P',
			"parentName": "Sal Hal",
			"pStatus": "Not Started"
		}, {
			"checkboxID": 'custom34',
			"parentid": 'Y116001P',
			"parentName": "Kelly Smith",
			"pStatus": "Complete"
		}, {
			"checkboxID": 'custom35',
			"parentid": 'Y116552P',
			"parentName": "Billy Bob",
			"pStatus": "Complete"
		}, {
			"checkboxID": 'custom36',
			"parentid": 'Y116762P',
			"parentName": "Jojo Momo",
			"pStatus": "In-Progress"
		}, {
			"checkboxID": 'custom37',
			"parentid": 'Y116522P',
			"parentName": "Sal Hal",
			"pStatus": "In-Progress"
		}, {
			"checkboxID": 'custom300',
			"parentid": 'Y116001P',
			"parentName": "Kelly Smith",
			"pStatus": "Complete"
		}, {
			"checkboxID": 'custom301',
			"parentid": 'Y116002P',
			"parentName": "Billy Bob",
			"pStatus": "Not Started"
		}, {
			"checkboxID": 'custom302',
			"parentid": 'Y116034P',
			"parentName": "Jojo Momo",
			"pStatus": "In-Progress"
		}, {
			"checkboxID": 'custom303',
			"parentid": 'Y116182P',
			"parentName": "Sal Hal",
			"pStatus": "Not Started"
		}, {
			"checkboxID": 'custom304',
			"parentid": 'Y116001P',
			"parentName": "Kelly Smith",
			"pStatus": "Complete"
		}, {
			"checkboxID": 'custom305',
			"parentid": 'Y116552P',
			"parentName": "Billy Bob",
			"pStatus": "Complete"
		}, {
			"checkboxID": 'custom306',
			"parentid": 'Y116762P',
			"parentName": "Jojo Momo",
			"pStatus": "In-Progress"
		}, {
			"checkboxID": 'custom307',
			"parentid": 'Y116522P',
			"parentName": "Sal Hal",
			"pStatus": "In-Progress"
		}] };

	for (var j in parentUpdate.parentsUpdate) {

		$('.renderParentUpdate').append("<div class=\"updateBlocks parentUpdateBlocks d-flex align-items-center flex-wrap position-relative mb-3\" type=\"submit\" tabindex=\"0\" aria-hidden=\"false\" role=\"button\"><div class=\"goldLeftBar\"></div><div class=\"one absoluteCheckbox\"><input class=\"form-check-input\" type=\"checkbox\" name=\"validation\" id=\"" + parentUpdate.parentsUpdate[j].checkboxID + "\"><label class=\"form-check-label fontZero\" tabindex=\"0\" for=\"" + parentUpdate.parentsUpdate[j].checkboxID + "\">Something</label></div><div class=\"col-lg-4 col-md-6 col-sm-12 col-xs-12\"><div class=\"mobile\">SCHOOL ID</div><p class=\"black parentid\">" + parentUpdate.parentsUpdate[j].parentid + "</p></div><div class=\"col-lg-4 col-md-6 col-sm-12 col-xs-12\"><div class=\"mobile\">SCHOOL NAME</div><p class=\"black parentName\">" + parentUpdate.parentsUpdate[j].parentName + "</p></div><div class=\"col-lg-4 col-md-12 col-sm-12 col-xs-12\"><div class=\"mobile\">SDISP</div><p class=\"black pStatus\">" + parentUpdate.parentsUpdate[j].pStatus + "</p></div></div>");
	}

	//district page alphabetize and sort numerically


	$('.sortDistrict').on('click', function () {
		if (!$('.sortDistrict').hasClass('ascending')) {

			var ascendOrderedDivs = $('.addBlocks').sort(function (a, b) {
				return $(a).find(".schoolName").text() > $(b).find(".schoolName").text() ? 1 : -1;
			});

			var ascend101 = $('#tabs-2 .updateBlocks').sort(function (a, b) {
				return $(a).find(".schoolName").text() > $(b).find(".schoolName").text() ? 1 : -1;
			});

			$(".renderDistrictUpdate").html(ascend101);

			$(".renderDistricts").html(ascendOrderedDivs);
			setTimeout(function () {
				$('.sortDistrict').addClass('ascending');
			}, 600);

			$('.topAttr .gray.larger i').each(function () {
				$('.topAttr .gray.larger i').replaceWith('<i class="far fa-sort darkBlue"></i>');
			});

			$(this).find('i').replaceWith('<i class="fad fa-sort-up darkBlue"></i>');
		}

		if ($('.sortDistrict').hasClass('ascending')) {

			var descendOrderedDivs = $('.addBlocks').sort(function (a, b) {
				return $(a).find(".schoolName").text() > $(b).find(".schoolName").text() ? -1 : 1;
			});

			var descend101 = $('#tabs-2 .updateBlocks').sort(function (a, b) {
				return $(a).find(".schoolName").text() > $(b).find(".schoolName").text() ? -1 : 1;
			});

			$(".renderDistrictUpdate").html(descend101);

			$(".renderDistricts").html(descendOrderedDivs);
			setTimeout(function () {
				$('.sortDistrict').removeClass('ascending');
			}, 600);

			$('.topAttr .gray.larger i').each(function () {
				$('.topAttr .gray.larger i').replaceWith('<i class="far fa-sort darkBlue"></i>');
			});

			$(this).find('i').replaceWith('<i class="fad fa-sort-down darkBlue"></i>');
		}
	});

	$('.sortDflag').on('click', function () {
		if (!$('.sortDflag').hasClass('ascending')) {

			var ascendOrderedDivs2 = $('.addBlocks').sort(function (a, b) {
				return $(a).find(".dflag").text() > $(b).find(".dflag").text() ? 1 : -1;
			});

			var ascend102 = $('#tabs-2 .updateBlocks').sort(function (a, b) {
				return $(a).find(".dflag").text() > $(b).find(".dflag").text() ? 1 : -1;
			});

			$(".renderDistrictUpdate").html(ascend102);

			$(".renderDistricts").html(ascendOrderedDivs2);
			setTimeout(function () {
				$('.sortDflag').addClass('ascending');
			}, 600);

			$('.topAttr .gray.larger i').each(function () {
				$('.topAttr .gray.larger i').replaceWith('<i class="far fa-sort darkBlue"></i>');
			});
			$(this).find('i').replaceWith('<i class="fad fa-sort-up darkBlue"></i>');
		}

		if ($('.sortDflag').hasClass('ascending')) {

			var descendOrderedDivs2 = $('.addBlocks').sort(function (a, b) {
				return $(a).find(".dflag").text() > $(b).find(".dflag").text() ? -1 : 1;
			});

			var descend102 = $('#tabs-2 .updateBlocks').sort(function (a, b) {
				return $(a).find(".dflag").text() > $(b).find(".dflag").text() ? -1 : 1;
			});

			$(".renderDistrictUpdate").html(descend102);

			$(".renderDistricts").html(descendOrderedDivs2);
			setTimeout(function () {
				$('.sortDflag').removeClass('ascending');
			}, 600);

			$('.topAttr .gray.larger i').each(function () {
				$('.topAttr .gray.larger i').replaceWith('<i class="far fa-sort darkBlue"></i>');
			});

			$(this).find('i').replaceWith('<i class="fad fa-sort-down darkBlue"></i>');
		}
	});

	$('.sortStatus').on('click', function () {
		if (!$('.sortStatus').hasClass('ascending')) {

			var ascendOrderedDivs3 = $('.addBlocks').sort(function (a, b) {
				return $(a).find(".dStatus").text() > $(b).find(".dStatus").text() ? 1 : -1;
			});

			var ascend103 = $('#tabs-2 .updateBlocks').sort(function (a, b) {
				return $(a).find(".dStatus").text() > $(b).find(".dStatus").text() ? 1 : -1;
			});

			var ascend41 = $('#tabs-4 .updateBlocks').sort(function (a, b) {
				return $(a).find(".cStatus").text() > $(b).find(".cStatus").text() ? 1 : -1;
			});

			var ascend51 = $('#tabs-5 .updateBlocks').sort(function (a, b) {
				return $(a).find(".pStatus").text() > $(b).find(".pStatus").text() ? 1 : -1;
			});

			$(".renderChildUpdate").html(ascend41);

			$(".renderParentUpdate").html(ascend51);

			$(".renderDistrictUpdate").html(ascend103);

			$(".renderDistricts").html(ascendOrderedDivs3);
			setTimeout(function () {
				$('.sortStatus').addClass('ascending');
			}, 600);
			$('.topAttr .gray.larger i').each(function () {
				$('.topAttr .gray.larger i').replaceWith('<i class="far fa-sort darkBlue"></i>');
			});
			$(this).find('i').replaceWith('<i class="fad fa-sort-up darkBlue"></i>');
		}

		if ($('.sortStatus').hasClass('ascending')) {

			var descendOrderedDivs3 = $('.addBlocks').sort(function (a, b) {
				return $(a).find(".dStatus").text() > $(b).find(".dStatus").text() ? -1 : 1;
			});

			var descend103 = $('#tabs-2 .updateBlocks').sort(function (a, b) {
				return $(a).find(".dStatus").text() > $(b).find(".dStatus").text() ? -1 : 1;
			});

			var descend41 = $('#tabs-4 .updateBlocks').sort(function (a, b) {
				return $(a).find(".cStatus").text() > $(b).find(".cStatus").text() ? -1 : 1;
			});

			var descend51 = $('#tabs-5 .updateBlocks').sort(function (a, b) {
				return $(a).find(".pStatus").text() > $(b).find(".pStatus").text() ? -1 : 1;
			});

			$(".renderChildUpdate").html(descend41);

			$(".renderParentUpdate").html(descend51);

			$(".renderDistrictUpdate").html(descend103);

			$(".renderDistricts").html(descendOrderedDivs3);
			setTimeout(function () {
				$('.sortStatus').removeClass('ascending');
			}, 600);

			$('.topAttr .gray.larger i').each(function () {
				$('.topAttr .gray.larger i').replaceWith('<i class="far fa-sort darkBlue"></i>');
			});

			$(this).find('i').replaceWith('<i class="fad fa-sort-down darkBlue"></i>');
		}
	});

	$('.sortId').on('click', function () {

		if (!$('.sortId').hasClass('ascending')) {
			var ascendOrderedDivs4 = $('.addBlocks').sort(function (a, b) {
				return $(a).find(".leadid").text().toString().localeCompare($(b).find(".leadid").text().toString(), undefined, {
					numeric: true,
					sensitivity: 'base'
				});
			});

			var ascend100 = $('#tabs-2 .updateBlocks').sort(function (a, b) {
				return $(a).find(".leadid").text().toString().localeCompare($(b).find(".leadid").text().toString(), undefined, {
					numeric: true,
					sensitivity: 'base'
				});
			});

			$(".renderDistrictUpdate").html(ascend100);

			$(".renderDistricts").html(ascendOrderedDivs4);
			setTimeout(function () {
				$('.sortId').addClass('ascending');
			}, 400);

			$('.topAttr .gray.larger i').each(function () {
				$('.topAttr .gray.larger i').replaceWith('<i class="far fa-sort darkBlue"></i>');
			});
			$(this).find('i').replaceWith('<i class="fad fa-sort-up darkBlue"></i>');
		}
		if ($('.sortId').hasClass('ascending')) {
			var descendOrderedDivs4 = $('.addBlocks').sort(function (a, b) {
				return $(b).find(".leadid").text().toString().localeCompare($(a).find(".leadid").text().toString(), undefined, {
					numeric: true,
					sensitivity: 'base'
				});
			});

			var descend100 = $('#tabs-2 .updateBlocks').sort(function (a, b) {
				return $(b).find(".leadid").text().toString().localeCompare($(a).find(".leadid").text().toString(), undefined, {
					numeric: true,
					sensitivity: 'base'
				});
			});

			$(".renderDistrictUpdate").html(descend100);

			$(".renderDistricts").html(descendOrderedDivs4);
			setTimeout(function () {
				$('.sortId').removeClass('ascending');
			}, 400);

			$('.topAttr .gray.larger i').each(function () {
				$('.topAttr .gray.larger i').replaceWith('<i class="far fa-sort darkBlue"></i>');
			});
			$(this).find('i').replaceWith('<i class="fad fa-sort-down darkBlue"></i>');
		}
	});

	//school page alphabetize and sort numerically


	$('.sortSchool').on('click', function () {

		if (!$('.sortSchool').hasClass('ascending')) {

			var ascendOrderedDivs5 = $('.schoolBlocks').sort(function (a, b) {
				return $(a).find(".theSchools").text() > $(b).find(".theSchools").text() ? 1 : -1;
			});

			var ascend501 = $('#tabs-3 .updateBlocks').sort(function (a, b) {
				return $(a).find(".theSchools").text() > $(b).find(".theSchools").text() ? 1 : -1;
			});

			$(".renderSchoolUpdate").html(ascend501);

			$(".renderSchools").html(ascendOrderedDivs5);
			setTimeout(function () {
				$('.sortSchool').addClass('ascending');
			}, 600);

			$('.topAttr  i').each(function () {
				$('.topAttr  i').replaceWith('<i class="far fa-sort darkBlue"></i>');
			});

			$(this).find('i').replaceWith('<i class="fad fa-sort-up darkBlue"></i>');
		}

		if ($('.sortSchool').hasClass('ascending')) {

			var descendOrderedDivs5 = $('.schoolBlocks').sort(function (a, b) {
				return $(a).find(".theSchools").text() > $(b).find(".theSchools").text() ? -1 : 1;
			});

			var descend501 = $('#tabs-3 .updateBlocks').sort(function (a, b) {
				return $(a).find(".theSchools").text() > $(b).find(".theSchools").text() ? -1 : 1;
			});

			$(".renderSchoolUpdate").html(descend501);

			$(".renderSchools").html(descendOrderedDivs5);
			setTimeout(function () {
				$('.sortSchool').removeClass('ascending');
			}, 600);

			$('.topAttr  i').each(function () {
				$('.topAttr  i').replaceWith('<i class="far fa-sort darkBlue"></i>');
			});

			$(this).find('i').replaceWith('<i class="fad fa-sort-down darkBlue"></i>');
		}
	});

	$('.sortRC').on('click', function () {

		if (!$('.sortRC').hasClass('ascending')) {

			var ascendOrderedDivs6 = $('.schoolBlocks').sort(function (a, b) {
				return $(a).find(".srCode").text() > $(b).find(".srCode").text() ? 1 : -1;
			});

			$(".renderSchools").html(ascendOrderedDivs6);
			setTimeout(function () {
				$('.sortRC').addClass('ascending');
			}, 600);

			$('.topAttr i').each(function () {
				$('.topAttr i').replaceWith('<i class="far fa-sort darkBlue"></i>');
			});

			$(this).find('i').replaceWith('<i class="fad fa-sort-up darkBlue"></i>');
		}

		if ($('.sortRC').hasClass('ascending')) {

			var descendOrderedDivs6 = $('.schoolBlocks').sort(function (a, b) {
				return $(a).find(".srCode").text() > $(b).find(".srCode").text() ? -1 : 1;
			});

			$(".renderSchools").html(descendOrderedDivs6);
			setTimeout(function () {
				$('.sortRC').removeClass('ascending');
			}, 600);

			$('.topAttr  i').each(function () {
				$('.topAttr i').replaceWith('<i class="far fa-sort darkBlue"></i>');
			});

			$(this).find('i').replaceWith('<i class="fad fa-sort-down darkBlue"></i>');
		}
	});

	$('.sortCC').on('click', function () {

		if (!$('.sortCC').hasClass('ascending')) {

			var ascendOrderedDivs7 = $('.schoolBlocks').sort(function (a, b) {
				return $(a).find(".scCode").text() > $(b).find(".scCode").text() ? 1 : -1;
			});

			$(".renderSchools").html(ascendOrderedDivs7);
			setTimeout(function () {
				$('.sortCC').addClass('ascending');
			}, 600);

			$('.topAttr i').each(function () {
				$('.topAttr i').replaceWith('<i class="far fa-sort darkBlue"></i>');
			});

			$(this).find('i').replaceWith('<i class="fad fa-sort-up darkBlue"></i>');
		}

		if ($('.sortCC').hasClass('ascending')) {

			var descendOrderedDivs7 = $('.schoolBlocks').sort(function (a, b) {
				return $(a).find(".scCode").text() > $(b).find(".scCode").text() ? -1 : 1;
			});

			$(".renderSchools").html(descendOrderedDivs7);
			setTimeout(function () {
				$('.sortCC').removeClass('ascending');
			}, 600);

			$('.topAttr  i').each(function () {
				$('.topAttr i').replaceWith('<i class="far fa-sort darkBlue"></i>');
			});

			$(this).find('i').replaceWith('<i class="fad fa-sort-down darkBlue"></i>');
		}
	});

	$('.sortSStatus').on('click', function () {

		if (!$('.sortSStatus').hasClass('ascending')) {

			var ascendOrderedDivs7 = $('.schoolBlocks').sort(function (a, b) {
				return $(a).find(".sStatus").text() > $(b).find(".sStatus").text() ? 1 : -1;
			});

			$(".renderSchools").html(ascendOrderedDivs7);
			setTimeout(function () {
				$('.sortSStatus').addClass('ascending');
			}, 600);

			$('.topAttr i').each(function () {
				$('.topAttr i').replaceWith('<i class="far fa-sort darkBlue"></i>');
			});

			$(this).find('i').replaceWith('<i class="fad fa-sort-up darkBlue"></i>');
		}

		if ($('.sortSStatus').hasClass('ascending')) {

			var descendOrderedDivs7 = $('.schoolBlocks').sort(function (a, b) {
				return $(a).find(".sStatus").text() > $(b).find(".sStatus").text() ? -1 : 1;
			});

			$(".renderSchools").html(descendOrderedDivs7);
			setTimeout(function () {
				$('.sortSStatus').removeClass('ascending');
			}, 600);

			$('.topAttr  i').each(function () {
				$('.topAttr i').replaceWith('<i class="far fa-sort darkBlue"></i>');
			});

			$(this).find('i').replaceWith('<i class="fad fa-sort-down darkBlue"></i>');
		}
	});

	$('.sortSchoolID').on('click', function () {

		if (!$('.sortSchoolID').hasClass('ascending')) {

			var numericallyOrderedDivs = $('.schoolBlocks').sort(function (a, b) {
				return parseFloat($(a).find('.schoolid').text()) > parseFloat($(b).find('.schoolid').text()) ? 1 : -1;
			});

			var numerical101 = $('#tabs-3 .updateBlocks').sort(function (a, b) {
				return parseFloat($(a).find('.schoolid').text()) > parseFloat($(b).find('.schoolid').text()) ? 1 : -1;
			});

			var sdisp = $('#tabs-3 .updateBlocks').sort(function (a, b) {
				return parseFloat($(a).find('.sdisp').text()) > parseFloat($(b).find('.sdisp').text()) ? 1 : -1;
			});

			$(".renderSchoolUpdate").html(numerical101);

			$(".renderSchools").html(numericallyOrderedDivs);
			setTimeout(function () {
				$('.sortSchoolID').addClass('ascending');
			}, 600);

			$('.topAttr  i').each(function () {
				$('.topAttr  i').replaceWith('<i class="far fa-sort darkBlue"></i>');
			});

			$(this).find('i').replaceWith('<i class="fad fa-sort-up darkBlue"></i>');
		}

		if ($('.sortSchoolID').hasClass('ascending')) {

			var numericallyOrderedDivs = $('.schoolBlocks').sort(function (a, b) {
				return parseFloat($(a).find('.schoolid').text()) > parseFloat($(b).find('.schoolid').text()) ? -1 : 1;
			});

			var numerical101 = $('#tabs-3 .updateBlocks').sort(function (a, b) {
				return parseFloat($(a).find('.schoolid').text()) > parseFloat($(b).find('.schoolid').text()) ? -1 : 1;
			});

			$(".renderSchoolUpdate").html(numerical101);

			$(".renderSchools").html(numericallyOrderedDivs);

			setTimeout(function () {
				$('.sortSchoolID').removeClass('ascending');
			}, 600);

			$('.topAttr  i').each(function () {
				$('.topAttr  i').replaceWith('<i class="far fa-sort darkBlue"></i>');
			});

			$(this).find('i').replaceWith('<i class="fad fa-sort-down darkBlue"></i>');
		}
	});

	$('.sortDate').on('click', function () {

		if (!$('.sortDate').hasClass('ascending')) {
			console.log("nope");
			var ascendOrderedDivs10 = $('.schoolBlocks').sort(function (a, b) {

				return parseFloat($(a).find('.aDate').text()) > parseFloat($(b).find('.aDate').text()) ? 1 : -1;
			});
			$(".renderSchools").html(ascendOrderedDivs10);
			setTimeout(function () {
				$('.sortDate').addClass('ascending');
			}, 400);

			$('.topAttr  i').each(function () {
				$('.topAttr  i').replaceWith('<i class="far fa-sort darkBlue"></i>');
			});
			$(this).find('i').replaceWith('<i class="fad fa-sort-up darkBlue"></i>');
		}

		if ($('.sortDate').hasClass('ascending')) {
			console.log("yup");
			var descendOrderedDivs10 = $('.schoolBlocks').sort(function (a, b) {

				return parseFloat($(a).find('.aDate').text()) > parseFloat($(b).find('.aDate').text()) ? -1 : 1;
			});
			$(".renderSchools").html(descendOrderedDivs10);
			setTimeout(function () {
				$('.sortDate').removeClass('ascending');
			}, 500);

			$('.topAttr i').each(function () {
				$('.topAttr  i').replaceWith('<i class="far fa-sort darkBlue"></i>');
			});
			$(this).find('i').replaceWith('<i class="fad fa-sort-down darkBlue"></i>');
		}
	});

	//sort update final case

	$('.sortParent').on('click', function () {

		if (!$('.sortParent').hasClass('ascending')) {

			var ascend71 = $('#tabs-5 .updateBlocks').sort(function (a, b) {
				return $(a).find(".parentName").text() > $(b).find(".parentName").text() ? 1 : -1;
			});

			$(".renderParentUpdate").html(ascend71);

			setTimeout(function () {
				$('.sortParent').addClass('ascending');
			}, 600);

			$('.topAttr  i').each(function () {
				$('.topAttr  i').replaceWith('<i class="far fa-sort darkBlue"></i>');
			});

			$(this).find('i').replaceWith('<i class="fad fa-sort-up darkBlue"></i>');
		}

		if ($('.sortParent').hasClass('ascending')) {

			var descend71 = $('#tabs-5 .updateBlocks').sort(function (a, b) {
				return $(a).find(".parentName").text() > $(b).find(".parentName").text() ? -1 : 1;
			});

			$(".renderParentUpdate").html(descend71);

			setTimeout(function () {
				$('.sortParent').removeClass('ascending');
			}, 600);

			$('.topAttr  i').each(function () {
				$('.topAttr  i').replaceWith('<i class="far fa-sort darkBlue"></i>');
			});

			$(this).find('i').replaceWith('<i class="fad fa-sort-down darkBlue"></i>');
		}
	});

	$('.sortSDISP').on('click', function () {

		if (!$('.sortSDISP').hasClass('ascending')) {

			var sdispAscend = $('#tabs-3 .updateBlocks').sort(function (a, b) {
				return parseFloat($(a).find('.sdisp').text()) > parseFloat($(b).find('.sdisp').text()) ? 1 : -1;
			});

			$(".renderSchoolUpdate").html(sdispAscend);

			setTimeout(function () {
				$('.sortSDISP').addClass('ascending');
			}, 600);

			$('.topAttr  i').each(function () {
				$('.topAttr  i').replaceWith('<i class="far fa-sort darkBlue"></i>');
			});

			$(this).find('i').replaceWith('<i class="fad fa-sort-up darkBlue"></i>');
		}

		if ($('.sortSDISP').hasClass('ascending')) {

			var sdispDesc = $('#tabs-3 .updateBlocks').sort(function (a, b) {
				return parseFloat($(a).find('.sdisp').text()) > parseFloat($(b).find('.sdisp').text()) ? -1 : 1;
			});

			$(".renderSchoolUpdate").html(sdispDesc);

			setTimeout(function () {
				$('.sortSDISP').removeClass('ascending');
			}, 600);

			$('.topAttr  i').each(function () {
				$('.topAttr  i').replaceWith('<i class="far fa-sort darkBlue"></i>');
			});

			$(this).find('i').replaceWith('<i class="fad fa-sort-down darkBlue"></i>');
		}
	});

	$('.sortChildID').on('click', function () {

		if (!$('.sortChildID').hasClass('ascending')) {

			var numerical21 = $('#tabs-4 .updateBlocks').sort(function (a, b) {
				return parseFloat($(a).find('.childid').text()) > parseFloat($(b).find('.childid').text()) ? 1 : -1;
			});

			$(".renderChildUpdate").html(numerical21);

			setTimeout(function () {
				$('.sortChildID').addClass('ascending');
			}, 600);

			$('.topAttr  i').each(function () {
				$('.topAttr  i').replaceWith('<i class="far fa-sort darkBlue"></i>');
			});

			$(this).find('i').replaceWith('<i class="fad fa-sort-up darkBlue"></i>');
		}

		if ($('.sortChildID').hasClass('ascending')) {

			var numerical21 = $('#tabs-4 .updateBlocks').sort(function (a, b) {
				return parseFloat($(a).find('.childid').text()) > parseFloat($(b).find('.childid').text()) ? -1 : 1;
			});

			$(".renderChildUpdate").html(numerical21);

			setTimeout(function () {
				$('.sortChildID').removeClass('ascending');
			}, 600);

			$('.topAttr  i').each(function () {
				$('.topAttr  i').replaceWith('<i class="far fa-sort darkBlue"></i>');
			});

			$(this).find('i').replaceWith('<i class="fad fa-sort-down darkBlue"></i>');
		}
	});

	$('.sortChild').on('click', function () {

		if (!$('.sortChild').hasClass('ascending')) {

			var ascend22 = $('#tabs-4 .updateBlocks').sort(function (a, b) {
				return $(a).find(".childName").text() > $(b).find(".childName").text() ? 1 : -1;
			});

			$(".renderChildUpdate").html(ascend22);

			setTimeout(function () {
				$('.sortChild').addClass('ascending');
			}, 600);

			$('.topAttr  i').each(function () {
				$('.topAttr  i').replaceWith('<i class="far fa-sort darkBlue"></i>');
			});

			$(this).find('i').replaceWith('<i class="fad fa-sort-up darkBlue"></i>');
		}

		if ($('.sortChild').hasClass('ascending')) {

			var descend22 = $('#tabs-4 .updateBlocks').sort(function (a, b) {
				return $(a).find(".childName").text() > $(b).find(".childName").text() ? -1 : 1;
			});

			$(".renderChildUpdate").html(descend22);

			setTimeout(function () {
				$('.sortChild').removeClass('ascending');
			}, 100);

			$('.topAttr  i').each(function () {
				$('.topAttr  i').replaceWith('<i class="far fa-sort darkBlue"></i>');
			});

			$(this).find('i').replaceWith('<i class="fad fa-sort-down darkBlue"></i>');
		}
	});

	$('.sortParentID').on('click', function () {

		if (!$('.sortParentID').hasClass('ascending')) {

			var numerical81 = $('#tabs-5 .updateBlocks').sort(function (a, b) {
				return parseFloat($(a).find('.parentid').text()) > parseFloat($(b).find('.parentid').text()) ? 1 : -1;
			});

			$(".renderParentUpdate").html(numerical81);

			setTimeout(function () {
				$('.sortParentID').addClass('ascending');
			}, 100);

			$('.topAttr  i').each(function () {
				$('.topAttr  i').replaceWith('<i class="far fa-sort darkBlue"></i>');
			});

			$(this).find('i').replaceWith('<i class="fad fa-sort-up darkBlue"></i>');
		}

		if ($('.sortParentID').hasClass('ascending')) {

			var numerical81 = $('#tabs-5 .updateBlocks').sort(function (a, b) {
				return parseFloat($(a).find('.parentid').text()) > parseFloat($(b).find('.parentid').text()) ? -1 : 1;
			});

			$(".renderParentUpdate").html(numerical81);

			setTimeout(function () {
				$('.sortParentID').removeClass('ascending');
			}, 600);

			$('.topAttr  i').each(function () {
				$('.topAttr  i').replaceWith('<i class="far fa-sort darkBlue"></i>');
			});

			$(this).find('i').replaceWith('<i class="fad fa-sort-down darkBlue"></i>');
		}
	});

	//change colors of the percentage circles and progress bars


	var Opt01 = "";
	$('.teacherComplete , .childComplete , .childBlocksComplete, .teacherBlocksComplete, .parentComplete, .sAdminComplete, .dStatus, .sStatus, .participationStatus, .consentStatus, .surveyStatus').each(function () {
		Opt01 = $(this).html();

		if ($(this).html() > 50 && $(this).html() <= 75 || $(this).html() == 'Special Handling– In Progress' || $(this).html() == 'Consent Pending') {
			$(this).closest('.col-lg-2, .col-lg-1').find('.percentageCircle').css('background', '#fbb03b');
			$(this).closest('.newBlocks, .teacherSurveyBlocks, .parentInfoBlocks').find('.progressBarFull').css({
				'background': '#fbb03b',
				'width': '75%'
			});
			$(this).closest('.addBlocks').find('.progressBarFull').css({
				'background': '#fbb03b',
				'width': '100%'
			});

			$(this).closest('.childTeacher').find('.progressBarFull').css({
				'background': '#fbb03b',
				'width': '100%'
			});
		}

		if ($(this).html() > 75 && $(this).html() <= 100 || $(this).html() == 'Approval Received' || $(this).html() == 'Complete' || $(this).html() == 'Consented' || $(this).html() == 'Ready to Access') {
			$(this).closest('.col-lg-2, .col-lg-1').find('.percentageCircle').css('background', '#71d82e');
			$(this).closest('.newBlocks, .teacherSurveyBlocks, .parentInfoBlocks').find('.progressBarFull').css({
				'background': '#71d82e',
				'width': '100%'
			});

			$(this).closest('.addBlocks').find('.progressBarFull').css({
				'background': '#71d82e',
				'width': '100%'
			});

			$(this).closest('.childrenBlocks').find('.progressBarFull').css({
				'background': '#71d82e',
				'width': '100%'
			});

			$(this).closest('.consentBlocks').find('.progressBarFull').css({
				'background': '#71d82e',
				'width': '100%'
			});

			$(this).closest('.childTeacher').find('.progressBarFull').css({
				'background': '#71d82e',
				'width': '100%'
			});
		}

		if ($(this).html() > 25 && $(this).html() <= 50) {
			$(this).closest('.col-lg-2, .col-lg-1').find('.percentageCircle').css('background', '#fc7b75');
			$(this).closest('.newBlocks, .teacherSurveyBlocks, .parentInfoBlocks').find('.progressBarFull').css({
				'background': '#fc7b75',
				'width': '50%'
			});
		}
		if ($(this).html() == 'Opted Out') {
			$(this).closest('.consentBlocks').find('.progressBarFull').css({
				'background': '#fc7b75',
				'width': '100%'
			});
		}

		if ($(this).html() >= 0 && $(this).html() <= 25 || $(this).html() == 'Opted Out') {
			$(this).closest('.col-lg-2, .col-lg-1').find('.percentageCircle').css({
				'background': '#f7ebe7',
				'border': '2px solid #fc7b75'
			});
		}
	});

	//show more survey  blocks

	$('.districtUpdateBlocks, .schoolUpdateBlocks, .childUpdateBlocks, .parentUpdateBlocks').addClass('hidden');

	$('.newBlocks').addClass('hidden');

	var x = 10;
	var y = 10;
	var z = 10;
	$('.schoolUpdateBlocks').slice(0, 10).removeClass('hidden');
	$('.districtUpdateBlocks').slice(0, 10).removeClass('hidden');
	$('.childUpdateBlocks').slice(0, 10).removeClass('hidden');
	$('.parentUpdateBlocks').slice(0, 10).removeClass('hidden');
	$('.newBlocks').slice(0, 14).removeClass('hidden');
	$('.loadMore, .load20More').on('click', function (e) {
		e.preventDefault();

		x = x + 14;
		xx = xx + 24;
		y = y + 10;
		z = z + 10;
		$('.newBlocks').slice(0, x).slideDown('slow').removeClass('hidden');
		$('.addBlocks').slice(0, xx).slideDown('slow').removeClass('hidden');
		$(this).closest('.row').find('.updateBlocks').slice(0, y).slideDown('slow').removeClass('hidden');
	});

	$('.loadAll').on('click', function (e) {
		e.preventDefault();

		$('.newBlocks').slideDown('slow').removeClass('hidden');
		$('.loadMore, .flip').hide();
		$('.loadAll p').addClass('all').hide();
	});

	$('.loadAllCase').on('click', function (e) {
		e.preventDefault();
		$(this).closest('.row').find('.updateBlocks').slideDown('slow').removeClass('hidden');

		$(this).closest('.row').find('.loadMore, .flip').hide();
		$(this).closest('.row').find('.loadAllCase p').addClass('all').hide();
	});

	$('.loadAll').on('keyup', function (e) {
		var code = e.keyCode ? e.keyCode : e.which;
		if (code == 13) {
			e.preventDefault();
			$('.newBlocks').slideDown('slow').removeClass('hidden');
			$('.loadMore, .flip').hide();
			$('.loadAll p').addClass('all').hide();
		}
	});

	$('.loadMore, .load20More').on('keyup', function (e) {
		var code = e.keyCode ? e.keyCode : e.which;
		if (code == 13) {
			e.preventDefault();

			x = x + 14;
			xx = xx + 24;
			y = y + 14;
			$('.newBlocks').slice(0, x).slideDown('slow').removeClass('hidden');
			$('.addBlocks').slice(0, xx).slideDown('slow').removeClass('hidden');
			// $('.updateBlocks').slice(0, y).slideDown('slow').removeClass('hidden');
		}
	});

	$('.addBlocks').addClass('hidden');

	var xx = 20;

	$('.addBlocks').slice(0, 24).removeClass('hidden');
	$('.loadMore').on('click', function (e) {
		e.preventDefault();

		xx = xx + 24;
		$('.addBlocks').slice(0, xx).slideDown('slow').removeClass('hidden');
	});

	//floating buttons

	$('[data-toggle=tooltip]').tooltip();

	$('.back-to-top').click(function () {
		scrollfn("#overview");
	});

	$(window).scroll(function () {
		(window.pageYOffset || document.documentElement.scrollTop) > 100 ? $('.back-to-top').css({ opacity: 1, visibility: "visible" }) : $('.back-to-top').css({ opacity: 0, visibility: "hidden" });
	});

	function scrollfn(e) {
		var $target = $(e),
		    offSet = e === "#overview" ? 0 : $target.offset().top;
		$('html, body').stop().animate({
			'scrollTop': offSet
		}, 1200, 'swing');
		// setTimeout(function(){
		// 	$(':focus').blur();
		// }, 1000);
	}

	$('.menu-buttons-list li, .menu-buttons-floating-list li, .menu-buttons-768-list li').on('click', function (e) {

		e.preventDefault();
		scrollfn($(this).attr('data-target'));
	});

	$('.menu-buttons-list li, .menu-buttons-floating-list li, .menu-buttons-768-list li').on('keypress', function (e) {

		e.preventDefault();
		scrollfn($(this).attr('data-target'));
	});

	new WOW().init();

	$(function () {
		$('[data-toggle="tooltip"]').tooltip();
	});

	//radio buttons on contact form

	$('.radio-inline input').on('keyup', function (e) {
		var code = e.keyCode ? e.keyCode : e.which;
		if (code == 9) {
			var _setReasonActive = function _setReasonActive() {
				$('.radio-inline input').each(function () {
					if ($(this).prop('checked')) {
						$(this).parents('.vertical').css('border', '3px solid #fbb03b');
					} else {
						$(this).parents('.vertical').css('border', 'none');
					}
				});
			};

			$('.radio-inline input').change(function (e) {
				_setReasonActive();
			});

			_setReasonActive();
		}
	});

	$('.radio-inline input').change(function (e) {
		setReasonActive();
	});

	function setReasonActive() {
		$('.radio-inline input').each(function () {
			if ($(this).prop('checked')) {
				$(this).closest('.vertical').find('label').css({
					'color': 'white',
					'font-weight': '500'
				});
				$(this).closest('.vertical').find('.fas').css({
					'color': '	#fed439',
					'font-weight': '700'
				});

				$(this).parents('.vertical').css('border', '3px solid #fbb03b');
			} else {
				$(this).parents('.vertical').css('border', 'none');
				$(this).closest('.vertical').find('label').css({
					'color': 'white',
					'font-weight': '300'
				});
				$(this).closest('.vertical').find('.fas').css('color', '#fbb03b');
			}
		});
	}

	setReasonActive();

	if ($('.menu-buttons-768-list li').length > 3) {
		$(this).css('width', '25%');
	} else {
		$(this).css('width', '33.33%');
	}

	$("#two .nav-link").click(function () {

		$("#two .nav-link.selected").removeClass("selected");
		$(this).addClass("selected");
	});

	$('li[data-target="#overview"]').addClass('activated');

	//animations for landing page
	$(window).on('scroll', function () {

		var screenTop = $(window).scrollTop();
		var screenBottom = $(window).scrollTop() + window.innerHeight;

		$('section').each(function () {
			var elementTop = $(this).offset().top;
			var elementBottom = $(this).offset().top + $(this).outerHeight();

			if (screenBottom > elementTop + $(this).find('.heros2').height() / 30 && screenTop < elementBottom) {
				$('section').removeClass('active');
				$(this).addClass('active');
			} else {
				$(this).removeClass('active');
			}
		});

		if ($('.block-2000').hasClass('active')) {

			setTimeout(function () {
				$('.line1').removeClass('box-rotate');
			}, 100);
			setTimeout(function () {
				$('.line2').removeClass('transparent-opacity').addClass('animated fadeInUp');
			}, 200);

			setTimeout(function () {
				$('.text1').removeClass('transparent-opacity').addClass('animated fadeInRight');
			}, 400);

			setTimeout(function () {
				$('.text2').removeClass('transparent-opacity').addClass('animated fadeInUp');
			}, 400);

			setTimeout(function () {
				$('.green-circle').removeClass('transparent-opacity').addClass('animated fadeIn');
			}, 400);

			setTimeout(function () {
				$('.flower').removeClass('transparent-opacity').addClass('animated fadeIn');
			}, 600);

			setTimeout(function () {
				$('.line3').removeClass('box-rotate');
			}, 800);

			setTimeout(function () {
				$('.line4').removeClass('box-rotate');
			}, 900);

			setTimeout(function () {
				$('.text3').removeClass('transparent-opacity').addClass('animated fadeInLeft');
			}, 900);

			setTimeout(function () {
				$('.text4').removeClass('transparent-opacity').addClass('animated fadeInUp');
			}, 1100);

			setTimeout(function () {
				$('.green-circle2').removeClass('transparent-opacity').addClass('animated fadeIn');
			}, 1100);

			setTimeout(function () {
				$('.house').removeClass('transparent-opacity').addClass('animated fadeIn');
			}, 1600);

			setTimeout(function () {
				$('.line5').removeClass('box-rotate');
			}, 1600);

			setTimeout(function () {
				$('.line6').removeClass('box-rotate');
			}, 1600);

			setTimeout(function () {
				$('.text5').removeClass('transparent-opacity').addClass('animated fadeInLeft');
			}, 1600);

			setTimeout(function () {
				$('.text6').removeClass('transparent-opacity').addClass('animated fadeInUp');
			}, 1800);

			setTimeout(function () {
				$('.green-circle3').removeClass('transparent-opacity').addClass('animated fadeIn');
			}, 1800);

			setTimeout(function () {
				$('.leaves').removeClass('transparent-opacity').addClass('animated fadeIn');
			}, 1900);

			setTimeout(function(){
				$('.text7').removeClass('transparent-opacity').addClass('animated fadeIn')
			}, 2100)

			setTimeout(function(){
				$('.line8').removeClass('box-rotate')
			},2100)

			setTimeout(function(){
				$('.green-circle7').removeClass('transparent-opacity').addClass('animated fadeIn')
			}, 2400)

			setTimeout(function(){
				$('.text8').removeClass('transparent-opacity').addClass('animated fadeIn')
			}, 2600)

			setTimeout(function(){
				$('.sprout').removeClass('transparent-opacity').addClass('animated fadeIn')
			}, 2700)

			setTimeout(function(){
				$('.green-circle8').removeClass('transparent-opacity').addClass('animated fadeIn')
			}, 2900)

			// setTimeout(function(){
			// 	$('.text-last').removeClass('transparent-opacity').addClass('animated fadeInUp')
			// },1900)


			setTimeout(function(){
				$('.text-last.national').removeClass('transparent-opacity').addClass('animated fadeInUp')
			},3000)

			// 
			// setTimeout(function () {
			// 	$('.text-last').removeClass('transparent-opacity').addClass('animated fadeInUp');
			// }, 1900);
		}
	});

	if ($(window).height() < 800) {

		$(window).scroll(function () {
			var distanceY = window.pageYOffset || document.documentElement.scrollTop;
			if (distanceY > 120) {

				$('.menu-buttons-floating').css({
					top: '2em'
				});
			} else {

				$('.menu-buttons-floating').css({
					top: '14em'
				});
			}
		});
	}

	// $('li[data-target="#overview"]').click(function() {
	//  $('li[data-target="#overview"]').addClass('activated')
	//  $('li[data-target="#survey"]').blur();
	//  $('li[data-target="#info"]').blur();
	// })
	//
	// $('li[data-target="#survey"]').click(function() {
	//  $('li[data-target="#survey"]').addClass('activated')
	//  $('li[data-target="#overview"]').blur();
	//  $('li[data-target="#info"]').blur();
	// })


	$(window).on('scroll', function () {

		var screenTop = $(window).scrollTop();
		var screenBottom = $(window).scrollTop() + window.innerHeight;

		$('section').each(function () {
			var elementTop = $(this).offset().top;
			var elementBottom = $(this).offset().top + $(this).outerHeight();

			if (screenBottom > elementTop + $(this).find('.heros').height() / 4 && screenTop < elementBottom) {
				$('section').removeClass('active');
				$(this).addClass('active');
			} else {
				$(this).removeClass('active');
			}
		});

		if ($('.start').hasClass('active')) {

			$('li[data-target="#home"]').addClass('activated');
		} else {
			$('li[data-target="#home"]').removeClass('activated');
		}

		if ($('.block10').hasClass('active') || $('.block000').hasClass('active')) {

			// $('li[data-target="#survey"]').blur();
			// $('li[data-target="#info"]').blur();
			$('li[data-target="#overview"]').addClass('activated');
		} else {

			$('li[data-target="#overview"]').removeClass('activated');
		}

		if ($('.block50').hasClass('active') || $('.block111').hasClass('active') || $('.block333').hasClass('active') || $('.block9000').hasClass('active')) {
			// $('li[data-target="#overview"]').blur();
			// $('li[data-target="#survey"]').blur();

			$('li[data-target="#info"]').addClass('activated');
		} else {

			$('li[data-target="#info"]').removeClass('activated');
		}

		if ($('.top-section').hasClass('active') || $('.block10').hasClass('active') || $('.block-2000').hasClass('active') || $('.block-3000').hasClass('active')) {

			$('li[data-target="#participation"]').addClass('activated');
		} else {

			$('li[data-target="#participation"]').removeClass('activated');
		}

		if ($('.block5').hasClass('active') || $('.block555').hasClass('active')) {

			// $('li[data-target="#overview"]').blur();
			// $('li[data-target="#info"]').blur();

			$('li[data-target="#survey"]').addClass('activated');
		} else {

			$('li[data-target="#survey"]').removeClass('activated');
		}

		if ($('.block20').hasClass('active') || $('.block222').hasClass('active')) {
			$('li[data-target="#feedback"]').addClass('activated');
		} else {

			$('li[data-target="#feedback"]').removeClass('activated');
		}

		if ($('.block5').hasClass('active')) {

			$('li[data-target="#two"]').addClass('activated');
		} else {

			$('li[data-target="#two"]').removeClass('activated');
		}

		if ($('.block55').hasClass('active')) {

			$('li[data-target="#three"]').addClass('activated');
		} else {

			$('li[data-target="#three"]').removeClass('activated');
		}

		if ($('.block444').hasClass('active')) {

			$('li[data-target="#parentSurvey"]').addClass('activated');
		} else {

			$('li[data-target="#parentSurvey"]').removeClass('activated');
		}
	});

	if ($('.newBlocks').length < 10) {
		$('.showBlocks').children().hide();
	} else {
		$('.showBlocks').children().show();
	}

	if ($(document).innerWidth() <= 767) {
		$('#feedbackModal').on('hidden.bs.modal', function (e) {

			$('#one').css('top', '40%');
		});

		$('#feedbackModal').on('show.bs.modal', function (e) {

			$('#one').css('top', '10%');
		});

		$('li[data-target="#overview"]').removeClass('activated');

		$('.openTab .plum').html('<i class="fas fa-envelope"></i>');

		$('#one').css('right', '-20px');

		$(window).on('scroll', function () {

			var screenTop = $(window).scrollTop();
			var screenBottom = $(window).scrollTop() + window.innerHeight;

			$('section').each(function () {
				var elementTop = $(this).offset().top;
				var elementBottom = $(this).offset().top + $(this).outerHeight();

				if (screenBottom > elementTop + $(this).find('.heros').height() / 5 && screenTop < elementBottom) {
					$('section').removeClass('active');
					$(this).addClass('active');
				} else {
					$(this).removeClass('active');
				}
			});

			if ($('.block10').hasClass('active')) {

				$('li[data-target="#overview"]').addClass('activated');
				$('li[data-target="#overview"]').addClass('activated');
			} else {
				$('li[data-target="#overview"]').removeClass('activated');
				$('li[data-target="#overview"]').removeClass('activated');
			}

			if ($('.top-section').hasClass('active') || $('.block10').hasClass('active') || $('.block-2000').hasClass('active') || $('.block-3000').hasClass('active')) {

				$('li[data-target="#participation"]').addClass('activated');
				$('li[data-target="#participation"]').addClass('activated');
			} else {
				$('li[data-target="#participation"]').removeClass('activated');
				$('li[data-target="#participation"]').removeClass('activated');
			}

			if ($('.start').hasClass('active')) {

				$('li[data-target="#home"]').addClass('activated');
				$('li[data-target="#home"]').addClass('activated');
			} else {
				$('li[data-target="#home"]').removeClass('activated');
				$('li[data-target="#home"]').removeClass('activated');
			}

			if ($('.block5').hasClass('active')) {
				$('li[data-target="#two"]').addClass('activated');
				$('li[data-target="#two"]').addClass('activated');
			} else {
				$('li[data-target="#two"]').removeClass('activated');
				$('li[data-target="#two"]').removeClass('activated');
			}

			if ($('.block55').hasClass('active')) {
				$('li[data-target="#three"]').addClass('activated');
				$('li[data-target="#three"]').addClass('activated');
			} else {
				$('li[data-target="#three"]').removeClass('activated');
				$('li[data-target="#three"]').removeClass('activated');
			}

			if ($('.block5').hasClass('active')) {
				$('li[data-target="#survey"]').addClass('activated');
				$('li[data-target="#survey"]').addClass('activated');
			} else {
				$('li[data-target="#survey"]').removeClass('activated');
				$('li[data-target="#survey"]').removeClass('activated');
			}

			if ($('.block20').hasClass('active')) {
				$('li[data-target="#feedback"]').addClass('activated');
				$('li[data-target="#feedback"]').addClass('activated');
			} else {
				$('li[data-target="#feedback"]').removeClass('activated');
				$('li[data-target="#feedback"]').removeClass('activated');
			}

			if ($('.block50').hasClass('active')) {
				$('li[data-target="#info"]').addClass('activated');
				$('li[data-target="#info"]').addClass('activated');
			} else {
				$('li[data-target="#info"]').removeClass('activated');
				$('li[data-target="#info"]').removeClass('activated');
			}
		});
	}

	$('.collapse').on('show.bs.collapse', function () {
		$('a[href="#' + this.id + '"] .caret-down').css({
			transform: "rotate(180deg)"
		});
		$('a[href="#' + this.id + '"] .iques').css({
			opacity: "1"
		});
	});
	$('.collapse').on('hide.bs.collapse', function () {
		$('a[href="#' + this.id + '"] .caret-down').css({
			transform: "rotate(0deg)"
		});
		$('a[href="#' + this.id + '"] .iques').css({
			opacity: "0.4"
		});
	});

	$('.menu-buttons-list li, .menu-buttons-floating-list li, .menu-buttons-768-list li').on('click', function (e) {

		e.preventDefault();
		scrollfn($(this).attr('data-target'));
	});

	$('.menu-buttons-floating li').click(function () {
		$(this).addClass('activated');
	});

	$('.menu-buttons-list li, .menu-buttons-floating-list li, .menu-buttons-768-list li').on('keypress', function (e) {

		e.preventDefault();
		scrollfn($(this).attr('data-target'));
	});

	$('.tooltips-elements').tooltip().each(function () {
		var color = $(this).data('color');
		$(this).hover(function () {
			var aria = $(this).attr('aria-describedby');
			$('#' + aria).find('.tooltip-inner').css({
				"background": color,
				"color": "black",

				"box-shadow": "0px 0px 19px -1px rgba(175,175,175,0.67)"

			});
			$('#' + aria).find('.tooltip-arrow').css({
				"border-top-color": color,
				"border-bottom-color": color,
				"background": color

			});
		});
	});

	var slideIt = function slideIt() {

		if ($(this).closest('.outside').find(".toggleDiv").is(':visible')) {

			$(this).closest('.outside').find('i').addClass('plusSign');

			$(this).closest('.outside').find('.blueLine2 span').html('expand section');

			$(this).closest('.outside').find(".toggleDiv").slideUp();
		} else if ($(this).closest('.outside').find(".toggleDiv").is(':hidden')) {
			$(this).closest('.outside').find('.blueLine2 span').html('collapse section');
			$(this).closest('.outside').find('i').removeClass('plusSign');

			$(this).closest('.outside').find(".toggleDiv").slideDown();
		}
	};

	$('.blueLine2, .closeDiv').keypress(slideIt).click(slideIt);

	var slideIt2 = function slideIt2() {

		if ($(".toggleDiv").is(':visible')) {

			$('i').addClass('plusSign');

			$('.blueLine span').html('expand');

			$(".toggleDiv").slideUp();
		} else if ($(".toggleDiv").is(':hidden')) {
			$('.blueLine span').html('collapse');
			$('i').removeClass('plusSign');

			$(".toggleDiv").slideDown();
		}
	};

	$('.blueLine').keypress(slideIt2).click(slideIt2);

	//green background div

	var height = $('.block50').height();
	$('.greenBottom').css('height', height);

	// 508 focus

	$("a, button, input, [tabindex='0'], li, #one, .tooltips-elements, .feedbackBar, .skip, #closeThisPlease, .infoBar, .goToInfo, .close-project, .greenSide").on("keyup", function (e) {
		var code = e.keyCode ? e.keyCode : e.which;
		if (code == 9) {
			$(this).css('outline', 'dashed 3px #4599ff');
		}
	});
	$("a, button, input, [tabindex='0'], li, #one, .tooltips-elements, .feedbackBar, .skip, #closeThisPlease, .infoBar, .goToInfo, .close-project, .greenSide").on('focusout', function () {
		$(this).css('outline', 'none');
	});

	$(".cube").on("keyup", function (e) {
		var code = e.keyCode ? e.keyCode : e.which;
		if (code == 9) {
			$(this).find('.greenCube, .blueCube').css('outline', 'dashed 3px #4599ff');
		}
	});
	$(".cube").on('focusout', function () {
		$(this).find('.greenCube, .blueCube').css('outline', 'none');
	});

	$("a").on("keyup", function (e) {
		var code = e.keyCode ? e.keyCode : e.which;
		if (code == 9) {
			$(this).find('.feedbackBar').css('outline', 'dashed 3px #4599ff');
		}
	});
	$("a").on('focusout', function () {
		$(this).find('.feedbackBar').css('outline', 'none');
	});

	$(".toTL").on("keyup", function (e) {
		var code = e.keyCode ? e.keyCode : e.which;
		if (code == 9) {
			$(this).find('.circle').css('outline', 'dashed 3px #4599ff');
		}
	});
	$(".toTL").on('focusout', function () {
		$(this).find('.circle').css('outline', 'none');
	});

	// $(".editTool").on("keyup", function (e) {
	// 	var code = (e.keyCode ? e.keyCode : e.which);
	// 	if (code == 9) {
	// 		$(this).find('i').css('outline', 'dashed 3px #4599ff')
	// 	}
	//
	// })
	// $(".editTool").on('focusout', function() {
	// 	$(this).find('i').css('outline', 'none')
	// })


	$(".form-check").on("keyup", function (e) {

		var code = e.keyCode ? e.keyCode : e.which;
		if (code == 9) {
			$('.form-check').each(function () {
				$(this).addClass('focusClass');
			});
		}
	});

	$('.emailInfo a').attr('tabindex', '-1');

	//contact form

	var open = function open() {

		$('.contactUsOverlay').show();

		$('#theform input').each(function () {
			$(this).attr('tabindex', '0');
		});
		$('.radio-inline input').each(function () {
			$(this).attr('tabindex', '0');
		});
		$('.emailInfo a').attr('tabindex', '0');

		$('.form-control').attr('tabindex', '0');

		$('#closeThisPlease').attr('tabindex', '0');

		$('#sendMessage').attr('tabindex', '0');

		$('.modal-content').addClass('opened');
		$("#slideOut").addClass('showSlideOut');
		setTimeout(function () {
			$('body').addClass('showContact');
		}, 300);
	};
	$('#one').keypress(open).click(open);

	$('.contactUsOverlay').on('click', function (e) {

		if ($('body').hasClass('showContact')) {

			$('.contactUsOverlay').hide();

			$('#theform input').each(function () {
				$(this).attr('tabindex', '-1');
			});

			$('.radio-inline input').each(function () {
				$(this).attr('tabindex', '-1');
			});
			$('.emailInfo a').attr('tabindex', '-1');

			$('.form-control').attr('tabindex', '-1');

			$('#closeThisPlease').attr('tabindex', '-1');

			$('#sendMessage').attr('tabindex', '-1');

			$("#slideOut").removeClass('showSlideOut');

			setTimeout(function () {
				$('body').removeClass('showContact');
			}, 300);
		}
	});

	var close = function close() {

		$('.contactUsOverlay').hide();
		$('#theform input').each(function () {
			$(this).attr('tabindex', '-1');
		});

		$('.radio-inline input').each(function () {
			$(this).attr('tabindex', '-1');
		});
		$('.emailInfo a').attr('tabindex', '-1');

		$('.form-control').attr('tabindex', '-1');

		$('#closeThisPlease').attr('tabindex', '-1');

		$('#sendMessage').attr('tabindex', '-1');

		$("#slideOut").removeClass('showSlideOut');
	};

	$('#close').keypress(close).click(close);

	$('.feedbackBar').on("keyup", function (e) {
		var code = e.keyCode ? e.keyCode : e.which;
		if (code == 13) {

			$('#feedbackModal').modal('show');
		}
	});

	$('.editTool').on("keyup", function (e) {
		var code = e.keyCode ? e.keyCode : e.which;
		if (code == 13) {

			$(this).find('.parentUpdate').modal('show');
		}
	});

	$('.cube').on("keyup", function (e) {
		var code = e.keyCode ? e.keyCode : e.which;
		if (code == 13) {

			$('.tlModals').modal('show');
		}
	});

	$('.privacy').on("keyup", function (e) {
		var code = e.keyCode ? e.keyCode : e.which;
		if (code == 13) {

			$('#privacyModal').modal('show');
		}
	});

	//send message on contact form and toast message

	$('#sendMessage').click(function (e) {

		if (!$('#formControl1').val() == '' && !$('#formControl2').val() == '') {
			e.preventDefault();

			$('#theform input').each(function () {
				$(this).attr('tabindex', '-1');
			});

			$('.radio-inline input').each(function () {
				$(this).attr('tabindex', '-1');
			});

			$('.form-control').attr('tabindex', '-1');

			$('#closeThisPlease').attr('tabindex', '-1');

			$('#sendMessage').attr('tabindex', '-1');

			$("#slideOut").removeClass('showSlideOut');
			// e.preventDefault()

			setTimeout(function () {
				$('.toast').css('right', '0px');
				$('.toast').removeClass('transparent-opacity').addClass('animated slideInRight');
			}, 300);

			setTimeout(function () {
				$('.toast').removeClass('transparent-opacity').removeClass('animated slideInRight');
				$('.toast').addClass('transparent-opacity');
				$('.toast').removeClass('animated slideOutRight');
			}, 5000);
			setTimeout(function () {
				$('.toast').css('right', '-335px');
				$('.toast').addClass('animated slideOutRight');
			}, 4900);
		}
	});

	//green line width on Feedback modal carousel

	$('.carousel').carousel();

	var items = $('.carousel-item').length - 1;

	console.log($('#feedbackModal .modal-dialog').width());

	var total = $('#feedbackModal .modal-dialog').width();

	var color = total / items;

	console.log(items);
	console.log(total);
	console.log(color);

	var l = 0;

	console.log(l);

	$('.next , .skip').click(function () {

		function increase() {
			l = l + color;
		}
		increase();

		console.log(l);

		$('.modalProgressBar').css({
			'background': '#71d82e',
			'width': l
		});
	});

	$('.back').click(function () {

		function decrease() {
			l = l - color;
		}
		decrease();
		console.log(l);

		$('.modalProgressBar').css({
			'background': '#71d82e',
			'width': l
		});
	});

	//developers will need to chnage this based on the input's ID for this quesion
	//
	// $('#v').on('change', function() {
	// 	if ($(this).is(':checked')) {
	// 		$(".carousel-item").last().prev().prev().remove()
	// 		function increase(){
	// 			l = l + color
	// 		}
	// 		increase()
	// 	}
	// })
	//
	// //developers will need to chnage this based on the input's ID for this quesion
	//
	//
	// $('#ll').on('change', function() {
	// 	if ($(this).is(':checked')) {
	// 		$(".schoolAdministrator .carousel-item:eq(9), .schoolAdministrator .carousel-item:eq(10), .schoolAdministrator .carousel-item:eq(11), .schoolAdministrator .carousel-item:eq(12)").remove()
	// 		function increase(){
	// 			l = l + color
	// 		}
	// 		increase()
	// 	}
	// })


	//feedback modal carousel functions


	$('.skip').keypress(function (e) {

		if ((e.keyCode ? e.keyCode : e.which) == 13) {
			$(".carousel").carousel("next");
		}
	});

	$('.one input:checkbox').keypress(function (e) {
		e.preventDefault();
		if ((e.keyCode ? e.keyCode : e.which) == 13) {
			$(this).trigger('click');
		}
	});

	$('.form-check-input').on("keyup", function (e) {

		var code = e.keyCode ? e.keyCode : e.which;
		if (code == 9) {

			$(this).parent().find('label').addClass('activate');
		}
	});

	$('.form-check-input').on('focusout', function () {
		$(this).parent().find('label').removeClass('activate');
	});

	$('.cc-selector input').on("keyup", function (e) {

		var code = e.keyCode ? e.keyCode : e.which;
		if (code == 9) {
			$('.cc-selector input').css('-webkit-appearance', 'radio');
		}
	});

	$('.next, .skip').click(function () {
		if ($('.next').hasClass('done')) {

			$('.next').addClass('greenButton');
			$('#feedbackModal').modal('hide');
			$('.feedbackBar').prop("disabled", true);
			$('li[data-target="#feedback2"]').addClass('greenConsent');
			$('li[data-target="#feedback"]').addClass('greenConsent');
		}
	});
	$('.next, .skip').on("keyup", function (e) {

		var code = e.keyCode ? e.keyCode : e.which;
		if (code == 13 && $('.next').hasClass('done')) {
			$('.feedbackBar').prop("disabled", true);
			$('#feedbackModal').modal('hide');
		}

		var code = e.keyCode ? e.keyCode : e.which;
		if (code == 13) {

			$('#feedbackModal .close').focus().css('outline', 'dashed 3px #4599ff');
		}
	});

	function checkitem() {
		var $this = $('.carousel');

		if ($('.carousel-inner .carousel-item:first').hasClass('active')) {
			$('.back').css('pointer-events', 'none');
		} else if ($('.carousel-inner .carousel-item:last').hasClass('active')) {
			// $('.next').css('pointer-events', 'none');
			$('.back, .skip').hide();
			$('.skip').css('pointer-events', 'none');
			$('.next').html("Done");
			$('.next').addClass('done');
			$('.next').addClass('greenButton');
		} else if ($('.carousel-inner .carousel-item:last').prev().hasClass('active')) {
			$('.next').html('Submit');
		} else {
			$('.next, .back, .skip').css('pointer-events', 'auto');
			$('.next').html('Next');
			$('.back, .skip').show();
			$('.next').removeClass('done');
		}
	}

	checkitem();

	$('.carousel').on('slid', '', checkitem); // on caroussel move
	$('.carousel').on('slid.bs.carousel', '', checkitem); // on carousel move

	$("label.card-cc").click(function (e) {
		e.preventDefault();
		var $check = $(this).prev();
		if ($check.prop('checked')) $check.prop("checked", false);else $check.prop("checked", true);
	});

	$(".card-cc").on("click", function (e) {
		$(".card-cc-checked").each(function (i) {
			$(this).removeClass("card-cc-checked");
		});
		$(this).toggleClass("card-cc-checked");
		e.preventDefault();
	});

	if ($(document).innerWidth() <= 1200) {
		$('.logoutOptions #ingles p').html('EN');
		$('.logoutOptions #espanol p').html('ES');
	}

	if ($(document).innerWidth() <= 767) {
		$('#ingles p').html('EN');
		$('#espanol p').html('ES');
	}

	//spanish english

	var mainURL = window.location.href;

	$('#ingles').attr('href', mainURL);

	$('#ingles').click(function () {
		$('#ingles').attr('href', mainURL);
	});

	$('.spanish').on('click', function (e) {
		$('.spanish').addClass('blue');
		$('.english').addClass('clear');
		$('li[data-target="#home"]').addClass('spanishAfter');
		$('li[data-target="#overview"]').addClass('spanishAfter');
		$('li[data-target="#two"]').addClass('spanishAfter');
		$('li[data-target="#three"]').addClass('spanishAfter');

		$('.text1').css('right', '394px');
		$('.text5').css('right', '433px');
		if ($(document).innerWidth() <= 1024 && $(document).innerWidth() > 991) {

			$('.menu-buttons-floating').css('left', '28px');
			$('.guide-overlay2').css('padding', '4em 4em 0em 8.4em');

			$('.text3').addClass('es');
		}

		if ($(document).innerWidth() < 992 && $(document).innerWidth() > 767) {

			$('.animation').css('width', '150vw');
			$('.guide-overlay').css('padding', '0em 7em');
			$('.text3, .text4').addClass('es');
		}

		if ($(document).innerWidth() < 768) {

			$('#two .nav-tabs .nav-link.selected, #two .nav-tabs .nav-link').css('font-size', '17px');

			$('.text3, .leaves, .house, .text1, .text5, .flower, .leftImg, .animation').addClass('es');
		}

		if ($(document).innerWidth() < 379) {

			$('#two .nav-tabs .nav-link.selected, #two .nav-tabs .nav-link').css('font-size', '15px');
		}

		if ($(document).innerWidth() < 324) {

			$('#two .nav-tabs .nav-link.selected, #two .nav-tabs .nav-link').css('font-size', '12px');
		}

		if ($(document).innerWidth() > 1024) {
			resizeText();
		}
	});

	var resizeText = function resizeText() {

		var preferredFontSize = 85; // %
		var preferredFontSize2 = 190; // %
		var preferredSize = 1024 * 768;

		var currentSize = $(window).width() * $(window).height();
		var scalePercentage = Math.sqrt(currentSize) / Math.sqrt(preferredSize);
		var newFontSize = preferredFontSize * scalePercentage;
		var newFontSize2 = preferredFontSize2 * scalePercentage;
		$(".greenBar .nav-link").css("font-size", newFontSize + '%');
		$(".landing-sec-H").css("font-size", newFontSize2 + '%');
	};

	//IE message

	var version = detectIE();

	if (version === false) {} else if (version >= 12) {} else {
		$('#myModal2').modal('show');
	}

	function detectIE() {
		var ua = window.navigator.userAgent;

		var msie = ua.indexOf('MSIE ');

		var msie = ua.indexOf('MSIE ');
		if (msie > 0) {

			return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
		}

		var trident = ua.indexOf('Trident/');
		if (trident > 0) {

			var rv = ua.indexOf('rv:');
			return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
		}

		var edge = ua.indexOf('Edge/');
		if (edge > 0) {

			return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
		}

		return false;
	}

	//show covid modal


	$('.covid-modal').modal('show');

	$(".scrollIt").on("click", function (event) {
		if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				event.preventDefault();
				$('html, body').animate({
					scrollTop: target.offset().top
				}, 1000, function () {
					var $target = $(target);
					$target.focus();
					if ($target.is(":focus")) {
						return false;
					} else {
						$target.attr('tabindex', '-1');
						$target.focus();
					}
				});
			}
		}
	});

	function show() {
		var p = $('#accessCode1');
		p.attr('type', 'text');
	}

	function hide() {
		var p = $('#accessCode1');
		p.attr('type', 'password');
	}

	var pwShown = 0;

	var clickEye = function clickEye() {

		if (pwShown == 0) {
			pwShown = 1;
			show();

			$("#eye i").replaceWith('<i class="fas fa-eye-slash darkBlue"></i>');
		} else {
			pwShown = 0;
			hide();

			$("#eye i").replaceWith('<i class="fas fa-eye darkBlue"></i>');
		}
	};

	$("#eye").keypress(clickEye).click(clickEye);

	function show2() {

		var s = $('#accessCode2');

		s.attr('type', 'text');
	}

	function hide2() {

		var s = $('#accessCode2');

		s.attr('type', 'password');
	}

	var pwShown2 = 0;

	var clickEye2 = function clickEye2() {

		if (pwShown2 == 0) {
			pwShown2 = 1;
			show2();

			$("#eye2 i").replaceWith('<i class="fas fa-eye-slash darkBlue"></i>');
		} else {
			pwShown2 = 0;
			hide2();

			$("#eye2 i").replaceWith('<i class="fas fa-eye darkBlue"></i>');
		}
	};

	$("#eye2").keypress(clickEye2).click(clickEye2);

	$("#eye, #eye2").on("keyup", function (e) {
		var code = e.keyCode ? e.keyCode : e.which;
		if (code == 9) {
			$(this).css('outline', 'dashed 3px #4599ff');
		}
	});

	$('#eye, #eye2').on('focusout', function () {
		$(this).css('outline', 'none');
	});

	$('body').keydown(function (event) {

		if (!$('#email1').val() == '' && !$('#password1').val() == '' && !$('#password2').val() == '') {

			$('.continue').css({
				'background': '#00843D',
				'color': 'white'

			});
		} else {}
	});

	$('#accessCode2').keydown(function (event) {
		$('#returning').removeAttr('disabled', 'disabled');
		$('#returning').css({
			'background': '#00843D',
			'color': 'white'

		});
	});

	$('#accessCode1').keydown(function (event) {
		$('#new-user').removeAttr('disabled', 'disabled');
		$('#new-user').css({
			'background': '#00843D',
			'color': 'white'

		});
	});

	//TL portal open sidebar

	$('.disabled').attr('disabled', 'disabled');

	//close project on click

	$('.close-project').click(function (e) {
		e.stopPropagation();

		$(".slideOutLeft").css('z-index', '-10');
		$('.columnCubes a').attr('tabindex', '-1');

		$('.close-project').css('opacity', '0');

		$(".slideOutLeft").animate({
			width: "0",
			opacity: '0'
		}, 160, function () {});

		$('#slideOutRight').css('z-index', '10');
		$('.projects').attr('tabindex', '0');

		$('.close-project').attr('tabindex', '-1');
		$('.close-project').attr('aria-hidden', 'true');

		if ($(document).innerWidth() < 1600) {
			$(".box-outer, .reportPage").animate({
				'margin-left': "0px"
			}, 160, function () {});

			$('.reportsBlocks').removeClass('skinny');
			$('.fixedDiv').removeClass('moveRight');
		}

		setTimeout(function () {
			if ($(document).innerWidth() > 1024) {
				$('.hoverOnly').show();
			}
			$(".slideOutLeft").removeClass('open');
		}, 200);
	});

	//close project on keypress

	$('.close-project').on("keyup", function (e) {
		var code = e.keyCode ? e.keyCode : e.which;
		if (code == 13) {
			e.stopPropagation();

			$(".slideOutLeft").css('z-index', '-10');
			$('.columnCubes a').attr('tabindex', '-1');

			$('.close-project').css('opacity', '0');

			$(".slideOutLeft").animate({
				width: "0",
				opacity: '0'
			}, 160, function () {});

			$('#slideOutRight').css('z-index', '10');
			$('.projects').attr('tabindex', '0');

			$('.close-project').attr('tabindex', '-1');
			$('.close-project').attr('aria-hidden', 'true');

			if ($(document).innerWidth() < 1600) {
				$(".box-outer, .reportPage").animate({
					'margin-left': "0px"
				}, 160, function () {});

				$('.reportsBlocks').removeClass('skinny');
			}

			setTimeout(function () {
				if ($(document).innerWidth() > 1024) {
					$('.hoverOnly').show();
				}
				$(".slideOutLeft").removeClass('open');
			}, 200);
		}
	});

	// $('.slideOutLeft').not('.activeCube').click(function() {

	//open project on click

	$('.slideOutLeft').click(function () {

		$('.columnCubes a').attr('tabindex', '1');

		$('.close-project').css('opacity', '1');

		$(".slideOutLeft").animate({
			width: "180px",
			opacity: '1'
		}, 200, function () {});
		if ($(document).innerWidth() > 1024) {
			$('.hoverOnly').hide();
		}

		$(".slideOutLeft").css('z-index', '999999999');
		$('#slideOutRight').css('z-index', '1');
		$('.projects').attr('tabindex', '1');
		$('.close-project').attr('tabindex', '1');
		$('.close-project').attr('aria-hidden', 'false');

		if ($(document).innerWidth() < 1525 && $(document).innerWidth() > 1375) {

			$(".box-outer, .reportPage").animate({
				'margin-left': "60px"
			}, 200, function () {});
		}

		if ($(document).innerWidth() < 1375) {

			$(".box-outer").animate({
				'margin-left': "120px"
			}, 200, function () {});

			$('.reportsBlocks').addClass('skinny');

			$('.reportPage').animate({
				'margin-left': "180px"
			}, 200, function () {});

			$('.fixedDiv').addClass('moveRight');
		}

		if ($(document).innerWidth() < 1600) {

			$('.reportPage').animate({
				'margin-left': "180px"
			}, 200, function () {});
		}

		setTimeout(function () {
			$(".slideOutLeft").addClass('open');
		}, 200);
	});

	//open project on keypress
	$('.projects').on("keyup", function (e) {
		var code = e.keyCode ? e.keyCode : e.which;
		if (code == 13) {

			$('.columnCubes a').attr('tabindex', '1');

			$('.close-project').css('opacity', '1');

			$(".slideOutLeft").css('z-index', '999999999');

			$(".slideOutLeft").animate({
				width: "180px",
				opacity: '1'
			}, 200, function () {});
			if ($(document).innerWidth() > 1024) {
				$('.hoverOnly').hide();
			}

			$('#slideOutRight').css('z-index', '1');
			$('.projects').attr('tabindex', '1');
			$('.close-project').attr('tabindex', '1');
			$('.close-project').attr('aria-hidden', 'false');

			if ($(document).innerWidth() < 1525 && $(document).innerWidth() > 1375) {

				$(".box-outer, .reportPage").animate({
					'margin-left': "60px"
				}, 200, function () {});
			}

			if ($(document).innerWidth() < 1375) {

				$(".box-outer").animate({
					'margin-left': "120px"
				}, 200, function () {});

				$('.reportsBlocks').addClass('skinny');
			}

			if ($(document).innerWidth() < 1600) {

				$('.reportPage').animate({
					'margin-left': "180px"
				}, 200, function () {});
			}

			setTimeout(function () {
				$(".slideOutLeft").addClass('open');
			}, 200);
		}
	});

	//hover over projects

	$('.slideOutLeft').on('mouseleave', function (e) {
		e.stopPropagation();
		if (!$(".slideOutLeft").hasClass('open')) {

			$(".slideOutLeft").animate({
				width: "0",
				opacity: '0'
			}, 160, function () {});

			$(".slideOutLeft").css('z-index', '-10');

			$('#slideOutRight').css('z-index', '10');
			$('.projects').attr('tabindex', '0');

			$('.close-project').attr('tabindex', '-1');
			$('.close-project').attr('aria-hidden', 'true');
		}
	});

	//hover over projects

	$('.projects').on('mouseenter', function () {
		if (!$(".slideOutLeft").hasClass('open')) {

			$(".slideOutLeft").animate({
				width: "180px",
				opacity: '1'
			}, 200, function () {});

			$(".slideOutLeft").css('z-index', '999999999');

			$('#slideOutRight').css('z-index', '1');
			$('.projects').attr('tabindex', '1');
			$('.close-project').attr('tabindex', '1');
			$('.close-project').attr('aria-hidden', 'false');
		}
	});

	//TL images

	$('.districts').on('mouseenter', function () {

		$('.districts img').attr('src', 'images/img_districts-hover.svg');
	});

	$('.districts').on('mouseleave', function () {

		$('.districts img').attr('src', 'images/img_districts.svg');
	});

	$('.schools').on('mouseenter', function () {

		$('.schools img').attr('src', 'images/img_school-hover.svg');
	});

	$('.schools').on('mouseleave', function () {

		$('.schools img').attr('src', 'images/img_school.svg');
	});

	$('.parents').on('mouseenter', function () {

		$('.parents img').attr('src', 'images/img_parents-hover.svg');
	});

	$('.parents').on('mouseleave', function () {

		$('.parents img').attr('src', 'images/img_parents.svg');
	});

	$('.case').on('mouseenter', function () {

		$('.case img').attr('src', 'images/case-hover.svg');
	});

	$('.case').on('mouseleave', function () {

		$('.case img').attr('src', 'images/case.svg');
	});

	$('.documents').on('mouseenter', function () {

		$('.documents img').attr('src', 'images/img_documents-hover.svg');
	});

	$('.documents').on('mouseleave', function () {

		$('.documents img').attr('src', 'images/img_documents.svg');
	});

	$('.transmission').on('mouseenter', function () {

		$('.transmission img').attr('src', 'images/img_transmission-hover.svg');
	});

	$('.transmission').on('mouseleave', function () {

		$('.transmission img').attr('src', 'images/img_transmission.svg');
	});

	$('.messaging').on('mouseenter', function () {

		$('.messaging img').attr('src', 'images/img_messaging-hover.svg');
	});

	$('.messaging').on('mouseleave', function () {

		$('.messaging img').attr('src', 'images/img_messaging.svg');
	});

	$('.reports').on('mouseenter', function () {

		$('.reports img').attr('src', 'images/img_reports-hover.svg');
	});

	$('.reports').on('mouseleave', function () {

		$('.reports img').attr('src', 'images/img_reports.svg');
	});

	$(document).on('click', '.goToInfo', function (e) {

		setTimeout(function () {
			var divPosition = $('#anchorPoint').offset();
			$('html, body').animate({ scrollTop: divPosition.top }, 1000);
		}, 800);

		$('.grayBox.second').fadeIn('slow');
		$('.grayBox.first').fadeOut();
	});

	$(document).on('keyup', '.goToInfo', function (e) {
		var code = e.keyCode ? e.keyCode : e.which;
		if (code == 13) {

			setTimeout(function () {
				var divPosition = $('#anchorPoint').offset();
				$('html, body').animate({ scrollTop: divPosition.top }, 1000);
			}, 800);
			$('.grayBox.second').fadeIn('slow');
			$('.grayBox.first').fadeOut();
		}
	});

	//revert

	$('.tlModals').on('hidden.bs.modal', function (e) {

		$('#slideOutRight').css('z-index', '10');
		$('.projects').attr('tabindex', '0');

		$('.close-project').attr('tabindex', '-1');
		$('.close-project').attr('aria-hidden', 'true');
	});

	var seeDistricts = function seeDistricts() {
		$('.grayBox.first').fadeIn('slow');
		$('.grayBox.second').fadeOut();

		setTimeout(function () {
			var divPosition = $('#anchorPoint').offset();
			$('html, body').animate({ scrollTop: divPosition.top }, 1000);
		}, 800);
	};

	$('.seeDistricts').keypress(seeDistricts).click(seeDistricts);

	$('.btn').on('click', function () {
		$('input', this).removeAttr('checked');
		$(this).removeClass('active');
	});

	$('.informationForm').find('input:text').val('');

	$('.cancel').on('click', function () {
		$('.informationForm').find('input:text').val('');
	});

	$('.back-to-top-in-modal').on('click', function () {

		$('.tlModals').animate({ scrollTop: 0 }, 'slow');
	});

	//slide green tab on scroll

	$(window).scroll(function () {
		var distanceY = window.pageYOffset || document.documentElement.scrollTop;
		if (distanceY > 140) {

			$('.greenSide.projects, .slideOutLeft').css({
				top: '2%'
			});
		} else {

			$('.greenSide.projects, .slideOutLeft').css({
				top: '30%'
			});
		}
	});

	$('.columnCubes a').attr('tabindex', '-1');

	//update tabs in Final Case Status


	$(document).on('change', '#tabs-2 .absoluteCheckbox input', function () {
		if ($(this).is(':checked')) {
			$(this).closest('.updateBlocks').addClass('lightGreenBackgrdound');
			$(this).closest('.updateBlocks').find('.goldLeftBar').addClass('newGreenBar');
			$(this).closest('.row').find('.updateButton').removeClass('lightGrayColor').addClass('greenButton');
			$(this).closest('.row').find('.disabledSave').removeAttr('disabled', 'disabled');

			// $(this).closest('.row').find('.codes li').first().addClass('greenCode')
		} else {
			$(this).closest('.updateBlocks').removeClass('lightGreenBackgrdound');
			$(this).closest('.updateBlocks').find('.goldLeftBar').removeClass('newGreenBar');
		}

		if (!$('#tabs-2 .absoluteCheckbox input').is(':checked')) {
			$(this).closest('.row').find('.updateButton').addClass('lightGrayColor').removeClass('greenButton');
			$(this).closest('.row').find('.disabledSave').attr('disabled', 'disabled');
			$(this).closest('.row').find('.codes li').first().removeClass('greenCode');
		}
	});

	$(document).on('change', '#tabs-3 .absoluteCheckbox input', function () {
		if ($(this).is(':checked')) {
			$(this).closest('.updateBlocks').addClass('lightGreenBackgrdound');
			$(this).closest('.updateBlocks').find('.goldLeftBar').addClass('newGreenBar');
			$(this).closest('.row').find('.updateButton').removeClass('lightGrayColor').addClass('greenButton');
			$(this).closest('.row').find('.disabledSave').removeAttr('disabled', 'disabled');

			// $(this).closest('.row').find('.codes li').first().addClass('greenCode')
		} else {
			$(this).closest('.updateBlocks').removeClass('lightGreenBackgrdound');
			$(this).closest('.updateBlocks').find('.goldLeftBar').removeClass('newGreenBar');
		}

		if (!$('#tabs-3 .absoluteCheckbox input').is(':checked')) {
			$(this).closest('.row').find('.updateButton').addClass('lightGrayColor').removeClass('greenButton');
			$(this).closest('.row').find('.disabledSave').attr('disabled', 'disabled');
			$(this).closest('.row').find('.codes li').first().removeClass('greenCode');
		}
	});

	$(document).on('change', '#tabs-4 .absoluteCheckbox input', function () {
		if ($(this).is(':checked')) {
			$(this).closest('.updateBlocks').addClass('lightGreenBackgrdound');
			$(this).closest('.updateBlocks').find('.goldLeftBar').addClass('newGreenBar');
			$(this).closest('.row').find('.updateButton').removeClass('lightGrayColor').addClass('greenButton');
			$(this).closest('.row').find('.disabledSave').removeAttr('disabled', 'disabled');

			// $(this).closest('.row').find('.codes li').first().addClass('greenCode')
		} else {
			$(this).closest('.updateBlocks').removeClass('lightGreenBackgrdound');
			$(this).closest('.updateBlocks').find('.goldLeftBar').removeClass('newGreenBar');
		}

		if (!$('#tabs-4 .absoluteCheckbox input').is(':checked')) {
			$(this).closest('.row').find('.updateButton').addClass('lightGrayColor').removeClass('greenButton');
			$(this).closest('.row').find('.disabledSave').attr('disabled', 'disabled');
			$(this).closest('.row').find('.codes li').first().removeClass('greenCode');
		}
	});

	$(document).on('change', '#tabs-5 .absoluteCheckbox input', function () {
		if ($(this).is(':checked')) {
			$(this).closest('.updateBlocks').addClass('lightGreenBackgrdound');
			$(this).closest('.updateBlocks').find('.goldLeftBar').addClass('newGreenBar');
			$(this).closest('.row').find('.updateButton').removeClass('lightGrayColor').addClass('greenButton');
			$(this).closest('.row').find('.disabledSave').removeAttr('disabled', 'disabled');
			//
			// $(this).closest('.row').find('.codes li').first().addClass('greenCode')
		} else {
			$(this).closest('.updateBlocks').removeClass('lightGreenBackgrdound');
			$(this).closest('.updateBlocks').find('.goldLeftBar').removeClass('newGreenBar');
		}

		if (!$('#tabs-5 .absoluteCheckbox input').is(':checked')) {
			$(this).closest('.row').find('.updateButton').addClass('lightGrayColor').removeClass('greenButton');
			$(this).closest('.row').find('.disabledSave').attr('disabled', 'disabled');
			$(this).closest('.row').find('.codes li').first().removeClass('greenCode');
		}
	});

	$('.casePage .customRadio label').click(function () {
		$('.casePage .customRadio label').removeClass('checked');
		$(this).addClass('checked');
	});

	$('.casePage .customRadio input:checked').closest('.customRadio').find('.casePage .customRadio label').addClass('strong');

	// alerts for each update button
	$("#tabs-2 .updateButton").on("click", function (e) {
		e.preventDefault();

		var yourFormElement1 = $(".update")[0];
		yourFormElement1.checkValidity();
		yourFormElement1.reportValidity();

		if (!$('.casePage #tabs-2  .customRadio input').is(':checked')) {
			$('#tabs-2 .invalid-feedback').show();
		}
		if ($('.casePage #tabs-2  .customRadio input').is(':checked')) {
			$('.updateDistrictModal').modal('show');
		}
	});

	$("#tabs-3 .updateButton").on("click", function (e) {
		e.preventDefault();

		var yourFormElement1 = $(".update")[0];
		yourFormElement1.checkValidity();
		yourFormElement1.reportValidity();

		if (!$('.casePage #tabs-3  .customRadio input').is(':checked')) {
			$('#tabs-3 .invalid-feedback').show();
		}
		if ($('.casePage #tabs-3  .customRadio input').is(':checked')) {
			$('.updateSchoolModal').modal('show');
		}
	});

	$("#tabs-4 .updateButton").on("click", function (e) {
		e.preventDefault();

		var yourFormElement1 = $(".update")[0];
		yourFormElement1.checkValidity();
		yourFormElement1.reportValidity();

		if (!$('.casePage #tabs-4  .customRadio input').is(':checked')) {
			$('#tabs-4 .invalid-feedback').show();
		}
		if ($('.casePage #tabs-4  .customRadio input').is(':checked')) {
			$('.updateChildModal').modal('show');
		}
	});

	$("#tabs-5 .updateButton").on("click", function (e) {
		e.preventDefault();

		var yourFormElement1 = $(".update")[0];
		yourFormElement1.checkValidity();
		yourFormElement1.reportValidity();

		if (!$('.casePage #tabs-5  .customRadio input').is(':checked')) {
			$('#tabs-5 .invalid-feedback').show();
		}
		if ($('.casePage #tabs-5  .customRadio input').is(':checked')) {
			$('.updateParentModal').modal('show');
		}
	});

	$('.casePage #tabs-2  .customRadio input').change(function () {
		$('#tabs-2 .invalid-feedback').hide();
	});

	$('.casePage #tabs-3  .customRadio input').change(function () {
		$('#tabs-3 .invalid-feedback').hide();
	});

	$('.casePage #tabs-4  .customRadio input').change(function () {
		$('#tabs-4 .invalid-feedback').hide();
	});

	$('.casePage #tabs-5  .customRadio input').change(function () {
		$('#tabs-5 .invalid-feedback').hide();
	});

	$('.seeSchool').click(function () {
		var divPosition = $('#anchorPoint').offset();
		$('html, body').animate({ scrollTop: divPosition.top }, 800);
		$('[href="#tab4"]').tab('show');
	});

	$('.seeDocuments').click(function () {
		var divPosition = $('#anchorPoint').offset();
		$('html, body').animate({ scrollTop: divPosition.top }, 800);
		$('[href="#tab3"]').tab('show');
	});

	$('.seeCInfo').click(function () {
		var divPosition = $('#anchorPoint').offset();
		$('html, body').animate({ scrollTop: divPosition.top }, 800);
		$('[href="#tab5"]').tab('show');
	});
	$('.seePInfo').click(function () {
		var divPosition = $('#anchorPoint').offset();
		$('html, body').animate({ scrollTop: divPosition.top }, 800);
		$('[href="#tab6"]').tab('show');
	});

	$('.seeTInfo').click(function () {
		var divPosition = $('#anchorPoint').offset();
		$('html, body').animate({ scrollTop: divPosition.top }, 800);
		$('[href="#tab7"]').tab('show');
	});

	$(window).scroll(function () {
		var sticky = $('.position-rel'),
		    scroll = $(window).scrollTop();

		if (scroll >= 270) sticky.addClass('fixedDiv');else sticky.removeClass('fixedDiv');
	});

	$(window).scroll(function () {
		var distanceY = window.pageYOffset || document.documentElement.scrollTop;
		if (distanceY > 270) {

			$('.fixedDiv').css({
				top: '0'
			});
		} else {

			$('.fixedDiv').css({
				top: 'auto'
			});
		}
	});

	// var hash = 1;
	//
	// $(".editTool").each(function(i){
	// 	var count = "editModal" + (++hash)
	//
	// 	$(this).attr("data-target",  "#" + count);
	//
	//
	// 	$(this).find('.modal').attr("id", count);
	// });
	//
	//
	//
	// $('.stop').click(function(e) {
	//
	// 	if ($('.modal.editTool').hasClass('show')){
	// 		e.preventDefault()
	// 		e.stopPropagation()
	//
	//
	// 	}
	//
	// })


	//click checkbox and make bar green


	$('.parentInfoBlocks.two .one input').change(function () {
		if ($(this).is(":checked")) {
			$(this).closest('.parentInfoBlocks').css('background', '#E5F9ED');
		} else {
			$(this).closest('.parentInfoBlocks').css('background', 'white');
		}
	});

	//joey I added this


	//teacher info bars actions on non-priority schools pages


	var deleteTeacher = function deleteTeacher() {

		$(this).closest('.teacherListBlocks').addClass('appendTeacher');
		$(this).closest('.teacherListBlocks').find('.infoDelete').removeClass('hidden');
	};

	$('.teacherListBlocks .delete').keypress(deleteTeacher).click(deleteTeacher);

	var deleteOption = function deleteOption() {

		$(this).closest('.teacherListBlocks').remove();
	};

	$('.teacherListBlocks .deleteOption').keypress(deleteOption).click(deleteOption);

	var cancelOption = function cancelOption() {

		$(this).closest('.teacherListBlocks').removeClass('appendTeacher');
		$(this).closest('.teacherListBlocks').find('.infoDelete').addClass('hidden');
	};
	$('.teacherListBlocks .cancelOption').keypress(cancelOption).click(cancelOption);

	var linkEdit = function linkEdit() {

		$(this).closest('.teacherListBlocks').find('.appendType').removeClass('hidden');
		$(this).closest('.teacherListBlocks').find('.black.type').hide();

		$(this).closest('.teacherListBlocks').find('.appendRoom').removeClass('hidden');
		$(this).closest('.teacherListBlocks').find('.black.room').hide();
		$(this).closest('.teacherListBlocks').find('.black.link').hide();
		$(this).closest('.teacherListBlocks').find('.black.grade').hide();

		$(this).closest('.teacherListBlocks').find('.appendGrade').removeClass('hidden');

		$(this).closest('.teacherListBlocks').find('.appendSave').removeClass('hidden');

		// $(this).closest('.teacherListBlocks').find('.black.edit').addClass('off')
		// $(this).closest('.teacherListBlocks').find('.black.edit i').addClass('lightGray')
		// $(this).closest('.teacherListBlocks').find('.black.edit').hide()
		$(this).closest('.teacherListBlocks').find('.black.delete').addClass('off');
		$(this).closest('.teacherListBlocks').find('.black.delete i').addClass('lightGray');
	};

	$('.teacherListBlocks .link').keypress(linkEdit).click(linkEdit);

	$('.teacherListBlocks .off').attr("disabled", "disabled").off('click');

	// $('.teacherListBlocks .mobile br, .parentInfoBlocks .mobile br, .childrenBlocks .mobile br').remove();


	var saveNew = function saveNew() {

		$(this).closest('.teacherListBlocks').find('.appendType').addClass('hidden');
		$(this).closest('.teacherListBlocks').find('.appendRoom').addClass('hidden');
		$(this).closest('.teacherListBlocks').find('.appendGrade').addClass('hidden');
		$(this).closest('.teacherListBlocks').find('.appendSave').addClass('hidden');
		// var typeTerm = $(this).closest('.teacherListBlocks').find('#type').val();
		//
		// $(this).closest('.teacherListBlocks').find('.black.type').show().html(typeTerm)


		// var roomTerm = $(this).closest('.teacherListBlocks').find('#room').val();
		//
		// $(this).closest('.teacherListBlocks').find('.black.room').show().html(roomTerm)

		$(this).closest('.teacherListBlocks').find('.black.type').show();
		$(this).closest('.teacherListBlocks').find('.black.room').show();
		$(this).closest('.teacherListBlocks').find('.black.grade').show();
		// $(this).closest('.teacherListBlocks').find('.black.delete').show()
		$(this).closest('.teacherListBlocks').find('.black.link').show();
		// $(this).closest('.teacherListBlocks').find('.black.edit').show()

		// $(this).closest('.teacherListBlocks').find('.black.edit').removeClass('off')
		// $(this).closest('.teacherListBlocks').find('.black.edit i').removeClass('lightGray')

		$(this).closest('.teacherListBlocks').find('.black.delete').removeClass('off');
		$(this).closest('.teacherListBlocks').find('.black.delete i').removeClass('lightGray');
	};

	$('.teacherListBlocks .saveNew').keypress(saveNew).click(saveNew);

	$('.enterID').keydown(function (event) {
		$('.sendID').removeClass('lightGrayBox').addClass('greenButton');
		$('.sendID').removeAttr('disabled', 'disabled');
		$('.sendID i').addClass('white');
	});

	$('.parentBars .absoluteCheckbox input').on('change', function () {
		if ($(this).is(':checked')) {
			$(this).closest('.updateBlocks').addClass('lightGreenBackgrdound');
			$(this).closest('.updateBlocks').find('.goldLeftBar').addClass('newGreenBar');
			$(this).closest('.row').find('.updateButton').removeClass('lightGrayColor').addClass('greenButton');
			$(this).closest('.row').find('.disabledSave').removeAttr('disabled', 'disabled');
		} else {
			$(this).closest('.updateBlocks').removeClass('lightGreenBackgrdound');
			$(this).closest('.updateBlocks').find('.goldLeftBar').removeClass('newGreenBar');
		}
	});

	//joey I commented this out

	// $('.addTeacherInfo').click(function() {
	//
	// $('.appendedTeacher').removeClass('hidden')
	//
	// })
	//
	// var saveTeacher = function() {
	//
	// 	var fullName = `${prefix} ${firstName}  ${lastName}`
	//
	// 	var prefix = $(this).closest('.appendedTeacher').find('#prefix').val();
	//
	// 	var firstName = $(this).closest('.appendedTeacher').find('#firstName').val();
	//
	// 	var lastName = $(this).closest('.appendedTeacher').find('#lastName').val();
	//
	// 	$(this).closest('.appendedTeacher').find('.black.teacherName').show().html(fullName)
	//
	// 	$('.appendType').addClass('hidden')
	// 	$('.appendRoom').addClass('hidden')
	// 	$('.appendSave').addClass('hidden')
	//
	// 	// var roomTerm = $(this).closest('.teacherListBlocks').find('#room').val();
	// 	//
	// 	// $(this).closest('.teacherListBlocks').find('.black.room').show().html(roomTerm)
	// 	//
	// 	// $(this).closest('.teacherListBlocks').find('.black.link').show()
	// 	// $(this).closest('.teacherListBlocks').find('.black.edit').show()
	// 	// $(this).closest('.teacherListBlocks').find('.black.delete').show()
	//
	//
	// }
	//
	// $('.saveTeacher').keypress(
	// 	saveTeacher
	//
	// ).click(
	// 		saveTeacher
	// );


	$('.appendedTeacher input').on('keypress', function () {

		$(this).closest('.appendedTeacher').find('.saveTeacher').removeClass('lightGrayColor').addClass('greenButton');
		$(this).closest('.appendedTeacher').find('.saveTeacher').removeAttr('disabled', 'disabled');
	});

	$('.powderBlue input').on('keypress', function () {

		$(this).closest('.powderBlue').find('.saveInformation').removeClass('lightGrayColor').addClass('greenButton');
		$(this).closest('.powderBlue').find('.saveInformation').removeAttr('disabled', 'disabled');
	});

	$('.parentUpdate input').on('keypress', function () {

		$(this).closest('.parentUpdate').find('.saveInformation').removeClass('lightGrayColor').addClass('greenButton');
		$(this).closest('.parentUpdate').find('.saveInformation').removeAttr('disabled', 'disabled');
	});

	$('.addTeacherModal input').on('keypress', function () {

		$(this).closest('.addTeacherModal').find('.saveInformation').removeClass('lightGrayColor').addClass('greenButton');
		$(this).closest('.addTeacherModal').find('.saveInformation').removeAttr('disabled', 'disabled');
	});
});
