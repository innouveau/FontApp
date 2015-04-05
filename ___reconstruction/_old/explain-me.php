<?php
$page = 2;
include ('includes/header.php');
?>
    </HEAD>

    <BODY><?php include ('includes/menu.php'); ?>
	
	<div id="content">
	<div id="classification">
	    <h1>1. Mode</h1>
	    In the upper menu you can can choose between a few different modes, which will change the size and orientation of your working sheet.<br>
	    If you just want to to see how a font looks, you stay in the <b>Specimen mode</b>.<br><br>
	    If you want to test a combination of fonts, you better use the <b>Poster mode</b> or <b>Business card</b> mode.<br>
	    In the following we will use Specimen mode for the explaination.<br><br><br><br>
	    
	    <h1>2. Font category and font style</h1>
	    In the first column you can choose your font category, e.g. "Sans serif". The results displayed will be only fonts of that category. If you need explaination, <a href="classification.php">read here more about classification</a>.<br><br>
	    After that, you choose if you want to show "regular" or "italic".
	    <br><br><img src="img/explain/explain01.png" border="1">
	    <br><br><img src="img/explain/explain02.png" border="1"><br><br><br><br>
	    
	    
	    <h1>3. Searching by adjusting the properties</h1>
	    In the second column you can tell something about the appearance of the font. If you are searching for a very bold, thick font, you drag the circle of "boldness" completely to the right. And the same of course for the other properties.
	    <br><br><img src="img/explain/explain03.png" border="1">
	    <br><br>
	    Probably the properties speak for itself, except the term "Ascender" might confuse some people. Ascender is the length of the sticks on letters like "h", "b", "d", etc.<br>
	    A serif is the thingy, sort of feet on the end of some letters, like "Times new Roman" has. Some don't have a serif at all - like "Arial" - we call these "Sans serif".
	    <br><br>
	    It is also possible to ignore one or more of the properties. By clicking on the square to the right of the dragbar, you can turn the property on or off (which will light up or down).
	    <br><br><img src="img/explain/explain04.png" border="1">
	    <br><br>
	    So for example if you are looking for a thick and narrow font (and you don't mind about the ascender size, etc.), you turn off "Serif-size", "Roundness" and "Ascender", you drag "Boldness" to the right and "Width" to the left.
	    <br><br><img src="img/explain/explain05.png" border="1"><br><br><br><br>
	    
	    
	    <h1>4. Result information</h1>
	    The name of the font that is matching your demands will be displayed in the third column.
	    <br><br>
	    <img src="img/explain/explain06.png" border="1">
	    <br><br>
	    By clicking the heart, you can put a font into your favorites list (see below).
	    <br><br>
	    By clicking the download button, you will be lead to the URL where you can buy the font or it download  for free, depending on the font.
	    <br><br>Finally you can do some styling like font size, line height, aligning and font color to your font.
	    <br><br>
	    <img src="img/explain/explain07.png" border="1">
	    <br><br><br><br>
		
		
	    <h1>5. Topmenu</h1>
	    On the right there is a topmenu with 4 items. You can hide these menu's if you don't need them, so there is more space for your output.<br><br>
	    <b>Mode</b><br>
	    Discussed in the first paragraph.<br><br>
	    
	    <b>Search</b><br>
	    You can type in part of the name of the font, a selection will appear. If you click a font, it will appear in the main text area.
	    <br><br>
	    <img src="img/explain/explain08.png" border="1">
	    <br><br>
	    
	    <b>Favorites</b><br>
	    Underneath it, there is a list of favored fonts. You can add a font to that list by clicking on the heart next to the font name.<br>
	    The purpose of this list is that you can pick a few fonts which you think you will like and compare them quickly by clicking on its name in the list.
	    <br><br>
	    <img src="img/explain/explain09.png" border="1">
	    <br><br>
	    
	    <b>Related</b><br>
	    Often designers are looking for a complete font family. A family which has several weights (e.g. light, normal and bold or even more) gives you a lot of opportunities when designing (think about headers, etc.).
	    Underneath the favoured list,
	    there is a box, which displays if there are any family members of the found font. You can also click on these to see how they look.
	    <br><br>
	    <img src="img/explain/explain10.png" border="1">
	    <br><br>

	    <br><br>
	</div>
	</div>
	
<?php
include ('includes/footer.php');
?>