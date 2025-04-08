export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "mainEntity": {
      "@type": "Person",
      "name": "Fathan Syahputra Wali",
      "url": "https://fathan-portfolio.vercel.app",
      "sameAs": [
        "https://www.instagram.com/fthann.syahh_/",
        "https://www.linkedin.com/in/fathan-syahputra-x1-undefined-12b084323/",
        "https://www.behance.net/fathansyahput"
      ],
      "jobTitle": "Visual Communication Designer",
      "description": "10th grade Visual Communication Design student specializing in comics and graphic design",
      "image": "https://fathan-portfolio.vercel.app/assets/profile-image.jpg",
      "alumniOf": {
        "@type": "EducationalOrganization",
        "name": "SMK Pesat ITXPro",
        "department": "Design And Visual Major"
      },
      "knowsAbout": [
        "Comic Design",
        "Graphic Design",
        "Visual Communication",
        "Digital Illustration"
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
