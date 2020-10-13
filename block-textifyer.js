const DISCORD_EMOJI_SURROUNDERS = ":";
const REGIONAL_INDICATOR_PREFIX = "regional_indicator_";

function blockTextify(input, surrounders = DISCORD_EMOJI_SURROUNDERS, prefix = REGIONAL_INDICATOR_PREFIX) {
    return [...input.toLowerCase()].map(c => c.match(/[A-Za-z]/) ? `${surrounders}${prefix}${c}${surrounders}` : c).join(" ");
}
