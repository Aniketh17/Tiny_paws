export const products = [
  {
    id: 'd1',
    name: 'Artisanal Feast Kibble',
    category: 'dogs',
    subCategory: 'nutrition',
    price: 54.00,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuARB_4c3boV0wuefmPgJHacvwIR22OPKrGFancBZTjZofnRzehVnrkCNzXaju3WPtaWSpQd47eWG62UXmB46l9N5hWh8JDblwSxGi8Xvfq-rhhsvwNoUqq4geNAALO8PcnJph4obia6bjKeZb4I3coBnMUftVVwzLAhQl8jD3LI5rC4LIV6TvCmQxLyJKjdQcwYFirccMQXDPElIapoFqdCexfOEDmiRZY0pO1sDOtME5STb3sxFde2YQNiE4vD-98cbbQ4AZqca7E',
    tag: 'Best Seller',
    description: 'Crafted for the discerning canine palate, our Artisanal Feast Kibble blends pasture-raised lamb with ancient grains and farm-fresh botanicals. Every batch is slow-roasted to preserve essential nutrients and maximize natural flavors, ensuring your pet enjoys a meal that is as nutritious as it is delicious.',
    reviews: [
      { id: 1, user: 'Eleanor Vance', rating: 5, comment: 'My picky poodle finally found a food she gets excited about. Her coat has never looked shinier and she has so much more energy!' },
      { id: 2, user: 'Julian Thorne', rating: 4.5, comment: 'Excellent quality. You can tell it\'s premium just by the smell when you open the bag. Fast shipping and great customer service.' },
      { id: 3, user: 'Sofia Martinez', rating: 5, comment: 'Finally a grain-inclusive option that doesn\'t use cheap fillers. My vet was very impressed with the ingredient list.' }
    ]
  },
  {
    id: 'd2',
    name: 'Velvet Soft Shampoo',
    category: 'dogs',
    subCategory: 'grooming',
    price: 32.00,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBX_Y5YNAcVDJCewPwivjLYyfGp4rp6VcyiDMxlZW9txiHtE3XzCLwHBN0PLn-3NbM0K6XUC20o4t7Ryr4kKv04FFiAbWWBiJCu_O6QWyDJp62EEPaICJuVnh_vtGbW-zAtyb-GZ_neML2Esgjob8KOfx1ERLME4lXdSfb97JnQsiLXGb6Leyjdx5koI4YTMnwfFxlbV-HuqeaOcE_SdA41b3xFqhP88l2fj9xOKv7eTuHhupIZLlO2EkzZLTiMY7Ti3QTZNhA029M',
    tag: '',
    description: 'Infused with soothing chamomile and aloe vera extract, this shampoo restores coat luster while being extremely gentle on sensitive canine skin.',
    reviews: [
      { id: 1, user: 'Sarah G.', rating: 5, comment: 'Smells amazing and makes the fur so soft.' }
    ]
  },
  {
    id: 'd3',
    name: 'Pure Vitality Vitamins',
    category: 'dogs',
    subCategory: 'health',
    price: 45.00,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCZrCyrdE00IM1mz7wQ3eC-uCdFHl7cVn7xkGtugCwNAf3qU9a-hXnRHFlWZ9y8G5slTwcPuNiMo3J16jT6oxgOWwKjlZLbyEJfSxB5zTURJa0fvrNm2MPfE6z8hhiWL_RBQCfIzx9vUraU-zo9PGle47g_GrLub13wp1jRA1goeyJFZqs3ktiLadnMXfgCn2lAf3mMs_4SGa82jJoE2Migkyy_QD8dP5MZLSRxIu2-OMJl1hLN-6ZMidUbvHzxXX8IPpLOt2UVj4U',
    tag: 'New Arrival',
    description: 'Formulated by board-certified veterinarians, these multivitamin bites support active joints, brain development, and gut health.',
    reviews: [
      { id: 1, user: 'John M.', rating: 5, comment: 'Highly recommend these for senior dogs.' }
    ]
  },
  {
    id: 'd4',
    name: 'Organic Cotton Tug',
    category: 'dogs',
    subCategory: 'toys',
    price: 28.00,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCmIxGUZZAU5UDkDyKaDh_OvHBFT5Q1BipKMMBTMGIvAqmQNIAL8sfCMr1BkiI3dGjOgXqAQEM6OFgRqnnBNXIruWUcCdf8pDgsKozQi-w1gfhbXet7wycGcSwkPLJTEaiYWAy9Bo1WW05sJkd0MEOeCs-63p7qj_DqpSgPg2ghgWtA9pMPKpDAUbuZa-teqp9FFmbOLfrbOp0B33OXuiAyKVPfXohlc9l61QfKbw0nb1txC1wlQSdnYZb0-HNVPK9niXeBuFuBzys',
    tag: '',
    description: 'Handcrafted from organic, non-toxic cotton fibers. Perfect for standard teething and interactive tug play.',
    reviews: [
      { id: 1, user: 'Emma P.', rating: 4, comment: 'Very durable cotton toy!' }
    ]
  },
  {
    id: 'c1',
    name: 'Scandinavian Scratcher',
    category: 'cats',
    subCategory: 'toys',
    price: 120.00,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBxqSWDoysGIE-QcAAsCZfg7iB3FVA5dFj7kReoavQXEasb1hqxFstjb3N41sljRdDiv3hYZPMfPsbV-RaPxyJBtdNdvTTbxI99yh3MgwIhYNq5KMmfl_XPpsphlpBzw1IXDoxuwFgK2vDC9XPYeVzl0He1RvHQ7Bt1_JEf4GbBcP_GiwD5O3qXB22k6mKGRHu86PHHgbKWV8nsfsz06MiqFCU3rdCCDSgU5fcug6AW1I0a61lmXEe3L214yishml07YpFD57JohEs',
    tag: '',
    description: 'A beautiful minimalist scratcher made from premium sustainable oak wood and textured felt that cat claws love.',
    reviews: [
      { id: 1, user: 'Lucia R.', rating: 5, comment: 'Looks gorgeous in the living room. Cat loves it!' }
    ]
  },
  {
    id: 'c2',
    name: 'Essential Travel Carrier',
    category: 'cats',
    subCategory: 'health',
    price: 89.00,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBF1iKZxQyJ2L4yjMoOFYVgm9_f-OmlO2rWMyXyg26bYNesPm5_JR9QExHDeyrYmGf0Qjvf7aJZTgYUVJwyFbibEAd7XuTOOmJxNp8cLeVoHi1Ueen99ptdBUeYgUz4hcrg8c9VxxCL4Zx-1DhzUoPUbq-oYoWJYcfNLKnCbKVvsJv4SOcsMTx7cAyBhiTKGlTswtK-w6Sa48SLS26GQ2KAsmrXpP8UXOZoiu9FCKlIZl9pQxV5rbqRONuAZPQYGTNfdF3Hoef8st8',
    tag: '',
    description: 'Premium waterproof carrier with custom leather accents, designed for safe, cozy vet visits or international trips.',
    reviews: [
      { id: 1, user: 'Oliver S.', rating: 5, comment: 'Comfortable to carry and spacious.' }
    ]
  },
  {
    id: 'c3',
    name: 'Gourmet Ocean Bites',
    category: 'cats',
    subCategory: 'nutrition',
    price: 18.00,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCR9gdatcW376rO3ytevvXD-RamwZKLSxc064QceYvuGH-GNrXl0_M868iUe9eyV1SiAF17BKMrMfanB_yRN1AgkM2Xe6LkIDZPX1f3IPeeW-6gkduWV-FBbfZ8IgcaPfE_3Z6oC3EKRv_ai4llalc5mSE02VVmb76wiMOWfU0FErhXyqg49sulg1vxmfgfXRLvSoGl_JHUtR2e-sCIj_70RnkhAlvDMwqwtY65OZ8qIcN2SHpnxR34om8kbIxpm-L5vuZY4hnXqz8',
    tag: '',
    description: 'Dehydrated ocean wild-caught salmon and tuna flakes packed with natural proteins and Omega-3 oils.',
    reviews: [
      { id: 1, user: 'Chloe B.', rating: 5, comment: 'Our Persian goes crazy for these!' }
    ]
  },
  {
    id: 'c4',
    name: 'Smart Portion Feeder',
    category: 'cats',
    subCategory: 'health',
    price: 155.00,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAp-Ckgdk3u8zC-VxpNE67SQJNNnuGSsJrWupKFL5noW-VNc2c9WC3j67u6Ya1hcnMKs5pN_1eqRslNtfOSITXG55h7lEexsS6XInBDt-9ZNPL5kPXymGJvyQWgo8Wb3OKVxeWA4l3gjxa-ZmoxsLAYSrtsVYUUpj0bbvyRJDtu3YKbAbi3uXGuK4MRCm08i00OzOAELHPTJBsg_fx6RzDBK74HLtkTEq42GYX6ADZX761a5EO8_g09Cus3H5Phe3LkV_UCsyUKQ94',
    tag: '',
    description: 'Wi-Fi enabled automatic feeder with portion controller scales. Ensure your feline friend eats healthy quantities on schedule.',
    reviews: [
      { id: 1, user: 'Ethan G.', rating: 4.8, comment: 'Very high tech and helpful when away!' }
    ]
  }
];
