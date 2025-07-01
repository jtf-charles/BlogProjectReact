export default function DisplayMinutes(minutes_Blog) {
  let minutes = Number(minutes_Blog);
  let multiplier;
  let emoji;

  if (minutes < 30) {
    multiplier = Math.ceil(minutes / 5);
    emoji="☕️"
  } else {
    multiplier = Math.ceil(minutes / 10);
    emoji="🍱"
  }

  return emoji.repeat(multiplier);
}
