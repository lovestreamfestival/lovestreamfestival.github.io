// https://github.com/ssense/vue-carousel#readme

<template>
  <div class="pb-16 mt-16">
    <carousel :per-page="1" :navigationEnabled="true" :scrollPerPage="false">
      <slide>
        <img
          src="https://picsum.photos/1280/720?random=1"
          alt=""
          class="rounded"
        />
      </slide>
      <slide>
        <img
          src="https://picsum.photos/1280/720?random=2"
          alt=""
          class="rounded"
        />
      </slide>
      <slide>
        <img
          src="https://picsum.photos/1280/720?random=3"
          alt=""
          class="rounded"
        />
      </slide>
      <slide>
        <img
          src="https://picsum.photos/1280/720?random=4"
          alt=""
          class="rounded"
        />
      </slide>
      <slide>
        <img
          src="https://picsum.photos/1280/720?random=5"
          alt=""
          class="rounded"
        />
      </slide>
      <slide>
        <img
          src="https://picsum.photos/1280/720?random=6"
          alt=""
          class="rounded"
        />
      </slide>
      <slide>
        <img
          src="https://picsum.photos/1280/720?random=7"
          alt=""
          class="rounded"
        />
      </slide>
      <slide>
        <img
          src="https://picsum.photos/1280/720?random=8"
          alt=""
          class="rounded"
        />
      </slide>
      <slide>
        <img
          src="https://picsum.photos/1280/720?random=9"
          alt=""
          class="rounded"
        />
      </slide>
      <slide>
        <img
          src="https://picsum.photos/1280/720?random=10"
          alt=""
          class="rounded"
        />
      </slide>
    </carousel>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";

export default {
  components: {
    Carousel,
    Slide,
  },
};
</script>
