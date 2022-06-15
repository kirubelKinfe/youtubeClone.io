let menuIcon = document.querySelector('.menu-icon');
let sidebar = document.querySelector('.sidebar');


menuIcon.onclick = function() {
  sidebar.classList.toggle("small-sidebar");
}




const videos = [
  {
    thumbnail: "thumbnails/thumbnail-1.webp",
    channelIcon: "channel-pictures/channel-1.jpg",
    title: "Learn Pointer Events In 15 Minuts",
    author: "Web Dev Simplified",
    status: "65k views 2 weeks ago",
    id: "id1",
  },
  {
    thumbnail: "thumbnails/thumbnail-2.webp",
    channelIcon: "channel-pictures/channel-2.jpg",
    title: "ES6 Tutorial: Learn Modern JavaScript in 1 Hour",
    author: "Programming with Mosh",
    status: "690k views 3 years ago",
    id: "id2",
  },
  {
    thumbnail: "thumbnails/thumbnail-3.webp",
    channelIcon: "channel-pictures/channel-3.jpg",
    title: "ማለዳ | Maleda (Official Music Video)",
    author: "Kassmasse ካሥማሠ",
    status: "1,887,633 views Premiered Jan 15, 2021",
    id: "id3",
  },
  {
    thumbnail: "thumbnails/thumbnail-4.webp",
    channelIcon: "channel-pictures/channel-2.jpg",
    title: "5 Front-end Development Skills to Land Your First Job",
    author: "Programming with Mosh",
    status: "1M views 1 year ago",
    id: "id4",
  },
  {
    thumbnail: "thumbnails/thumbnail-6.webp",
    channelIcon: "channel-pictures/channel-4.jpg",
    title: "ሮፍናን - ተስፋ | ROPHNAN - TESFA (Official Lyric Video)",
    author: "Rophnan",
    status: "746k views 5 months ago",
    id: "id5",
  },
  {
    thumbnail: "thumbnails/thumbnail-5.webp",
    channelIcon: "channel-pictures/channel-1.jpg",
    title: "How To Create A Navbar In React With Routing",
    author: "Web Dev Simplified",
    status: "34k views 3 weeks ago",
    id: "id6",
  },
  {
    thumbnail: "thumbnails/thumbnail-7.webp",
    channelIcon: "channel-pictures/channel-4.jpg",
    title: "ሮፍናን - ተስፋ | ROPHNAN - TESFA (Official Lyric Video)",
    author: "Rophnan",
    status: "2.9M views 1 year ago",
    id: "id5",
  },
  {
    thumbnail: "thumbnails/thumbnail-8.webp",
    channelIcon: "channel-pictures/channel-5.jpg",
    title: "TEDDY AFRO | NEW dvd HD Abugida",
    author: "Teddy Afro",
    status: "293k views 3 year ago",
    id: "id5",
  },

  {
    thumbnail: "thumbnails/thumbnail-1.webp",
    channelIcon: "channel-pictures/channel-1.jpg",
    title: "Learn Pointer Events In 15 Minuts",
    author: "Web Dev Simplified",
    status: "65k views 2 weeks ago",
    id: "id1",
  },
  {
    thumbnail: "thumbnails/thumbnail-2.webp",
    channelIcon: "channel-pictures/channel-2.jpg",
    title: "ES6 Tutorial: Learn Modern JavaScript in 1 Hour",
    author: "Programming with Mosh",
    status: "690k views 3 years ago",
    id: "id2",
  },
  {
    thumbnail: "thumbnails/thumbnail-3.webp",
    channelIcon: "channel-pictures/channel-3.jpg",
    title: "ማለዳ | Maleda (Official Music Video)",
    author: "Kassmasse ካሥማሠ",
    status: "1,887,633 views Premiered Jan 15, 2021",
    id: "id3",
  },
  {
    thumbnail: "thumbnails/thumbnail-4.webp",
    channelIcon: "channel-pictures/channel-2.jpg",
    title: "5 Front-end Development Skills to Land Your First Job",
    author: "Programming with Mosh",
    status: "1M views 1 year ago",
    id: "id4",
  },
  {
    thumbnail: "thumbnails/thumbnail-6.webp",
    channelIcon: "channel-pictures/channel-4.jpg",
    title: "ሮፍናን - ተስፋ | ROPHNAN - TESFA (Official Lyric Video)",
    author: "Rophnan",
    status: "746k views 5 months ago",
    id: "id5",
  },
  {
    thumbnail: "thumbnails/thumbnail-5.webp",
    channelIcon: "channel-pictures/channel-1.jpg",
    title: "How To Create A Navbar In React With Routing",
    author: "Web Dev Simplified",
    status: "34k views 3 weeks ago",
    id: "id6",
  },
  {
    thumbnail: "thumbnails/thumbnail-7.webp",
    channelIcon: "channel-pictures/channel-4.jpg",
    title: "ሮፍናን - ተስፋ | ROPHNAN - TESFA (Official Lyric Video)",
    author: "Rophnan",
    status: "2.9M views 1 year ago",
    id: "id5",
  },
  {
    thumbnail: "thumbnails/thumbnail-8.webp",
    channelIcon: "channel-pictures/channel-5.jpg",
    title: "TEDDY AFRO | NEW dvd HD Abugida",
    author: "Teddy Afro",
    status: "293k views 3 year ago",
    id: "id5",
  },
];
    


    //View
    function render() {
      document.querySelector(".video-grid").innerText = "";
      videos.forEach(video => {
        const element = document.createElement('div');
        element.classList = 'video-preview';

        element.innerHTML = `<a id="vd3" href="playVideo.html"><img src="${video.thumbnail}" class="thumbnail"></a>
      <div class="video">
        <img src="${video.channelIcon}" alt="" class="channel-icon">
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