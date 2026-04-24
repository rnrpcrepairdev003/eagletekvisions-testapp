export interface ArticleSection {
  heading: string
  paragraphs: string[]
  tips?: string[]
}

export interface ArticleSource {
  label: string
  url: string
}

export interface ArticleVideo {
  title: string
  youtubeId: string
  channel: string
}

export interface ArticleInlineImage {
  afterSection: number
  src: string
  alt: string
}

export interface Article {
  slug: string
  title: string
  metaDescription: string
  badge: string
  excerpt: string
  intro: string
  sections: ArticleSection[]
  sources: ArticleSource[]
  videos: ArticleVideo[]
  pricing: string
  icon: string
  coverImage: string
  inlineImages?: ArticleInlineImage[]
  whatsIncluded: string[]
}

const articles: Article[] = [
  // ── B2B ──────────────────────────────────────────────────────────────────
  {
    slug: 'managed-it-vs-inhouse',
    title: 'Managed IT vs. In-House IT: The True Cost Comparison for Small Businesses',
    badge: 'Business IT Strategy',
    metaDescription: 'A practical cost comparison between hiring in-house IT staff and outsourcing to a managed IT provider — covering salary, benefits, coverage gaps, and total cost of ownership.',
    excerpt: 'Is hiring an in-house IT employee actually cheaper than a managed IT provider? A full breakdown of the real costs most businesses overlook.',
    icon: 'chart',
    coverImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
    inlineImages: [
      { afterSection: 0, src: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80', alt: 'IT professional reviewing business technology strategy' },
      { afterSection: 1, src: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80', alt: 'Corporate office IT environment with workstations' },
    ],
    pricing: 'From $149/mo per user',
    whatsIncluded: ['Full IT department capabilities', 'Proactive monitoring and management', 'Dedicated account manager', 'Compliance and security programme', '2-hour response SLA', 'Monthly IT health reports'],
    intro: 'One of the most common questions business owners ask when evaluating IT support options is whether it makes more financial sense to hire an in-house IT employee or outsource to a managed service provider. On the surface, the decision appears straightforward — but when you account for the full cost of employment and the structural limitations of a single-person IT function, the comparison looks very different.',
    sections: [
      {
        heading: 'The Real Cost of an In-House IT Employee',
        paragraphs: [
          'The average salary for an IT support specialist in California ranges from $55,000 to $80,000 per year, depending on experience. But salary is only part of the cost. When you add employer payroll taxes (approximately 7.65%), health insurance contributions ($6,000–$12,000/year), paid time off, retirement contributions, and equipment, the fully loaded cost of a single mid-level IT employee typically reaches $75,000–$110,000 annually.',
          'Beyond compensation, there are productivity costs that rarely appear in budget conversations. A single IT employee cannot realistically cover all the specialised disciplines a modern business requires — network architecture, cybersecurity, cloud administration, compliance, and helpdesk support each represent distinct areas of expertise. One generalist cannot maintain current knowledge across all of them simultaneously.',
          'Coverage is the most significant structural limitation. A single employee is unavailable during evenings, weekends, holidays, and their own sick days and vacation. For a business that operates outside standard hours or cannot afford downtime, a solo IT hire creates a predictable gap in coverage that managed IT services inherently address.',
        ],
        tips: [
          'Request a fully loaded cost calculation — not just base salary — when evaluating in-house IT hire',
          'Consider how your IT needs scale: managed IT costs grow linearly with users, while in-house costs jump in large increments',
          'Evaluate coverage requirements honestly — if your business cannot afford weekend downtime, a single hire is not sufficient',
        ],
      },
      {
        heading: 'What Managed IT Actually Covers',
        paragraphs: [
          'A managed IT provider replaces the need for multiple internal hires by providing a team of specialists across the full range of IT disciplines. Rather than one generalist, you have access to network engineers, security analysts, cloud architects, and helpdesk technicians — each with current certifications in their specific domain.',
          'Proactive monitoring is the most significant difference in service model. Managed IT providers monitor your infrastructure 24/7 for hardware failures, security anomalies, performance degradation, and compliance gaps — identifying and resolving issues before they become business disruptions. In-house IT typically operates reactively: a problem is reported, then investigated.',
          'Vendor management, licensing compliance, hardware procurement, and software updates are all handled within the managed IT engagement. For a business without dedicated IT staff, these administrative tasks typically fall to whoever is available — usually a non-technical employee spending time on tasks outside their expertise.',
        ],
        tips: [
          'Ask prospective managed IT providers for their average response time metrics — not just the SLA promise',
          'Confirm that monitoring is active 24/7, not just during business hours',
          'Review what is explicitly included vs. billed separately — helpdesk calls, on-site visits, and project work are common exclusions in low-cost plans',
        ],
      },
      {
        heading: 'When In-House IT Makes Sense',
        paragraphs: [
          'In-house IT is the right choice for organisations with 100+ employees, highly specialised or regulated infrastructure, or operational requirements that demand full-time on-site presence. At that scale, the cost per user for managed IT may exceed the cost of dedicated internal staff, and the complexity may warrant a full internal team anyway.',
          'Hybrid models — where a managed IT provider handles monitoring, helpdesk, and security while an internal IT coordinator manages vendor relationships and day-to-day requests — are increasingly common in mid-market organisations. This approach captures the cost efficiency and specialist coverage of managed IT while maintaining an internal point of contact who understands the business deeply.',
          'For businesses under 50 employees, the managed IT model almost always delivers more capability per dollar than a comparable in-house hire. The crossover point varies by industry, location, and infrastructure complexity — but for most small and mid-sized businesses, the decision is not close.',
        ],
      },
    ],
    sources: [
      { label: 'U.S. Bureau of Labor Statistics — Computer Support Specialists', url: 'https://www.bls.gov/ooh/computer-and-information-technology/computer-support-specialists.htm' },
      { label: 'SHRM — Employee Benefits Survey', url: 'https://www.shrm.org/topics-tools/research/employee-benefits-survey' },
      { label: 'CompTIA — IT Industry Outlook', url: 'https://www.comptia.org/content/research/it-industry-trends-analysis' },
      { label: 'NIST — Small Business Cybersecurity Corner', url: 'https://www.nist.gov/cybersecurity/small-business-resources' },
    ],
    videos: [
      { title: 'What is an MSP? Managed Service Providers Explained', youtubeId: 'Ezwg1dKn1HM', channel: 'Cybrary' },
      { title: 'In-House IT vs. Managed Services', youtubeId: 'uSHIiBNoE0E', channel: 'Ntiva' },
    ],
  },

  // ── CONSUMER ─────────────────────────────────────────────────────────────
  {
    slug: 'workstation-assessment-and-service',
    title: 'Professional Computer Repair: What You Need to Know',
    badge: 'Hardware & Software Repair',
    metaDescription: 'Learn when to repair vs. replace your computer, how to identify hardware vs. software failures, and what to expect from a professional repair service.',
    excerpt: 'Fast, reliable computer repair for desktops and laptops. Certified technicians, transparent pricing, and a 90-day guarantee on all repairs.',
    icon: 'monitor',
    coverImage: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=1200&q=80',
    inlineImages: [
      { afterSection: 0, src: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1200&q=80', alt: 'Laptop screen and keyboard on a professional desk' },
      { afterSection: 1, src: 'https://images.unsplash.com/photo-1548092372-0d1bd40894a3?auto=format&fit=crop&w=1200&q=80', alt: 'Computer hardware components laid out on a surface' },
    ],
    pricing: 'Starting at $65',
    whatsIncluded: ['Free initial diagnosis', 'Certified technician service', 'Quality OEM or equivalent parts', '90-day repair warranty', 'Data backup before repairs begin', 'Post-repair system testing'],
    intro: 'Your computer is one of the most complex and frequently used pieces of technology you own. When something goes wrong — whether it refuses to boot, runs unbearably slow, or makes alarming noises — understanding the problem and knowing your options can save you both time and money.',
    sections: [
      {
        heading: 'Recognising the Warning Signs',
        paragraphs: [
          'Computers rarely fail without warning. Most hardware failures are preceded by symptoms that, if caught early, can prevent complete data loss or more expensive repairs. Unusual clicking or grinding noises from your hard drive, for example, almost always indicate imminent mechanical failure — every additional hour of use risks permanent data loss.',
          'Software symptoms like frequent crashes, blue screen errors (BSOD), and sudden reboots can point to failing RAM, an overheating CPU, or a corrupted operating system. Slow performance that worsens gradually is typically a software or storage issue, while sudden catastrophic slowdowns often indicate failing hardware.',
          'Overheating is one of the most commonly overlooked causes of computer problems. When a CPU or GPU runs too hot, the system throttles performance or shuts down to protect itself. If your fans are constantly running at full speed or the chassis is extremely hot to the touch, the thermal system needs attention before it causes permanent component damage.',
        ],
        tips: [
          'Listen for clicking, grinding, or beeping sounds — these are hardware distress signals',
          'Check that all vents are clear of dust and not blocked by surfaces like carpets or bedding',
          'Note exactly when problems occur (startup, after an update, only under load) — this information helps technicians diagnose faster',
        ],
      },
      {
        heading: 'Hardware Failures vs. Software Problems',
        paragraphs: [
          'One of the most important distinctions in computer repair is whether a problem is hardware or software in nature. Hardware failures involve physical components — a dead power supply, cracked solder joints on a motherboard, or a failed storage drive. These require physical intervention and component replacement. Software problems — corrupted system files, driver conflicts, malware infections — can often be resolved without touching any hardware.',
          'A useful test is to boot from an external USB drive or live operating system. If the computer runs normally from an external source, the underlying hardware is likely functional and the problem lives in the installed software or storage. If problems persist regardless of what you boot from, hardware is the likely culprit.',
          'Diagnosing hardware failures accurately requires specialised tools. Memory testers like MemTest86 can run for hours cycling through RAM to surface intermittent faults. SMART diagnostic tools read the internal health logs of hard drives and SSDs. Thermal monitoring software can reveal whether a component is running dangerously hot. A trained technician has access to all of these tools and knows how to interpret the results.',
        ],
      },
      {
        heading: 'When to Repair vs. Replace',
        paragraphs: [
          'The general rule of thumb is that repair costs exceeding 50% of the cost of a comparable replacement machine are rarely worth it — especially for computers older than 5–6 years. However, this calculation changes significantly when data recovery or a recent major purchase is involved. A two-year-old laptop with a failed SSD is almost always worth repairing; a seven-year-old desktop with a failed motherboard may not be.',
          'Component upgrades often provide more value than either repairing or replacing. Replacing a traditional hard drive (HDD) with a solid-state drive (SSD) can make a 6-year-old computer feel dramatically faster. Adding RAM to a machine running near its limit costs a fraction of a new computer and extends its useful life by years.',
          'If you are unsure, a professional diagnostic will give you an honest assessment. A reputable repair shop will tell you when replacement makes more sense — not just take your money for a repair that doesn\'t solve the underlying problem.',
        ],
        tips: [
          'If your machine is under 3 years old, repair is almost always the right call',
          'An SSD upgrade on an older machine costs $80–150 and can double perceived speed',
          'Always get a written quote before authorising any repair work',
        ],
      },
    ],
    sources: [
      { label: 'Microsoft Support — Tips to Improve PC Performance in Windows', url: 'https://support.microsoft.com/en-us/windows/tips-to-improve-pc-performance-in-windows-b3b3ef5b-5953-fb6a-2528-4bbed82fba96' },
      { label: 'Backblaze — Hard Drive & SSD Reliability Statistics (2024)', url: 'https://www.backblaze.com/blog/backblaze-drive-stats-for-2024/' },
      { label: 'iFixit — Laptop Repairability Scores', url: 'https://www.ifixit.com/repairability/laptop-repairability-scores' },
      { label: 'iFixit — PC Laptop Repair Guides', url: 'https://www.ifixit.com/Device/PC_Laptop' },
    ],
    videos: [
      { title: 'Computer Repair: Quickest Way to Diagnose Dead PC', youtubeId: 'dpPjCnSl-i0', channel: 'Britec09' },
      { title: 'How to make a slow computer fast again... for FREE!', youtubeId: 'DcDgV-1zDKs', channel: 'JayzTwoCents' },
    ],
  },

  // ── B2B ──────────────────────────────────────────────────────────────────
  {
    slug: 'cloud-migration-guide',
    title: 'Cloud Migration for Small Business: A Step-by-Step Planning Guide',
    badge: 'Cloud Solutions',
    metaDescription: 'A practical guide to planning and executing a cloud migration for small and mid-sized businesses — covering readiness assessment, migration strategies, and post-migration cost management.',
    excerpt: 'Moving to the cloud can cut costs, improve uptime, and enable remote work — but only if the migration is planned correctly. Here\'s how to do it right.',
    icon: 'cloud',
    coverImage: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80',
    inlineImages: [
      { afterSection: 0, src: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80', alt: 'Cloud computing infrastructure architecture visualization' },
      { afterSection: 1, src: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80', alt: 'Developer working with cloud systems and infrastructure' },
    ],
    pricing: 'From $2,500 per project',
    whatsIncluded: ['Cloud readiness assessment', 'Migration strategy and timeline', 'Workload migration and validation', 'Security and access configuration', 'Cost optimisation setup', 'Staff training and documentation'],
    intro: 'Cloud migration is one of the most impactful technology decisions a small or mid-sized business can make — and one of the easiest to get wrong. When executed well, moving workloads to the cloud reduces infrastructure costs, improves disaster recovery capabilities, and enables the flexible, remote-accessible work environment that modern businesses require. When executed poorly, it creates unexpected costs, performance degradation, and security gaps that can take months to untangle.',
    sections: [
      {
        heading: 'Assessing Your Cloud Readiness',
        paragraphs: [
          'A cloud migration should begin with an honest inventory of your current environment. This means cataloguing every application your business depends on, understanding how each connects to others, identifying which have vendor-provided cloud versions, and determining which workloads would benefit from moving to the cloud versus those that are better left on-premise. Not every workload belongs in the cloud — legacy applications with hardware dependencies, applications with very high data throughput requirements, and systems with specific regulatory constraints on data residency may be better served by on-premise or hybrid deployments.',
          'Connectivity is a critical readiness factor that businesses frequently overlook. Cloud-dependent operations are only as reliable as your internet connection. Before migrating core business systems, evaluate your current bandwidth, identify single points of failure in your connectivity, and consider whether a secondary connection or cellular failover is warranted. A 100Mbps symmetric fibre connection is a reasonable baseline for a 10-15 person team operating in a cloud-first environment.',
          'Licensing and cost modelling should be completed before migration begins, not after. Cloud services are often priced per-user or per-consumption, and the costs scale with usage in ways that on-premise infrastructure does not. A detailed cost model that accounts for storage, compute, data transfer, licensing, and support costs prevents the "cloud cost shock" that many businesses experience 3–6 months after migration when the bills arrive.',
        ],
        tips: [
          'Create an application dependency map before migration — moving one system without understanding what it connects to causes unexpected outages',
          'Request pricing for at least 3 years of projected usage — cloud costs that look favourable in year one may not be in year three as your data grows',
          'Identify which applications have SaaS alternatives before planning a lift-and-shift migration — SaaS is usually cheaper and easier to maintain',
        ],
      },
      {
        heading: 'Choosing the Right Migration Strategy',
        paragraphs: [
          'There is no single cloud migration strategy — the right approach depends on the specific workload being moved. The most common strategies are Rehost ("lift and shift"), Replatform ("lift and optimise"), and Refactor ("re-architect"). Rehosting moves an existing workload to the cloud without modification — it is the fastest approach and requires the least expertise, but typically delivers the least cost optimisation since the workload was designed for on-premise infrastructure.',
          'Replatforming makes targeted modifications to take advantage of cloud-native features without a full rebuild — for example, moving a database from a self-managed server to a fully managed cloud database service like AWS RDS or Azure SQL Database. This reduces operational overhead significantly without requiring application code changes. For most small business workloads, a combination of rehosting and replatforming is the most practical approach.',
          'For Microsoft-centric businesses (the majority of small businesses), the migration path often runs through Microsoft 365 and Azure. Email and collaboration moving to Exchange Online and Teams, file shares moving to SharePoint and OneDrive, and servers moving to Azure Virtual Machines or Azure Virtual Desktop represents a well-supported, well-documented migration path with abundant tooling and partner support from Microsoft.',
        ],
        tips: [
          'Pilot your migration with a non-critical workload first — establish your process and identify unexpected challenges before touching business-critical systems',
          'Schedule migrations outside business hours and have a rollback plan for each workload before beginning',
          'Document the new environment thoroughly as you go — cloud resources are easy to lose track of without good tagging and documentation practices',
        ],
      },
      {
        heading: 'Managing Cloud Costs After Migration',
        paragraphs: [
          'Cloud cost management is an ongoing discipline, not a one-time configuration. The most common source of unexpected cloud spend is over-provisioned resources — virtual machines sized for peak load running at 10% utilisation the other 22 hours of the day. All major cloud platforms provide cost management tools (AWS Cost Explorer, Azure Cost Management) that identify underutilised resources and recommend right-sizing. Reviewing these dashboards monthly is a best practice that most small businesses neglect.',
          'Reserved instances and savings plans offer significant discounts (40–70%) over on-demand pricing for workloads with predictable usage. If you know a virtual machine will run continuously for the next 1–3 years, committing to that usage through a reservation provides substantial cost savings. Conversely, development and test environments that only run during business hours should be configured to shut down automatically outside those hours.',
          'Data egress costs — the fees cloud providers charge for data leaving their platform — are a frequently overlooked budget item. Backing up large datasets to a different cloud provider, serving large files directly from cloud storage without a CDN, or heavy cross-region traffic can generate significant unexpected costs. Understanding the pricing model for your specific usage pattern before committing to an architecture prevents billing surprises.',
        ],
        tips: [
          'Set budget alerts in your cloud platform so you are notified before spending exceeds projections',
          'Tag all cloud resources with the department or project they belong to — this makes cost attribution and analysis practical',
          'Review cloud spend quarterly against the original cost model and adjust reservations as your usage patterns become clearer',
        ],
      },
    ],
    sources: [
      { label: 'Microsoft — Cloud Adoption Framework for Azure', url: 'https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/' },
      { label: 'AWS — Cloud Migration Guide', url: 'https://aws.amazon.com/cloud-migration/' },
      { label: 'NIST — Cloud Computing Overview', url: 'https://www.nist.gov/programs-projects/nist-cloud-computing-program-nccp' },
      { label: 'CompTIA — State of the Channel: Cloud Computing Trends', url: 'https://www.comptia.org/content/research/state-of-the-channel' },
    ],
    videos: [
      { title: 'What is Cloud Migration?', youtubeId: 'yWByEVB0VJE', channel: 'IBM Technology' },
      { title: 'What is Cloud Migration? A Beginner\'s Guide', youtubeId: 'ZITvsRAvCc8', channel: 'Simplilearn' },
    ],
  },

  // ── CONSUMER ─────────────────────────────────────────────────────────────
  {
    slug: 'endpoint-threat-remediation',
    title: 'Virus & Malware Removal: A Complete Guide',
    badge: 'Security & System Cleanup',
    metaDescription: 'Understand the different types of malware, how to recognise an infected system, and why professional removal is more effective than consumer antivirus alone.',
    excerpt: 'Complete virus, malware, ransomware, and spyware removal — with security setup to prevent future infections.',
    icon: 'shield',
    coverImage: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80',
    inlineImages: [
      { afterSection: 0, src: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1200&q=80', alt: 'Cybersecurity professional monitoring enterprise systems' },
      { afterSection: 1, src: 'https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=1200&q=80', alt: 'Digital credential and access management interface' },
    ],
    pricing: 'Starting at $75',
    whatsIncluded: ['Multi-tool threat scanning', 'Complete malware removal', 'System file repair', 'Browser cleanup and reset', 'Security software installation', 'Prevention tips and walkthrough'],
    intro: 'Malware — a term covering viruses, ransomware, spyware, adware, and a growing roster of other threats — has become one of the most significant technology challenges individuals and businesses face. In 2024, ransomware and extortion techniques were present in roughly one-third of all confirmed data breaches globally, according to Verizon\'s Data Breach Investigations Report. Understanding what you\'re dealing with is the first step toward protecting yourself.',
    sections: [
      {
        heading: 'The Major Types of Malware Explained',
        paragraphs: [
          'A virus is malicious code that attaches itself to legitimate files and spreads when those files are shared. Traditional viruses have largely been replaced by more sophisticated threats, but the term "virus" is still commonly used to describe any malware. Trojans disguise themselves as legitimate software — you install what appears to be a useful program, and malicious code comes along for the ride.',
          'Ransomware has become the most financially damaging category of malware. It encrypts your files and demands payment for the decryption key. Even if you pay, there\'s no guarantee your data will be restored. The best defence against ransomware is a robust, offline backup strategy — if your files are backed up, a ransomware attack becomes an inconvenience rather than a catastrophe.',
          'Spyware and keyloggers operate silently in the background, recording your keystrokes, stealing passwords, and transmitting personal information to attackers. These are particularly dangerous because they typically cause no visible symptoms until significant damage has already been done. Many identity theft cases originate from spyware infections that went undetected for weeks or months.',
        ],
        tips: [
          'Never open email attachments from unknown senders, even if they look like invoices or shipping notifications',
          'Ransomware most commonly enters through phishing emails and remote desktop connections with weak passwords',
          'Free software from unofficial sources is one of the leading vectors for trojan infection',
        ],
      },
      {
        heading: 'How to Recognise an Infected System',
        paragraphs: [
          'Some infections are immediately obvious — a ransomware note on your desktop or pop-up ads appearing where they shouldn\'t. Others are designed to remain invisible. Common signs of infection include sudden performance degradation, programs opening or closing without user input, browser homepage or search engine changing without your action, and unexplained network activity (high data usage even when you\'re not actively using the internet).',
          'Antivirus software that suddenly stops working or uninstalls itself is a major red flag. Sophisticated malware will actively disable security software to prevent detection and removal. Similarly, if Task Manager or other system utilities refuse to open, malware is likely blocking them to prevent analysis.',
          'If your system is sending spam emails without your knowledge, posting on social media accounts, or if your contacts are receiving suspicious messages that appear to come from you, your system — or more likely an account — has been compromised. These symptoms require immediate action, including changing passwords from a separate, clean device.',
        ],
      },
      {
        heading: 'Why Consumer Antivirus Isn\'t Always Enough',
        paragraphs: [
          'Consumer antivirus products work primarily through signature-based detection — they compare files against a database of known malware. This approach is effective for common, well-documented threats but fails against zero-day exploits (newly discovered vulnerabilities) and custom malware created specifically to evade standard detection tools.',
          'Professional malware removal uses multiple specialised tools — Malwarebytes, RKill, AdwCleaner, and others — in combination, often in Safe Mode where fewer processes are running and malware has fewer hiding places. Rootkits, which embed themselves deep in the operating system, can survive a standard antivirus scan but require targeted removal tools to eliminate.',
          'After removal, system file repair is essential. Many infections corrupt Windows system files during their activity. Running Windows System File Checker (SFC) and DISM repair tools restores these files to their original state. Skipping this step often leaves the system unstable even after the malware itself has been removed.',
        ],
        tips: [
          'Keep your operating system and all software updated — the majority of malware exploits known, already-patched vulnerabilities',
          'Enable two-factor authentication on all important accounts immediately',
          'A full reinstall of Windows may be the most reliable fix for severe infections — a professional can do this while preserving your data',
        ],
      },
    ],
    sources: [
      { label: 'CISA — #StopRansomware Guide', url: 'https://www.cisa.gov/stopransomware/ransomware-guide' },
      { label: 'Verizon — 2024 Data Breach Investigations Report', url: 'https://www.verizon.com/business/resources/reports/dbir.html' },
      { label: 'MalwareTips — How To Remove Malware From Windows (Full Guide)', url: 'https://malwaretips.com/blogs/malware-removal-guide-for-windows/' },
      { label: 'NIST — Cybersecurity Framework 2.0 for Small Business', url: 'https://www.nist.gov/itl/smallbusinesscyber/nist-cybersecurity-framework-0' },
    ],
    videos: [
      { title: 'Best Virus Removal Tools: Cleaning a deeply infected system', youtubeId: '-nkVzJ1V0rM', channel: 'PC Security Channel' },
      { title: 'Completely REMOVE malware/viruses from your PC with ONE free program!', youtubeId: '9hWwY8Lo4ag', channel: 'Ask Your Computer Guy' },
    ],
  },

  {
    slug: 'data-loss-and-recovery',
    title: 'Data Recovery: How to Respond When You Lose Critical Files',
    badge: 'Data Recovery & Restoration',
    metaDescription: 'Learn how data loss happens, what to do immediately after a drive failure, when professional recovery is necessary, and how to protect yourself with a solid backup strategy.',
    excerpt: 'Recover lost files, photos, and business data from failed hard drives, SSDs, RAID arrays, and USB drives with high success rates.',
    icon: 'database',
    coverImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    inlineImages: [
      { afterSection: 0, src: 'https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?auto=format&fit=crop&w=1200&q=80', alt: 'Storage media and hard drive components on a desk' },
      { afterSection: 1, src: 'https://images.unsplash.com/photo-1597852074816-d933c7d2b988?auto=format&fit=crop&w=1200&q=80', alt: 'Business data infrastructure and server workspace' },
    ],
    pricing: 'Starting at $149',
    whatsIncluded: ['Free device evaluation', 'Sector-by-sector drive imaging', 'Professional recovery tools', 'File integrity verification', 'Secure data delivery', 'No-recovery, no-fee options available'],
    intro: 'Data loss is more common and more devastating than most people expect. According to Backblaze\'s 2024 drive reliability statistics, annualized failure rates vary significantly by drive model and age — and that rate climbs meaningfully in years three and four of a drive\'s life. Whether caused by mechanical failure, accidental deletion, or malware, data loss demands an immediate and informed response — the wrong actions in the first minutes can make recovery impossible.',
    sections: [
      {
        heading: 'The Most Common Causes of Data Loss',
        paragraphs: [
          'Mechanical hard drive (HDD) failures account for a significant share of data loss cases. HDDs contain spinning magnetic platters and a read/write head that floats nanometres above the surface. Mechanical shock, power surges, or simple component wear can cause the head to contact the platter — a "head crash" — resulting in severe damage. The grinding or clicking sounds that accompany these failures are the head repeatedly attempting and failing to read from damaged sectors.',
          'Solid-state drives (SSDs) fail differently. They don\'t have moving parts, so they\'re more resistant to physical shock, but they can fail suddenly due to controller chip failure, NAND flash degradation (SSDs have a limited number of write cycles), or firmware corruption. SSD failures often provide no warning — the drive simply stops being recognised. This is why monitoring SSD health with tools that report on wear indicators is important as a drive ages.',
          'Logical failures — where the physical drive is intact but the file system or partition table has been corrupted — are actually the most recoverable category of data loss. Accidentally deleting files, formatting a drive, or a software crash during a write operation all fall into this category. The underlying data often still exists; it simply needs to be located and reconstructed by recovery software.',
        ],
        tips: [
          'If your drive starts clicking or grinding, power off the computer immediately — continued use will worsen physical damage',
          'Never attempt to open a hard drive outside of a certified cleanroom environment — even microscopic dust particles cause irreparable platter damage',
          'For accidental deletions, stop writing to the drive immediately — new data can overwrite deleted file sectors',
        ],
      },
      {
        heading: 'The Critical First Step: Stop Using the Drive',
        paragraphs: [
          'The single most important thing to do after a data loss event is to stop using the affected drive. When a file is deleted, the operating system marks that space as available for new data — but the original file data remains until something is written over it. Every photo you take, every document you save, and every application that auto-saves to that drive reduces the probability of successful recovery.',
          'For physically damaged drives, continued operation accelerates damage. A drive with a failing read/write head will score the magnetic platter with each revolution, permanently destroying the data in those sectors. A drive making abnormal noises should be powered off immediately and not powered on again until a professional recovery evaluation.',
          'The best first step is to attempt a sector-by-sector image clone of the drive before any recovery attempts. This creates a working copy of everything the drive can still read, and all subsequent recovery work is done on the clone rather than the original — protecting against further degradation during the process.',
        ],
      },
      {
        heading: 'When Professional Recovery is Necessary',
        paragraphs: [
          'Software-only data recovery tools (Recuva, Disk Drill, R-Studio) are appropriate for logical failures on healthy drives — accidental deletions, corrupted file systems, or formatted partitions. These tools scan drive sectors directly and reconstruct file structures. They are not appropriate for physically damaged drives and can worsen the situation if used on a drive with mechanical problems.',
          'Professional recovery services are necessary when the drive has suffered physical damage, the drive is not recognised by any computer, the drive is making abnormal noises, or when software recovery tools have already failed. Cleanroom recovery involves disassembling the drive in a controlled environment, replacing damaged components, and using specialised hardware and firmware tools to access and extract data.',
          'Recovery rates vary by failure type. Logical recoveries from healthy drives succeed in 90%+ of cases. Physical recoveries from mechanically damaged drives depend on the extent of platter scoring, but professional services often achieve 70–90% of data even on severely damaged media. RAID array recoveries require reconstruction of the array\'s striping or parity logic in addition to addressing any individual drive failures.',
        ],
        tips: [
          'Follow the 3-2-1 backup rule: 3 copies of your data, 2 different media types, 1 offsite (cloud counts)',
          'Cloud backup services like Backblaze Personal Backup cost less than $10/month and automatically protect all files',
          'Business critical data should have automated daily backups with tested restore procedures',
        ],
      },
    ],
    sources: [
      { label: 'Backblaze — Hard Drive & SSD Reliability Statistics (2024)', url: 'https://www.backblaze.com/blog/backblaze-drive-stats-for-2024/' },
      { label: 'Backblaze — Full Drive Test Data Downloads', url: 'https://www.backblaze.com/cloud-storage/resources/hard-drive-test-data' },
      { label: 'NIST SP 800-34 Rev.1 — Contingency Planning Guide for IT Systems', url: 'https://csrc.nist.gov/pubs/sp/800/34/r1/final' },
      { label: 'iFixit — PC Laptop Repair Guides', url: 'https://www.ifixit.com/Device/PC_Laptop' },
    ],
    videos: [
      { title: "Don't Waste $1000 on Data Recovery", youtubeId: 'eyr14_B230o', channel: 'Linus Tech Tips' },
      { title: 'A basic hard drive data recovery walkthrough at Rossmann Repair', youtubeId: 'hsaO71ZG8uY', channel: 'Louis Rossmann' },
    ],
  },

  {
    slug: 'laptop-hardware-service-guide',
    title: 'Laptop Repair: Common Failures and What to Expect',
    badge: 'Laptop Hardware Repair',
    metaDescription: 'Understand the most common laptop hardware failures, what causes them, when water damage requires emergency action, and how to evaluate repair costs vs. replacement.',
    excerpt: 'Comprehensive laptop repair services — screens, keyboards, batteries, hinges, ports, and motherboards for all major brands.',
    icon: 'laptop',
    coverImage: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80',
    inlineImages: [
      { afterSection: 0, src: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=1200&q=80', alt: 'Laptop keyboard and trackpad close-up view' },
      { afterSection: 1, src: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1200&q=80', alt: 'Professional working on a laptop at a desk' },
    ],
    pricing: 'Starting at $79',
    whatsIncluded: ['Free device inspection', 'OEM or equivalent quality parts', 'ESD-safe repair procedures', 'Full system test post-repair', '90-day parts and labour warranty', 'Data safety throughout repair'],
    intro: 'Laptops are precision engineering packed into thin, portable packages that endure more physical stress than virtually any other computing device. Dropped, sat on, spilled on, carried in bags, opened and closed thousands of times — the mechanical demands placed on a laptop are substantial. Understanding the most common failure modes helps you respond appropriately and set realistic expectations for repair outcomes.',
    sections: [
      {
        heading: 'The Most Common Laptop Hardware Failures',
        paragraphs: [
          'Screen failures are the most frequent laptop repair. Cracked display glass is obvious, but internal display failures — dead backlights, lines across the screen, flickering, or a completely black screen with a functioning backlight (visible when a torch is held close) — are equally common. Most laptop screens can be replaced in 30–90 minutes by an experienced technician and typically cost $80–200 including labour depending on the model and panel type.',
          'Battery degradation is universal and inevitable. Lithium-ion batteries have a finite number of charge cycles — typically 300–500 full cycles before capacity drops to 80% of original. A battery that no longer holds more than an hour of charge, bulges (a serious fire risk that requires immediate replacement), or causes the laptop chassis to feel warmer than usual near the battery compartment should be replaced promptly. Most laptop batteries cost $40–80 in parts.',
          'Keyboard and port failures are often caused by liquid contact, debris accumulation, or physical stress. Individual keys can be replaced on most laptops, but keyboards are usually replaced as a complete unit ($50–120 for most models). USB, HDMI, and charging ports that become loose or non-functional may require motherboard-level soldering if they are integrated into the board, which increases repair cost and complexity.',
        ],
        tips: [
          'A bulging battery is a fire and explosion risk — stop using the laptop immediately and bring it in for replacement',
          'Laptop hinge failures caught early are inexpensive; left unaddressed, they crack the chassis and can damage screen cables significantly increasing repair cost',
          'Most keyboard liquid damage is not instantly fatal — power off immediately, invert the laptop, and bring it in within hours',
        ],
      },
      {
        heading: 'Water Damage: The Importance of Acting Fast',
        paragraphs: [
          'Liquid spills are one of the most time-critical laptop repairs. When liquid contacts a powered circuit board, it creates conductive bridges between components that cause short circuits. The longer the board remains powered and wet, the more components are damaged by these shorts. The correct immediate response is to power off the laptop by holding the power button, remove the battery if accessible, and invert the laptop to drain liquid.',
          'The instinct to immediately test whether the laptop still works is understandable but counterproductive. Powering on a wet laptop even briefly can turn a recoverable situation into catastrophic board damage. The laptop should be brought to a technician who will open it, clean all corrosion with isopropyl alcohol, and allow complete drying before attempting to power it on in a controlled environment.',
          'Success rates for water damage repairs depend heavily on the type of liquid (water is more recoverable than juice or coffee due to the absence of sugars and acids) and time elapsed. A laptop treated within a few hours has a significantly better prognosis than one where the owner continued using it or waited days before seeking repair.',
        ],
      },
      {
        heading: 'Understanding Motherboard Repairs',
        paragraphs: [
          'The motherboard (or logic board in Apple terminology) is the most complex and expensive component in a laptop. It houses the CPU, GPU (in many models), RAM (often soldered), and connects every other component. Motherboard failures can manifest in many ways: the laptop powers on but shows no display, it won\'t power on at all, it randomly restarts, or specific functionality (WiFi, USB ports, audio) stops working.',
          'Component-level motherboard repair — identifying and replacing individual chips and components rather than replacing the entire board — requires specialised micro-soldering skills and equipment. Not all repair shops offer this service, but for expensive laptops, it can be significantly cheaper than a full board replacement. A skilled technician can replace a failed GPU chip, power management IC, or damaged connector for $150–300 versus $400–800+ for a new board.',
          'It\'s worth noting that some apparent motherboard failures are actually caused by upstream issues — a failing power adapter delivering unstable voltage, or a short circuit caused by a loose charging port — that damage the board over time. Addressing the root cause is as important as repairing the board itself.',
        ],
        tips: [
          'Use a quality surge protector — voltage spikes are a common cause of premature laptop board failure',
          'Avoid charging your laptop on fabric surfaces that restrict airflow to the charging circuitry',
          'For Apple laptops, check for recall or repair extension programmes — Apple has had several for specific board failures',
        ],
      },
    ],
    sources: [
      { label: 'iFixit — Laptop Repairability Scores', url: 'https://www.ifixit.com/repairability/laptop-repairability-scores' },
      { label: 'iFixit — PC Laptop Repair Guides', url: 'https://www.ifixit.com/Device/PC_Laptop' },
      { label: 'Microsoft Support — Surface Laptop Repair', url: 'https://www.ifixit.com/Device/Microsoft_Surface_Laptop' },
      { label: 'Backblaze — Hard Drive & SSD Reliability Statistics (2024)', url: 'https://www.backblaze.com/blog/backblaze-drive-stats-for-2024/' },
    ],
    videos: [
      { title: 'How To Diagnose A Motherboard – Basic Troubleshooting', youtubeId: 'p6BJvS3nrb0', channel: 'lapfix' },
      { title: 'Liquid Damaged Asus Laptop – Repair shop failed to do proper inspection', youtubeId: 'KsqbIhHm7Do', channel: 'NorthridgeFix' },
    ],
  },

  // ── B2B ──────────────────────────────────────────────────────────────────
  {
    slug: 'microsoft-365-for-business',
    title: 'Microsoft 365 for Business: Setup, Security, and Best Practices',
    badge: 'Cloud Productivity',
    metaDescription: 'A practical guide to deploying Microsoft 365 for your business — choosing the right plan, hardening your tenant\'s security, and getting maximum value from features most businesses underuse.',
    excerpt: 'Microsoft 365 is more than email. A properly configured and secured M365 tenant is the productivity and security foundation every modern business needs.',
    icon: 'mail',
    coverImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
    inlineImages: [
      { afterSection: 0, src: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&w=1200&q=80', alt: 'Business professional on a productivity tablet platform' },
      { afterSection: 1, src: 'https://images.unsplash.com/photo-1569012871812-f38ee64cd54c?auto=format&fit=crop&w=1200&q=80', alt: 'IT professional configuring business software environment' },
    ],
    pricing: 'From $22/user/mo (licensing + managed setup)',
    whatsIncluded: ['Tenant setup and domain configuration', 'User provisioning and email migration', 'Teams and SharePoint deployment', 'MFA and Conditional Access setup', 'OneDrive and backup configuration', 'Ongoing admin and licence management'],
    intro: 'Microsoft 365 has become the default productivity platform for small and mid-sized businesses — and for good reason. Exchange Online, Teams, SharePoint, OneDrive, and the full suite of Office applications, all managed through a single cloud-based admin centre, provide a complete collaboration and communication infrastructure that would have cost dramatically more to run on-premise a decade ago. But a default Microsoft 365 deployment leaves significant security and productivity value on the table. Getting the configuration right from the start — or cleaning up a poorly configured existing tenant — makes a substantial difference.',
    sections: [
      {
        heading: 'Choosing the Right Microsoft 365 Plan',
        paragraphs: [
          'Microsoft 365 comes in several business tiers: Microsoft 365 Business Basic ($6/user/mo), Business Standard ($12.50/user/mo), Business Premium ($22/user/mo), and various Enterprise plans. For most small businesses, the decision comes down to Business Standard vs. Business Premium. Business Standard includes the full Office apps, Exchange Online, Teams, and SharePoint. Business Premium adds Intune (device management), Azure AD P1 (Conditional Access), Microsoft Defender for Business, and Azure Information Protection — all of which are significant security capabilities.',
          'Business Premium is the right choice for any organisation that handles sensitive data, is subject to regulatory compliance requirements, or has employees accessing business resources from personal devices. The additional $9.50/user/mo over Business Standard pays for endpoint management and security tooling that would cost significantly more if purchased separately. For a 10-person team, the difference is $95/month for a materially stronger security posture.',
          'Microsoft\'s non-profit pricing programme offers qualified organisations up to 10 donated Business Premium licences and heavily discounted pricing beyond that. Healthcare organisations should also evaluate Microsoft 365 Business Premium against HIPAA requirements — Microsoft provides a HIPAA Business Associate Agreement and the platform\'s security controls support compliant deployments when properly configured.',
        ],
        tips: [
          'Do not purchase Microsoft 365 licences through a retail channel — work with a Microsoft Cloud Solution Provider (CSP) who can provide support and licence management',
          'Audit your current licence usage quarterly — unused licences for departed employees are the most common source of wasted M365 spend',
          'Business Premium\'s Intune licence is sufficient for most small businesses — there is no need to purchase standalone Intune or Defender unless you have specific enterprise requirements',
        ],
      },
      {
        heading: 'Security Hardening Your M365 Tenant',
        paragraphs: [
          'A default Microsoft 365 tenant is not a secure Microsoft 365 tenant. The most important immediate security configuration is enabling Multi-Factor Authentication for all users — Microsoft\'s own data indicates that MFA blocks over 99.9% of account compromise attempts. Microsoft 365 Business Premium includes Conditional Access policies that allow MFA to be enforced contextually (e.g., required when accessing from outside the office network or from unmanaged devices).',
          'Microsoft Secure Score is a built-in dashboard that measures your tenant\'s security configuration against Microsoft\'s recommended baseline and provides a prioritised list of improvements. A freshly created tenant typically scores in the 30–40% range. Reaching 70–80% Secure Score through straightforward configuration changes — enabling MFA, configuring anti-phishing policies, enabling audit logging, and disabling legacy authentication protocols — significantly reduces attack surface without adding user friction.',
          'Email security deserves specific attention. Business Email Compromise (BEC) — where attackers impersonate executives or vendors in email to authorise fraudulent wire transfers — is the highest-dollar-value cybercrime category and disproportionately targets small businesses. Configuring DMARC, DKIM, and SPF records for your domain prevents attackers from spoofing your email address. Enabling Microsoft Defender\'s anti-phishing and anti-impersonation policies catches attacks targeting your domain.',
        ],
        tips: [
          'Enable Security Defaults in Azure AD if you are not using Conditional Access — it provides baseline MFA enforcement at no additional cost',
          'Disable legacy authentication protocols (Basic Auth) in Exchange Online — they bypass MFA entirely and are a common attack vector',
          'Configure the Microsoft 365 Admin Centre\'s "Privacy and security" section to enable unified audit logging — required for incident investigation',
        ],
      },
      {
        heading: 'Features Most Businesses Are Leaving Unused',
        paragraphs: [
          'Microsoft Teams is the most underutilised component of most Microsoft 365 subscriptions. Beyond basic chat and video meetings, Teams supports persistent project channels, file collaboration with real-time co-authoring, task management via Planner integration, and automation through Power Automate. Businesses that continue using email for internal project communication and shared network drives for file storage are paying for Teams capabilities they\'re not using.',
          'SharePoint Online provides a scalable document management platform that replaces the need for an on-premise file server. Properly structured SharePoint libraries with appropriate permissions, version history, and metadata can replace a physical file server entirely while providing anywhere-access, granular permissions, and audit trails that a traditional file server cannot match. The migration from a file server to SharePoint Online is one of the highest-value infrastructure changes a small business can make.',
          'Power Automate (formerly Microsoft Flow) enables non-developers to build automated workflows connecting Microsoft 365 services and hundreds of external applications. Common business automations include automatic SharePoint filing of email attachments, Teams notifications when a form is submitted, approval workflows for purchase orders, and automated onboarding tasks when a new user is created in Azure AD. These automations are included in most Microsoft 365 plans and require no coding to implement.',
        ],
        tips: [
          'Migrate your shared drive to SharePoint before deploying Teams — Teams channels use SharePoint as their document storage backend',
          'Create a Microsoft 365 governance policy before rollout — deciding naming conventions, channel policies, and guest access rules prevents configuration sprawl',
          'Use Microsoft\'s Adoption Hub resources to drive user adoption — technology that employees don\'t use provides no ROI regardless of how well it\'s configured',
        ],
      },
    ],
    sources: [
      { label: 'Microsoft — Microsoft 365 Business Plans and Pricing', url: 'https://www.microsoft.com/en-us/microsoft-365/business/compare-all-plans' },
      { label: 'Microsoft — Microsoft Secure Score Documentation', url: 'https://learn.microsoft.com/en-us/microsoft-365/security/defender/microsoft-secure-score' },
      { label: 'CISA — Microsoft 365 Security Best Practices', url: 'https://www.cisa.gov/sites/default/files/publications/CISA_MS-ISAC_Microsoft365_Guide.pdf' },
      { label: 'Microsoft — HIPAA and the Microsoft Cloud', url: 'https://learn.microsoft.com/en-us/compliance/regulatory/offering-hipaa-hitech' },
    ],
    videos: [
      { title: 'Set up Microsoft 365 for Business', youtubeId: 'vwu9397OjHs', channel: 'Microsoft' },
      { title: 'Protect Your Business: 7 Security Best Practices for Microsoft 365', youtubeId: 'HHokwtSXrv0', channel: 'Microsoft 365' },
    ],
  },

  // ── CONSUMER ─────────────────────────────────────────────────────────────
  {
    slug: 'display-component-replacement',
    title: 'Laptop & Device Screen Replacement: Everything You Need to Know',
    badge: 'Display & Screen Repair',
    metaDescription: 'A guide to screen replacement for laptops and tablets — display types, what affects cost, the risks of DIY replacement, and what professional replacement involves.',
    excerpt: 'Cracked, flickering, or dead display? We replace screens for laptops, tablets, and all-in-one computers — same day in most cases.',
    icon: 'screen',
    coverImage: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?auto=format&fit=crop&w=1200&q=80',
    inlineImages: [
      { afterSection: 0, src: 'https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?auto=format&fit=crop&w=1200&q=80', alt: 'Display panel and screen components on a workbench' },
      { afterSection: 1, src: 'https://images.unsplash.com/photo-1504707748692-419802cf939d?auto=format&fit=crop&w=1200&q=80', alt: 'IT workspace with multiple display screens' },
    ],
    pricing: 'Starting at $89',
    whatsIncluded: ['Model-specific screen sourcing', 'Professional ESD-safe installation', 'Touch calibration (where applicable)', 'Dead pixel and brightness testing', '90-day display warranty', 'Same-day service for most models'],
    intro: 'A damaged or failed screen is one of the most disabling hardware problems a laptop user can experience. The display is the primary interface between user and machine — without it, the device is effectively unusable. Fortunately, screen replacement is also one of the most straightforward laptop repairs, and most models can be completed in under an hour by an experienced technician.',
    sections: [
      {
        heading: 'Understanding Laptop Display Types',
        paragraphs: [
          'Not all laptop screens are equal. TN (Twisted Nematic) panels are the oldest technology — fast refresh rates but poor colour accuracy and narrow viewing angles. IPS (In-Plane Switching) panels offer significantly better colour accuracy and viewing angles and have become standard in most modern mid-range to premium laptops. OLED displays, now appearing in premium consumer laptops and MacBooks, offer perfect blacks, exceptional contrast, and wide colour gamut — but are also the most expensive to replace.',
          'Screen resolution matters for replacement matching. Installing a 1080p replacement panel in a chassis designed for a 4K display will work but will look noticeably inferior. Reputable repair services source screens that match the original panel\'s resolution, brightness, and colour space specifications rather than substituting lower-grade panels to cut costs.',
          'Touch screens add another layer of complexity. Many modern laptops and 2-in-1 devices integrate the touch digitiser directly into the display assembly. Replacing only the glass on these assemblies without specialist equipment risks destroying the digitiser, turning a glass-only repair into a full display assembly replacement.',
        ],
        tips: [
          'Ask whether the replacement screen matches your original panel\'s resolution and colour gamut — not just the physical size',
          'Verify the repair shop tests for dead pixels, backlight uniformity, and touch calibration before returning your device',
          'If your screen is flickering rather than cracked, the display cable may be the issue — often a $30–60 repair rather than a full screen replacement',
        ],
      },
      {
        heading: 'The Hidden Risks of DIY Screen Replacement',
        paragraphs: [
          'Laptop screen replacement looks deceptively straightforward in tutorial videos. In practice, it involves disconnecting fragile ribbon cables with tiny ZIF connectors that break if folded incorrectly, removing adhesive-secured bezels that crack if pried at the wrong angle, and handling the replacement panel without touching the display surface. The static sensitivity of display components also means ESD damage is a real risk without proper grounding equipment.',
          'The risk profile is higher still for touch screen assemblies. The digitiser cable routing on many models requires near-complete disassembly to access correctly, and the adhesive bonding between the glass and panel needs specific UV-curing adhesive and equipment to achieve a bubble-free, water-resistant seal. Improper bonding results in display delamination within weeks.',
          'The cost of a professional screen replacement — typically $90–200 for most laptops — needs to be weighed against the cost of the screen panel itself (which you would buy for a DIY repair) plus the risk of compounding the damage. If a DIY attempt breaks the display cable, the repair cost jumps significantly.',
        ],
      },
      {
        heading: 'What Affects Screen Replacement Cost',
        paragraphs: [
          'The primary cost driver is the screen assembly itself. Budget laptop panels can be sourced for $30–60, while premium IPS displays for mid-range laptops typically run $80–150. OLED panels for premium devices like Dell XPS, LG Gram, or MacBook Pro are $200–400 or more for the display assembly alone. Labour is relatively consistent at $40–80 for most screen replacements.',
          'Brand and model exclusivity affects parts availability significantly. Common business laptops like ThinkPads and Dell Latitudes have abundant aftermarket panel supply. Niche models, older machines, or specialised displays may require original manufacturer parts at a premium.',
          'Warranty status is worth checking before authorising a repair. Screen damage is generally not covered under standard manufacturer warranties, but some premium accidental damage programmes and credit card purchase protection plans cover screen repairs.',
        ],
        tips: [
          'Screen protectors prevent surface scratching that degrades display quality over time',
          'If your laptop is used on a desk primarily, an external monitor costs less than a screen replacement and gives you a larger working area',
          'Always ask for the old panel back after replacement — verify the part was actually replaced',
        ],
      },
    ],
    sources: [
      { label: 'iFixit — Laptop Repairability Scores and Guides', url: 'https://www.ifixit.com/repairability/laptop-repairability-scores' },
      { label: 'iFixit — PC Laptop Repair Help', url: 'https://www.ifixit.com/Device/PC_Laptop' },
      { label: 'LaptopScreen.com — Screen Replacement Tutorial Videos', url: 'https://www.laptopscreen.com/English/video/' },
      { label: 'Microsoft Surface — Laptop Repair Guides (iFixit)', url: 'https://www.ifixit.com/Device/Microsoft_Surface_Laptop' },
    ],
    videos: [
      { title: 'CNET How To – Replace a broken laptop screen', youtubeId: 'nstes4o3WRk', channel: 'CNET' },
      { title: 'Laptop Display Screen Problem | How to troubleshoot and repair it yourself!', youtubeId: '2uOZbmbIHDA', channel: 'Torogi Pro' },
    ],
  },

  {
    slug: 'network-deployment-and-security',
    title: 'Home and Business Network Setup: A Practical Guide',
    badge: 'Networking & Connectivity',
    metaDescription: 'Learn how to plan a home or business network, understand the difference between routers, access points, and mesh systems, and why network security matters more than most people realise.',
    excerpt: 'Home and office network setup, router configuration, WiFi range optimisation, and network security hardening by certified network technicians.',
    icon: 'wifi',
    coverImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=80',
    inlineImages: [
      { afterSection: 0, src: 'https://images.unsplash.com/photo-1623282033815-40b05d96c903?auto=format&fit=crop&w=1200&q=80', alt: 'Server rack and network infrastructure in data center' },
      { afterSection: 1, src: 'https://images.unsplash.com/photo-1555421689-d68471e189f2?auto=format&fit=crop&w=1200&q=80', alt: 'Network access and digital security controls' },
    ],
    pricing: 'Starting at $99',
    whatsIncluded: ['On-site survey and network plan', 'Router and access point configuration', 'WiFi security hardening', 'Guest network setup', 'Full coverage and speed testing', 'Device connection walkthrough'],
    intro: 'Your network is the foundation on which every internet-connected device in your home or business operates. A poorly configured network doesn\'t just mean slow streaming — it means security vulnerabilities that expose every connected device to potential attack, dead zones that make areas of your building unusable, and bottlenecks that limit the performance of otherwise capable hardware.',
    sections: [
      {
        heading: 'Home Networks vs. Business Networks: Key Differences',
        paragraphs: [
          'Home networks typically support 5–30 devices — smartphones, laptops, smart TVs, streaming devices, and smart home equipment. A quality consumer router with good WiFi 6 support handles this load well. The primary concerns are coverage (eliminating dead zones), performance (supporting 4K streaming and video calls simultaneously), and basic security (strong passwords, updated firmware).',
          'Business networks have fundamentally different requirements. Multiple employees using bandwidth-intensive applications simultaneously requires quality of service (QoS) configuration to prioritise critical traffic. Guest network isolation ensures visiting clients can access the internet without reaching internal servers or workstations. VLANs allow different departments or device categories to be logically separated on the same physical infrastructure.',
          'Businesses also need to consider redundancy. A consumer router failing at home is an inconvenience; the same event at a business can mean hours of productivity loss. Professional network solutions typically include cellular failover — if the primary internet connection goes down, the network automatically switches to a cellular backup connection with minimal disruption.',
        ],
        tips: [
          'Put IoT devices (smart TVs, thermostats, cameras) on a separate VLAN or guest network — they often have poor security',
          'A dedicated wired connection for desktops, NAS devices, and printers eliminates WiFi congestion for high-usage devices',
          'Enable automatic firmware updates on your router — most security vulnerabilities are exploited in the gap between patch release and user update',
        ],
      },
      {
        heading: 'Solving Dead Zones: Mesh Systems vs. Access Points',
        paragraphs: [
          'Dead zones — areas of a building with no or poor WiFi coverage — are almost universally caused by one of three things: insufficient access point placement, physical obstacles (concrete walls, metal structures, appliances), or interference from neighbouring networks.',
          'WiFi extenders (repeaters) are the most commonly purchased solution and typically the worst. They rebroadcast the WiFi signal but cut bandwidth roughly in half for every hop, create a separate network SSID that devices must manually switch between, and introduce additional latency.',
          'Mesh WiFi systems use multiple nodes that communicate on a dedicated backhaul channel, maintaining a single SSID and handling device handoff automatically as you move through the space. For larger spaces or buildings with many obstacles, a wired access point setup — where each AP connects back to the router via ethernet — delivers the best possible performance and is the standard for business deployments.',
        ],
      },
      {
        heading: 'Network Security: More Critical Than Most People Realise',
        paragraphs: [
          'The default state of most consumer routers shipped by ISPs is insecure. Default admin passwords are publicly documented, WPS has known cryptographic vulnerabilities, remote management is often enabled, and firmware updates are rarely applied automatically.',
          'WPA3 is the current WiFi security standard and should be used where all devices support it. WPA2-AES remains acceptable; WPA2-TKIP and WEP are cryptographically broken and should never be used.',
          'For businesses, a properly configured firewall with intrusion detection is non-negotiable. Network monitoring tools that alert on unusual traffic patterns provide early warning of both security incidents and hardware failures.',
        ],
        tips: [
          'Change your router admin password and WiFi password from defaults immediately upon setup',
          'Disable UPnP on your router — it allows devices to automatically open ports, which is a common attack vector',
          'A monthly router reboot clears cached memory and applies any pending configuration changes',
        ],
      },
    ],
    sources: [
      { label: 'Wi-Fi Alliance — WPA3 Security Overview', url: 'https://www.wi-fi.org/discover-wi-fi/security' },
      { label: 'NIST SP 800-97 — Establishing Wireless Robust Security Networks', url: 'https://csrc.nist.gov/pubs/sp/800/97/final' },
      { label: 'CISA — Home Network Security Tips', url: 'https://www.cisa.gov/news-events/news/securing-your-home-network' },
      { label: 'Cisco — How to Set Up a Router', url: 'https://www.cisco.com/c/en/us/solutions/small-business/resource-center/networking/how-to-set-up-router.html' },
    ],
    videos: [
      { title: 'Home Network For Beginners – What You NEED And How To Hook It ALL Up', youtubeId: 'UxEzGpbc64Q', channel: 'Steve DOES' },
      { title: 'your home router SUCKS!! (use pfSense instead)', youtubeId: 'lUzSsX4T4WQ', channel: 'NetworkChuck' },
    ],
  },

  {
    slug: 'off-site-it-services-guide',
    title: 'Remote Computer Support: How It Works and When to Use It',
    badge: 'Remote IT Support',
    metaDescription: 'Understand how professional remote support works, what it can and cannot fix, how to verify a session is secure, and when remote support is the right choice.',
    excerpt: 'Fast remote support for software issues, virus removal, system slowdowns, and troubleshooting — resolved in minutes from anywhere.',
    icon: 'remote',
    coverImage: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=1200&q=80',
    inlineImages: [
      { afterSection: 0, src: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80', alt: 'IT professional delivering services via laptop' },
      { afterSection: 1, src: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80', alt: 'Engineer working on business systems infrastructure' },
    ],
    pricing: 'Starting at $55',
    whatsIncluded: ['Fully encrypted remote session', 'Live screen sharing (you watch everything)', 'Issue diagnosis and resolution', 'No software installed permanently', 'Session summary and recommendations', 'Same-day appointments available'],
    intro: 'Remote technical support has become one of the most efficient ways to resolve software issues, configuration problems, and performance problems without the time and inconvenience of an in-person visit. Modern remote support tools provide secure, encrypted connections that allow a technician to see and control your screen in real time — resolving many issues in a fraction of the time an on-site visit would require.',
    sections: [
      {
        heading: 'How Secure Remote Support Works',
        paragraphs: [
          'Professional remote support uses dedicated tools — TeamViewer, Splashtop, ConnectWise Control, or similar — that establish an encrypted connection between the technician\'s computer and yours. These tools do not leave a persistent backdoor; the connection exists only while the session is active and is terminated when the session ends. You receive a session code that the technician enters to connect — the connection cannot be initiated from the technician\'s side without your active participation.',
          'Throughout the session, you see everything the technician does on your screen in real time. You can terminate the session at any moment by closing the remote tool or clicking disconnect. This full transparency is a fundamental feature of legitimate remote support.',
          'Connection security should be verifiable. Legitimate remote support tools use TLS 1.2 or 1.3 encryption — the same standard used by online banking. The session should require a one-time access code that expires after the session ends.',
        ],
        tips: [
          'Always initiate contact with support services yourself — legitimate companies never call you unsolicited to warn about viruses or problems',
          'Never provide credit card information during a remote session or give access to your banking applications',
          'Ask for a session recording if you want to review exactly what was done on your computer',
        ],
      },
      {
        heading: 'What Remote Support Can and Cannot Fix',
        paragraphs: [
          'Remote support is highly effective for software-category problems: virus and malware removal, operating system errors, driver installation and conflicts, email and application configuration, browser issues, printer and peripheral setup, Windows Update failures, account lockouts, and general performance optimisation.',
          'Remote support cannot directly address hardware failures — a technician cannot replace a dead hard drive or reseat a loose RAM module through a remote session. However, remote diagnostics can identify hardware problems: running SMART tests remotely reveals drive health, remote access to Event Viewer surfaces hardware error logs.',
          'Remote support also requires that the computer be sufficiently functional to boot and connect to the internet. Machines that won\'t POST, can\'t load the operating system, or have no network connectivity require in-person or depot repair.',
        ],
      },
      {
        heading: 'Recognising Remote Support Scams',
        paragraphs: [
          'Tech support scams are among the most common fraud categories targeting computer users. The scenario typically involves a phone call claiming to be from Microsoft, Apple, or a security company, warning that your computer is "sending error signals" or "has been compromised."',
          'Microsoft, Apple, Google, and legitimate software companies do not make unsolicited phone calls about computer problems. They do not display pop-ups with phone numbers to call. If you receive such a call or see such a warning, the safest action is to hang up and close the browser.',
          'If you are uncertain whether a support interaction is legitimate, ask for the technician\'s full name, company name, and a callback number. Search for the company independently and call back through a number you found yourself rather than one provided by the caller.',
        ],
        tips: [
          'Windows Task Manager (Ctrl+Shift+Esc) can force-close a fake warning browser window that won\'t respond to normal closing',
          'Report tech support scam calls to the FTC at reportfraud.ftc.gov',
          'Consider call-blocking apps or services if you or a family member receive frequent scam calls',
        ],
      },
    ],
    sources: [
      { label: 'FTC — How To Spot, Avoid, and Report Tech Support Scams', url: 'https://consumer.ftc.gov/articles/how-spot-avoid-and-report-tech-support-scams' },
      { label: 'FTC — Tech Support Scams (Business Guidance)', url: 'https://www.ftc.gov/business-guidance/small-businesses/cybersecurity/tech-support-scams' },
      { label: 'CISA — #StopRansomware and Social Engineering Guidance', url: 'https://www.cisa.gov/stopransomware' },
      { label: 'Microsoft — How to recognise a Microsoft support scam', url: 'https://support.microsoft.com/en-us/windows/protect-yourself-from-tech-support-scams-2ebf91bd-f94c-2a8a-e541-f5c800d18435' },
    ],
    videos: [
      { title: 'Tech Support Scams Explained', youtubeId: 'KuBqn1f9uKc', channel: 'Techquickie' },
      { title: 'How To Recognize and Avoid Tech Support Scams', youtubeId: 'QOSFk1OBuCY', channel: 'Britec09' },
    ],
  },

  // ── B2B ──────────────────────────────────────────────────────────────────
  {
    slug: 'it-infrastructure-planning',
    title: 'IT Infrastructure Planning for Business Growth: What to Build First',
    badge: 'IT Infrastructure',
    metaDescription: 'A practical guide to IT infrastructure planning for small and mid-sized businesses — auditing your current state, building a scalable foundation, and deciding when to upgrade vs. rebuild.',
    excerpt: 'A well-planned IT infrastructure prevents the costly "fix it when it breaks" cycle. Here\'s how to assess what you have and build what your business actually needs.',
    icon: 'server',
    coverImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
    inlineImages: [
      { afterSection: 0, src: 'https://images.unsplash.com/photo-1504707748692-419802cf939d?auto=format&fit=crop&w=1200&q=80', alt: 'Business IT infrastructure planning session' },
      { afterSection: 1, src: 'https://images.unsplash.com/photo-1610986603166-f78428624e76?auto=format&fit=crop&w=1200&q=80', alt: 'Enterprise network and server environment' },
    ],
    pricing: 'From $1,500 assessment',
    whatsIncluded: ['Current state infrastructure audit', 'Technology gap analysis', 'Infrastructure roadmap (1–3 year)', 'Hardware and software recommendations', 'Budget planning and phasing', 'Implementation project management'],
    intro: 'Most small businesses build their IT infrastructure reactively — adding equipment and services as needs arise, without a coherent long-term plan. The result is a patchwork of mismatched hardware, overlapping software licences, unsupported systems, and security gaps. By the time the problem is obvious, the cost of remediation is significantly higher than a planned approach would have been. IT infrastructure planning is not a luxury reserved for enterprise organisations — it is the most cost-effective way for a growing business to manage technology.',
    sections: [
      {
        heading: 'Auditing Your Current IT State',
        paragraphs: [
          'An effective infrastructure plan starts with an accurate picture of what exists. This means a complete hardware inventory — every server, workstation, laptop, network device, and peripheral — documented with model, age, specification, and current status. It also means a software inventory covering every application in use, the licences behind it, renewal dates, and whether it\'s still vendor-supported. Many businesses are surprised to find they\'re running software on operating systems that reached end-of-support years ago — a significant security liability.',
          'Network documentation is frequently the weakest area for small businesses. A proper network diagram showing every device, VLAN, firewall rule, and internet circuit is essential for troubleshooting, security auditing, and planning changes. Businesses that lack this documentation typically discover its absence at the worst possible time — during an outage or incident when speed of response matters most.',
          'The audit should also identify single points of failure — components or services where a single failure would cause significant business disruption. Common examples include a single internet circuit with no failover, a critical application running on an ageing server with no redundancy, or backups that exist but have never been tested. Identifying these dependencies is the foundation of any resilience planning.',
        ],
        tips: [
          'Use a RMM tool or free asset discovery tool to auto-generate your hardware and software inventory — manual cataloguing misses devices',
          'Document your internet circuit details (ISP, contract renewal date, circuit ID) — you will need these during an outage when you are calling ISP support',
          'Flag any hardware over 5 years old and any software running on end-of-life operating systems — these are your highest-risk assets',
        ],
      },
      {
        heading: 'Building a Scalable Foundation',
        paragraphs: [
          'The foundational layer of a well-designed small business IT environment consists of three components: a reliable, secured network; a managed identity and access system; and a tested data protection strategy. These three elements underpin everything else. A business that has these foundations in place can add applications, users, and capabilities efficiently. A business without them accumulates technical debt with every addition.',
          'For identity and access management, Microsoft Entra ID (formerly Azure Active Directory) is the standard for Microsoft-centric businesses and integrates with thousands of applications through SAML and OAuth. Centralised identity management means a single place to provision and deprovision users, enforce MFA, apply Conditional Access policies, and manage device compliance — eliminating the per-application account management that creates both security gaps and administrative overhead.',
          'Data protection — backup and recovery — must be designed for your actual recovery objectives, not just implemented as an afterthought. Recovery Time Objective (RTO) defines how quickly systems must be restored after a failure. Recovery Point Objective (RPO) defines the maximum acceptable data loss. A business that cannot function without its CRM for more than 4 hours has an RTO of 4 hours for that system — and its backup and recovery solution must be capable of meeting that objective. Most small business backup solutions are not tested against their recovery objectives.',
        ],
        tips: [
          'Design your network with managed switches and separate VLANs from the beginning — retrofitting segmentation into a flat network is expensive and disruptive',
          'Document your RTO and RPO for each business-critical system before choosing backup solutions — work backwards from business requirements',
          'Centralise identity management before rolling out new applications — adding SSO after the fact requires re-configuring each application',
        ],
      },
      {
        heading: 'When to Upgrade vs. When to Replace',
        paragraphs: [
          'The decision to upgrade existing infrastructure versus replacing it entirely is one of the most consequential in IT planning — and one where both over-investment and under-investment are common mistakes. The key factors are the remaining useful life of the asset, its upgrade ceiling (the maximum specification it can reach through upgrades), and the cost of the risk it presents if it fails. A server running end-of-life software on hardware approaching five years old may have limited useful upgrade paths and represents a compounding liability.',
          'Networking hardware typically has a longer useful life than compute hardware, but it does age. Older switches and routers may lack support for current security protocols, may not support the throughput required by cloud-dependent workflows, and are often no longer receiving firmware security updates. Incremental upgrades that extend the life of fundamentally insecure or under-specced networking equipment tend to delay rather than solve the problem.',
          'The most cost-effective approach to infrastructure planning is a rolling replacement schedule that replaces a portion of the hardware estate each year rather than facing a large capital expenditure when everything ages out simultaneously. A 3-year replacement cycle for workstations, 5 years for servers, and 7 years for networking infrastructure provides predictable annual costs, keeps the environment supported, and prevents the cliff-edge scenario where everything needs replacement at once.',
        ],
        tips: [
          'Calculate the annual cost of an infrastructure plan over 3 years — the per-year cost of proactive replacement is almost always lower than reactive replacement after a failure',
          'Consider leasing or device-as-a-service models for workstations — they convert capital expenditure to operational expenditure and include planned replacement',
          'Before replacing a server, evaluate whether its workloads belong in the cloud — a server refresh is the right time to assess whether on-premise infrastructure is still the right model',
        ],
      },
    ],
    sources: [
      { label: 'NIST — Small Business Information Security: The Fundamentals', url: 'https://www.nist.gov/publications/small-business-information-security-fundamentals' },
      { label: 'CompTIA — IT Infrastructure Best Practices', url: 'https://www.comptia.org/content/guides/what-is-it-infrastructure' },
      { label: 'Microsoft — Azure Well-Architected Framework', url: 'https://learn.microsoft.com/en-us/azure/well-architected/' },
      { label: 'CISA — Known Exploited Vulnerabilities Catalog', url: 'https://www.cisa.gov/known-exploited-vulnerabilities-catalog' },
    ],
    videos: [
      { title: 'Small Office / Home Office Network Build – Selecting Gear and Subnets', youtubeId: '1cRtIp8SBSs', channel: 'Crosstalk Solutions' },
      { title: 'Small Business Network Tour', youtubeId: 'hwvywTzygsY', channel: 'Crosstalk Solutions' },
    ],
  },

  // ── CONSUMER ─────────────────────────────────────────────────────────────
  {
    slug: 'system-performance-engineering',
    title: 'Why Your Computer Slows Down (And How to Fix It)',
    badge: 'Performance Optimisation',
    metaDescription: 'Understand why computers slow down over time, which optimisations actually make a measurable difference, and when an upgrade makes more sense than a clean-up.',
    excerpt: 'Make your slow computer fast again. We clean junk files, optimise startup programs, repair the registry, and tune your system for peak performance.',
    icon: 'zap',
    coverImage: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=1200&q=80',
    inlineImages: [
      { afterSection: 0, src: 'https://images.unsplash.com/photo-1548092372-0d1bd40894a3?auto=format&fit=crop&w=1200&q=80', alt: 'Computer hardware and processor components' },
      { afterSection: 1, src: 'https://images.unsplash.com/photo-1535191042502-e6a9a3d407e7?auto=format&fit=crop&w=1200&q=80', alt: 'System performance benchmarking environment' },
    ],
    pricing: 'Starting at $59',
    whatsIncluded: ['Startup optimisation', 'Deep junk file cleanup', 'Registry scan and repair', 'Malware check and removal', 'Drive health check', 'Before/after performance report'],
    intro: 'A computer that took 30 seconds to boot when new but now takes 5 minutes is a near-universal experience. This performance degradation isn\'t inevitable or permanent — it has identifiable causes and, in most cases, effective solutions. Understanding why computers slow down helps you focus on the interventions that actually make a measurable difference rather than the many "optimisation" tools that promise much and deliver little.',
    sections: [
      {
        heading: 'The Real Reasons Computers Slow Down',
        paragraphs: [
          'Startup program accumulation is the single biggest contributor to slow boot times on Windows machines. Every application installed on a computer has the option to add itself to the startup sequence, and most do. After 3–4 years of normal software installation, it\'s common to find 30–50 applications attempting to load at startup — antivirus tools, cloud sync clients, printer utilities, software updaters, browser extensions, and more.',
          'Fragmentation affects traditional hard disk drives (HDDs) in a way that solid-state drives (SSDs) are immune to. As files are created, modified, and deleted, HDDs store file fragments in non-contiguous sectors. Reading a heavily fragmented file requires the read head to physically seek across the disk, adding latency.',
          'Windows feature updates accumulate temporary files, old installation packages, and system restore points that consume significant disk space. A drive running near capacity slows performance because Windows requires free space to operate efficiently — as a rule of thumb, a drive should remain below 85–90% full for optimal performance.',
        ],
        tips: [
          'Open Task Manager (Ctrl+Shift+Esc) > Startup tab to see which applications load at boot — disable anything you don\'t need immediately',
          'Running Disk Cleanup as administrator unlocks the "Clean up system files" option which removes Windows Update leftovers',
          'Check available storage — if you\'re above 85% full on your primary drive, storage reclamation should be the first priority',
        ],
      },
      {
        heading: 'Optimisations That Actually Work',
        paragraphs: [
          'Startup management delivers the most immediate and measurable improvement. Reducing startup applications from 40 to 10 can improve boot time by 2–4 minutes on affected machines and reduces background RAM consumption throughout the day.',
          'Malware detection and removal is frequently the explanation for persistent slowdowns that cleaning and startup management don\'t resolve. Crypto-mining malware in particular pins CPU and GPU utilisation at high levels continuously, causing thermal throttling and dramatically degrading performance across all applications.',
          'SSD upgrades deserve a category of their own because their performance impact is transformational rather than incremental. Replacing a 5400 RPM hard drive with an SSD is typically the single most impactful hardware upgrade a computer can receive — boot times drop from 2–5 minutes to 10–30 seconds, application launch times improve 3–10x.',
        ],
      },
      {
        heading: 'When Cleaning Isn\'t Enough: Upgrade vs. Replace',
        paragraphs: [
          'Optimisation has limits. A computer with 4GB of RAM running Windows 11 will be slow regardless of how clean the system is — modern operating systems and applications simply require more. The question is whether the hardware can be upgraded economically.',
          'A clean Windows installation — formatted drive, fresh OS, reinstalled applications — eliminates all accumulated software cruft in one operation. It\'s the most thorough performance restoration possible and is appropriate when incremental optimisation hasn\'t resolved the problem.',
          'CPU performance is not upgradeable in most modern laptops (the CPU is soldered to the board), and desktop CPU upgrades are limited by socket compatibility with the existing motherboard. If CPU performance is the bottleneck, upgrading the entire system is usually more cost-effective than a CPU upgrade alone.',
        ],
        tips: [
          'Check RAM usage in Task Manager with your normal applications open — if you\'re consistently above 80% RAM usage, adding memory will have a noticeable effect',
          'A professional tune-up includes a before/after benchmark comparison so you can see the actual improvement in numbers',
          'If your computer is more than 6 years old and requires hardware upgrades to remain usable, a new machine is often the better investment',
        ],
      },
    ],
    sources: [
      { label: 'Microsoft Support — Tips to Improve PC Performance in Windows', url: 'https://support.microsoft.com/en-us/windows/tips-to-improve-pc-performance-in-windows-b3b3ef5b-5953-fb6a-2528-4bbed82fba96' },
      { label: 'Backblaze — Hard Drive & SSD Reliability Statistics (2024)', url: 'https://www.backblaze.com/blog/backblaze-drive-stats-for-2024/' },
      { label: 'MalwareTips — Malware Removal Guide for Windows', url: 'https://malwaretips.com/blogs/malware-removal-guide-for-windows/' },
      { label: 'iFixit — How to Pick a Laptop That Will Last', url: 'https://www.ifixit.com/News/63850/how-to-pick-a-college-laptop-that-will-last-as-long-as-possible' },
    ],
    videos: [
      { title: 'How to make a slow computer fast again... for FREE!', youtubeId: 'DcDgV-1zDKs', channel: 'JayzTwoCents' },
      { title: 'My PC is Slow… Can These "Speed Up" Tools Fix it?', youtubeId: '-G-DByczbWA', channel: 'Linus Tech Tips' },
    ],
  },

  // ── B2B ──────────────────────────────────────────────────────────────────
  {
    slug: 'business-it-services',
    title: 'Managed IT Services for Small Business: A Decision Guide',
    badge: 'Business IT Solutions',
    metaDescription: 'Understand the real cost of IT downtime, how managed IT services compare to in-house support, and what a proactive IT strategy should include for small and medium businesses.',
    excerpt: 'Proactive managed IT support for small and medium businesses — helpdesk, network monitoring, security patching, and technology consulting.',
    icon: 'briefcase',
    coverImage: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80',
    inlineImages: [
      { afterSection: 0, src: 'https://images.unsplash.com/photo-1627163439134-7a8c47e08208?auto=format&fit=crop&w=1200&q=80', alt: 'Business IT services team at work' },
      { afterSection: 1, src: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80', alt: 'Modern corporate office technology environment' },
    ],
    pricing: 'Starting at $149/mo per user',
    whatsIncluded: ['Unlimited helpdesk support (per plan)', 'Network monitoring and alerting', 'Security patching and updates', 'Monthly IT health reports', 'Priority on-site response', 'Dedicated account technician'],
    intro: 'For small and medium businesses, technology has shifted from a supporting function to a core operational dependency. When your network goes down, your CRM is inaccessible, or a ransomware attack encrypts your files, business stops. The question isn\'t whether your business needs reliable IT support — it\'s whether the current approach is proactive enough to prevent problems before they cause downtime.',
    sections: [
      {
        heading: 'The Real Cost of IT Downtime',
        paragraphs: [
          'IT downtime is consistently underestimated by small business owners because the costs are distributed across categories that aren\'t always directly attributable to the outage. Direct costs include lost sales and billable hours during the outage period. Indirect costs include employee productivity loss, recovery labour, potential data reconstruction, and customer trust damage that may result in churn.',
          'According to CompTIA\'s IT Industry Outlook, SMBs are reducing on-premises infrastructure in favour of as-a-service offerings — but this shift increases dependence on internet connectivity and cloud platforms, making network reliability more critical than ever. A single 4-hour outage at a 10-person business commonly eliminates a full day\'s productive output across the team.',
          'Ransomware represents the most severe downtime scenario. The 2024 Verizon Data Breach Investigations Report found that roughly one-third of all breaches involved ransomware or extortion techniques. Small businesses are disproportionately targeted because they are perceived as having valuable data but weaker security than enterprise organisations.',
        ],
        tips: [
          'Calculate your hourly revenue and multiply by the number of hours your team couldn\'t work in the last year due to IT issues — this is your downtime cost',
          'Cyber insurance premiums for businesses with documented MSP-managed security are typically lower than unmanaged businesses',
          'Multi-factor authentication (MFA) for all business accounts should be a non-negotiable baseline requirement from any IT provider',
        ],
      },
      {
        heading: 'In-House IT vs. Managed Services: An Honest Comparison',
        paragraphs: [
          'A junior in-house IT staff member costs $45,000–65,000 in salary plus benefits, recruiting costs, and training — and provides single-person coverage with no redundancy for vacations, illness, or resignation. Managed service providers (MSPs) provide a team of specialists across all these domains for a fraction of that cost.',
          'The comparison is more nuanced for mid-sized companies (50–250 employees) where a dedicated IT person or small team starts to make economic sense. Even in these cases, a hybrid model — in-house IT for day-to-day user support with an MSP providing specialised security, network management, and strategic advisory — often delivers better outcomes than a purely in-house approach.',
          'The quality and reliability of MSPs vary significantly. The key differentiators are response time guarantees (SLAs), the breadth of their technical expertise, whether they take a purely reactive or genuinely proactive approach, and how they handle major incidents.',
        ],
      },
      {
        heading: 'What a Proactive IT Strategy Looks Like',
        paragraphs: [
          'A reactive IT approach waits for things to break and then fixes them. A proactive approach monitors systems continuously, identifies degradation before it becomes failure, applies security patches before vulnerabilities are exploited, and plans capacity based on business growth.',
          'Core components of proactive IT management include remote monitoring and management (RMM) — software agents on all endpoints that report health metrics, available updates, and anomalous behaviour in real time. Security patch management ensures operating system and application vulnerabilities are addressed within agreed windows.',
          'Business continuity and disaster recovery (BCDR) planning is a component that many small businesses neglect until it\'s too late. A complete BCDR strategy defines recovery time objectives (RTO) and recovery point objectives (RPO), tests backup restoration regularly, and ensures backups are stored in a location that would survive the same event that caused the primary data loss.',
        ],
        tips: [
          'Ask any MSP prospect how often they test backup restoration — a backup that has never been tested is not a backup you can rely on',
          'Ensure your MSP provides a documented technology roadmap — not just reactive support but proactive planning for upgrades and capacity',
          'NIST\'s Cybersecurity Framework 2.0 Small Business Quick-Start Guide is a free resource for evaluating your current security posture',
        ],
      },
    ],
    sources: [
      { label: 'Verizon — 2024 Data Breach Investigations Report', url: 'https://www.verizon.com/business/resources/reports/dbir.html' },
      { label: 'CompTIA — IT Industry Outlook 2024', url: 'https://www.comptia.org/en-us/resources/research/it-industry-outlook-2024/' },
      { label: 'NIST — Cybersecurity Framework 2.0 Small Business Quick-Start Guide', url: 'https://www.nist.gov/publications/nist-cybersecurity-framework-20-small-business-quick-start-guide' },
      { label: 'CISA — #StopRansomware Resources', url: 'https://www.cisa.gov/stopransomware/resources' },
    ],
    videos: [
      { title: 'Managed IT Services for Business – IT Support Explained', youtubeId: 'TdSA7gkVYU0', channel: 'Cloud Specialists' },
      { title: 'Managed IT Services Explained | What Managed IT Actually Includes', youtubeId: 'EFweR4FL0E0', channel: 'Banks Technology Services' },
    ],
  },

  // ── CONSUMER ─────────────────────────────────────────────────────────────
  {
    slug: 'account-access-recovery-guide',
    title: 'Password Recovery & Account Access: What Your Options Are',
    badge: 'Account & Access Recovery',
    metaDescription: 'A guide to recovering access to locked Windows computers, Microsoft accounts, and BitLocker drives — including what works, what doesn\'t, and how to prevent lockouts.',
    excerpt: 'Locked out of your Windows PC, email, or accounts? Our technicians safely restore access to your computer and critical data without data loss.',
    icon: 'key',
    coverImage: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80',
    inlineImages: [
      { afterSection: 0, src: 'https://images.unsplash.com/photo-1555421689-d68471e189f2?auto=format&fit=crop&w=1200&q=80', alt: 'Digital account and credential access interface' },
      { afterSection: 1, src: 'https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=1200&q=80', alt: 'Secure authentication and identity management' },
    ],
    pricing: 'Starting at $55',
    whatsIncluded: ['Ownership verification for security', 'Data-safe recovery methods', 'Windows local and Microsoft account support', 'BitLocker recovery assistance', 'New password setup and documentation', 'Account security review and recommendations'],
    intro: 'Account lockouts and forgotten passwords are among the most disruptive and frustrating IT problems a user can encounter — particularly when they prevent access to critical work files, business systems, or years of personal data. The appropriate recovery method depends on the account type, whether the device is encrypted, and whether you have access to recovery options that were set up in advance.',
    sections: [
      {
        heading: 'Windows Local Accounts vs. Microsoft Accounts',
        paragraphs: [
          'Windows 10 and 11 offer two primary account types with fundamentally different recovery paths. A local account exists only on the specific computer. A Microsoft account (signed in with an @outlook, @hotmail, or @live email address) is cloud-connected and offers more recovery options.',
          'Microsoft account recovery is handled through Microsoft\'s account recovery portal. If you have access to a recovery email address, phone number, or authenticator app linked to the account, recovery is typically self-service.',
          'Local account recovery on Windows 10 and 11 requires physical access to the machine and typically involves booting from external media. Local account recovery that preserves all data is possible in most cases but requires specific technical steps that vary by Windows version and configuration.',
        ],
        tips: [
          'Set up recovery email and phone number for your Microsoft account now — these are your primary recovery options if you ever get locked out',
          'Windows Hello PIN failures after an update are common; try signing in with your full Microsoft account password instead of the PIN first',
          'Take note of the 48-digit BitLocker recovery key when prompted during setup — store it in your Microsoft account, print it, or save it in a secure location',
        ],
      },
      {
        heading: 'BitLocker: The Encryption Challenge',
        paragraphs: [
          'BitLocker is Windows\' built-in full-disk encryption. When enabled, it encrypts the entire drive contents and requires authentication to decrypt at startup. BitLocker is enabled by default on Windows 11 devices that meet TPM 2.0 requirements — which means many users have BitLocker active without ever explicitly enabling it.',
          'The 48-digit BitLocker recovery key is the only way to access a BitLocker-protected drive if the normal authentication method fails. Microsoft automatically saves this key to your Microsoft account when BitLocker is enabled via the default Windows setup.',
          'Without the recovery key, a BitLocker-encrypted drive is computationally infeasible to decrypt. This is by design — the encryption is strong enough that even professional data recovery services cannot bypass it without the key.',
        ],
      },
      {
        heading: 'Building Better Password Habits',
        paragraphs: [
          'The fundamental tension in password security is memorability versus strength. Password managers — Bitwarden, 1Password, LastPass — resolve this tension by generating and storing unique, strong passwords for every account, protected by a single master password.',
          'The NIST Special Publication 800-63B-4 password guidelines now recommend a minimum length of 15 characters and explicitly advise against mandatory periodic password changes in the absence of a breach.',
          'Multi-factor authentication (MFA) is the single most impactful account security measure available. Even if your password is compromised, MFA prevents an attacker from logging in without access to your second factor.',
        ],
        tips: [
          'Check haveibeenpwned.com — if your email address appears in data breaches, change affected passwords immediately',
          'Use an authenticator app (Microsoft Authenticator, Google Authenticator, Authy) for MFA rather than SMS — SIM-swap attacks can compromise SMS-based MFA',
          'Store your BitLocker recovery key in at least two locations — your Microsoft account and a printed copy in a secure physical location',
        ],
      },
    ],
    sources: [
      { label: 'NIST SP 800-63B-4 — Digital Identity Guidelines: Authentication', url: 'https://csrc.nist.gov/pubs/sp/800/63/b/4/final' },
      { label: 'Have I Been Pwned — Check if your email was in a data breach', url: 'https://haveibeenpwned.com/' },
      { label: 'FTC — How To Spot, Avoid, and Report Tech Support Scams', url: 'https://consumer.ftc.gov/articles/how-spot-avoid-and-report-tech-support-scams' },
      { label: 'Microsoft Support — Find your BitLocker recovery key', url: 'https://support.microsoft.com/en-us/windows/finding-your-bitlocker-recovery-key-in-windows-6b71ad27-0b89-ea08-f143-056f5ab347d6' },
    ],
    videos: [
      { title: 'Forgot Your Windows 11 Password? Reset it EASY!', youtubeId: 'TTN9aTuo8ck', channel: 'Unboxing ASMR' },
      { title: 'Reset Forgotten Windows 11/10 password in 3 minutes', youtubeId: 'ZK5mzXPlEHc', channel: 'NETVN82' },
    ],
  },

  // ── B2B ──────────────────────────────────────────────────────────────────
  {
    slug: 'business-cybersecurity-strategy',
    title: 'Building a Cybersecurity Strategy for Your Business: A Practical Guide',
    badge: 'Cybersecurity',
    metaDescription: 'A practical guide to building a cybersecurity strategy for small and mid-sized businesses — covering threat assessment, endpoint protection, access controls, and compliance frameworks.',
    excerpt: 'Cybersecurity is no longer optional for businesses of any size. A practical guide to building a programme that actually reduces risk.',
    icon: 'lock',
    coverImage: 'https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=1200&q=80',
    inlineImages: [
      { afterSection: 0, src: 'https://images.unsplash.com/photo-1610986603166-f78428624e76?auto=format&fit=crop&w=1200&q=80', alt: 'Cybersecurity strategy and enterprise protection planning' },
      { afterSection: 1, src: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1200&q=80', alt: 'Business security implementation and monitoring' },
    ],
    pricing: 'Starting at $299/mo',
    whatsIncluded: ['Threat and vulnerability assessment', 'Endpoint protection deployment', 'Access control configuration', 'Security awareness training', 'Compliance gap analysis', 'Incident response planning'],
    intro: 'Cybersecurity is no longer a concern exclusive to large enterprises. According to the 2024 Verizon Data Breach Investigations Report, small businesses accounted for a significant portion of confirmed data breaches — and the average cost of a breach for a small business now exceeds $120,000 when factoring in downtime, recovery, regulatory fines, and reputational damage. Most small business breaches are not the result of sophisticated attacks — they exploit basic security gaps that are entirely preventable.',
    sections: [
      {
        heading: 'Start With a Threat Assessment',
        paragraphs: [
          'Before investing in security tools, a business needs to understand its actual risk profile. A threat assessment identifies the systems and data that are most valuable or most vulnerable, maps the ways an attacker could reach them, and prioritises the gaps that represent the highest risk. Without this baseline, security spending is guesswork.',
          'Common findings in small business threat assessments include unpatched software and operating systems, weak or reused passwords across business accounts, absence of multi-factor authentication on email and cloud systems, misconfigured firewall rules, and employee endpoints without endpoint detection and response (EDR) software.',
          'CISA publishes a free Cyber Hygiene Vulnerability Scanning service for small businesses, and NIST provides a Cybersecurity Framework that is widely used as the baseline assessment structure across industries.',
        ],
        tips: [
          'Run a free CISA vulnerability scan on your public-facing infrastructure — it takes less than 15 minutes to request',
          'Audit which employees have administrator-level access to business systems — privilege should be limited to the minimum required',
          'Check whether your business email uses DMARC, DKIM, and SPF records — these prevent attackers from spoofing your domain in phishing campaigns',
        ],
      },
      {
        heading: 'The Core Layers of Business Security',
        paragraphs: [
          'Effective business cybersecurity is not a single product — it is a set of overlapping controls, each designed to catch what the others miss. Endpoint protection (EDR/antivirus) on every device is the minimum baseline. Modern EDR platforms go significantly beyond traditional antivirus by monitoring behaviour in real time and detecting threats that have never been seen before.',
          'Access control is frequently the most impactful area for small businesses to address. Multi-factor authentication on email, VPN, and cloud systems eliminates the most common vector for account takeover — stolen or phished passwords. The principle of least privilege ensures every employee has access only to what their role requires.',
          'Network segmentation separates business-critical systems from general user traffic and guest devices. A compromised employee laptop on a flat network has a direct path to your file server, accounting system, and backup drives. A segmented network with a properly configured firewall requires an attacker to break through multiple barriers.',
        ],
        tips: [
          'Enable MFA on your email system first — email account takeover is the most common entry point for business fraud',
          'Separate your guest Wi-Fi from your internal business network — they should never be on the same VLAN',
          'Establish a patching schedule: critical patches within 24 hours, all other patches within 30 days',
        ],
      },
      {
        heading: 'Compliance, Backup, and Incident Response',
        paragraphs: [
          'Depending on your industry, specific compliance frameworks may apply to your business. Healthcare organisations handling patient data are subject to HIPAA. Businesses that accept card payments must comply with PCI DSS. Non-compliance exposes a business to regulatory fines and civil liability — independent of whether a breach actually occurs.',
          'Backup strategy is your last line of defence against ransomware, hardware failure, and accidental deletion. The 3-2-1 rule remains the industry standard: three copies of your data, on two different media types, with one copy stored off-site or in an immutable cloud backup. Backups should be tested quarterly.',
          'An incident response plan defines what your business does in the first hours of a security incident — who is notified, what systems are isolated, who handles communication, and how evidence is preserved. A documented plan, reviewed annually, significantly improves outcomes.',
        ],
        tips: [
          'Test your backup restoration process — not just the backup job — at least once per quarter',
          'Document your incident response contacts: IT provider, cyber insurance carrier, legal counsel, and relevant regulatory bodies',
          'Review your cyber liability insurance policy annually — coverage limits and exclusions change, and many policies have specific security requirements to remain valid',
        ],
      },
    ],
    sources: [
      { label: 'Verizon — 2024 Data Breach Investigations Report', url: 'https://www.verizon.com/business/resources/reports/dbir/' },
      { label: 'CISA — Free Cybersecurity Services for Small Businesses', url: 'https://www.cisa.gov/resources-tools/resources/free-cybersecurity-services-and-tools' },
      { label: 'NIST — Cybersecurity Framework', url: 'https://www.nist.gov/cyberframework' },
      { label: 'FTC — Cybersecurity for Small Business', url: 'https://www.ftc.gov/business-guidance/small-businesses/cybersecurity' },
    ],
    videos: [
      { title: 'Cybersecurity for Small Business — Where to Start', youtubeId: 'inWWhr5tnEA', channel: 'CISA' },
      { title: 'How Hackers Attack Small Businesses (And How to Stop Them)', youtubeId: 'aO858HyFbKI', channel: 'NetworkChuck' },
    ],
  },

  // ── B2B ──────────────────────────────────────────────────────────────────
  {
    slug: 'disaster-recovery-planning',
    title: 'Disaster Recovery & Business Continuity Planning: A Guide for Small Business Owners',
    badge: 'Business Continuity',
    metaDescription: 'A practical guide to disaster recovery and business continuity planning for small businesses — covering RTO, RPO, backup strategy, and how to build a plan that actually works when you need it.',
    excerpt: 'Most small businesses have no tested recovery plan. This guide explains RTO, RPO, backup architecture, and what a continuity plan needs to include to protect your operations.',
    icon: 'refresh',
    coverImage: 'https://images.unsplash.com/photo-1731458769726-cef60c792665?auto=format&fit=crop&w=1200&q=80',
    inlineImages: [
      { afterSection: 0, src: 'https://images.unsplash.com/photo-1761252986951-11d227af28ae?auto=format&fit=crop&w=1200&q=80', alt: 'Flooded street showing the kind of physical disruption a business continuity plan prepares for' },
      { afterSection: 2, src: 'https://images.unsplash.com/photo-1759984782117-4f333f6efe50?auto=format&fit=crop&w=1200&q=80', alt: 'Person connecting an external hard drive — a key component of a layered backup strategy' },
    ],
    pricing: 'Custom quote',
    whatsIncluded: [
      'Business impact analysis (BIA)',
      'RTO and RPO definition per system',
      'Backup architecture design and deployment',
      'Offsite and immutable cloud backup configuration',
      'Recovery runbook documentation',
      'Annual DR test and written report',
    ],
    intro: 'Every business faces events that can interrupt or destroy normal operations — ransomware, hardware failure, fire, flood, power outage, or a key employee leaving without notice. What separates businesses that recover quickly from those that don\'t is not luck: it is preparation. A disaster recovery and business continuity plan defines exactly what happens when things go wrong, who does what, and how fast the business returns to normal. For most small businesses, that plan either doesn\'t exist or has never been tested.',
    sections: [
      {
        heading: 'Why Small Businesses Are More Vulnerable Than They Think',
        paragraphs: [
          'According to FEMA, approximately 40% of businesses do not reopen after a disaster, and another 25% close within a year. The primary cause is not the disaster itself — it is the absence of a plan. Large enterprises invest heavily in business continuity programmes because they have experienced the alternative. Small businesses, which have less financial cushion to absorb disruption, paradoxically tend to be the least prepared.',
          'The threat landscape has also expanded significantly. Ransomware attacks on small and medium businesses increased sharply through 2023 and 2024. The 2024 Verizon Data Breach Investigations Report found that ransomware or extortion was involved in approximately one-third of all breaches, with small businesses disproportionately targeted. A successful ransomware attack can encrypt every file on every connected device in minutes — including local backups that were not properly isolated.',
          'Natural disasters remain a significant risk, particularly for businesses in regions prone to extreme heat, wildfire, or flooding. Physical infrastructure — servers, workstations, networking equipment — can be destroyed or rendered inaccessible. Without offsite or cloud-based backup, the data on that infrastructure may be unrecoverable. In the Coachella Valley, heat-related equipment failure and power outages during peak summer months are a consistent operational risk that local businesses must plan for specifically.',
        ],
        tips: [
          'List the three events most likely to disrupt your business — ransomware, hardware failure, and extended power outage are the top three for most SMBs',
          'Identify which systems, if unavailable for 24 hours, would stop your business from generating revenue — these are your recovery priorities',
          'Check whether your cyber insurance policy covers ransomware recovery costs, business interruption, and data reconstruction — many policies have exclusions that are not obvious at purchase',
        ],
      },
      {
        heading: 'RTO and RPO: The Two Numbers That Define Your Recovery Plan',
        paragraphs: [
          'Every disaster recovery plan is built around two key metrics: Recovery Time Objective (RTO) and Recovery Point Objective (RPO). RTO defines the maximum acceptable length of time a system can be unavailable before it causes unacceptable business impact. RPO defines the maximum acceptable amount of data loss, measured in time — for example, an RPO of four hours means you are willing to accept losing up to four hours of data if a failure occurs.',
          'These numbers are not arbitrary. They are derived from a business impact analysis (BIA) — a structured process of identifying which systems and data are critical, what the cost of their unavailability is per hour, and what the business actually needs to operate at minimum viable capacity. A law firm may have an RTO of four hours for its document management system. A retail business may have an RTO of one hour for its point-of-sale system. The numbers vary by system and by business.',
          'Once RTO and RPO are defined, they drive every other decision in the recovery plan: how frequently backups run, where they are stored, what redundancy is built into critical systems, and what level of cloud failover capability is appropriate. Without defined RTO and RPO, backup and recovery decisions are made by guesswork — and the plan fails when it is actually needed.',
        ],
        tips: [
          'Define separate RTO and RPO values for each critical system — your email, accounting software, and file storage may have very different tolerance levels',
          'A one-hour RPO typically requires continuous or near-continuous backup; a 24-hour RPO can be met with nightly scheduled backups — the difference in cost is significant',
          'Document your RTO and RPO values in writing and review them annually — business growth and new software dependencies change what is critical',
        ],
      },
      {
        heading: 'Building Your Business Continuity Plan: The Four Essential Layers',
        paragraphs: [
          'An effective BCP is built from four overlapping layers. The first is data protection: a 3-2-1 backup strategy — three copies of data, on two different media types, with one copy stored off-site or in an immutable cloud backup. Immutability means the backup cannot be altered or deleted, even by ransomware or a compromised administrator account. Veeam, Acronis, and Datto are among the enterprise-grade platforms used for immutable backup.',
          'The second layer is system redundancy. For critical systems, this means ensuring an alternative is available when the primary fails. For a small business, this might mean a cloud-hosted failover for a key application, a UPS (uninterruptible power supply) and generator for on-site equipment, or a spare workstation configured to take over from a failed primary. Redundancy decisions should be proportional to the RTO for each system.',
          'The third layer is the communication and response plan: a documented procedure that defines who is notified when an incident occurs, who is authorised to make recovery decisions, how customers and vendors are communicated with, and what the escalation path looks like. The fourth layer is regular testing — a recovery plan that has never been tested is not a recovery plan. DR tests should include actual restoration from backup, not just a verification that backups completed successfully.',
        ],
        tips: [
          'The 3-2-1 backup rule is a minimum — 3-2-1-1 adds a fourth copy that is air-gapped (not connected to any network), which is the only backup ransomware cannot reach',
          'A UPS protects against short power interruptions and gives systems time to shut down gracefully; it does not replace a generator for extended outages',
          'Write your communication plan before you need it — decide in advance how you will notify clients of downtime, who sends the message, and what it will say',
        ],
      },
      {
        heading: 'Testing, Maintaining, and Improving Your DR Plan',
        paragraphs: [
          'A disaster recovery plan is only as reliable as its last successful test. Most small businesses that believe they have a backup discover during an actual recovery event that the backup is incomplete, the restoration process takes far longer than expected, or critical systems were never included in the backup scope. A regular testing cadence — at minimum annually, and ideally quarterly for critical systems — eliminates these surprises before they become crises.',
          'Testing takes several forms. A tabletop exercise walks stakeholders through a simulated incident scenario to verify the communication plan and decision-making process without involving technical systems. A technical restoration test involves actually restoring data and systems from backup in a controlled environment and measuring how long it takes against your defined RTO. A full failover test, for businesses with redundant infrastructure, verifies that secondary systems actually take over correctly.',
          'Plans become outdated quickly. Staff turnover, new software, cloud migrations, and business growth all change the recovery requirements. Assign a specific owner for the DR plan — someone responsible for keeping it current, scheduling tests, and ensuring that new systems are incorporated into the backup scope when they are deployed. A plan that is reviewed and updated annually will perform very differently from one that was written three years ago and never revisited.',
        ],
        tips: [
          'After any significant IT change — new server, new software, cloud migration — verify that the new system is included in the backup scope before relying on it for business-critical work',
          'Document recovery time from your last actual restoration test — if it took 18 hours to restore but your RTO is 4 hours, that gap needs to be closed before a real incident occurs',
          'Engage your IT provider or MSP to conduct an annual DR test and provide a written report — this also satisfies the documentation requirement for most cyber insurance policies',
        ],
      },
    ],
    sources: [
      { label: 'FEMA — Protecting Business Continuity', url: 'https://www.fema.gov/emergency-managers/business-preparedness' },
      { label: 'NIST SP 800-34 — Contingency Planning Guide for Federal Information Systems', url: 'https://csrc.nist.gov/publications/detail/sp/800-34/rev-1/final' },
      { label: 'Verizon — 2024 Data Breach Investigations Report', url: 'https://www.verizon.com/business/resources/reports/dbir/' },
      { label: 'SBA — Business Continuity Planning', url: 'https://www.sba.gov/business-guide/manage-your-business/prepare-emergencies' },
    ],
    videos: [
      { title: 'What is Business Continuity and Disaster Recovery Planning?', youtubeId: 'o0xj1JKjjOE', channel: 'CBT Nuggets' },
      { title: 'Business Continuity Planning for SMEs: How to Prepare for Disasters', youtubeId: '_aci49uFHvQ', channel: 'UNDRR' },
    ],
  },
]

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug)
}

export function getAllArticles(): Article[] {
  return articles
}
