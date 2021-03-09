<script>
    import {boxes, currentBox_id, maxZIndex} from 'store/index.js';
    import {addToStore} from 'store/store-tools.js';
    import Box from './../../../../../../shared/classes/Box.js';


    const onClick = () => {
        const url = "http://www.randomtext.me/api/";
        fetch(url)
                .then(response => response.json())
                .then(result => {
                    let words, string;
                    words = result.text_out.split(' ');
                    string = [words[2], words[3], words[4], words[5], words[6]].join(' ');
                    string = string[0].toUpperCase() + string.substr(1, string.length - 1);
                    createBox(string);
                });
    };

    const createBox = (string) => {
        let data, id;
        id = $boxes.length + 1;
        data = {id, left: 100, top: 70, width: 300, height: 200, string, font_id: 294, zIndex: $maxZIndex};
        $boxes = addToStore($boxes, new Box(data));
        currentBox_id.set(id);
    }
</script>


<div
    on:click={onClick}
    class="AddBox button">
    Add text element
</div>


<style type="text/scss">
    .AddBox {

    }
</style>