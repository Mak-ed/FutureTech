const rootSelector = '[data-js-video-player]'

class videoPlayer {
    selectors = {
        root: rootSelector,
        video: '[data-js-video-player-video]',
        panel: '[data-js-video-player-panel]',
        playButton: '[data-js-video-player-play-button]',
    }

    stateClasses = {
        isActive: 'is-active',
    }
 
    constructor(rootElement) {
        this.rootElement = rootElement
        this.videoElement = this.rootElement.querySelector(this.selectors.video)
        this.panelElement = this.rootElement.querySelector(this.selectors.panel)
        this.playButtonElement = this.rootElement.querySelector(this.selectors.playButton)
        this.bindEvents()
    }

    onPlayButtunClick = () => {
        this.videoElement.play()
        this.videoElement.controls = true
        this.panelElement.classList.remove(this.stateClasses.isActive)
    }

    onVideoPause = () => {
        this.videoElement.controls = false
        this.panelElement.classList.add(this.stateClasses.isActive)
    }

    bindEvents() {
        this.playButtonElement.addEventListener('click', this.onPlayButtunClick)
        this.videoElement.addEventListener('pause', this.onVideoPause)
    }
}

class videoPlayerCollection {
    constructor() {
        this.init();
    }

    init() {
        document.querySelectorAll(rootSelector).forEach((element) => {
            new videoPlayer(element);
        });
    }
}

export default videoPlayerCollection