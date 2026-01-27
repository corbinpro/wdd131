document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.querySelector('main.gallery');
    const viewer = document.querySelector('dialog.viewer');
    const viewerImage = viewer ? viewer.querySelector('img') : null;
    const closeButton = viewer ? viewer.querySelector('.close-viewer') : null;

    if (!gallery || !viewer || !viewerImage) {
        return;
    }

    const openViewer = (event) => {
        const trigger = event.target.closest('a, img');
        if (!trigger || !gallery.contains(trigger)) {
            return;
        }

        event.preventDefault();

        const img = trigger.tagName.toLowerCase() === 'img'
            ? trigger
            : trigger.querySelector('img');

        if (!img) {
            return;
        }

        const fullSrc = trigger.tagName.toLowerCase() === 'a'
            ? trigger.getAttribute('href')
            : img.getAttribute('src');

        viewerImage.src = fullSrc;
        viewerImage.alt = img.alt || 'Full-size image';
        viewer.showModal();
    };

    const closeViewer = () => viewer.close();

    gallery.addEventListener('click', openViewer);
    closeButton?.addEventListener('click', closeViewer);
    viewer.addEventListener('click', (event) => {
        if (event.target === viewer) {
            closeViewer();
        }
    });
});
