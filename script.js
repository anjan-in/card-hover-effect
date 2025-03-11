
const mistakesData = [
    {
        number: "01",
        title: "Creativity before Usability",
        problem: "Prioritizing creative design elements over user-friendly interfaces makes websites difficult to navigate and reduces overall user satisfaction.",
        approach: "Balance creativity with usability by ensuring design choices enhance rather than hinder the user experience."
    },
    {
        number: "02",
        title: "Unintuitive Navigation",
        problem: "Confusing navigation structures force users to think too hard about how to move through your site or app.",
        approach: "Create clear, predictable navigation patterns that follow established conventions users already understand."
    },
    {
        number: "03",
        title: "Letting Trends Guide your Thinking",
        problem: "Following design trends blindly without considering if they serve your users' needs can lead to poor user experience.",
        approach: "Evaluate trends based on how they might enhance user experience for your specific audience and use case."
    },
    {
        number: "04",
        title: "Unintuitive CTA Buttons",
        problem: "Call-to-action buttons that blend in with the design or use unclear messaging fail to drive user engagement.",
        approach: "Make CTAs stand out visually and use action-oriented, specific text that clearly communicates what happens when clicked."
    },
    {
        number: "05",
        title: "A lot of Animations",
        problem: "Excessive animations can distract users, slow down performance, and create a chaotic visual experience.",
        approach: "Use animations purposefully to guide attention, provide feedback, or enhance understanding—not just for decoration."
    },
    {
        number: "06",
        title: "Words instead of visuals",
        problem: "Text-heavy interfaces overwhelm users and fail to leverage the power of visual communication.",
        approach: "Use meaningful icons, images, and data visualizations to communicate information quickly and reduce cognitive load."
    },
    {
        number: "07",
        title: "Lack of User Research",
        problem: "Designing based on assumptions rather than actual user data leads to interfaces that don't address real user needs.",
        approach: "Conduct user research throughout the design process to understand your users' goals, pain points, and behaviors."
    },
    {
        number: "08",
        title: "Poor Contrast",
        problem: "Low contrast between text and background makes content difficult to read, especially for users with visual impairments.",
        approach: "Maintain sufficient contrast ratios (WCAG recommends at least 4.5:1 for normal text) to ensure readability for all users."
    },
    {
        number: "09",
        title: "Hard to Read Fonts",
        problem: "Decorative or overly stylized fonts might look unique but can significantly reduce readability.",
        approach: "Choose clean, readable fonts with appropriate sizing and spacing. Save decorative fonts for very limited use in headings or accents."
    },
    {
        number: "10",
        title: "Hard to Read Fonts",
        problem: "Tiny text, poor line spacing, or low contrast can make even well-chosen fonts difficult to read.",
        approach: "Ensure adequate font size (minimum 16px for body text), proper line height (1.5-2x font size), and sufficient contrast for optimal readability."
    },
    {
        number: "11",
        title: "Lack of User Testing",
        problem: "Skipping user testing means issues aren't discovered until after launch, when fixes are more costly and disruptive.",
        approach: "Incorporate user testing throughout the design process to identify and address usability issues early."
    },
    {
        number: "12",
        title: "Saying no to Feedback",
        problem: "Ignoring or dismissing feedback from users, team members, or stakeholders limits opportunities for improvement.",
        approach: "Create channels for collecting feedback and establish processes for evaluating and incorporating valuable insights."
    }
];

// Generate the cards
const mistakesGrid = document.getElementById('mistakesGrid');

mistakesData.forEach(mistake => {
    const card = document.createElement('div');
    card.className = 'card';
    
    card.innerHTML = `
        <div class="card-number">${mistake.number}</div>
        <div class="card-content">
            <h3 class="card-title">${mistake.title}</h3>
        </div>
    `;
    
    mistakesGrid.appendChild(card);
});