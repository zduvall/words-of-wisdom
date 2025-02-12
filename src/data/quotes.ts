interface Quote {
  quote: string;
  author: string;
  source: string;
  hint: string;
}

const quotesData: Quote[] = [
  {
    quote:
      'Wherefore, my beloved brethren, pray unto the Father with all the energy of heart, that ye may be filled with this love, which he hath bestowed upon all who are true followers of his Son, Jesus Christ; that ye may become the sons of God; that when he shall appear we shall be like him, for we shall see him as he is; that we may have this hope; that we may be purified even as he is pure. Amen.',
    author: 'Mormon',
    source: 'Moroni 7:48',
    hint: 'Pray unto the Father with all energy of heart',
  },
  {
    quote:
      'And the first fruits of repentance is baptism; and baptism cometh by faith unto the fulfilling the commandments; and the fulfilling the commandments bringeth remission of sins;\n\nAnd the remission of sins bringeth meekness, and lowliness of heart; and because of meekness and lowliness of heart cometh the visitation of the Holy Ghost, which Comforter filleth with hope and perfect love, which love endureth by diligence unto prayer, until the end shall come, when all the saints shall dwell with God.',
    author: 'Mormon',
    source: 'Moroni 8:25-26',
    hint: 'First fruits of repentance',
  },
  {
    quote:
      'Yea, come unto Christ, and be perfected in him, and deny yourselves of all ungodliness; and if ye shall deny yourselves of all ungodliness, and love God with all your might, mind and strength, then is his grace sufficient for you, that by his grace ye may be perfect in Christ; and if by the grace of God ye are perfect in Christ, ye can in nowise deny the power of God.\n\nAnd again, if ye by the grace of God are perfect in Christ, and deny not his power, then are ye sanctified in Christ by the grace of God, through the shedding of the blood of Christ, which is in the covenant of the Father unto the remission of your sins, that ye become holy, without spot.',
    author: 'Moroni',
    source: 'Moroni 10:32-33',
    hint: 'Be perfected in Christ',
  },
  {
    quote:
      'I know thy works, that thou art neither cold nor hot: I would thou wert cold or hot.\n\nSo then because thou art lukewarm, and neither cold nor hot, I will spue thee out of my mouth.',
    author: 'Jehovah',
    source: 'Revelations 3:15-16',
    hint: 'I would thou wert cold or hot',
  },
  {
    quote:
      'Behold, I stand at the door, and knock: if any man hear my voice, and open the door, I will come in to him, and will sup with him, and he with me.',
    author: 'Jehovah',
    source: 'Revelations 3:20',
    hint: 'I stand at the door, and knock',
  },
  {
    quote:
      'For I the Lord cannot look upon sin with the least degree of allowance;\n\nNevertheless, he that repents and does the commandments of the Lord shall be forgiven;',
    author: 'Jehovah',
    source: 'Doctrine and Covenants 1:31-32',
    hint: 'Least degree of allowance',
  },
  {
    quote:
      '...after I had retired to my bed for the night, I betook myself to prayer and supplication to Almighty God for forgiveness of all my sins and follies, and also for a manifestation to me, that I might know of my state and standing before him; for I had full confidence in obtaining a divine manifestation, as I previously had one.',
    author: 'Joseph Smith',
    source: 'Joseph Smith History 1:29',
    hint: 'Seeking another divine manifestation',
  },
  {
    quote:
      'My soul was ﬁlled with love, and for many days I could rejoice with great joy. The Lord was with me, ...',
    author: 'Joseph Smith',
    source: 'Circa Summer 1832 History (First Vision Account)',
    hint: 'Soul filled with love',
  },
  {
    quote:
      'And lest I should be exalted above measure through the abundance of the revelations, there was given to me a thorn in the flesh, the messenger of Satan to buffet me, lest I should be exalted above measure.\n\nFor this thing I besought the Lord thrice, that it might depart from me.\n\nAnd he said unto me, My grace is sufficient for thee: for my strength is made perfect in weakness. Most gladly therefore will I rather glory in my infirmities, that the power of Christ may rest upon me.\n\nTherefore I take pleasure in infirmities, in reproaches, in necessities, in persecutions, in distresses for Christ’s sake: for when I am weak, then am I strong.',
    author: 'Paul',
    source: '2 Corinthians 12:7-10',
    hint: 'Thorn in the flesh',
  },
  {
    quote:
      "I'm very concerned that our society is much more interested in information than wonder, in noise rather than silence… Real revelation comes through silence.",
    author: 'Fred Rogers',
    source: 'Interview with Charlie Rose, 1994', // https://www.youtube.com/watch?v=djoyd46TVVc
    hint: 'Information vs wonder',
  },
  {
    quote:
      'The secret of happiness is this: let your interests be as wide as possible, and let your reactions to the things and persons that interest you be as far as possible friendly rather than hostile.',
    author: 'Bertrand Russell',
    source: 'The Conquest of Happiness, 1930',
    hint: 'The secret of happiness',
  },
  {
    quote:
      '…To like many people spontaneously and without effort is perhaps the greatest of all sources of personal happiness.',
    author: 'Bertrand Russell',
    source: 'The Conquest of Happiness, 1930',
    hint: 'Greatest source of personal happiness',
  },
  {
    quote:
      'We are not living in a world where all roads are radii of a circle and where all, if followed long enough, will therefore draw gradually nearer and finally meet at the centre; rather in a world where every road, after a few miles, forks into two, and each of those into two again, and at each fork you must make a decision. Even on the biological level life is not like a river but like a tree. It does not move towards unity but away from it and the creatures grow further apart as they increase in perfection. Good, as it ripens, becomes continually more different not only from evil but from other good.',
    author: 'C.S. Lewis',
    source: 'The Great Divorce, 1945',
    hint: 'Good becomes more different from other good',
  },
  {
    quote:
      'There are only two kinds of people in the end: those who say to God, "Thy will be done," and those to whom God says, in the end, "Thy will be done."',
    author: 'C.S. Lewis',
    source: 'The Great Divorce, 1945',
    hint: 'Two kinds of people in the end',
  },
  {
    quote:
      "\"What's the world's greatest lie?\" the boy asked, completely surprised.\n\n\"It's this: that at a certain point in our lives, we lose control of what's happening to us, and our lives become controlled by fate. That's the world's greatest lie.\"",
    author: 'Paulo Coelho',
    source: 'The Alchemist, 1988',
    hint: "The world's greatest lie",
  },
  {
    quote:
      '"My heart is afraid that it will have to suffer," the boy told the alchemist one night as they looked up at the moonless sky.\n\n"Tell your heart that the fear of suffering is worse than the suffering itself. And that no heart has ever suffered when it goes in search of its dreams, because every second of the search is a second’s encounter with God and with eternity."\n\n"Every second of the search is an encounter with God," the boy told his heart. "When I have been truly searching for my treasure, every day has been luminous, because I’ve known that every hour was a part of the dream that I would find it. When I have been truly searching for my treasure, I’ve discovered things along the way that I never would have seen had I not had the courage to try things that seemed impossible for a shepherd to achieve."',
    author: 'Paulo Coelho',
    source: 'The Alchemist, 1988',
    hint: 'Fear of suffering',
  },
  {
    quote:
      "It's the possibility of having a dream come true that makes life interesting",
    author: 'Paulo Coelho',
    source: 'The Alchemist, 1988',
    hint: 'Makes life interesting',
  },
];

export default quotesData;
