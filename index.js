const wheel = document.querySelector('.wheel-container .wheel-inner')

const diameter = wheel.offsetHeight
const segmentCount = 11
const circumference = Math.PI * diameter;
const segmentHeight = circumference / segmentCount;
const radius = diameter / 2
const angle = 360 / segmentCount

for (let panelNum = 0; panelNum < segmentCount; panelNum++) {
    const wheelSegment = document.createElement('div')

    wheelSegment.classList.add('wheel-segment')
    wheelSegment.style.transform = `rotateX(${angle * panelNum}deg) translateZ(${radius}px)`
    wheelSegment.style.height = `${segmentHeight}px`
    wheelSegment.innerHTML = `<span>Item ${panelNum}</span>`

    wheel.appendChild(wheelSegment)
}

function rotateToPanel(panel) {
    wheel.style.transform = `rotateX(${-angle * panel}deg)`
}