<template>

  <div id="app">
    <div class="relative font-no2roman">
      
      <div class="sticky top-0 z-50">
        <div class="grid"><img src="/gfx/logo-heart-w.png" class="m-8 justify-self-end max-h-40"></div>
      </div>
      
      <section class="text-3xl uppercase intro-section ">
        <h1 class="text-6xl font-bold tracking-widest uppercase text-lsf-red font-no2roman">Lovestream Festival</h1>
        <p class="intro-heading"><img src="/gfx/logo-heart.png" class="logo"></p>
        <p class="text-black">12th of JUNE, 2022</p>
        <p class="text-black">Tehelne Pole Stadium, <span class="text-lsf-red">Bratislava</span></p>
      </section>

      <section class="content-section" data-scroll>
        <figure class="border-8 figure md:border-12 border-lsf-red">
          <img src="/img/RHCP.jpg" class="hidden sm:block" />
          <img src="/img/RHCP-p.jpg" class="block sm:hidden" />
        </figure>
        <div class="content">
          <header class="header">
              <p class="place-self-center"><img src="/img/RHCP-logo.png" class="pb-20 w-60" /></p>
              <h2 class="text-white border-b-8 border-lsf-red heading place-self-center">RED HOT CHILI PEPPERS</h2>
          </header>
        </div>
      </section>

      <section class="content-section" data-scroll>
        <figure class="border-8 border-black figure figurewhite md:border-12">
          <img src="/gfx/white.png" class="hidden sm:block" />
          <img src="/gfx/white.png" class="block sm:hidden" />
        </figure>
        <div class="content">
          <header class="header">
            <h2 class="text-black uppercase heading">MåNESKIN</h2>
            <p class="text-lsf-red paragraph">NO NAME, <span class="text-black">HORKYZE SLIZE,</span> INE CAFE</p>
            <p class="text-black paragraph">and many more!</p>
          </header>
        </div>
      </section>

      <section class="content-section" data-scroll>
        <figure class="border-8 border-white figure figureblank md:border-12">
          <img src="/gfx/black.png" class="hidden sm:block" />
          <img src="/gfx/black.png" class="block sm:hidden" />
        </figure>
        <div class="relative content">
          <header class="header">
            <h2 class="z-50 text-white uppercase heading">FOR TICKETS:<br><a href="https://predpredaj.zoznam.sk/en/tickets/lovestream-festival-2022-06-12/" target="_blank">WWW.PREDPREDAJ.SK</a></h2>
            <p class="text-white paragraph">a Silvi Production presentation by arrangement with Marcel Avram and Concerts East</p>
            
          </header>
          <a class="absolute text-gray-700 bottom-12 right-8" href="https://tarikkavaz.com" target="_blank">
            <svg
              viewBox="0 0 1856.41 1903.46"
              class="w-12 h-12 animate-wiggle"
              title="Logo"
            >
              <defs>
                <symbol id="a" viewBox="0 0 378.03 387.61">
                  <path
                    d="M43.19,325,2,230.24a24.09,24.09,0,0,1,12.48-31.69L305.16,72.17a24.06,24.06,0,0,1,31.68,12.48L378,179.37Z"
                    class="text-gray-700 fill-current"
                  />
                  <polygon 
                    points="316.06 336.55 198.63 387.61 153.33 283.42 270.75 232.36 316.06 336.55"
                    class="text-gray-700 fill-current"
                  />
                  <polygon
                    points="215.03 104.19 97.6 155.25 52.3 51.06 169.72 0 215.03 104.19"
                    class="text-gray-700 fill-current"
                  />
                  <path
                    class="fill-current text-dotred"
                    d="M40.31,237.84h0a14,14,0,0,1-18.37-7.24h0a14,14,0,0,1,7.23-18.38h0a14,14,0,0,1,18.38,7.24h0A14,14,0,0,1,40.31,237.84Z"
                  />
                  <path
                    class="fill-current text-dotyellow"
                    d="M72.91,223.66h0a14,14,0,0,1-18.37-7.24h0A14,14,0,0,1,61.78,198h0a14,14,0,0,1,18.37,7.24h0A14,14,0,0,1,72.91,223.66Z"
                  />
                  <path
                    class="fill-current text-dotgreen"
                    d="M105.68,209.85h0a14.42,14.42,0,0,1-18.91-7.44h0a14.41,14.41,0,0,1,7.45-18.91h0a14.41,14.41,0,0,1,18.9,7.45h0A14.41,14.41,0,0,1,105.68,209.85Z"
                  />
                </symbol>
              </defs>
              <use
                width="378.03"
                height="387.61"
                transform="translate(0 0) scale(4.91)"
                xlink:href="#a"
              />
            </svg>
          </a>
        </div>
      </section>

    </div>
  </div>

</template>

<script>
  import ScrollOut from 'scroll-out';
  import "splitting/dist/splitting.css";
  import "splitting/dist/splitting-cells.css";
  import Splitting from "splitting";

  export default {
    mounted() {
      
      ScrollOut({
        cssProps: {
          visibleY: true,
          viewportY: true
        }
      });

      Splitting({ 
        target: '.heading',
        
        });
      }
  }
</script>

<style src="@/assets/css/tailwind.css" />
<style lang="scss">

  .fixedlogo {
    z-index: 9999999999;
  }
  .intro-section {
    text-align: center;
    min-height: 70vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .logo {
    width: 15rem;
    margin-bottom: 4rem;
  }

  .content-section {
    --scroll-length: 1.5;
    height: calc( var(--scroll-length) * 100vh );
    width: 100%;
    

    .content .subheading, 
    .content .paragraph {
      opacity: 1; 
      opacity: calc( 1 + var(--viewport-y) );
    }
  }

  .figure {
    width: 100%;
    height: 100vh;
    margin: 0;
    position: absolute;
    top: 0;
    left: 0;

    > img { 
      /* display: block; */
      width: 100%;
      height: 100%;
      max-width: 100%;
      object-fit: cover;
      object-position: center center;
    }
  }

  .content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    // max-width: 35em;
    display: grid;
    grid-template-rows: 1fr 1fr;
    padding: 2em;
    font-size: 2.5vmin;

    * {
      text-shadow: 0 0 4vmin rgba(black, 0.25);
    }

    > .header {
      grid-row: 1 / 2;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
    }

    > .paragraph {
      grid-row: 2 / 3;
      line-height: 1.5;
    }
  } 

  .heading {
    font-size: 2.75em;
    margin: 0;
  }

  .subheading {
    font-size: 1.25em;
    font-weight: 600;
    margin-bottom: .5em;
  }

  /* ---------------------------------- */

  .figure {
    --scale: calc(.8 + 
      (.2 * var(--scroll-length) * var(--visible-y))
    );
    position: sticky;
    top: 0;
    left: 0;
    margin: 0;
    display: block; 
    overflow: hidden;
    will-change: transform;
    transform: scale(var(--scale));

    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
      background-color: rgba(black, 1);
      opacity: calc( var(--visible-y) );
    }

    > img {
      /* display: block; */
      will-change: transform;
      transform: scale(calc(1 / var(--scale)));
    }
  }

  .figurewhite {
    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
      background-color: rgba(white, 1);
      opacity: calc( var(--visible-y) );
    }
  }
  .figureblack {
    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
      background-color: black;
      opacity: calc( var(--visible-y) );
    }
  }

  /* ---------------------------------- */

  .char {
    display: inline-block;
    opacity: calc( 
      1 + ( 
        ( var(--viewport-y) * 1.5 )
        - var(--char-percent)
      )
    );
  }


  *,
  *:before,
  *:after {
    position: relative;
    box-sizing: border-box;
  }

  .heading,
  .intro-heading {
    font-weight: 700;
  }

  body, html {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    line-height: 1.05;
    font-weight: 400;
    letter-spacing: -.015em;
  }
</style>
