let backgroung = document.getElementById('background');
let backtree = document.getElementById('backtree');
let ranakon = document.getElementById('ranakon');
document.addEventListener('DOMContentLoaded', () => {      //DOCUMENT
    const video = document.getElementById('video');
    
    
    video.muted = true;
    video.pause();
const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
    window.addEventListener('scroll', function () {                          //WINDOW
        const maxScroll = 1550; // Set the maximum scroll position

        if (window.scrollY > maxScroll) {
            window.scrollTo(0, maxScroll);
        }
        let value = this.window.scrollY;
        let v2=value;

////////////////////////////////////////////////////////////////////////
console.log(value);
let er=1095;

const scrollTop = v2-er;



// Calculate the corresponding video time based on the scroll position
const scrollPercentage = scrollTop / (scrollableHeight-er);
const videoTime = scrollPercentage * 1.62;
//
// Update the video currentTime
video.currentTime = videoTime;

// Ensure the video plays forward/backward based on scroll direction
//video.play();



/////////////////////////////////////////////////////////////////////////////////









        let val = this.window.scrollX;
        if (value < 295) {
            backgroung.style.top = value + 1 + 'px';
            ranakon.style.top = value + 6 + 'px';
            let x = ranakon.style.top = value + -6 + 'px';
            // console.log(x);
            
            let scrollHeight = document.body.scrollHeight - window.innerHeight;
            let scrollWidth = document.body.scrollWidth - window.innerWidth;
            let maxscroll = document.body.scrollHeight - window.innerHeight;
            //console.log(scrllpos/maxscroll);
            //console.log(x);
            //console.log(zoomfactoe/maxscroll);
            const scrollPosition = window.scrollY;
            const maxZoom = 2;// Maximum zoom level
            // Get the current scroll position
            // console.log(scrollPosition);
            const windowHeight = window.innerHeight; // Get the height of the viewport
            const maxScroll = document.documentElement.scrollHeight - windowHeight; // Calculate the maximum scrollable height
            // console.log(maxScroll);
            // Calculate the zoom level based on the scroll position
            let zoomLevel = 0;
            let z3 = 0;

            let zoom2 = 0;
            let bright = 0;
            if (scrollPosition < 295) {
                z3 = (.2 / 295) * scrollPosition + 1;
                bright = -(.2 / 295) * scrollPosition + 1;
                backgroung.style.filter = `brightness(${bright})`;
                zoomLevel = (0.3 * scrollPosition + 295) / 295;
                backgroung.style.left = value * 0.3 + 'px';
                zoom2 = (5 / 295) * scrollPosition + 1;
                // Adjust the value to control the zoom level
                ranakon.style.transform = `scale(${zoom2})`;
                backtree.style.transform = `scale(${zoomLevel})`;
                backgroung.style.transform = `scale(${z3})`;
            } else {
                bright = 0.2;
                backgroung.style.filter = `brightness(${bright})`;
                zoomLevel = 1.9898305084745763;
                ranakon.style.transform = `scale(${0})`;
                backtree.style.transform = `scale(${zoomLevel})`;
                backgroung.style.transform = `scale(${zoomLevel})`;


            }



            // console.log(zoomLevel);
            // Ensure the zoom level does not exceed the maximum zoom level}
            // Apply the zoom level to the image




            let opavity = 0;
            if (scrollPosition < 292) {
                opavity = -(scrollPosition - 295) / 295;
            }
            else {
                opavity = 0;
            }
            ranakon.style.opacity = opavity;
        }

    });
});