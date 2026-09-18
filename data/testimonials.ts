export interface Testimonial {
  id: string;
  name: string;
  location: string;
  project: string;
  rating: number;
  text: string;
  date: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Rajesh Tiwari",
    location: "Nagpur",
    project: "Greenview Enclave, Wardha Road",
    rating: 5,
    text: "I had been searching for a plot on Wardha Road for almost two years. Every time I thought I found something, there would be a title issue or the broker would not have the documents ready. With Mauli Infra Plots, every document was in order on day one. They walked me through the NA order, showed me the RERA registration, and helped me with the loan process. I got possession within 45 days of booking. Highly recommended.",
    date: "March 2025",
  },
  {
    id: "2",
    name: "Priya & Suresh Kapoor",
    location: "Pune (investing in Nagpur)",
    project: "MIHAN Vista Plots",
    rating: 5,
    text: "We are based in Pune but have family roots in Nagpur. We wanted to invest in Nagpur real estate because of MIHAN but were nervous about buying land remotely. The team was extraordinarily patient — they arranged video calls, sent us detailed documentation, and even organised a site visit when we came to Nagpur for a long weekend. The process was completely transparent. We are very happy with the purchase.",
    date: "January 2025",
  },
  {
    id: "3",
    name: "Mohammed Farhan",
    location: "Nagpur",
    project: "Besa Garden Heights",
    rating: 5,
    text: "I was a first-time buyer and quite anxious about the whole process. The team explained everything step by step — what NA means, how RERA protects me, what stamp duty I need to pay. No hidden charges, no pressure. I bought a 150 sq.yd plot in Besa and I am already seeing it appreciate. Very professional service.",
    date: "February 2025",
  },
  {
    id: "4",
    name: "Sunita Deshpande",
    location: "Nagpur",
    project: "Saket Residency, Shankarpur",
    rating: 5,
    text: "For my budget, I thought I would have to buy in a very remote area with no facilities. But the team showed me Saket Residency, which is affordable but still has proper roads, boundary wall, and underground electricity. They were honest about what Shankarpur is today and what it will be in 5 years. I appreciated that honesty — no over-promising.",
    date: "April 2025",
  },
  {
    id: "5",
    name: "Dr. Vivek Agarwal",
    location: "Nagpur",
    project: "Greenview Enclave, Wardha Road",
    rating: 5,
    text: "As a doctor at AIIMS Nagpur, Wardha Road is my backyard. I had been meaning to buy a plot for years. Mauli Infra Plots helped me identify the right project — close enough to my workplace, in a RERA-registered layout, and at a price that made sense given where Wardha Road is heading. Smooth experience from start to finish.",
    date: "May 2025",
  },
];
