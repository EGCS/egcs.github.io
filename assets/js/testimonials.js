var testimonials = [
	{"name" : "Kim", "from" : "Granger, IN", "text": "I love having EGCS come to my house! Stacy and her team treat my home like their own and every inch shines with TLC! My house has never been so clean!" },
	{"name" : "Allison R.", "from" : "Granger, IN", "text": "EGCS have an awesome staff and cleaning products. Her cleaning products have keep me out of the doctors office! I would highly recommend Stacy and her staff." },
	{"name" : "Chandra R.", "from" : "Atmospheres", "text": "A big thanks to Executive Green Cleaning Services for taking charge of my mess at home and helping me with organizing and thoroughly cleaning! I highly recommend EGCS!" },
	{"name" : "Nancy R.", "from" : "Granger, IN", "text": "EGCS has been absolutely wonderful. My home has never been cleaner! I love the earth friendly products. My home smells fresh and clean! I highly recommend stacy and her staff."},
	{"name" : "Angie C.", "from" : "", "text": "Stacy goes above and beyond for her clients! I've not met another business woman who has inspired me more!" },
	{"name" : "Ellen", "from" : "Office Manager - Michiana OBGYN", "text":"EGCS is very consistent, trust worthy, dependable and always goes above and beyond. EGCS treats our office as if it was there home. They let me know if something needs to be fixed or replaced. Very friendly and always has a positive attitude!" },
	{"name" : "Sandy S.", "from" : "A & R Industries", "text": "EGCS does a professional and  very reliable job. Stacy and her staff are always punctual and thorough.. They do their job with integrity and honesty."},
];

$(function() {
	$( "div#testimonial" ).replaceWith( function() {
		var testimonial = testimonials[Math.floor(Math.random()*testimonials.length)];
		var from = testimonial.from ? " <em>("+ testimonial.from +")</em>" : ""
		return ("<p>" + testimonial.text + "<br> - <strong>" + testimonial.name + "</strong>" + from + "</p>");
	}());
});