
<template>
    <div ref="popperRef" class="my-popper-container" @click.stop>
        <transition name="my-drop">
            <div v-show="showPopper" class="slot-wrapper">
                <slot></slot>
            </div>
        </transition>
    </div>
</template>

<script setup>
import { createPopper } from '@popperjs/core';
import { ref, watch, onBeforeUnmount, defineProps, computed } from 'vue';

const props = defineProps({
    value: {
        type: Boolean,
        default: null,
    },
    reference: HTMLElement,
    placement: {
        type: String,
        default: 'bottom-start'
    }
});

const localValue = ref(null);
const showPopper = ref(false);
const popperInstance = ref(null);
const isRendering = ref(false);
const queue = ref([]);
const popperRef = ref();

const computedValue = computed(() => {
    console.log(props.value, '--------re computed')
    if (props.value === null) {
        return localValue;
    }
    return props.value;
});

watch(computedValue, (val) => {
    if (val === false) {
        if (isRendering.value) {
            queue.value.push('close');
            return;
        }
        handleClose();
    } else if (val === true) {
        if (isRendering.value) {
            queue.value.push('open');
            return;
        }
        handleOpen();
    }
});


watch(
    () => props.reference,
    (val) => {
        if (props.value === null && localValue.value === false) {
            console.log('click--here')
            const handler = () => {
                localValue.value = !localValue.value;
            };
            val.addEventListener('click', handler);
            document.addEventListener('click', outsideHandler);
            onBeforeUnmount(() => {
                val.removeEventListener('click', handler);
                document.removeEventListener('click', outsideHandler);
            });
        }
    }
);

watch(localValue, (val) => {
    if (!val) {
        document.removeEventListener('click', outsideHandler);
    }
});

function outsideHandler(e) {
    if (!props.reference.contains(e.target) && localValue.value) {
        localValue.value = false;
    }
}

function viewQueue() {
    if (!queue.value.length) {
        return;
    }
    const lastTask = queue.value[queue.value.length - 1];
    if (lastTask === 'close') {
        handleClose();
    } else if (lastTask === 'open') {
        handleOpen();
    }
    queue.value.splice(0);
}

function handleClose() {
    if (popperInstance.value !== null) {
        isRendering.value = true;
        showPopper.value = false;
        setTimeout(() => {
            if (popperInstance.value !== null) {
                popperInstance.value.destroy();
            }
            popperInstance.value = null;
            isRendering.value = false;
            viewQueue();
        }, 220);
    }
}

function handleOpen() {
    isRendering.value = true;
    showPopper.value = true;
    popperInstance.value = createPopper(props.reference, popperRef, {
        placement: props.placement,
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
        isRendering.value = false;
        viewQueue();
    }, 220);
}

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
