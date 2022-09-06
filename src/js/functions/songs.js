export function buildFocusedSong(song, songs) { 
  let ret = [ song ]
  for (let v of song.versions)
    ret.push(songs.filter((s) => s.id === v.id)[0])
  return ret;
}