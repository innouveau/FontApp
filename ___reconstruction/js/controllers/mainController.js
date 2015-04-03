app.controller('mainController', function($scope, sharedScope) {
    $scope.shared = sharedScope.data;
    
    
    $scope.shared.page = 1;
    $scope.shared.text_1 = "The quick brown fox jumps over the lazy dog";
    $scope.shared.text_2 = "LOREM IPSUM DOLOR SIT";
    $scope.shared.text_3 = "Aut viam inveniam aut faciam ";
    $scope.shared.text_4 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in elit velit. Vivamus sit amet risus dictum, consequat tellus consequat, fringilla augue. Pellentesque placerat vel dui non venenatis. Integer interdum nisl hendrerit felis lobortis consequat. Vivamus a tempor velit. Morbi tellus purus, ullamcorper eget sodales a, tincidunt luctus dui. Curabitur at elit ligula.";
    $scope.shared.text_5 = "FontApp";
    $scope.shared.text_6 = "Say \"Hi!\" to info@fontapp.org";


            var found_font = { category: "01. Sans Serif", style: "Regular", id: 0, height: 0, file_name: "", correct_height: 0 };
            
            var this_field = 1;
            var textfield = new Array ();
            textfield[1] = { id: 0, size: 0, line: 0, align: "left", color: [0,0,0,100], focus: 0 }
            textfield[2] = { id: 138, size: 0, line: 50, align: "center", color: [0,0,0,100], focus: 0 }
            textfield[3] = { id: 23, size: 100, line: 30, align: "center", color: [0,0,0,100], focus: 0 }
            textfield[4] = { id: 901, size: 0, line: 75, align: "left", color: [0,0,0,100], focus: 0 }
            textfield[5] = { id: 294, size: 80, line: 60, align: "center", color: [0,0,0,100], focus: 0 }
            textfield[6] = { id: 683, size: 15, line: 70, align: "center", color: [0,40,30,0], focus: 0 }
            
            var properties = new Array (1, 1, 1, 1, 1, 1);  
            var top_items = new Array (1, 1, 1, 1, 1);
            var drops = new Array (0, 0, 0);
            var favorites = new Array();
            var colorbox = 0;
            var screen_width = 0;
            
            var this_mode = 0;
            var mode = new Array();
            mode[0] = { x: 0, y: 165, height: 300, width: 0, field: [1] };
            mode[1] = { x: 400, y: 8, height: 0, width: 0, field: [2,3,4] };
            mode[2] = { x: 400, y: 140, height: 240, width: 370, field: [5,6] };
            
            var old_font = new Array("Arial", "400", "Normal");
            

            ////////////////////////////////////////////////////////////////////
            // II. main functions
            
            function init() {
                close_top_item(1);
                close_top_item(2);
                close_top_item(3);
                deactivate(2);
                deactivate(4);
                deactivate(5);
                fill_initial_fields ();
                find_best_match(0);
                change_size();
                change_line_height ();
                set_align (1);
            }
            
            function fill_initial_fields () {
                for (i = 2; i < 7; i++) {
                    var id = textfield[i].id;
                    var height = correct_height (textfield[i].size, font[id][2]);
                    var line = (textfield[i].line + 50) * height / 100;
                    update_image (id, i)
                    document.getElementById("textfield_" + i).style.fontSize = height + "px";
                    document.getElementById("textfield_" + i).style.lineHeight =  line + "px";
                    document.getElementById("textfield_" + i).style.textAlign =  textfield[i].align;
                    var color = cmyk_to_rgb (textfield[i].color[0], textfield[i].color[1], textfield[i].color[2], textfield[i].color[3]);
                    document.getElementById("textfield_" + i).style.color =  "#" + color;
                }   
            }
            
            
            function find_best_match (q) {
                close_message ();
                if (q.id == "size_slider") {
                    change_size ();
                }
                if (q.id == "line_height_slider") {
                    change_line_height ();
                }
                if (q.id == "c" || q.id == "m" ||q.id == "y" ||q.id == "k") {
                    change_color ();
                }
                else {
                    var count_fonts = 0;
                    var difference_array = new Array();
                    for (var i = 1; i < font.length; i++) {
                        if (font[i][3] == found_font.category && found_font.style == font[i][10]) {
                            count_fonts++;
                            var difference = 0;
                            for (j = 1; j < 6; j++) {
                                if (properties[j] == 1) {
                                    var prop_focus = anti_normal (ExtractNumber (document.getElementById("slider_" + j).style.left));
                                    difference += Math.abs (font[i][j + 3] - prop_focus);
                                }
                            }
                            difference_array[i] = new Array (i, difference);
                        }
                    }
                    
                    difference_array.sort ( function (a, b) { return a[1] - b[1] } );
                    var q = difference_array[0][0];
                    make_text (q);
                    document.getElementById("nr_of_fonts").innerHTML = count_fonts + " fonts found";
                }
            }
            
            function anti_normal (x) {
                var y = x + 12 * Math.sin (x / 15.71);
                return y;
            }
            
            function make_text (id) {
                found_font.file_name = font[id][1];
                found_font.height = font[id][2];
                found_font.id = id;
                found_font.category = font[id][3];
                found_font.style = font[id][10];
                update_image (id, this_field);
                set_properties (id);
            }
            
            function update_image (id, field) {
                textfield[field].id = id;
                
                
                var font_family = font[id][0];
                var font_weight = font[id][9];
                if (font_weight == "Thin" || font_weight == "Hairline") { font_weight = "100"; }
                if (font_weight == "ExtraLight") { font_weight = 200; }
                if (font_weight == "Light") { font_weight = 300; }
                if (font_weight == "Regular") { font_weight = 400; }
                if (font_weight == "Medium") { font_weight = 500; }
                if (font_weight == "SemiBold") { font_weight = 600; }
                if (font_weight == "Bold") { font_weight = 700; }
                if (font_weight == "ExtraBold") { font_weight = 800; }
                if (font_weight == "Black") { font_weight = 900; }
                
                var font_style = font[id][10];
                if (font_style == "Regular") { font_style = "Normal"; }
                
                var new_font = new Array (font_family, font_weight, font_style);
                WebFont.load ({
                    google: { families: [new_font[0] + ":" + font_weight + font_style.toLowerCase()] },
                    loading: function() {
                        document.getElementById("textfield_" + field).style.fontFamily = old_font[0];
                        document.getElementById("textfield_" + field).style.fontWeight = old_font[1];
                        document.getElementById("textfield_" + field).style.fontStyle = old_font[2];
                     },
                     active: function() {
                        document.getElementById("textfield_" + field).style.fontFamily = new_font[0];
                        document.getElementById("textfield_" + field).style.fontWeight = new_font[1];
                        document.getElementById("textfield_" + field).style.fontStyle = new_font[2];
                        change_size ();
                        update_margin ();
                        old_font = new_font;
                     },
                     inactive: function() {
                        document.getElementById("textfield_" + field).style.fontFamily = old_font[0];
                        document.getElementById("textfield_" + field).style.fontWeight = old_font[1];
                        document.getElementById("textfield_" + field).style.fontStyle = old_font[2];
                     }
                     
                });

            }
            
            function update_margin () {
                // correct x-line for height correction
                var a = 0.5 * ExtractNumber (document.getElementById("size_slider").style.left) + 20;
                var b = a - found_font.correct_height;
                if (this_field == 1 ) { b += 70; }
                document.getElementById("textfield_" + this_field).style.marginTop = b + "px";
            }
            
            function count_fonts () {
                var count_fonts = 0;
                for (var i = 1; i < font.length; i++) {
                    if (font[i][3] == found_font.category && found_font.style == font[i][10]) {
                        count_fonts++;
                    }
                }
                document.getElementById("nr_of_fonts").innerHTML = count_fonts + " fonts found";
            }
            
            function set_properties (id) {
                var fontcategory = font[id][3];
                var fontstyle_temp;
                var name = font[id][0];
                var fontweight = font[id][9];
                var fontstyle = font[id][10];
                var link = font[id][11];
                if (fontstyle == "Regular") {
                    fontstyle_temp = "";
                }
                else {
                    fontstyle_temp = fontstyle;
                }
                document.getElementById("font_name").innerHTML = name + " <b> " + fontweight + " " + fontstyle_temp + "</b>";
                document.getElementById("favorite_font").innerHTML = "<a id='heart_img' onclick='add_favorite(" + id + ");' class='heart'><img src='img/heart1.png' border='0' onMouseOver='this.src=\"img/heart2.png\";' onMouseOut='this.src=\"img/heart1.png\";'></a>";
                document.getElementById("download_font").innerHTML = "<a id='download_img' href='" + link + "' target='_blank'><img src='img/download.png' border='0' onMouseOver='this.src=\"img/download2.png\";' onMouseOut='this.src=\"img/download.png\";'></a>";
                    
                find_related (id);
                
                // reset search field
                document.getElementById("search_field").value = "search for a font...";
                search_font();  
            }
            
            
            function set_slides (id) {
                for (j = 1; j < 6; j++) {
                    if (properties[j] == 1) {
                        document.getElementById("slider_" + j).style.left = font[id][j + 3] + "px";
                    }
                }
            }
            
            
            
            ////////////////////////////////////////////////////////////////////
            // III. editor functions
            
            
            function change_size () {
                var a = ExtractNumber (document.getElementById("size_slider").style.left);
                 if (this_field == 1) { a *= 2; }
                textfield[this_field].size = a;
                
                var height = correct_height (a, found_font.height);
                document.getElementById("textfield_" + this_field).style.fontSize = height + "px";
                change_line_height ()
            }
            
            
            function change_line_height () {
                var a = ExtractNumber (document.getElementById("size_slider").style.left);
                if (this_field == 1) { a *= 2; }
                var b = correct_height (a, found_font.height);
                var c = ExtractNumber (document.getElementById("line_height_slider").style.left);
                textfield[this_field].line = c;
                var d = (c + 50) * b / 100
                document.getElementById("textfield_" + this_field).style.lineHeight = d + "px";
            }
            
            function change_color () {
                var c = ExtractNumber (document.getElementById("c").style.left);
                var m = ExtractNumber (document.getElementById("m").style.left);
                var y = ExtractNumber (document.getElementById("y").style.left);
                var k = ExtractNumber (document.getElementById("k").style.left);
                textfield[this_field].color = [c, m, y, k];
                
                var color = cmyk_to_rgb (c, m, y, k);
                document.getElementById("textfield_" + this_field).style.color = "#" + color;
            }
            
            function cmyk_to_rgb (c, m, y, k) {
                c /= 100;
                m /= 100;
                y /= 100;
                k /= 100;
                var r = Math.round (255 * (1 - c) * (1 - k));
                var g = Math.round (255 * (1 - m) * (1 - k));
                var b = Math.round (255 * (1 - y) * (1 - k));
                    
                r = r.toString(16);
                g = g.toString(16);
                b = b.toString(16);
                
                if (r.length == 1) { r = "0" + r; }
                if (g.length == 1) { g = "0" + g; }
                if (b.length == 1) { b = "0" + b; }
                
                var color = r+g+b;
                return color;
            }
            
            function set_color_slides (field) {
                var c = textfield[field].color[0];
                var m = textfield[field].color[1];
                var y = textfield[field].color[2];
                var k = textfield[field].color[3];
                document.getElementById("c").style.left = c + "px";
                document.getElementById("m").style.left = m + "px";
                document.getElementById("y").style.left = y + "px";
                document.getElementById("k").style.left = k + "px";
            }
            
            function set_editor_slides (field) {
                var a = textfield[field].size;
                if (this_field == 1) { a /= 2; }
                document.getElementById("size_slider").style.left = a + "px";
                document.getElementById("line_height_slider").style.left = textfield[field].line + "px";
            }
            
            function text_align (side) {
                textfield[this_field].align = side;
                document.getElementById("textfield_" + this_field).style.textAlign = side;
                set_align (this_field);
            }
            
            function set_align (field) {
                var align = new Array ("left", "center", "right");
                var text = "";
                for (i = 0; i < 3; i++) {
                    var side = align[i];
                    if (textfield[field].align == side ) {
                        text += '<img src="img/align-' + side + '3.png" border="0">&nbsp;';                 
                    }
                    else {
                        text += '<a onclick="text_align(\'' + side + '\');"><img src="img/align-' + side + '1.png" border="0" onmouseover="this.src=\'img/align-' + side + '2.png\';"  onmouseout="this.src=\'img/align-' + side + '1.png\';"></a>&nbsp;';
                    }
                }
                document.getElementById("text_align").innerHTML = text;
            }
            
            
            function correct_height (wanted_height, original_height) {
                var height = Math.round ((wanted_height + 32) * 150 / original_height);
                found_font.correct_height = height;
                return height;
            }
                
                        
            function field_focus (q) {
                this_field = q;
                var id = textfield[q].id;
                textfield[q].focus = 1;
                document.getElementById("textfield_" + q).focus();
                set_properties(id);
                set_slides (id);
                set_editor_slides (q);
                set_align(q);
                set_color_slides (q);
                show_chosen_lines (q);
                change_fontcategory (font[id][3]);
                change_fontstyle (font[id][10]);
                count_fonts();
            }
            
            
            function show_focus_lines (q) {
                for (i = 2; i < 7; i++) {
                    document.getElementById("textcontainer_" + i).style.border = "1px solid #fff";
                    document.getElementById("handle_" + i).style.backgroundColor = "transparent";
                }
                if (q > 1) {
                    document.getElementById("textcontainer_" + q).style.outline = "0px";
                    document.getElementById("textcontainer_" + q).style.border = "1px solid #E6BE00";
                    document.getElementById("handle_" + q).style.backgroundColor = "#E6BE00";
                }

                if (q != this_field) {
                    document.getElementById("textcontainer_" + this_field).style.border = "1px dotted #6D6F71";
                }
            }
            
            function show_chosen_lines (q) {
                for (i = 2; i < 7; i++) {
                    document.getElementById("textcontainer_" + i).style.border = "1px solid #fff";
                }
                if (q > 1) {
                    document.getElementById("textcontainer_" + q).style.border = "1px dotted #6D6F71";
                }
            }
            
            
            ////////////////////////////////////////////////////////////////////
            // IV. left menu
            
            
            function change_fontcategory (i) {
                found_font.category = i;
                document.getElementById("selected_1").innerHTML = "<a id='a_selected_1' onclick='drop_out(1);'>" + i + "</a>";
                if (drops[1] == 1) {
                    drop_out(1);
                }
            }
            
            function change_fontstyle (i) {
                found_font.style = i;
                document.getElementById("selected_2").innerHTML = "<a id='a_selected_2' onclick='drop_out(2);'>" + i + "</a>";
                if (drops[2] == 1) {
                    drop_out(2);
                }
            }
            
            
            
            
            ////////////////////////////////////////////////////////////////////
            // V. top menu functions
            
            function view_mode (q) {
                this_mode = q;
                // move paper
                resize_paper ();
                reposition_paper ();
                
                // set button
                for (i = 0; i < 3; i++) {
                    document.getElementById("viewmode_" + i).className = "fav_and_rel"; 
                }
                document.getElementById("viewmode_" + q).className = "chosen_mode";
                
                // move menu
                if (q == 0) {
                    var a = "a";
                    var y = "560px";
                }
                if (q > 0) {
                    var a = "b";
                    var y = "145px";
                }
                document.getElementById("block_container").style.top = y;
                for (i = 1; i < 4; i++) {
                    document.getElementById("block_" + i).className = "block_" + a;
                }
                
                // set fields
                for (i = 1; i < 7; i++) {
                if (mode[this_mode].field.indexOf(i) != -1) {
                    document.getElementById("textcontainer_" + i).style.display = "block";
                }
                else {
                    document.getElementById("textcontainer_" + i).style.display = "none";
                }
                }
                // focus field
                this_field = mode[this_mode].field[0];
                document.getElementById("textfield_" + this_field).focus();
                field_focus (this_field);
                show_colorbox("hide");
            }
            
    
            function search_font (){
                var j = 0;
                var search = document.getElementById("search_field").value.toLowerCase();
                var text = "";
                var a = "";
                if (search.length > 0) {
                    for (var i = 1; i < font.length; i++) {
                        needle = font[i][0].toLowerCase();
                        if (needle.indexOf(search) > -1) {
                            if (j < 15) {
                                if (font[i][10] != "Regular") {
                                    a = " " + font[i][10];
                                }
                                else {
                                    a = "";
                                }
                                text += "<a onclick='change_one(" + i + ");' class='search'>" + font[i][0] +" " + font[i][9] + a + "</a>";
                            }
                            j++;
                        }
                    }
                }
                if (j > 14) {
                    text += "<br><font style='padding-left:16px;'>... and " + j + " more fonts</font><br><br>";
                }
                document.getElementById("search_results").innerHTML = text;
                if (text != "") {
                    document.getElementById("search_results").style.visibility = "visible";
                }
                else {
                    document.getElementById("search_results").style.visibility = "hidden";
                }
                
            }
            
            function find_related (id) {
                document.getElementById("top_item_3").innerHTML = "";
                var text = "";
                for (var i = 1; i < font.length; i++) {
                    if (font[id][0] == font[i][0] && id != i) {
                        var a = "";
                        if (font[i][10] != "Regular") {
                            a = " " + font[i][10];
                        }
                        text += "<a onclick='change_one(" + i + ");' class='fav_and_rel'>" + font[i][0] + " " + font[i][9] + a + "</a>";
                    }
                }
                if (text == "") {
                    document.getElementById("top_item_3").innerHTML = "<i>No related fonts</i>";
                }
                else {
                    document.getElementById("top_item_3").innerHTML = text;
                }
            }
            
            function add_favorite (id) {
                var l = favorites.length;
                var hit = 0;
                for (i = 0; i < l; i++) {
                    if (favorites[i] == id) {
                        hit = 1;
                    }
                }
                if (hit == 0) {
                    favorites[l] = id;
                    show_favorites ();
                    if (top_items[2] == 0) {
                        document.getElementById("label_small_2").style.background = "#fff";
                        setTimeout( function() {
                            document.getElementById("label_small_2").style.background = "#6D6F71";
                        },100);
                    }
                }
                else {
                    document.getElementById("message").style.visibility = "visible";
                    document.getElementById("message_txt").innerHTML = "Font already added. Check the Favourites tab at the right of your window.";
                }
            }
            
            function remove_favorite (i) {
                favorites[i] = "";
                show_favorites();
            }
            
            function show_favorites () {
                var text = "";  
                for (i = 0; i < favorites.length; i++) {
                    if (favorites[i] != "") {
                        var a = "";
                        if (font[favorites[i]][10]  != "Regular") {
                            a = " " + font[favorites[i]][10] ;
                        }
                        text += "<a onclick='change_one (" +  favorites[i] + ");' class='fav_and_rel'>" + font[favorites[i]][0] + " " + font[favorites[i]][9] + a + "</a>&nbsp;&nbsp;<a onclick='remove_favorite(" +  i + ");' class='close_fav'>x</a>";
                    }
                }
                document.getElementById("top_item_2").innerHTML = text;
            }
            
            
            function change_one (id) {
                make_text(id);
                set_slides(id);
                change_fontcategory (found_font.category);
                change_fontstyle (found_font.style);
                count_fonts();
            }
            

            
            ////////////////////////////////////////////////////////////////////
            // VI. Other functions
            
            function show_colorbox (a) {
                if (colorbox == 1 || a == "hide") {
                    document.getElementById("colorbox").style.display = "none";
                    document.getElementById("color_button").src = "img/color1.png";
                    colorbox = 0;
                }
                else {
                    document.getElementById("colorbox").style.display = "block";
                    document.getElementById("color_button").src = "img/color2.png";
                    colorbox = 1;

                }
            }
            
            function deactivate (q) {   
                if (properties[q] == 1) {
                    document.getElementById("parameter_" + q).className = "box_inactive";
                    properties[q] = 0;
                }
                else {
                    document.getElementById("parameter_" + q).className = "box";
                    properties[q] = 1;
                }
            }
            
            
            function close_message () { 
                document.getElementById("message").style.visibility = "hidden";
            }
            
            
            function close_top_item (i) {
                if (top_items[i] == 1) {
                    document.getElementById("close_top_" + i).innerHTML = "&#8592;";
                    document.getElementById("top_item_" + i).style.display = "none";
                    document.getElementById("cover_" + i).style.display = "none";
                    document.getElementById("label_" + i).style.left = "290px";
                    top_items[i] = 0; 
                }
                else {
                    document.getElementById("close_top_" + i).innerHTML = "X";
                    document.getElementById("top_item_" + i).style.display = "block";
                    document.getElementById("cover_" + i).style.display = "block";
                    document.getElementById("label_" + i).style.left = "0px";
                    top_items[i] = 1; 
                }
            }
            
            function drop_out (i) {
                if (drops[i] == 0) {
                    document.getElementById("list_" + i).style.display = "block";
                    document.getElementById("a_selected_" + i).style.backgroundImage = "url('img/arrow3.png')";
                    drops[i] = 1;
                }
                else {
                    document.getElementById("list_" + i).style.display = "none";
                    document.getElementById("a_selected_" + i).style.backgroundImage = "url('img/arrow.png')";
                    drops[i] = 0;
                }
            }
            
            function resize_paper () {
                document.getElementById("paper").style.height = mode[this_mode].height + "px";
                document.getElementById("paper").style.width = mode[this_mode].width + "px";
                
            }
            
            function reposition_paper () {
                document.getElementById("paper").style.left = mode[this_mode].x + "px";
                document.getElementById("paper").style.top = mode[this_mode].y + "px";
            }   

});
