<template>
<div class="relative font-no2roman">
  
  <div class="sticky top-0 z-50">
    <div class="grid"><img src="/gfx/logo-heart-w.png" class="m-4 justify-self-end max-h-40"></div>
  </div>
  
  <section class="text-3xl uppercase intro-section ">
    <h1 class="text-6xl font-bold tracking-widest text-red-500 uppercase font-no2roman">Lovestream Festival</h1>
    <p class="intro-heading"><img src="/gfx/logo-heart.png" class="logo"></p>
    <p class="text-black">10-12th of JUNE, 2022</p>
    <p class="text-black">Tehelne Pole Stadium, <span class="text-red-600">Bratislava</span></p>
  </section>

  <section class="content-section" data-scroll>
    <figure class="figure"><img src="/img/RHCP.jpg" /></figure>
    <div class="content">
      <header class="header">
        <div class="text-white subheading">Headliner</div>
        <h2 class="text-red-600 heading">RED HOT CHILI PEPPERS</h2>
      </header>
      <p class="text-white paragraph">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum nisi illum rem recusandae. Tempore consequuntur nihil cumque quis nam deserunt earum atque et ullam facere accusamus cum natus, autem numquam.
      </p>
    </div>
  </section>

  <section class="content-section" data-scroll>
    <figure class="figure"><img src="/img/RHCP.jpg" /></figure>
    <div class="content">
      <header class="header">
        <div class="text-white subheading">Headliner</div>
        <h2 class="text-red-600 heading">RED HOT CHILI PEPPERS</h2>
      </header>
      <p class="text-white paragraph">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum nisi illum rem recusandae. Tempore consequuntur nihil cumque quis nam deserunt earum atque et ullam facere accusamus cum natus, autem numquam.
      </p>
    </div>
  </section>

  <section class="content-section" data-scroll>
    <figure class="figure"><img src="/img/RHCP.jpg" /></figure>
    <div class="content">
      <header class="header">
        <div class="text-white subheading">Headliner</div>
        <h2 class="text-red-600 heading">RED HOT CHILI PEPPERS</h2>
      </header>
      <p class="text-white paragraph">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum nisi illum rem recusandae. Tempore consequuntur nihil cumque quis nam deserunt earum atque et ullam facere accusamus cum natus, autem numquam.
      </p>
    </div>
  </section>

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
      display: block;
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
      display: block;
      will-change: transform;
      transform: scale(calc(1 / var(--scale)));
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