<script>
    import {getBestMatch, currentBox} from 'store/index.js'

</script>


<div class="BestMatch">
    {$getBestMatch.title}
</div>

{$currentBox ? $currentBox.string : '-'}


<style type="text/scss">
    .BestMatch {

    }
</style>