function skillsMember() {
  // Get the member ID from the URL
  const memberId = window.location.pathname.split('/')[2];

  // Get the member object from the API
  fetch(`/api/members/${memberId}`)
    .then(response => response.json())
    .then(member => {
      // Get the skills object from the member object
      const skills = member.skills;

      // Get the skills container
      const skillsContainer = document.getElementById('skills');

      // Create a skills list
      const skillsList = document.createElement('ul');

      // Append the skills list to the skills container
      skillsContainer.appendChild(skillsList);

      // Loop through the skills
      for (let i = 0; i < skills.length; i++) {
        // Create a skills list item
        const skillsListItem = document.createElement('li');

        // Append the skills list item to the skills list
        skillsList.appendChild(skillsListItem);

        // Set the skills list item text
        skillsListItem.textContent = skills[i];
      }
    });
}