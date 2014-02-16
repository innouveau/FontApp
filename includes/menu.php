<?php
$a[1] = array ("index", "Home");
$a[2] = array ("why", "Why");
$a[3] = array ("explain", "Explain!");
$a[4] = array ("classification", "Classification");
$a[5] = array ("version", "Version 1.1");
$a[6] = array ("feedback", "Feedback");
?>

		<div id="fb-root"></div>
		<script>(function(d, s, id) {
		  var js, fjs = d.getElementsByTagName(s)[0];
		  if (d.getElementById(id)) return;
		  js = d.createElement(s); js.id = id;
		  js.src = "//connect.facebook.net/en_US/all.js#xfbml=1";
		  fjs.parentNode.insertBefore(js, fjs);
		}(document, 'script', 'facebook-jssdk'));</script>

		<div id="header" style="position:absolute; left:8px; top:8px;">
			<a href="index.php"><img id="logo-font-app" src="img/logo-font-app.png" border="0"></a>
		</div>
		
				
		<div id="menubar">
		<?php
		
		for ($i = 1; $i < 7; $i++) {
			if ($i == $page) {
				echo "<font class='current'>".$a[$i][1]."</font>";
			}
			else {
				echo "<a class='menu_link' href='".$a[$i][0].".php'>".$a[$i][1]."</a>";
			}
			if ($i < 6) {
				echo " &#183; ";
			}
		}
		?>
		</div>
		
		<div id="fb">
			<div class="fb-like" data-href="https://www.facebook.com/FontApp.org" data-layout="button_count" data-action="like" data-show-faces="true" data-share="true"></div>
			<a href="https://twitter.com/FontAppOrg" class="twitter-follow-button" data-show-count="false" data-show-screen-name="false">Follow @FontAppOrg</a><script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');</script>
			<a href="https://twitter.com/share" class="twitter-share-button" data-via="FontAppOrg" data-count="none">Tweet</a><script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');</script>
			<br>
		</div>