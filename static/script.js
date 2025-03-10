// Load the YouTube Iframe API
function load_youtube_iframe_api() {
    player_script = document.createElement('script');
    player_script.src = "https://www.youtube.com/iframe_api";
    first_script = document.getElementsByTagName('script')[0];
    first_script.parentNode.insertBefore(player_script, first_script);
}

// Called automatically by player_script when it's ready
function onYouTubeIframeAPIReady() {
    console.log('YouTube Iframe API ready')
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
    console.log('YouTube player ready')
    youtube.mute()
    youtube.playVideo()
}

// Called when the player state changes
function on_player_state_change(state) {
    console.log('Player state changed to', state.data)
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
    nav_menu_img.src = nav_links.classList.contains('selected') ? '/static/images/symbols/xmark.png' : '/static/images/symbols/line.3.horizontal.png'

    // Stop animating the navigation links
    setTimeout(function() {
        nav_links.classList.remove('transition')
    }, 350)
}

// Scroll to the given content section
function scroll_to(anchor) {
    console.log('Scrolling to', anchor)
    document.getElementById(anchor).scrollIntoView()

    // Hide the navigation links if presented
    if (nav_links.classList.contains('selected')) {
        toggle_nav_links()
    }
}

// Load the committee members from the JSON file
async function load_committee() {
    response = await fetch('/static/data/committee.json')
    committee = await response.json()
    
    for (member of committee) {
        member_div = document.createElement('div')
        member_div.classList.add('content_item')

        image = document.createElement('img')
        image.classList.add('headshot')
        image.src = '/static/images/committee/24/' + member.image
        member_div.appendChild(image)

        info_div = document.createElement('div')
        name_title = document.createElement('h2')
        name_title.innerHTML = member.name
        info_div.appendChild(name_title)

        role = document.createElement('p')
        role.classList.add('committee_role')
        role.innerHTML = member.role
        info_div.appendChild(role)

        email = document.createElement('a')
        email.href = 'mailto:' + member.email
        email.innerHTML = member.email

        info_div.appendChild(email)
        member_div.appendChild(info_div)
        committee_grid.appendChild(member_div)
    }
}

// Load the shows from the JSON file
async function load_shows() {
    response = await fetch('/static/data/shows.json')
    shows = await response.json()
    
    for (show of shows.slice(0, 12)) {
        if (show.url) {
            show_div = document.createElement('a')
            show_div.href = show.url
            show_div.target = '_blank'
        } else {
            show_div = document.createElement('div')
        }
        show_div.classList.add('show')

        image = document.createElement('img')
        image.classList.add('show_img')
        image.src = '/static/images/shows/' + show.image
        show_div.appendChild(image)

        title = document.createElement('h4')
        title.classList.add('show_title')
        title.innerHTML = show.title
        show_div.appendChild(title)

        shows_grid.appendChild(show_div)
    }
}

// Load the page content
async function load_content() {
    await load_committee()
    await load_shows()
    // Scroll to the anchor now that the content is loaded
    document.location.hash = hash
}

load_content().then()
load_youtube_iframe_api()