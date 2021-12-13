interface option {
  "topic": string,
  "type": string,
  "start_time": Date,
  "timezone": string,
  "settings": {
    "join_before_host": boolean,
    "mute_upon_entry": boolean,
    "auto_recording": boolean,
    "use_pmi": boolean,
    "host_video": boolean
  }
}