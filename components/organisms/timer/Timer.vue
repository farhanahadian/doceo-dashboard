<template>
  <div>
    <h1 id="headline"></h1>
    <div id="countdown">
      <ul>
        <li><span id="days"></span>Hari</li>
        <li><span id="hours"></span>Jam</li>
        <li><span id="minutes"></span>Menit</li>
        <li><span id="seconds"></span>Detik</li>
      </ul>
    </div>
    <div class="message">
      <div id="content">
        <span class="emoji">🥳</span>
        <span class="emoji">🎉</span>
        <span class="emoji">🎂</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    (function() {
      const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

      let endtask = 'Dec 30, 2020 00:00:00',
        countDown = new Date(endtask).getTime(),
        x = setInterval(function() {
          let now = new Date().getTime(),
            distance = countDown - now;
          (document.getElementById('days').innerText = Math.floor(
            distance / day
          )),
            (document.getElementById('hours').innerText = Math.floor(
              (distance % day) / hour
            )),
            (document.getElementById('minutes').innerText = Math.floor(
              (distance % hour) / minute
            )),
            (document.getElementById('seconds').innerText = Math.floor(
              (distance % minute) / second
            ));

          //do something later when date is reached
          if (distance < 0) {
            let headline = document.getElementById('headline'),
              countdown = document.getElementById('countdown'),
              content = document.getElementById('content');

            headline.innerText = "Time its Over!";
            countdown.style.display = 'none';
            content.style.display = 'block';

            clearInterval(x);
          }
          //seconds
        }, 0);
    })();
  },
};
</script>

<style lang="scss" scoped>
li {
  display: inline-block;
  font-size: 1rem;
  list-style-type: none;
  padding: 1em;
  text-transform: uppercase;
}

li span {
  display: block;
  font-size: 1.5rem;
}

.message {
  font-size: 4rem;
}

#content {
  display: none;
  padding: 1rem;
}
</style>
