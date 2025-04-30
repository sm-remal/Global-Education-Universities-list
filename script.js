// Top 20 Universities
const geiUniversitiesData = [
    {
      id: 1,
      name: "Massachusetts Institute of Technology (MIT)",
      country: "usa",
      rank: "01",
      description: "Known for STEM programs, research, and innovation.",
      website: "https://www.mit.edu"
    },
    {
      id: 2,
      name: "Stanford University",
      country: "usa",
      rank: "02",
      description: "Leading in technology, business, and entrepreneurship.",
      website: "https://www.stanford.edu"
    },
    {
      id: 3,
      name: "Harvard University",
      country: "usa",
      rank: "03",
      description: "World-renowned for law, medicine, and humanities.",
      website: "https://www.harvard.edu"
    },
    {
      id: 4,
      name: "University of Oxford",
      country: "uk",
      rank: "04",
      description: "Oldest English-speaking university with strong research focus.",
      website: "https://www.ox.ac.uk"
    },
    {
      id: 5,
      name: "University of Cambridge",
      country: "uk",
      rank: "05",
      description: "Prestigious in sciences, arts, and research.",
      website: "https://www.cam.ac.uk"
    },
    {
      id: 6,
      name: "California Institute of Technology (Caltech)",
      country: "usa",
      rank: "06",
      description: "Small but elite in engineering and physical sciences.",
      website: "https://www.caltech.edu"
    },
    {
      id: 7,
      name: "ETH Zurich",
      country: "europe",
      rank: "07",
      description: "Top European university for technology and natural sciences.",
      website: "https://www.ethz.ch"
    },
    {
      id: 8,
      name: "University of Chicago",
      country: "usa",
      rank: "08",
      description: "Strong in economics, social sciences, and research.",
      website: "https://www.uchicago.edu"
    },
    {
      id: 9,
      name: "Imperial College London",
      country: "uk",
      rank: "09",
      description: "Leading in science, engineering, medicine, and business.",
      website: "https://www.imperial.ac.uk"
    },
    {
      id: 10,
      name: "University of Pennsylvania",
      country: "usa",
      rank: "10",
      description: "Famous for Wharton Business School and liberal arts.",
      website: "https://www.upenn.edu"
    },
    {
      id: 11,
      name: "Yale University",
      country: "usa",
      rank: "11",
      description: "Elite in law, arts, and humanities.",
      website: "https://www.yale.edu"
    },
    {
      id: 12,
      name: "Princeton University",
      country: "usa",
      rank: "12",
      description: "Strong in mathematics, physics, and public policy.",
      website: "https://www.princeton.edu"
    },
    {
      id: 13,
      name: "Columbia University",
      country: "usa",
      rank: "13",
      description: "Renowned for journalism, business, and arts.",
      website: "https://www.columbia.edu"
    },
    {
      id: 14,
      name: "University of Toronto",
      country: "canada",
      rank: "14",
      description: "Canada's top university with diverse programs.",
      website: "https://www.utoronto.ca"
    },
    {
      id: 15,
      name: "University of California, Berkeley (UCB)",
      country: "usa",
      rank: "15",
      description: "Leading in computer science, engineering, and social sciences.",
      website: "https://www.berkeley.edu"
    },
    {
      id: 16,
      name: "University of Melbourne",
      country: "australia",
      rank: "16",
      description: "Australia's best for research and multidisciplinary programs.",
      website: "https://www.unimelb.edu.au"
    },
    {
      id: 17,
      name: "National University of Singapore (NUS)",
      country: "asia",
      rank: "17",
      description: "Asia's top university with global recognition.",
      website: "https://www.nus.edu.sg"
    },
    {
      id: 18,
      name: "University of Michigan, Ann Arbor",
      country: "usa",
      rank: "18",
      description: "Excellent in engineering, business, and social sciences.",
      website: "https://umich.edu"
    },
    {
      id: 19,
      name: "University of Edinburgh",
      country: "uk",
      rank: "19",
      description: "Historic university strong in medicine, law, and AI.",
      website: "https://www.ed.ac.uk"
    },
    {
      id: 20,
      name: "Tsinghua University",
      country: "asia",
      rank: "20",
      description: "China's top university for STEM and technology.",
      website: "https://www.tsinghua.edu.cn"
    }
  ];
  
  // DOM Elements
  const geiUniversitiesList = document.getElementById('gei-universities-list');
  const geiSearchInput = document.getElementById('gei-search-input');
  const geiCountryFilter = document.getElementById('gei-country-filter');
  
  // Display Universities
  function geiDisplayUniversities(universities) {
    geiUniversitiesList.innerHTML = '';
    universities.forEach(university => {
      const universityCard = document.createElement('div');
      universityCard.className = 'gei-university-card';
      universityCard.innerHTML = `
        <h3 class="gei-university-name">${university.name}</h3>
        <span class="gei-university-country">${university.country.toUpperCase()}</span>
        <p class="gei-university-rank">Rank: ${university.rank}</p>
        <p class="gei-university-desc">${university.description}</p>
        <a href="${university.website}" target="_blank" class="gei-university-link">Visit Website</a>
      `;
      geiUniversitiesList.appendChild(universityCard);
    });
  }
  
  // Filter Universities
  function geiFilterUniversities() {
    const searchTerm = geiSearchInput.value.toLowerCase();
    const country = geiCountryFilter.value;
  
    const filtered = geiUniversitiesData.filter(university => {
      const matchesSearch = university.name.toLowerCase().includes(searchTerm) || 
                           university.description.toLowerCase().includes(searchTerm);
      const matchesCountry = country === 'all' || university.country === country;
      return matchesSearch && matchesCountry;
    });
  
    geiDisplayUniversities(filtered);
  }
  
  // Event Listeners
  geiSearchInput.addEventListener('input', geiFilterUniversities);
  geiCountryFilter.addEventListener('change', geiFilterUniversities);
  
  // Initialize
  geiDisplayUniversities(geiUniversitiesData);