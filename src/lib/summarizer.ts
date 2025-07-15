export function simulateScrape(url: string): string {
  if (url.includes("focus-discipline")) {
    return "This blog explores how maintaining focus and discipline helps achieve long-term goals. It emphasizes the role of daily routines and intentional habits.";
  } else if (url.includes("motivation-growth")) {
    return "This blog discusses how motivation sparks personal growth. It highlights the importance of resilience and the mindset needed to grow continuously.";
  } else if (url.includes("startups-in-ai")) {
    return "This blog highlights the rise of startups in AI. It talks about innovation, challenges, and investment trends in the artificial intelligence industry.";
  }
  return "This blog discusses a topic related to personal development, success, and productivity."; // default
}

export function simulateSummary(content: string): string {
  if (content.includes("focus and discipline")) {
    return "The blog emphasizes how staying focused and disciplined leads to success, highlighting the power of small, consistent efforts.";
  } else if (content.includes("motivation sparks")) {
    return "This article shows how motivation drives growth, urging readers to develop a strong mindset and face challenges with courage.";
  } else if (content.includes("startups in AI")) {
    return "The blog provides insights into the AI startup ecosystem, covering innovation, funding, and how AI is reshaping industries.";
  }
  return "This blog talks about motivation, growth, and the importance of focus and discipline."; // fallback
}

export function translateToUrdu(summary: string): string {
  if (summary.includes("staying focused")) {
    return "یہ بلاگ وضاحت کرتا ہے کہ کس طرح توجہ اور نظم و ضبط کے ذریعے کامیابی حاصل کی جا سکتی ہے، اور روزمرہ کی کوششوں کی اہمیت پر زور دیتا ہے۔";
  } else if (summary.includes("motivation drives")) {
    return "یہ مضمون بتاتا ہے کہ محرک کس طرح ترقی کی طرف لے جاتا ہے، اور قارئین کو ہمت اور مضبوط ذہنیت اپنانے کی ترغیب دیتا ہے۔";
  } else if (summary.includes("AI startup ecosystem")) {
    return "یہ بلاگ مصنوعی ذہانت کے اسٹارٹ اپس کی دنیا پر روشنی ڈالتا ہے، اور اس میں جدت، سرمایہ کاری اور صنعتوں پر اثرات کا ذکر ہے۔";
  }
  return "یہ بلاگ حوصلہ افزائی، ترقی، اور نظم و ضبط کی اہمیت کے بارے میں بات کرتا ہے۔"; // fallback
}