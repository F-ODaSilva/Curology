// Curology product line. Prices in USD; subscriptions bill every 30 days and can be paused.
export const products = [
  {
    id: "custom-formula",
    name: "Custom Formula",
    kind: "skin",
    price: 29.9,
    per: "/ month",
    img: "media/p-custom-formula.webp",
    tint: "#ece8ff",
    tag: "Prescription",
    line: "Your own prescription cream, mixed for your skin.",
    body: "A licensed dermatology provider picks up to three active ingredients and their strength after reading your skin quiz and photos. Strengths are adjusted every refill as your skin changes.",
    actives: ["Tretinoin 0.025%", "Niacinamide 4%", "Clindamycin 1%", "Azelaic acid"],
    for: ["acne", "aging", "spots"]
  },
  {
    id: "cleanser",
    name: "The Cleanser",
    kind: "skin",
    price: 12,
    img: "media/p-cleanser.webp",
    tint: "#e4e6f4",
    line: "A soft gel wash that won't strip your barrier.",
    body: "Low-foam, fragrance-free and pH balanced. Removes sunscreen and oil without the tight feeling, so it pairs with strong actives.",
    actives: ["Glycerin", "Panthenol", "pH 5.5"],
    for: ["aging", "spots", "sensitive"]
  },
  {
    id: "acne-cleanser",
    name: "Acne Cleanser",
    kind: "skin",
    price: 14,
    img: "media/p-acne-cleanser.webp",
    tint: "#dfe9f5",
    tag: "Bestseller",
    line: "Benzoyl peroxide wash for breakouts on face and body.",
    body: "Clears pores and calms new spots with a short-contact routine: lather, wait 60 seconds, rinse. Gentle enough for daily use.",
    actives: ["Benzoyl peroxide 4%", "Hyaluronic acid"],
    for: ["acne"]
  },
  {
    id: "moisturizer",
    name: "The Moisturizer",
    kind: "skin",
    price: 20,
    img: "media/p-moisturizer.webp",
    tint: "#e7e4f6",
    line: "Light gel-cream for every skin type.",
    body: "Absorbs in seconds, leaves no shine and is non-comedogenic. The default moisturizer we pair with every formula.",
    actives: ["Ceramides", "Squalane", "Hyaluronic acid"],
    for: ["acne", "aging", "spots", "sensitive"]
  },
  {
    id: "rich-moisturizer",
    name: "Rich Moisturizer",
    kind: "skin",
    price: 22,
    img: "media/p-rich-moisturizer.webp",
    tint: "#f6e6dc",
    line: "A thicker cream for dry or retinoid-irritated skin.",
    body: "Shea butter and ceramides repair flaky patches overnight. Use it on nights you apply your formula.",
    actives: ["Shea butter", "Ceramide NP", "Oat extract"],
    for: ["aging", "sensitive"]
  },
  {
    id: "future-proof",
    name: "Future Proof",
    kind: "skin",
    price: 28,
    img: "media/p-future-proof.webp",
    tint: "#e3e6ff",
    tag: "New",
    line: "Brightening serum for dull skin and dark marks.",
    body: "Stable vitamin C with peptides, applied in the morning under sunscreen. Fades post-acne marks over 8 to 12 weeks.",
    actives: ["Vitamin C 10%", "Peptides", "Vitamin E"],
    for: ["spots", "aging"]
  },
  {
    id: "hair-formula",
    name: "Hair Formula",
    kind: "hair",
    price: 39.9,
    per: "/ month",
    img: "media/p-hair-formula.webp",
    tint: "#eef0f4",
    tag: "Prescription",
    line: "A daily scalp serum for thinning hair.",
    body: "Two proven ingredients in one dropper, prescribed by a provider who reviews your scalp photos. Most people see less shedding in three months.",
    actives: ["Minoxidil 5%", "Finasteride 0.25%"],
    for: ["hair"]
  },
  {
    id: "starter-set",
    name: "Starter Set",
    kind: "set",
    price: 40,
    was: 46,
    img: "media/p-starter-set.webp",
    tint: "#efeaff",
    tag: "Save $6",
    line: "Cleanser, moisturizer and your first formula in one box.",
    body: "Everything for a full routine, with a travel pouch. A good way to start if you don't know what you need yet.",
    actives: ["The Cleanser", "The Moisturizer", "Custom Formula"],
    for: ["acne", "aging", "spots", "sensitive"]
  }
];

export const byId = (id) => products.find((p) => p.id === id);

// Sizes from the original product card (S / M / L). Prescription refills and sets come in one size.
export const SIZES = { S: { label: "S", ml: "30 ml", f: 0.7 }, M: { label: "M", ml: "50 ml", f: 1 }, L: { label: "L", ml: "100 ml", f: 1.6 } };
export const hasSizes = (p) => !p.per && p.kind !== "set";
export const priceOf = (line) => Math.round(byId(line.id).price * SIZES[line.size || "M"].f * 100) / 100;

export const reviews = [
  { name: "Maya R.", meta: "Acne, 14 weeks in", img: "media/testimonial-2.webp", text: "My provider lowered the tretinoin after the first month because I was peeling. Nobody at a counter ever did that for me." },
  { name: "Jordan P.", meta: "Dark marks, 5 months in", img: "media/testimonial.webp", text: "The marks on my jaw are mostly gone. Future Proof in the morning, formula at night, that's the whole routine." },
  { name: "Leo K.", meta: "Thinning hair, 6 months in", img: "media/regrow-hair.webp", text: "Less hair in the drain was the first sign. Photos at month six convinced my barber, not just me." },
  { name: "Anya T.", meta: "Sensitive skin, 8 weeks in", img: "media/testimonial-4.webp", text: "Rich Moisturizer is the first cream that didn't sting. I use it every night with my formula." }
];

export const faqs = [
  ["Who writes my prescription?", "A licensed dermatology provider in your state. They read your quiz and photos, choose the ingredients and answer messages in your account, usually within a day."],
  ["How long until I see results?", "Most people notice a change in 8 to 12 weeks. Your skin may purge in the first month while it adjusts to tretinoin; your provider can lower the strength if it does."],
  ["Can I pause or cancel?", "Yes, at any time from your account. Subscriptions ship every 30 days and you can skip a month or change the frequency."],
  ["Is it safe during pregnancy?", "Some ingredients aren't. Tell your provider in the quiz and they'll prescribe pregnancy-safe actives like azelaic acid and niacinamide."]
];
