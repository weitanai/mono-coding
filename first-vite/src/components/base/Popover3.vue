
<template>
    <div ref="popperRef" class="my-popper-container" @click.stop>
        <transition name="my-drop">
            <div v-show="showPopper" class="slot-wrapper">
                <slot></slot>
            </div>
        </transition>
    </div>
</template>

<script>
import { createPopper } from '@popperjs/core';
// problem report
//   vue3 version:  father props ref dom can not update props dom value away null;
export default {
    props: {
        // 如果传value就是受控组件
        value: {
            type: Boolean,
            default: null,
        },
        // reference dom
        reference: {
            type: HTMLElement,
            default: null,
        },
        placement: {
            type: String,
            default: 'bottom-start'
        }
    },
    data() {
        return {
            localValue: null,
            showPopper: false,
            popperInstance: null,
            isRendering: false,
            queue: [],
        };
    },
    computed: {
        computedValue() {
            console.log('computed', this.value)
            if (this.value === null) {
                return this.localValue;
            }
            return this.value;
        },
    },
    watch: {
        computedValue(val) {
            if (val === false) {
                if (this.isRendering) {
                    this.queue.push('close');
                    return;
                }
                this.handleClose();
            } else if (val === true) {
                if (this.isRendering) {
                    this.queue.push('open');
                    return;
                }
                this.handleOpen();
            }
        },
        reference(val) {
            console.log('isEx', val, this);
            // 没传value非受控组件，根据参考元素交互展开收起浮层
            if (this.value === null && this.localValue === null) {
                // 点击元素展开/收起下拉
                const handler = () => {
                    console.log('not controll', val, '--')
                    this.localValue = !this.localValue;
                };
                val.addEventListener('click', handler);
                console.log('not controll', this)
                // this.$on('hook:beforeDestroy', () => {
                //     val.removeEventListener('click', handler);
                // });
                // 点击元素外面关闭下拉
                // const outsideHandler = (e) => {
                //     if (!val.contains(e.target) && this.localValue) {
                //         this.localValue = false;
                //     }
                // };
                document.addEventListener('click', this.outsideHandler);
            }
        },
        localValue(val) {
            if (!val) {
                document.removeEventListener('click', this.outsideHandler);
            }
        }
    },
    methods: {
        outsideHandler(e){
            if (!this.reference.contains(e.target) && this.localValue) {
                this.localValue = false;
            }
        },
        viewQueue() {
            if (!this.queue.length) {
                return;
            }
            const lastTask = this.queue[this.queue.length - 1];
            if (lastTask === 'close') {
                this.handleClose();
            } else if (lastTask === 'open') {
                this.handleOpen();
            }
            this.queue.splice(0);
        },
        handleClose() {
            if (this.popperInstance !== null) {
                this.isRendering = true;
                this.showPopper = false;
                setTimeout(() => {
                    if (this.popperInstance !== null) {
                        this.popperInstance.destroy();
                    }
                    this.popperInstance = null;
                    this.isRendering = false;
                    this.viewQueue();
                }, 220);
            }
        },
        handleOpen() {
            this.isRendering = true;
            this.showPopper = true;
            this.popperInstance = createPopper(this.reference, this.$refs.popperRef, {
                placement: this.placement,
                modifiers: [
                    {
                        name: 'offset',
                        options: {
                            offset: [0, 10],
                        },
                    },
                ],
                strategy: 'fixed',
            });
            setTimeout(() => {
                this.isRendering = false;
                this.viewQueue();
            }, 220);
        },
    },
};
</script>

<style lang="less" scoped>
.my-popper-container {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
    .slot-wrapper {
        transform-origin: top;
    }
    /* my-drop */
    .my-drop-enter-active {
        animation: transition-drop-in .2s ease-in-out;
    }
    .my-drop-leave-active {
        animation: transition-drop-in .1s ease-in-out reverse;
    }
    @keyframes transition-drop-in {
        0% {
            opacity: 0;
            transform: scaleY(0);
        }
        100% {
            opacity: 1;
            transform: scaleY(1);
        }
    }
}
</style>
