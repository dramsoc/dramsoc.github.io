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

    // ***********************************************
    // on committee changeover - change variables below
    const year = "25"; // image locations
    // ***********************************************

    const response = await fetch('/static/data/committee.json')
    const committee = await response.json()
    
    for (member of committee) {
        let element = document.createElement("div");
        element.className = "content_item";
        element.innerHTML = `
            <div class="headshot">
                <svg viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
                </svg>
                <div class="headshot-image" style="background-image:url(/static/images/committee/24/sophie.jpg);"></div>
            </div>
            <div class="member_text">
                <h2>Committee Member</h2>
                <p class="committee_role">a role</p>

                <a href="mailto:no@dramsoc.org">no@dramsoc.org</a>
            </div>
        `;

        console.log("here");
        console.log(element.querySelector(".headshot-image"));

        // image
        element.querySelector(".headshot-image").style.backgroundImage = `url(/static/images/committee/${encodeURIComponent(year)}/${encodeURIComponent(member.image)})`;
        
        // name
        element.querySelector("h2").textContent = member.name;

        // role
        if (Array.isArray(member.role)) {
            let roleElement = element.querySelector(".committee_role");
            roleElement.textContent = "";

            member.role.forEach((x, i) => {
                let roleSpan = document.createElement("span");
                roleSpan.textContent = x;
                roleElement.append(roleSpan);

                if (i != member.role.length - 1) {
                    let dividerSpan = document.createElement("span");
                    dividerSpan.style.opacity = 0.6;
                    dividerSpan.textContent = " / ";
                    roleElement.append(dividerSpan);
                }
            });
        } else element.querySelector(".committee_role").textContent = member.role;

        // email
        if (Array.isArray(member.email)) {
            let emailElement = element.querySelector("a");
            let emailParent = emailElement.parentElement;
            emailElement.remove();

            member.email.forEach((x, i, a) => {
                emailElement = document.createElement("a");
                emailElement.href = `mailto:${x}`;
                emailElement.textContent = x;

                emailParent.append(emailElement);

                if (i != a.length - 1) {
                    emailElement.style.lineHeight = "24px";
                    let breakElement = document.createElement("br");
                    emailParent.append(breakElement);
                }
            })
        } else {
            let a = element.querySelector("a");
            a.href = `mailto:${member.email}`;
            a.textContent = member.email;
        }

        // info_div.appendChild(email)
        // member_div.appendChild(info_div)
        committee_grid.appendChild(element);
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