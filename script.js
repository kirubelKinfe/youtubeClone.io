let menuIcon = document.querySelector('.menu-icon');
let sidebar = document.querySelector('.sidebar');


menuIcon.onclick = function() {
  sidebar.classList.toggle("small-sidebar");
}




const videos = [{
  title: 'ማለዳ | Maleda (Official Music Video)',
  author: 'Kassmasse ካሥማሠ',
  status: "1,887,633 views Premiered Jan 15, 2021",
  id: 'id1'
  },
  {
    title: 'ES6 Tutorial: Learn Modern JavaScript in 1 Hour',
    author: 'Programming with Mosh',
    status: "690k views 3 years ago",
    id: 'id2'
  },
  {
    title: 'Junior Vs Senior Code - How To Write Better Code',
    author: 'Web Dev Simplified',
    status: "1M views 2 years ago",
    id: 'id3'
  }];
    
console.log(videos[0].title)

    //View
    function render() {
      document.querySelector(".video-grid").innerText = "";
      videos.forEach(video => {
        const element = document.createElement('div');
        element.classList = 'video-preview';

        element.innerHTML = `<a id="vd3" href="playVideo.html"><img src="thumbnails/thumbnail-7.webp" class="thumbnail"></a>
      <div class="video">
        <img src="channel-pictures/channels4_profile.jpg" alt="" class="channel-icon">
        <div id="video-details" class="video-details">
          <a id="vd3" href="playVideo.html">
            <div class="video-title">${video.title}</div>
          </a>
          <div class="video-author">${video.author}</div>
          <div class="video-status">${video.status}</div>
        </div>
      </div>`;

        document.querySelector(".video-grid").appendChild(element);
      });
    }

    render();