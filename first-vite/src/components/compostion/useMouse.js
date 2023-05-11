import { ref, reactive, onMounted, onUnmounted, toRefs } from 'vue'

export default function useMouse() {
    const point = reactive({ x: 0, y: 0 });

    function update(event) {
        point.x = event.pageX
        point.y = event.pageY
    }
    onMounted(() => window.addEventListener('mousemove', update))
    onUnmounted(() => window.removeEventListener('mousemove', update))
    return point;
}



function getAsyncData(url) {
    const data = fetch(url, {
    })
        .then(response => response.json())
        .then(data => {
            const starCount = data.length;
            console.log(`${username} has ${starCount} stars on GitHub.`);
        })
        .catch(error => console.error(error));
    return toRefs(data);
}