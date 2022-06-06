// Switch Page
$(document).ready(function(){
	$('[data-toggle="tooltip"]').tooltip(); 
	$(".navbar a, footer a[href='#accueil']").on('click', function(event) {
	event.preventDefault();
	var hash = this.hash;
		$('html, body').animate({
		scrollTop: $(hash).offset().top
		}, 900, function(){
		window.location.hash = hash;
		});
	});
})


// Sunburst-Chart CV
const data ={name: "Informatique",color:"white",children: [	
					{name: "Programmation",color:"#919191",children: [
						{name: "BDD",color:"#919191",children: [
							{name: "SQL",color:"#919191",size:1.5}
						]},
						{name: "Application",color:"#919191",children: [
							{name: "Java",color:"#919191",size:1},{name: "Python",color:"#919191",size:1.5},{name: "VB",color:"#919191",size:1},{name: "C++",color:"#919191",size:1},{name: "Swift",color:"#919191",size:1}
						]},
						{name: "Web",color:"#919191",children: [
							{name: "PHP",color:"#919191",size:1}, {name: "JS",color:"#919191",size:1},{name: "CSS",color:"#919191",size:1},{name: "HTML",color:"#919191",size:1.25},
							/*{name: "API",color:"#919191",size:1},
							{name: "CMS",color:"#919191",children: [
								{name: "WordPress",color:"#919191",size:1}, {name: "Joomla!",color:"#919191",size:1}, {name: "Drupal",color:"#919191",size:1}
							]},
							{name: "Frameworks",color:"#919191",children: [
								{name: "Symfony",color:"#919191",size:1}, {name: "django",color:"#919191",size:1},{name: "Angular",color:"#919191",size:1}, {name: "jQuery",color:"#919191",size:1}, {name: "Bootstrap",color:"#919191",size:1}
							]}*/
						]}
					]},
					{name: "Réseau",color:"#2A70AB",children: [
						{name: "Connectivité",color:"#2A70AB",children: [
							{name: "VDI",color:"#2A70AB",size:1}, {name: "Fibre",color:"#2A70AB",size:1.5}, {name: "LAN",color:"#2A70AB",size:1},
						]},
						{name: "Matériel",color:"#2A70AB",children: [
							{name: "HPE",color:"#2A70AB",size:1}, {name: "Cisco",color:"#2A70AB",size:1},{name: "Juniper",color:"#2A70AB",size:1.5}
						]},
					]},
					 {name: "Système",color:"#60A2DF",children: [
						{name: "Linux",color:"#60A2DF",children: [
							{name: "Bash",color:"#60A2DF",size:1}, /*{name: "systemd",color:"#60A2DF",size:1},*/ {name: "Syslinux",color:"#60A2DF",size:2}
						]},
						{name: "Windows",color:"#60A2DF",children: [
							{name: "AD",color:"#60A2DF",size:1}, {name: "PowerShell",color:"#60A2DF",size:2}
						]}												
					 ]}
			 ]};
//English Version : System | Network | Programming, Hardware, Connectivity, Database
Sunburst()
  .data(data)
  .size("size")
  .color("color")
  .excludeRoot(true)
  .width(350)
  .height(350)
  .maxLevels(3)	
  .radiusScaleExponent(1)
  .labelOrientation("angular") //angular, radial or auto
  (document.getElementById("sunburst-chart"));
  
  
// Screenshot PDF CV
  var takeScreenShot = function() {
    html2canvas(document.getElementById("cv"), {
        onrendered: function (canvas) {
            var tempcanvas=document.createElement('canvas');
			tempcanvas.width=1240;
            tempcanvas.height=1754;
            var context=tempcanvas.getContext('2d');
			context.drawImage(canvas,350,40,1220,1760,0,0,1240,1754);	//Affichage en 1920*1080 GChrome
			//context.drawImage(canvas,425,15,1080,1610,0,0,1240,1754); //Affichage en 1920*1080 MEDGE			
			//drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
            var link=document.createElement("a");
            link.href=tempcanvas.toDataURL('image/png');   //function blocks CORS
        var imgData = link.href
		var doc = new jsPDF();
		doc.addImage(imgData, 'JPEG', 0, 0, 210, 300)

    doc.save('CV_CUNAT-BRULE_Christian.pdf');
	
		}
    });
}