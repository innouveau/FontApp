<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<HTML>
	<HEAD>
		<TITLE>Graphmaker FontApp</TITLE>
		

		<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
		<link rel="stylesheet" type="text/css" media="all" href="css/styles.css">
		<link href='http://fonts.googleapis.com/css?family=Roboto+Condensed:400,300italic,700,700italic,400italic,300' rel='stylesheet' type='text/css'>
		<link rel='stylesheet' type='text/css' href='http://fonts.googleapis.com/css?family=Dosis:200,400,700,800'>
		<!-- jquery -->
		<link rel="stylesheet" href="http://code.jquery.com/ui/1.10.4/themes/smoothness/jquery-ui.css">
		<script src="http://code.jquery.com/jquery-1.7.2.min.js"></script>
		<script src="http://code.jquery.com/ui/1.8.21/jquery-ui.min.js"></script>
		<!-- database -->
		<script type="text/JavaScript" src="js/fonts.js"></script>
		
		<script language="javascript">
			var x = 6;
			var y = 2;
			var z = 3;
			var end = <? $end = 400; echo $end ?>;
			
			function init () {
				for (i = 0; i < end; i++) {
					var color;
					var this_color = font[i][0];
					if (this_color == "01. Sans Serif") { color = "red"; }
					else if (this_color == "02. Serif") { color = "blue"; }
					else if (this_color == "03. Slab Serif") { color = "green"; }
					else if (this_color == "04. Monospace") { color = "yellow"; }
					else if (this_color == "05. Script") { color = "orange"; }
					else if (this_color == "06. Fun") { color = "purple"; }
					else if (this_color == "07. All Caps") { color = "grey"; }
					
					document.getElementById("self_" + i).className = "dot self " + color;
					document.getElementById("mirror_" + i).className = "dot mirror " + color;
				}
				
				redraw ();
			}
			
			function redraw () {
				for (i = 0; i < end; i++) {
					var this_x, this_y, this_z;
					
					if (x == 0) { this_x = 300; }
					else { this_x = 6 * font[i][x]; }
					if (y == 0) { this_y = 300; }
					else { this_y = 6 * font[i][y]; }
					if (z == 0) { this_z = 0; }
					else { this_z = 300 - 6 * font[i][z]; }
					document.getElementById("self_" + i).style.MozTransform = "translateX(" + this_x + "px) translateY(" + this_y + "px) translateZ(" + this_z + "px)";
					document.getElementById("mirror_" + i).style.MozTransform = "translateX(" + (this_x - 5) + "px) translateY(" + this_y + "px) translateZ(" + (this_z - 5) + "px) rotateY(-270deg)";
					
					document.getElementById("self_" + i).style.WebkitTransform = "translateX(" + this_x + "px) translateY(" + this_y + "px) translateZ(" + this_z + "px)";
					document.getElementById("mirror_" + i).style.WebkitTransform = "translateX(" + (this_x - 5) + "px) translateY(" + this_y + "px) translateZ(" + (this_z - 5) + "px) rotateY(-270deg)";
					
					document.getElementById("self_" + i).style.MsTransform = "translateX(" + this_x + "px) translateY(" + this_y + "px) translateZ(" + this_z + "px)";
					document.getElementById("mirror_" + i).style.MsTransform = "translateX(" + (this_x - 5) + "px) translateY(" + this_y + "px) translateZ(" + (this_z - 5) + "px) rotateY(-270deg)";
					
					document.getElementById("self_" + i).style.transform = "translateX(" + this_x + "px) translateY(" + this_y + "px) translateZ(" + this_z + "px)";
					document.getElementById("mirror_" + i).style.transform = "translateX(" + (this_x - 5) + "px) translateY(" + this_y + "px) translateZ(" + (this_z - 5) + "px) rotateY(-270deg)";
				}
			}
			
			function set_property () {
				x = document.getElementById("property_x").value;
				y = document.getElementById("property_y").value;
				z = document.getElementById("property_z").value;
				redraw();
			}
			
			function rotate () {
				var deg = $("#slider_1").slider("value");
				document.getElementById("cube").style.MozTransform = "rotateY(" + deg + "deg)";
				document.getElementById("cube").style.WebkitTransform = "rotateY(" + deg + "deg)";
				document.getElementById("cube").style.MsTransform = "rotateY(" + deg + "deg)";
				document.getElementById("cube").style.transform = "rotateY(" + deg + "deg)";
			}
		</script>
		
		<script type="text/javascript">
		
		$(function() {
			$('#slider_1').slider({
				max: 360, value: 0, slide: rotate, change: rotate
			});
		});
	</script>
		
	</HEAD>
	
	<body onload="init();">
		
		<div id='legenda'>
			<div class='red small'>&nbsp;</div> <div class='text'>Sans Serif</div>
			<div class='blue small'>&nbsp;</div> <div class='text'>Serif</div>
			<div class='green small'>&nbsp;</div> <div class='text'>Slab Serif</div>
			<div class='yellow small'>&nbsp;</div> <div class='text'>Monospace</div>
			<div class='orange small'>&nbsp;</div> <div class='text'>Script</div>
			<div class='purple small'>&nbsp;</div> <div class='text'>Fun</div>
			<div class='grey small'>&nbsp;</div> <div class='text'>All Caps</div>
		</div>
		
		<div id='properties'>
			<select onchange="set_property();" id="property_x">
				<option value="0">-</option>
				<option value="1">Height</option>
				<option value="2">Boldness</option>
				<option value="3">Serif</option>
				<option value="4">Roundness</option>
				<option value="5">Width</option>
				<option value="6" selected="selected">Ascender</option>
			</select> x<br>
			<select onchange="set_property();" id="property_y">
				<option value="0">-</option>
				<option value="1">Height</option>
				<option value="2" selected="selected">Boldness</option>
				<option value="3">Serif</option>
				<option value="4">Roundness</option>
				<option value="5">Width</option>
				<option value="6">Ascender</option>
			</select> y<br>
			<select onchange="set_property();" id="property_z">
				<option value="0">-</option>
				<option value="1">Height</option>
				<option value="2">Boldness</option>
				<option value="3" selected="selected">Serif</option>
				<option value="4">Roundness</option>
				<option value="5">Width</option>
				<option value="6">Ascender</option>
			</select> z
			<br><br>
			<div id="slider_1" class="slider"></div>
		</div>
		
		<div id="holder">
			<div class="wrap">
				<div id="cube" class="cube">
					
					<div class="back side"><img src="images/2.png"></div>
					<div class="top side"></div>
					<div class="bottom side"></div>
					<div class="left side"><img src="images/4.png"></div>
					<div class="right side"><img src="images/3.png"></div>
					<div class="front side"><img src="images/1.png"></div>
				<?php
				for ($i = 0; $i < $end; $i++) {			
					echo "<div id='self_".$i."'>&nbsp;</div>";
					echo "<div id='mirror_".$i."'>&nbsp;</div>\n";
				}
				?>
				
				</div>
			</div>
		</div>
	</body>
</HTML>
