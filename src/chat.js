const url = e => `https://nicenotifier.r2dev2bb8.repl.co${e}`;

export async function sendMsg(channel, msg) {
  return await fetch(url('/broadcast'), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ channel, msg })
  });
}

export async function subscribe(channel, callback) {
  new EventSource(url(`/events/${channel}`)).onmessage = callback;
}
