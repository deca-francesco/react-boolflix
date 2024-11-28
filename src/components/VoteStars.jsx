export default function getVoteStars(vote) {

    const roundedVote = Math.ceil(vote / 2)

    const stars = '★'.repeat(roundedVote) + '☆'.repeat(5 - roundedVote)

    return stars
}