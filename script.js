// Called automatically by the player_api script tag in index.html
function onYouTubePlayerAPIReady() {
    youtube = new YT.Player('player', {
        videoId: 'PwMVQZQm9a4',
        playerVars: {
            controls: 0 // Hide all controls
        },
        events: {
            onReady: on_player_ready,
            onStateChange: on_player_state_change
        }
    })
}

// Called when the player is ready to start
function on_player_ready() {
    youtube.mute()
    youtube.playVideo()
}

// Called when the player state changes
function on_player_state_change(state) {
    switch (state.data) {
    case YT.PlayerState.PLAYING:
        player.style.opacity = 1
        break
    case YT.PlayerState.ENDED:
        player.style.opacity = 0
        // Scroll down to the About section when the video finishes
        if (document.body.scrollTop === 0) {          
            scroll_to('about')
        }
        break
    }
}

// Toggle showing the navigation links in compact width
function toggle_nav_links() {
    nav_links.classList.add('transition')
    nav_links.classList.toggle('selected')
    nav_menu_img.src = nav_links.classList.contains('selected') ? '/images/symbols/xmark.png' : '/images/symbols/line.3.horizontal.png'

    // Stop animating the navigation links
    setTimeout(function() {
        nav_links.classList.remove('transition')
    }, 350)
}

// Scroll to the given content section
function scroll_to(anchor) {
    document.getElementById(anchor).scrollIntoView()

    // Hide the navigation links if presented
    if (nav_links.classList.contains('selected')) {
        toggle_nav_links()
    }
}