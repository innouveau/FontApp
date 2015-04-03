<?php
include ('../includes/connect.php');
$fontcategory_num = array ();
$j = 0;
$sql_string_2 = "SELECT FONTCATEGORY, COUNT(*) AS fontcategory_num FROM fontapp WHERE FILENAME != '' GROUP BY FONTCATEGORY";
$sql_2 = mysql_query($sql_string_2 );
while ($row = mysql_fetch_array($sql_2)) {	
	$fontcategory_num[$j] = $row['FONTCATEGORY'];
	//echo "			fontcategory_num[$j] = new Array ('$row[FONTCATEGORY]' , $row[fontcategory_num]);\n";
	$j++;
}
//echo "			var categories = ".$j.";\n";

// 02. setting all values to a number between 0 and 100
$p = 0;
$query = "SELECT
MAX(BOLDNESS) as boldness_high, MIN(BOLDNESS) as boldness_low,
MAX(SERIF) as serif_high, MIN(SERIF) as serif_low,
MAX(WIDTH) as width_high, MIN(WIDTH) as width_low,
MAX(ROUNDNESS) as roundness_high, MIN(ROUNDNESS) as roundness_low,
MAX(ASCENDER) as ascender_high, MIN(ASCENDER) as ascender_low
FROM fontapp
WHERE FONTCATEGORY != '' GROUP BY `FONTCATEGORY`";
$result = mysql_query($query) or die(mysql_error());
while ($row = mysql_fetch_array($result)){
	$boldness_high[$p] = $row['boldness_high'];
	$boldness_low[$p] = $row['boldness_low'];
	$serif_high[$p] = $row['serif_high'];
	$serif_low[$p] = $row['serif_low'];
	$width_high[$p] = $row['width_high'];
	$width_low[$p] = $row['width_low'];
	$roundness_high[$p] = $row['roundness_high'];
	$roundness_low[$p] = $row['roundness_low'];
	$ascender_high[$p] = $row['ascender_high'];
	$ascender_low[$p] = $row['ascender_low'];
	$p++;
}
echo "			font[0] = new Array ('...', '-', 0, '-', 50, 50, 50, 50, 50, '-', '-', '-');<br>\n";
// 03. make array of fonts
$i = 1;
$sql_string = "SELECT * FROM fontapp WHERE FILENAME != ''";
$sql = mysql_query($sql_string) or die ( mysql_error( ) );
while ($record = mysql_fetch_object($sql)){
	$fontclass = 0;
	for ($k = 0; $k < $j; $k++) {
		if ($record->FONTCATEGORY == $fontcategory_num[$k]) {
			$fontcategory = $k;
		}
	}
	$boldness = round ( ( $record->BOLDNESS - $boldness_low[$fontcategory] ) * 100 / ($boldness_high[$fontcategory] - $boldness_low[$fontcategory]) );
	$serif = round ( ( $record->SERIF - $serif_low[$fontcategory] ) * 100 / ($serif_high[$fontcategory] - $serif_low[$fontcategory]) );
	$width = round ( ( $record->WIDTH - $width_low[$fontcategory] ) * 100 / ($width_high[$fontcategory] - $width_low[$fontcategory]) );
	$roundness = round ( ( $record->ROUNDNESS - $roundness_low[$fontcategory] ) * 100 / ($roundness_high[$fontcategory] - $roundness_low[$fontcategory]) );
	$ascender = round ( ( $record->ASCENDER - $ascender_low[$fontcategory] ) * 100 / ($ascender_high[$fontcategory] - $ascender_low[$fontcategory]) );
	
	echo "			font[".$i."] = new Array ('".$record->FONTNAME."', '".$record->FOLDER."/".$record->FILENAME."', ".$record->HEIGHT.", '".$record->FONTCATEGORY."', ".$boldness.", ".$serif.", ".$width.", ".$roundness.", ".$ascender.", '".$record->FONTWEIGHT."', '".$record->FONTSTYLE."', '".$record->LINK."');<br>\n";
	$i++;
}
?>