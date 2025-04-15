function logEvent(eventType, event) {
    const timestamp = new Date().toISOString();
    const eventObject = event.target.tagName.toLowerCase();
    console.log(`${timestamp}, ${eventType}, ${eventObject}`);
}

document.addEventListener('click', (event) => {
    logEvent('click', event);
});

window.addEventListener('load', () => {
    logEvent('view', { target: document.body });
});