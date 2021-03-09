<script>
    import {HsvPicker} from 'svelte-color-picker';
    import {boxes, currentBox} from 'store/index.js';
    import {updatePropertyOfItem} from 'store/store-tools.js';

    let isOpen = false;

    const select = (value) => {
        let color = `rgb(${value.detail.r},${value.detail.g},${value.detail.b})`;
        $boxes = updatePropertyOfItem($boxes, $currentBox, 'color', color);
    };

    const open = () => {
        isOpen = true;
    };

    const close = () => {
        isOpen = false;
    }
</script>


<div class="Color designer__row">
    <div class="designer__label">
        Color
    </div>
    <div class="designer__content">
        <div
            on:click={open}
            class="Color__swatch">
            <div
                style="background-color: {$currentBox ? $currentBox.color : '#ddd'}"
                class="Color__swatch-inner"></div>
        </div>
    </div>
    {#if isOpen}
    <div class="Color__popup">
        <div
            on:click={close}
            class="Color__close"/>
        <HsvPicker
            on:colorChange={select}
            startColor={currentBox ? currentBox.color : '#ddd'}/>
    </div>
    {/if}
</div>


<style type="text/scss">
    .Color {
        margin-bottom: 8px;
        position: relative;

        .Color__swatch {
            width: 24px;
            height: 34px;
            padding: 4px 0;
            cursor: pointer;
            border-bottom: 2px solid transparent;
            margin-top: 4px;

            .Color__swatch-inner {
                height: 100%;
                border-radius: 50%;
            }

            &:hover {
                border-bottom: 2px solid #6B6964;
            }
        }

        .Color__popup {
            position: absolute;
            left: -2px;
            top: -2px;
            z-index: 1;
            padding: 24px 8px 8px 8px;
            background: #fff;
            box-shadow: 4px 4px 8px rgba(0,0,0,0.2);

            .vc-chrome {
                box-shadow: none!important;
            }

            .Color__close {
                position: absolute;
                right: 4px;
                top: 6px;
                width: 12px;
                height: 12px;
                cursor: pointer;

                &:before, &:after {
                    position: absolute;
                    left: 6px;
                    top: 1px;
                    content: ' ';
                    height: 12px;
                    width: 2px;
                    background-color: #6B6964;
                }

                &:before {
                    transform: rotate(45deg);
                }

                &:after {
                    transform: rotate(-45deg);
                }
            }
        }
    }
</style>